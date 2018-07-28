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

import { BookResolve } from './resolvers';
import { BookService } from './services';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';

// TitleizePipe.skipWords = ['of'];



@NgModule({
  declarations: [
    AppComponent,
    ...fromBooks.components,
    TitleizePipe,
    SearchPipe,
    NavComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [...fromServices.services, BookService, BookResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
