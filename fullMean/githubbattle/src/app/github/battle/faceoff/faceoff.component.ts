import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../services/github.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-faceoff',
  templateUrl: './faceoff.component.html',
  styleUrls: ['./faceoff.component.css']
})
export class FaceoffComponent implements OnInit {

  user1: User = new User();
  user2: User = new User();

  constructor(private readonly _gitHub: GithubService, private readonly _route: Router) { }

  ngOnInit() {
  }

  setUser(event: Event, player: number): void {
    event.preventDefault();
    const user = player === 1 ? this.user1 : this.user2;
    this._gitHub.getUser(user.name).subscribe(data => {
      user.name = data['login'];
      user.image = data['avatar_url'];
      user.score = (data['followers'] + data['public_repos']) * 12;
    });
  }

  battle(): void {
    this._gitHub.battle(this.user1, this.user2);
    this._route.navigate(['github', 'battle', 'winner']);
  }

}
