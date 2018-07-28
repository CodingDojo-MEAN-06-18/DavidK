import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BOOKS } from '../data/book-data';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
   // hooking up to our database not our mockapi
  // private base = 'https://59498bce6d49df0011102cfc.mockapi.io/books';

  private base = '/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
  }

  getBook(_id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${_id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }

  deleteBook(_id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${_id}`);
  }
}
