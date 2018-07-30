import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form and preventing default', this.book);
    // this.books.push(this.book);

    this.sub = this.bookService.createBook(this.book).subscribe(
      book => {
        // this.newBook.emit(book);
        // this.book = new Book();
        // form.reset();
        this.router.navigateByUrl('/');
      },
      error => {
        // handle errors
        }
      );
    // this.newBook.emit(this.book);
    // console.log('books', this.books);
  }
}
