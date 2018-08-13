import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/team/players.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  positions: Array<string> = [
    'leftField',
    'rightField',
    'centerField',
    'pitcher',
    'first',
    'second',
    'shortstop',
    'third'
  ];
  // tslint:disable-next-line:no-inferrable-types
  name: string = '';
  // tslint:disable-next-line:no-inferrable-types
  position: string = '';

  constructor(private _playerService: PlayersService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this._playerService.add(this.name, this.position);
    this._router.navigate(['players']);
  }

}
