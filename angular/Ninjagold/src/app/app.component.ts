import { Component , OnInit, OnChanges, DoCheck } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  goldCount;

  constructor(private _dataService: DataService) {
    this.goldCount = this._dataService.retrievegoldCount();
  }


}
