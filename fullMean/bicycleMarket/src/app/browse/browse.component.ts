import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bike } from '../bike';
import { User } from '../user';
import { AuthService } from '../services/auth.service';
import { BikeService } from '../services/bike.service';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnDestroy {

  bikes: Bike[] = [];
  sub: Subscription;
  authed: boolean;
  filter: Bike = new Bike();
  display = 'none';
  bikeOwnerInfo = { id: '', name: '', email: '' };

  public currUserId: string;

  constructor(private bikeService: BikeService, private auth: AuthService) { }

  ngOnInit() {
    // gets current logged in user
    this.currUserId = this.auth.getUserId();

    // gets all bikes
    this.sub = this.bikeService.getBikes().subscribe(bikes => {
      this.bikes = bikes;
    });

    this.auth.authorized$.subscribe(authed => (this.authed = authed));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  clearFilter(): void {
    this.filter = new Bike();
  }
  onClick(event: Event) {
    event.stopPropagation();
    console.log('stopping prop', event);
  }
  onDelete(bikeToDelete: Bike) {
    console.log('deleting bike', bikeToDelete);
    this.bikeService.deleteBike(bikeToDelete)
      .subscribe(deletedBike => {
        console.log('bye bye bike', deletedBike);
        this.bikes = this.bikes.filter(bike => bike._id !== deletedBike._id);
      });
  }
  // Modal
  openModal(bike) {
    this.display = 'block';
    this.bikeOwnerInfo.id = bike.ownerId;
    console.log(bike.ownerId.name);
    console.log(bike.ownerId);
  }

  onCloseHandled() {
    this.display = 'none';
    this.bikeOwnerInfo = {id: '', name: '', email: ''};
  }

}


