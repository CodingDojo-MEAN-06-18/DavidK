import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bike } from '../bike';
import { User } from '../user';
import { AuthService } from '../services/auth.service';
import { BikeService } from '../services/bike.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnDestroy {

  bikes: Bike[] = [];
  sub: Subscription;
  authed: boolean;

  display = 'none';

  contact = {
    firstname: '',
    lastname: '',
    email: ''
  };

  filter = '';
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
  // Modal needs to be fixed
  openModal(ownerId: string) {
    const observer = this.auth.contact(ownerId);
    observer.subscribe(
      (response) => {
        console.log('here is contact', response);
        this.contact = response;
      },
      (error) => {
        console.log(error);
      });
  }

  onCloseHandled() {
    this.display = 'none';
    this.contact = {lastname: '', firstname: '', email: ''};
  }



}


