import { Component, OnInit, Input } from "@angular/core";
import { PhaseService } from 'src/app/service/phase.service';

@Component({
  selector: "app-phase-one",
  templateUrl: "./phase-one.component.html",
  styleUrls: ["./phase-one.component.less"]
})
export class PhaseOneComponent implements OnInit {
  // TODO: This will have cards built in later.

  @Input() strategy: string;

  step = 1;

  /**
   * Phase 1 Corruption Steps:
   * 1) Draw Cards
   * 2) Are more then 6 event cards in hand?
   * 3) Yes, am I holding more than 1 strategy card?
   * 4) Yes, display priority
   * 5) No, display priority
   * 6) Move to phase 2
   *
   * Phase 1 Military Strategy
   * 1) Draw Cards
   * 2) Do I have more then 6 cards in hand?
   * 4) Yes, display priority
   * 6) Move to phase 2
   */

  constructor(private phaseService: PhaseService) {}

  drawCards() {
    this.step = 2;
  }

  step2Yes() {
    if (this.strategy === 'corruption') {
      this.step = 3;
    }
    if (this.strategy === 'military') {
      this.step = 4;
    }
  }

  step2No() {
    this.done();
  }

  step3Yes() {
    this.step = 4;
  }

  step3No() {
    this.step = 5;
  }

  done() {
    // Move to next phase!
    this.step = 6;
    this.phaseService.setPhase(2);
  }

  ngOnInit() {}
}
