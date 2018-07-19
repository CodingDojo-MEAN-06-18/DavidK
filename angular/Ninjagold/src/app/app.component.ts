import { Component , OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  gold: number = 0;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.goldS.subscribe((gold) => {
      this.gold += gold;
    });
  }


}
