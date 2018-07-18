import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes = [
    { content: 'mmmm donuts', author: 'homer simpson' },
    { content: 'Hello Im bob vance from vance refridgeration', author: 'bob vance' }
  ];

  createQuote(quote) {
    console.log(quote);
    this.quotes.push(quote);
  }

  deleteQuote(quote) {
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }




}
