import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../../models/book';
@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book = new Book();

  @Output()
  newBook = new EventEmitter<Book>();


  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form and preventing default', this.book);
    // this.books.push(this.book);
    this.newBook.emit(this.book);
    this.book = new Book();

    form.reset();

    // console.log('books', this.books);
  }

  constructor() { }

  ngOnInit() {
  }

}
