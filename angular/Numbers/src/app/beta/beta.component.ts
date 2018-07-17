import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  numbersB: number[] = [];

  constructor( private _dataService: DataService) { }

  ngOnInit() {
    this.numbersB = this._dataService.retrieveNumB();
  }

  pushOne() {
    this._dataService.addNumB(Math.floor((Math.random() * 10) + 1));
   }
}
