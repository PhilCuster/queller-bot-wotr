import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {

  constructor() { }

  rollDice(sides: number): number {
    return Math.floor(Math.random() * sides) + 1 ;
  }
}
