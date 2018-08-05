import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/team/players.service';


@Component({
  selector: 'app-listplayers',
  templateUrl: './listplayers.component.html',
  styleUrls: ['./listplayers.component.css']
})
export class ListplayersComponent implements OnInit {
  players: any[] = [];
  current: any[] = [];

  constructor(private _playerService: PlayersService) {
    this._playerService.getPlayers();
  }

  ngOnInit() {
    this._playerService.players.subscribe(
      players => this.players = players,
      error => console.log(error)
    );
  }

  deletePlayer(player): void {
    console.log(player);
    this._playerService.deletePlayer(player);
  }

}
