import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notenew',
  templateUrl: './notenew.component.html',
  styleUrls: ['./notenew.component.css']
})
export class NotenewComponent implements OnInit {

  content: Note = new Note();

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit() { }

  onSubmit(event: Event, form: NgForm): void {
    this.noteService.add(this.content);
    event.preventDefault();
    form.reset();
  }
}
