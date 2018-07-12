import { Component } from '@angular/core';

import { Book } from './book';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  book = new Book();
  books: Array<Book> = [];


  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form and preventing default', this.book);
    this.books.push(this.book);
    this.book = new Book();

    form.reset();

    console.log('books', this.books);
  }
}
