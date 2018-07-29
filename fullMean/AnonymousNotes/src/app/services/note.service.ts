import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  noteS: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http$: Http) { }

  getAll() {
    return this._http$.get('/notes').subscribe((notes) => {
      console.log('getting all the notes:', notes);
      this.noteS.next(notes.json());
    }, (err) => {
      console.log(err);
    });
  }


  newNote(note) {
    return this._http$.post(`/notes`, { 'note': note }).subscribe((response) => {
      console.log(response);
      this.getAll();
    }, (err) => {
      console.log(err);
    });
  }



}
