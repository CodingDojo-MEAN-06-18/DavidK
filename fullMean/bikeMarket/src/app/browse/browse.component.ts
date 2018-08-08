import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BikeService } from '../bike.service';
import { Bike } from '../bike';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
