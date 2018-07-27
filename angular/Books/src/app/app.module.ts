import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TitleizePipe } from './titleize.pipe';
import { SearchPipe } from './search.pipe';

// easy way to manage components
import * as fromBooks from './books';
import * as fromServices from './services';


import { BookService } from './services';

// TitleizePipe.skipWords = ['of'];



@NgModule({
  declarations: [
    AppComponent,
    ...fromBooks.components,
    TitleizePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
  ],
  providers: [...fromServices.services, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
