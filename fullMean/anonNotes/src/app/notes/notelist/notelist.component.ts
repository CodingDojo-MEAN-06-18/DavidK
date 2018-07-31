import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';


@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit, OnDestroy {
  notes: Note[] = [];
  sub: Subscription;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.sub = this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
