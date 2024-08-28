import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../model/author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private readonly apiUrl = 'http://localhost:3000/authors';

  constructor(private http: HttpClient) {}

  // GET all authors
  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl);
  }

  // GET a single author by ID
  getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/${id}`);
  }

  // PUT update an author by ID
  updateAuthor(id: string, changes: Partial<Author>): Observable<Author> {
    return this.http.put<Author>(`${this.apiUrl}/${id}`, changes);
  }
}
