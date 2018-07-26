import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../../models/book';
import { BookService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit, OnDestroy {
  book = new Book();
  sub: Subscription;

  @Output() newBook = new EventEmitter<Book>();

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form and preventing default', this.book);
    // this.books.push(this.book);

    this.bookService.createBook(this.book)
      .subscribe(book => {
        this.newBook.emit(book);
        this.book = new Book();
        form.reset();
      });
    // this.newBook.emit(this.book);
    // console.log('books', this.books);
  }





  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
