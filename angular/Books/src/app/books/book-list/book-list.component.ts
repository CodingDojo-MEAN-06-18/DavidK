import { Component, OnInit } from '@angular/core';


import { BOOKS } from '../../data/book-data';
import { Book } from '../../models/book';

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe],
})
export class BookListComponent implements OnInit {
  books: Array<Book> = BOOKS;

  selectedBook: Book;

  constructor(private _titlize: TitleizePipe) { }

  ngOnInit() {
    this.books.forEach(book => {
      book.author = this._titlize.transform(book.author);
    });

  }

  onSelect(book: Book) {
    console.log('selecting book', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook !== book) {
    //   this.selectedBook = book;
    // } else {
    //   this.selectedBook = null;
    // }
  }

  onCreate(book: Book) {
    console.log('creating book', book);
    this.books.push(book);
  }

}
