import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyonthree',
  templateUrl: './supersaiyonthree.component.html',
  styleUrls: ['./supersaiyonthree.component.css']
})
export class SupersaiyonthreeComponent implements OnInit, OnChanges {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.power = this.power * 250;
  }

}
