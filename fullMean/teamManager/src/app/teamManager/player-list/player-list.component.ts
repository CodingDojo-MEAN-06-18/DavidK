import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players = [];
  currentPlayer = {};

  constructor(private _managerService: ManagerService) { }

  ngOnInit() {
    this._managerService.players.subscribe(
      players => this.players = players,
      error => console.log(error)
    );
    // this._managerService.showPlayers();
  }

  deletePlayer(player) {
    if (confirm('are you sure you want to delete ' + player.name)) {
      console.log('hit delete!', player);
      this._managerService.deletePlayer(player);
      this._managerService.players.subscribe(
        response => {
          this.players = response;
          console.log('this is response', response);
        });
    }
  }

}
