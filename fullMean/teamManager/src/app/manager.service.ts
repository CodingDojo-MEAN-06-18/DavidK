import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  public players: BehaviorSubject<any[]> = new BehaviorSubject([]);

  private base = '/api/players';

  constructor(private _http: Http) { }


  // show players
  showPlayers() {
    return this._http.get(this.base).subscribe((data) => {
        this.players.next(data.json());
    },
      (error) => {
        console.log('error getting players');
      }
    );
  }
  // add player
  addPlayer(player) {
    return this._http.post(this.base, player).subscribe(
      (data) => {
        this.showPlayers();
      },
      (error) => {
        console.log('error adding a new player', error);
      }
    );
  }

  // delete player
  deletePlayer(player) {
    return this._http.delete(this.base, player).subscribe(
      (data) => {
        this.showPlayers();
      },
      (error) => {
        console.log('error deleting player');
      }
    );
  }

  // update status
  updateStatus(id, game, value) {
    return this._http.put(this.base, { 'id': id, 'game': game, 'setValue': value }).subscribe(
      (data) => {
        this.showPlayers();
      },
      (error) => {
        console.log('error updating player');
      }
    );
  }

}
