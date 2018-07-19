import { Component, Input, OnChanges } from '@angular/core';

import { HumanComponent } from '../human/human.component';

@Component({
  selector: 'app-supersaiyon',
  templateUrl: './supersaiyon.component.html',
  styleUrls: ['./supersaiyon.component.css']
})
export class SupersaiyonComponent extends HumanComponent implements OnChanges {
  // @Input() power;




  ngOnChanges() {
    this.power = this.power * 90;
  }
}
