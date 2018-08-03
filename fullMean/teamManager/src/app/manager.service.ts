import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  public players: BehaviorSubject<any[]> = new BehaviorSubject([]);

  private base = '/api/players';

  constructor(private _http: HttpClient) { }


  // show players
  showPlayers(): void {
    this._http.get(this.base).subscribe((response) => {
        this.players.next(response as any);
    },
      (error) => {
        console.log('error getting players');
      }
    );
  }
  // add player
  addPlayer(name: string, position: string): void {
    this._http.post(this.base, { name: name, position: position }).subscribe(
      (response) => {
        console.log('player added', response);
      },
      (error) => {
        console.log('error adding a new player', error);
      }
    );
  }

  // delete player
  deletePlayer(player: any): void {
    this._http.delete(`/api/players/delete/${player._id}`).subscribe(
      response => this.showPlayers(),
      error => console.log(error)
    );
  }

  // update status
  updateStatus(player: any, game: number, action: string): void {
    this._http.put('api/games', { 'player': player, 'game': game, 'action': action }).subscribe(
      response => this.showPlayers(),
      error => console.log('error updating player', error)
    );
  }

}
