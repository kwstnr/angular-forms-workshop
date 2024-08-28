import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { authors } from '../data/authors.data';

@Injectable({
  providedIn: 'root',
})
class AuthorService {
  getAuthors(): Observable<Author[]> {
    return of(authors);
  }

  getAuthor(id: string): Observable<Author | undefined> {
    return this.getAuthors().pipe(
      map((authors) => authors.find((a) => a.id === id))
    );
  }

  updateAuthor(id: string, changes: Partial<Author>): Observable<Author> {
    var author = this._getAuthorReference(id);
    if (!author) {
      throw new Error('Author not found');
    }

    return of(Object.assign(author, changes));
  }

  private _getAuthorsReference(): Author[] {
    return authors;
  }

  private _getAuthorReference(id: string): Author | undefined {
    return this._getAuthorsReference().find((a) => a.id === id);
  }
}
