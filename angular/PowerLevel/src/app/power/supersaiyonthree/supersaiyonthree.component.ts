import { Component, Input, OnChanges } from '@angular/core';

import { HumanComponent } from '../human/human.component';

@Component({
  selector: 'app-supersaiyonthree',
  templateUrl: './supersaiyonthree.component.html',
  styleUrls: ['./supersaiyonthree.component.css']
})
export class SupersaiyonthreeComponent extends HumanComponent implements OnChanges {
  @Input() power;



  ngOnChanges() {
    this.power = this.power * 250;
  }

}
