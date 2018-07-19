import { Component, Input, OnChanges  } from '@angular/core';

import { HumanComponent } from '../human/human.component';

@Component({
  selector: 'app-supersaiyontwo',
  templateUrl: './supersaiyontwo.component.html',
  styleUrls: ['./supersaiyontwo.component.css']
})
export class SupersaiyontwoComponent extends HumanComponent implements OnChanges {
  // @Input() power;


  ngOnChanges() {
    this.power = this.power * 150;
  }

}
