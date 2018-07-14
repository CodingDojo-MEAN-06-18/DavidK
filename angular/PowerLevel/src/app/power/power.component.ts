import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Powerlevel } from './powerlevel';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  level = new Powerlevel();




  constructor() { }

  ngOnInit() {
  }

}
