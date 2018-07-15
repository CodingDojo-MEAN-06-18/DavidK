import { Component, OnInit, Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-supersaiyontwo',
  templateUrl: './supersaiyontwo.component.html',
  styleUrls: ['./supersaiyontwo.component.css']
})
export class SupersaiyontwoComponent implements OnInit, OnChanges {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 150;
  }

}
