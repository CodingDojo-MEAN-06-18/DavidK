import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: BehaviorSubject<Array<Note>> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }


  grab() {
    this._http.get('/grab').subscribe(
      data => this.notes.next(data as Array<Note>),
      err => console.log(err)
    );
  }
  add(note: Note): void {
    this._http.post('/add', note).subscribe(
      (data) => {
        console.log('success');
        const notes = this.getNotes();
        notes.push(data as Note);
        this.notes.next(notes);
      },
      (err) =>
        console.log(err)
    );
  }

  private getNotes = (): Array<Note> => this.notes.getValue();


}
