import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  game = 0;
  players = [];

  constructor(
    private _managerService: ManagerService,
    private _activeRoute: ActivatedRoute,
    private _router: Router) { }



  ngOnInit() {
    this._activeRoute.paramMap.subscribe(params => {
      // get the parameter string and turn it to a number
      this.game = parseInt(params.get('id'), 10);
      console.log('passed route value:', this.game);
    });
    this._managerService.players.subscribe(
      players => this.players = players,
      error => console.log(error)
    );
  }

  onClick(player: any, action: string): void {
    this._managerService.updateStatus(player, this.game, action);
  }


  }

  // changeStatus(player, playRsvp: string, game: number) {
  //   console.log('playflag is: ', playRsvp);
  //   if (playRsvp === 'p') {
  //     player.status[game - 1] = 1;
  //   } else if (playRsvp === 'np') {
  //     player.status[game - 1] = 2;
  //   } else if (playRsvp === 'u') {
  //     player.status[game - 1] = 0;
  //   }
  //   this._managerService.updateStatus(player._id, player.game, player.status);
  // }
  // changeGame(gamenum) {
  //   this._router.navigate(['/status/game/' + gamenum]);
  //   // location.reload();
  // }




