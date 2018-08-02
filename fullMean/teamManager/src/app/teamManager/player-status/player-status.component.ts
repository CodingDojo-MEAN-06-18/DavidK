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

  constructor(
    private _managerService: ManagerService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  gamenum = 0;
  players = [];


  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      // get the parameter string and turn it to a number
      this.gamenum = parseInt(params.get('id'), 10);
      console.log('passed route value:', this.gamenum);
    });
    this._managerService.players.subscribe(data => {
      this.players = data;
      console.log('this is data', data);
    });

  }

  changeStatus(player, playRsvp: string, game: number) {
    console.log('playflag is: ', playRsvp);
    if (playRsvp === 'p') {
      player.status[game - 1] = 1;
    } else if (playRsvp === 'np') {
      player.status[game - 1] = 2;
    } else if (playRsvp === 'u') {
      player.status[game - 1] = 0;
    }
    this._managerService.updateStatus(player._id, player.game, player.status);
  }
  changeGame(gamenum) {
    this._router.navigate(['/status/game/' + gamenum]);
    // location.reload();
  }



}
