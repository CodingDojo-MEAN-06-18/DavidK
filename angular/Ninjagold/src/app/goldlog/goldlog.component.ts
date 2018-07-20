import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-goldlog',
  templateUrl: './goldlog.component.html',
  styleUrls: ['./goldlog.component.css']
})
export class GoldlogComponent implements OnInit {

  displayLogs: string[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.logS.subscribe((displayLogs) => {
      this.displayLogs = [displayLogs, ... this.displayLogs];
    });

  }





}
