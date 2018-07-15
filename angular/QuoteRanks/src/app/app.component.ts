import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes = [
    {content: 'mmmm donuts', author: 'homer simpson'}
  ];

  createQuote(quote) {
    console.log(quote);
    this.quotes.push(quote);
  }




}
