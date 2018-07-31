import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private base = '/api/notes';

  constructor(private _http: HttpClient) { this.getNotes(); }

  getNotes(): Observable<Note[]> {
    return this._http.get<Note[]>(this.base);
  }
  createNote(note: Note): Observable<Note> {
    return this._http.post<Note>(this.base, note);
  }
}
