import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import * as fromBooks from './books';


import { TitleizePipe } from './titleize.pipe';
import { SearchPipe } from './search.pipe';

TitleizePipe.skipWords = ['of'];



@NgModule({
  declarations: [
    AppComponent,
    ...fromBooks.components,
    TitleizePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
