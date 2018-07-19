import { Component, Input, OnChanges } from '@angular/core';

import { HumanComponent } from '../human/human.component';

@Component({
  selector: 'app-saiyon',
  templateUrl: './saiyon.component.html',
  styleUrls: ['./saiyon.component.css']
})
export class SaiyonComponent extends HumanComponent implements OnChanges  {
  // @Input() power;

  ngOnChanges() {
    this.power = this.power * 10;
  }

}
