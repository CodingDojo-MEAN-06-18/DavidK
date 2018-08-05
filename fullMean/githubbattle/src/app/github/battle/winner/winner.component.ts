import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../services/github.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  winner: User = this._gitHub.winner;
  loser: User = this._gitHub.loser;

  constructor(private readonly _gitHub: GithubService, private readonly _route: Router) { }

  ngOnInit() {
  }
  reset(): void {
    this._gitHub.winner = this._gitHub.loser = new User();
    this._route.navigate(['/']);
  }

}
