import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  @Input() quotes;
  @Output() createQuoteEvent = new EventEmitter();

  newQuote = { body: ', author: ' };

  constructor() { }

  ngOnInit() {
  }
  onSubmit(formData) {
    console.log(formData);
    console.log(this.newQuote);
    this.createQuoteEvent.emit(this.newQuote);
    this.newQuote = { content: '', author: ''};
  }

}
