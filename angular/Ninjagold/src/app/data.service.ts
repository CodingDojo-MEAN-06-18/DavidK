import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  goldCount = 0;

  retrievegoldCount(): number {
    return this.goldCount;
  }
  constructor() { }



}
