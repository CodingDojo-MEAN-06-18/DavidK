import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BikeService } from '../bike.service';
import { Bike } from '../bike';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnDestroy {

  bikes: Array<Bike> = [];
  sub: Subscription;
  authed: boolean;
  filter = '';
  constructor(private bikeService: BikeService, private auth: AuthService) { }

  ngOnInit() {
    this.sub = this.bikeService.getBikes().subscribe(bikes => {
      this.bikes = bikes;
    });

    this.auth.authorizedI.subscribe(authed => (this.authed = authed));
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onDelete(biketodelete: Bike) {
    this.bikeService.deleteBike(biketodelete).subscribe(deletedBike => {
      console.log('deleted bike', deletedBike);
      this.bikes = this.bikes.filter(bike => bike._id !== deletedBike._id);
    });
  }

}
