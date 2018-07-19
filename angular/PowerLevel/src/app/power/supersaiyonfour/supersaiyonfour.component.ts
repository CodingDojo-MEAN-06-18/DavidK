import { Component, Input, OnChanges } from '@angular/core';

import { HumanComponent } from '../human/human.component';

@Component({
  selector: 'app-supersaiyonfour',
  templateUrl: './supersaiyonfour.component.html',
  styleUrls: ['./supersaiyonfour.component.css']
})
export class SupersaiyonfourComponent extends HumanComponent implements  OnChanges {
  @Input() power;




  ngOnChanges() {
    this.power = this.power * 500;
  }

}
