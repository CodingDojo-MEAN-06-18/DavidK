import { Injectable } from '@angular/core';
import { User } from '../github/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  winner: User;
  loser: User;
  users: BehaviorSubject<Array<User>> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getUser(user: string): any {
    return this._http.get(`https://api.github.com/users/${user}`);
  }

  battle(user1: User, user2: User): any {
    if (user1.score > user2.score) {
      this.winner = user1;
      this.loser = user2;
    } else {
      this.winner = user2;
      this.loser = user1;
    }
    return this._http.post('/api/github/battle', { user1: user1, user2: user2 }).subscribe(() => { });
  }

  getUsers(): void {
    this._http.get('/api/github/grab').subscribe(
      data => this.users.next(data as Array<User>),
      err => console.log(err)
    );
  }


}
