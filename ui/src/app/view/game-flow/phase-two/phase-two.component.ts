import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Strategy } from "src/app/model/enum/strategies";
import { StrategyService } from 'src/app/service/strategy.service';
import { PhaseService } from 'src/app/service/phase.service';

@Component({
  selector: "app-phase-two",
  templateUrl: "./phase-two.component.html",
  styleUrls: ["./phase-two.component.less"]
})
export class PhaseTwoComponent implements OnInit {
  @Input() strategy: string;

  vpForm: FormGroup;

  constructor(private phaseService: PhaseService, private strategyService: StrategyService) {}

  checkStrategy() {
    let corruption = this.vpForm.controls.corruption.value;
    let fpVp = this.vpForm.controls.fpVp.value;
    let spVp = this.vpForm.controls.spVp.value;
    if (this.strategy === Strategy.Corruption) {
      if (corruption < fpVp || corruption < spVp) {
        this.strategyService.setStrategy(Strategy.Military);
      }
    } else {
      if (spVp < corruption) {
        this.strategyService.setStrategy(Strategy.Corruption);
      }
    }

    // Move to phase 3
    this.phaseService.setPhase(3);
  }

  ngOnInit() {
    this.vpForm = new FormGroup({
      fpVp: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(4)
      ]),
      spVp: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]),
      corruption: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(12)
      ])
    });
  }
}
