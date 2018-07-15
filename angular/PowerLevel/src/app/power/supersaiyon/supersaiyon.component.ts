import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyon',
  templateUrl: './supersaiyon.component.html',
  styleUrls: ['./supersaiyon.component.css']
})
export class SupersaiyonComponent implements OnInit, OnChanges {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 90;
  }
}
