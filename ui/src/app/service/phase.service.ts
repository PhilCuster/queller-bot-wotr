import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  private phase: number;

  @Output() phaseChange = new EventEmitter();

  setPhase(phase: number) {
    this.phase = phase;
    this.phaseChange.emit(this.phase);
  }

  getPhase(): number {
    return this.phase;
  }

  constructor() {
    this.phase = 1;
  }
}
