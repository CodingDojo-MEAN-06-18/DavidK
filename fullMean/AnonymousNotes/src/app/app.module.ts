import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

// easy way to manage components




import { NoteNewComponent } from './notes/note-new/note-new.component';
import { NoteListComponent } from './notes/note-list/note-list.component';

import { NoteService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    NoteNewComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ NoteService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
