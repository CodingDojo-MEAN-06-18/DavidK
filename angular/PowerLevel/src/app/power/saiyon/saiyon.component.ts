import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyon',
  templateUrl: './saiyon.component.html',
  styleUrls: ['./saiyon.component.css']
})
export class SaiyonComponent implements OnInit, OnChanges {
  @Input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.power = this.power * 10;
  }

}
