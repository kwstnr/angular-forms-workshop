import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { authors } from '../data/authors.data';

@Injectable({
  providedIn: 'root',
})
class BookService {
  getBooks(): Observable<Book[]> {
    return of(this._getBooksReference());
  }

  getBook(id: string): Observable<Book | undefined> {
    return this.getBooks().pipe(map((books) => books.find((b) => b.id === id)));
  }

  updateBook(id: string, changes: Partial<Book>): Observable<Book> {
    var book = this._getBookReference(id);
    if (!book) {
      throw new Error('Book not found');
    }

    return of(Object.assign(book, changes));
  }

  private _getBookReference(id: string): Book | undefined {
    return this._getBooksReference().find((b) => b.id === id);
  }

  private _getBooksReference(): Book[] {
    return authors.reduce(
      (acc, author) => acc.concat(author.books),
      [] as Book[]
    );
  }
}
