import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _http: HttpClient) { this.getNotes(); }

  getNotes() {
    console.log('Get all notes');
    return this._http.get('/notesget');
  }


  createNote(note) {
    console.log('in post data service');
    this._http.post('/notesadd', note).subscribe(
      (data) => {
        console.log('success!');
      },
      (err) => { console.log(err); }
    );
  }



}
