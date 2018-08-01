import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';


@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {
  notes: Array<Note> = [];

  constructor(private noteService: NoteService) {
    this.noteService.notes.subscribe(
      notes => this.notes = notes.reverse()
    );
   }

  ngOnInit() {
    this.noteService.grab();
  }
}
