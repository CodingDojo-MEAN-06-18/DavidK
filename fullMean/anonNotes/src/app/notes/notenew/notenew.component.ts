import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notenew',
  templateUrl: './notenew.component.html',
  styleUrls: ['./notenew.component.css']
})
export class NotenewComponent implements OnInit, OnDestroy {
  sub: Subscription;
  note = new Note();

  @Output() newNote = new EventEmitter<Note>();

  constructor(
    private noteService: NoteService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.noteService.getNotes();
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submittig form', form, this.note);

    this.sub = this.noteService.createNote(this.note)
      .subscribe(note => {
        console.log('note from api', note);
        form.reset();
        this.noteService.getNotes();
        this.router.navigateByUrl('notes');
      });
  }

}
