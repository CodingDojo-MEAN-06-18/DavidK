import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { GithubService } from '../../services/github.service';


@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  users: Array<User>;

  constructor(private readonly _github: GithubService) {
    this._github.users.subscribe(users => this.users = users);
  }

  ngOnInit() {
    this._github.getUsers();
  }

}
