import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { authors } from '../data/authors.data';

@Injectable({
  providedIn: 'root',
})
class ChapterService {
  getChapters(): Observable<Chapter[]> {
    return of(this._getChaptersReferences());
  }

  getChapter(id: string): Observable<Chapter | undefined> {
    return this.getChapters().pipe(
      map((chapters) => chapters.find((b) => b.id === id))
    );
  }

  updateChapter(id: string, changes: Partial<Chapter>): Observable<Chapter> {
    var chapter = this._getChapterReference(id);
    if (!chapter) {
      throw new Error('Chapter not found');
    }

    return of(Object.assign(chapter, changes));
  }

  private _getChaptersReferences(): Chapter[] {
    return authors.reduce(
      (acc, author) =>
        acc.concat(
          author.books.reduce(
            (chapters, book) => [
              ...chapters,
              ...book.chapters.map((c) => ({ ...c, book })),
            ],
            [] as Chapter[]
          )
        ),
      [] as Chapter[]
    );
  }

  private _getChapterReference(id: string): Chapter | undefined {
    return this._getChaptersReferences().find((c) => c.id === id);
  }
}
