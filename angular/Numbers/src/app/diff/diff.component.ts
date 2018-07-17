import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-diff',
  templateUrl: './diff.component.html',
  styleUrls: ['./diff.component.css']
})
export class DiffComponent implements OnInit {

  differential: number;

  constructor( private _dataService: DataService) { }

  ngOnInit() {
  }

  getDifference() {
    this.differential = this._dataService.getDifference();
  }

}
