import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Book } from '../../models/book';
import { TitleizePipe } from '../../titleize.pipe';
import { BookService } from '../../services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe],

  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BookListComponent implements OnInit {
  books: Array<Book> = [];
  books$: Observable<Book[]>;
  selectedBook: Book;
  errorMessage: string;



  constructor(
    private titlize: TitleizePipe,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    // this.sub = this.bookService = null;


    this.books$ = this.bookService.getBooks().pipe(
      tap(books => {
        books.forEach(book => {
          book.author = this.titlize.transform(book.author);
        });
      })
    );
  }

  onSelect(book: Book) {
    console.log('selecting book', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(book: Book) {
    console.log('creating book', book);
    this.books.push(book);
  }

  // clearFilter(): void {
  //   console.log('clearing filter');
  //   this.filter = new Book(false);
  // }

  onDelete(id: string) {
    console.log('deleting book', id);
    this.bookService.deleteBook(id).subscribe(
        updatedBook => {
        console.log('things are happening ', id);
        this.books = this.books.filter(book => book._id !== id);
      },
      error => {
        console.log('error', error);
        this.errorMessage = error.statusText;
      }
    );
  }

  onEvent(event: Event) {
    console.log('stopping prop');
    event.stopPropagation();
  }

}
