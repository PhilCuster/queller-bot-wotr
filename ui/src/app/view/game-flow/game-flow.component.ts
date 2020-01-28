import { Component, OnInit } from '@angular/core';
import { PhaseService } from 'src/app/service/phase.service';
import { Strategy } from 'src/app/model/enum/strategies';
import { StrategyService } from 'src/app/service/strategy.service';

@Component({
  selector: 'app-game-flow',
  templateUrl: './game-flow.component.html',
  styleUrls: ['./game-flow.component.less']
})
export class GameFlowComponent implements OnInit {

  phase = 1;

  strategy: Strategy;

  constructor(private phaseService: PhaseService, private strategyService: StrategyService) { }

  ngOnInit() {
    this.phaseService.phaseChange.subscribe(value => {
      this.strategy = this.strategyService.getStrategy();
      this.phase = value;
    });

    // Should be random...
    this.strategyService.setStrategy(Strategy.Corruption);
    this.strategy = this.strategyService.getStrategy();
  }

}
