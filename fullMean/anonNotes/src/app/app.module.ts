import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotelistComponent } from './notes/notelist/notelist.component';
import { NotenewComponent } from './notes/notenew/notenew.component';

import { NoteService } from './services/note.service';

@NgModule({
  declarations: [
    AppComponent,
    NotelistComponent,
    NotenewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
