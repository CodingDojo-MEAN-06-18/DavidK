import { Component, OnInit } from '@angular/core';
import { BikeService } from '../bike.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Bike } from '../bike';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bikeoftheday: Bike;

  constructor(private bikeService: BikeService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.auth.isAuthed()) {
      this.router.navigateByUrl('/browse');
    }
    this.bikeService.getBikes().subscribe(bikes => {
      console.log(bikes);
      this.bikeoftheday = bikes[Math.floor(Math.random() * bikes.length)];
    });
  }

}
