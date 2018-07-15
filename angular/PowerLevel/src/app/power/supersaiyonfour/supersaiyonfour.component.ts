import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyonfour',
  templateUrl: './supersaiyonfour.component.html',
  styleUrls: ['./supersaiyonfour.component.css']
})
export class SupersaiyonfourComponent implements OnInit, OnChanges {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 500;
  }

}
