import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {

  player = {
    name: '',
    position: ''
  };

  constructor(
    private _managerService: ManagerService,
    private _router: Router) { }

  ngOnInit() { }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this._managerService.addPlayer(this.player);
    form.reset();
    this._router.navigateByUrl('/players/list');
    }



}
