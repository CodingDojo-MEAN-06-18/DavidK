import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  numbersB: number[] = [1, 1, 1];
  numbersA: number[] = [3, 3, 3];
  aSum = 0;
  bSum = 0;

  constructor() { }
  retrieveNumA(): number[] {
    return this.numbersA;
  }
  addNumA(num: number) {
    this.numbersA.push(num);
  }

  retrieveNumB(): number[] {
    return this.numbersB;
  }
  addNumB(num: number) {
    this.numbersB.push(num);
  }

  getDifference(): number {
    for (let i = 0; i < this.numbersA.length; i++) {
      this.aSum = this.numbersA[i] + this.aSum;
    }
    for (let i = 0; i < this.numbersB.length; i++) {
      this.bSum = this.numbersB[i] + this.bSum;
    }
    const differential: number = this.aSum - this.bSum;
    this.aSum = 0;
    this.bSum = 0;
    console.log(differential);
    return differential;
  }

}



