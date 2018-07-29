import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  content: '';

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  onSubmit(event: Event, formData: NgForm) {
    event.preventDefault();
    console.log(formData);
    this.noteService.newNote(this.content);
    this.noteService.getAll();
    formData.reset();
  }

}
