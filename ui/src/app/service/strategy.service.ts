import { Injectable } from '@angular/core';
import { Strategy } from '../model/enum/strategies';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  strategy: Strategy;

  constructor() { }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  getStrategy(): Strategy {
    return this.strategy;
  }
}
