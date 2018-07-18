import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.css']
})
export class DiffComponent implements OnInit {

  difference: number;

  constructor( private _dataService: DataService) { }

  ngOnInit() {
  }

  getTheDifference() {
    this.difference = this._dataService.getDifference();
  }

}
