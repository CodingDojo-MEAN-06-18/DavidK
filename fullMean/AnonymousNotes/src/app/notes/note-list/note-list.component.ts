import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})

export class NoteListComponent implements OnInit {

  notes = [];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getAll();
    this.noteService.noteS.subscribe((notes) => {
      this.notes = notes;
    }, (err) => {
      console.log(err);

    });

  }

}
