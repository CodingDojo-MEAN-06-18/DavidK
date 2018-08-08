import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bike } from '../bike';
import { Subscription } from 'rxjs';
import { BikeService } from '../bike.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  bikes: Array<Bike> = [];
  sub: Subscription;
  authed: boolean;
  selectedBike: Bike;

  constructor(
    private bikeService: BikeService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.bikeService.getBikes().subscribe(bikes => {
      const id = this.auth.getUserId();
      this.bikes = bikes.filter(bike => bike.ownerId === id);
    });
    this.auth.authorizedI.subscribe(authed => (this.authed = authed));
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onCreate(event: Event, bike: Bike) {
    event.preventDefault();
    this.bikes.push(bike);
  }
  onDelete(bikeToDelete: Bike) {
    this.bikeService.deleteBike(bikeToDelete).subscribe(deletedBike => {
      console.log('deleted bike', deletedBike);
      this.bikes = this.bikes.filter(bike => bike._id !== deletedBike._id);
    });
  }

}
