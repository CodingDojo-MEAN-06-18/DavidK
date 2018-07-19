import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit{

  @Input() start: number;
  @Input() end: number;
  @Input() building: string;


  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  cash(event) {
    event.preventDefault();
    this._dataService.cash(this.start, this.end, this.building);
  }



}
