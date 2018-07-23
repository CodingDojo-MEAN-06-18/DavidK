import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../../models/book';

import { TitleizePipe } from '../../titleize.pipe';

import { BookService } from '../../services';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Array<Book> = [];
  sub: Subscription;
  selectedBook: Book;

  filter: Book = new Book(false);

  constructor(
    private _titlize: TitleizePipe,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.sub = this.bookService = null;
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
        this.books.forEach(book => {
          book.author = this._titlize.transform(book.author);
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(book: Book) {
    console.log('selecting book', book);

    // this.selectedBook = this.selectedBook === book ? null : book;

    if (this.selectedBook === book) {
      this.selectedBook = null;
    } else {
      this.selectedBook = book;
    }
  }

  onCreate(book: Book) {
    console.log('creating book', book);
    this.books.push(book);
  }

  clearFilter(): void {
    console.log('clearing filter');
    this.filter = new Book(false);
  }

  onClick(event: Event) {
    console.log('stopping prop');
    event.stopPropagation();
  }

  onDelete(bookToDelete: Book) {
    console.log('deleting book');
    this.bookService.deleteBook(bookToDelete)
      .subscribe(deletedBook => {
        console.log('deleted book', deletedBook);

        this.books = this.books.filter(book => book.id !== deletedBook.id);
      });
  }

}
