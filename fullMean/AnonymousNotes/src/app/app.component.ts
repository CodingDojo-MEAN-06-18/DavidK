import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  newnotes = [];
  newNotes(eventData) {
    console.log('new note to be posted');
    this.newnotes = eventData;
  }
}
