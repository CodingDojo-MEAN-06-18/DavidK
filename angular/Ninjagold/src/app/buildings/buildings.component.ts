import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  @Input() min: number;
  @Input() max: number;
  @Input() building: string;


  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  cash(event) {
    this._dataService.cash(this.min, this.max, this.building);
  }



}
