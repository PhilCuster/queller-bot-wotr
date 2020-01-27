import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phase-one',
  templateUrl: './phase-one.component.html',
  styleUrls: ['./phase-one.component.less']
})
export class PhaseOneComponent implements OnInit {

  cardsDrawn = false;

  constructor() { }

  drawCards() {
    this.cardsDrawn = !this.cardsDrawn;
  }

  ngOnInit() {
  }

}
