import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BookService } from '../../services';
import { Book } from '../../models';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {

    this.route.paramMap
    .pipe(
      switchMap(params => this.bookService.getBook(params.get('book_id')))
    )
      .subscribe(book => (this.book = book));

    // this.book = this.route.snapshot.data.book;


    // this.route.paramMap
    // .pipe(
    //   switchMap(params => this.bookService.getBook(params.get('book_id'))
    // ))
    // .subscribe(book => (this.book = book));
  }

}
