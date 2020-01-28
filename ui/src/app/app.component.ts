import { Component } from '@angular/core';
import { StrategyService } from './service/strategy.service';
import { Strategy } from './model/enum/strategies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'queller-bot-wotr';

  // Determine this randomely...
  strategy: Strategy = Strategy.Corruption;

  constructor(private strategyService: StrategyService) {}
}
