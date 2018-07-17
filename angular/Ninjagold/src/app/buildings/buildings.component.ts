import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  goldCount;

  constructor(private _dataService: DataService) { }



  ngOnInit() {
    this.goldCount = this._dataService.retrievegoldCount();
  }

}
