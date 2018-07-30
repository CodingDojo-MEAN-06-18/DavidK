import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})

export class NoteListComponent implements OnInit {
  @Input() newnotes;

  notes = [];

  constructor(private _noteService: NoteService) { }

  ngOnChanges() {
    console.log('input has changed');
    this.notes = this.newnotes;
  }

  ngOnInit() {
    console.log('we are here!');
    this._noteService.getNotes()
      .subscribe(response => {
        this.notes = response.reverse();
        console.log('this is response', response);
      });

  }

}
