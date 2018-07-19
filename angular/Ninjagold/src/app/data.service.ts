import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  goldS: BehaviorSubject<number> = new BehaviorSubject(0);
  logS: BehaviorSubject<string> = new BehaviorSubject('');



  constructor() { }

  cash(start: number, end: number, building: string) {

    const gold = Math.floor(Math.random() * (end - start + 1) + start);
    const firstWord = gold > 0 ? 'Made' : 'lost';
    this.logS.next(`${firstWord} ${gold} gold from the ${building}`);
    this.goldS.next(gold);
   }


}
