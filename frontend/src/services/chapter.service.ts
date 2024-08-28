import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chapter } from '../model/chapter.model';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  private readonly apiUrl = 'http://localhost:3000/chapters';

  constructor(private http: HttpClient) {}

  // GET all chapters
  getChapters(): Observable<Chapter[]> {
    return this.http.get<Chapter[]>(this.apiUrl);
  }

  // GET a single chapter by ID
  getChapter(id: string): Observable<Chapter> {
    return this.http.get<Chapter>(`${this.apiUrl}/${id}`);
  }

  // PUT update a chapter by ID
  updateChapter(id: string, changes: Partial<Chapter>): Observable<Chapter> {
    return this.http.put<Chapter>(`${this.apiUrl}/${id}`, changes);
  }
}
