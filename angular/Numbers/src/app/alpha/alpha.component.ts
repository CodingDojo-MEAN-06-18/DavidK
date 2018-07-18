import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  numbersA: number[] = [];

  constructor( private _dataService: DataService) { }

  ngOnInit() {
    this.numbersA = this._dataService.retrieveNumA();
  }

  pushNum() {
    this._dataService.addNumA(Math.floor((Math.random() * 10) + 1));
   }
}
