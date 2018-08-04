import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/team/players.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  game: number = 0;
  players: any[] = [];

  constructor(private _activeRoute: ActivatedRoute, private _playerService: PlayersService) {
    this._playerService.getPlayers();
   }

  ngOnInit() {
    this._activeRoute.params.subscribe(
      () => {
        // tslint:disable-next-line:radix
        this.game = parseInt(this._activeRoute.snapshot.params.id);
      },
      error => {
        console.log(error);
      }
    );

    this._playerService.players.subscribe(
      players => this.players = players,
      error => console.log(error)
    );
  }

  onClick(player: any, action: string): void {
    this._playerService.updateGameState(player, this.game, action);
  }

}
