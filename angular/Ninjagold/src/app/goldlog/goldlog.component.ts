import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-goldlog',
  templateUrl: './goldlog.component.html',
  styleUrls: ['./goldlog.component.css']
})
export class GoldlogComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}
