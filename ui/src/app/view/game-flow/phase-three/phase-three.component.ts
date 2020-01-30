import { Component, OnInit, Input } from '@angular/core';
import { Strategy } from 'src/app/model/enum/strategies';
import { DiceRollerService } from 'src/app/service/dice-roller.service';
import { PhaseService } from 'src/app/service/phase.service';

@Component({
  selector: 'app-phase-three',
  templateUrl: './phase-three.component.html',
  styleUrls: ['./phase-three.component.less']
})
export class PhaseThreeComponent implements OnInit {

  @Input() strategy: Strategy;

  huntDice: number;

  choosing: boolean = true;

  constructor(private diceRollerService: DiceRollerService, private phaseService: PhaseService) { }

  assign(num: number) {
    this.huntDice = num;
    this.choosing = false;
  }

  assignMax() {
    this.huntDice = -1;
    this.choosing = false;
  }

  done() {
    this.phaseService.setPhase(4);
  }

  fspAtStart() {
    if (this.strategy === Strategy.Corruption) {
      this.roll();
    } else {
      this.assign(0);
    }
    this.choosing = false;
  }

  roll() {
    let result = this.diceRollerService.rollDice(6);
    if (result < 4) {
      this.huntDice = 0;
    } else {
      this.huntDice = 1;
    }
    this.choosing = false;
  }


  ngOnInit() {
  }

}
