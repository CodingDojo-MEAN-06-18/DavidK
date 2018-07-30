import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';


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
    HttpClientModule,
  ],
  providers: [ NoteService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
