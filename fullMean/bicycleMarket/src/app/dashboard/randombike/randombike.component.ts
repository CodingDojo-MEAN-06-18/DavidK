import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';



@Component({
  selector: 'app-randombike',
  templateUrl: './randombike.component.html',
  styleUrls: ['./randombike.component.css']
})
export class RandombikeComponent implements OnInit {

  bikes = [];
  bike = {};


  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    const observer = this.bikeService.getBikes();
    observer.subscribe(
      (response) => {
        console.log('get all bikes', response);
        this.bikes = response;
        let b = this.bikes.length;
        b = b - 1;
        const rand = Math.round(Math.random() * (b - 0) + 0);
        console.log('random', rand);
        this.bike = this.bikes[rand];
      },
      (error) => {
        console.log('got an error', Error);
      });
  }

}
