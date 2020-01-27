import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-flow',
  templateUrl: './game-flow.component.html',
  styleUrls: ['./game-flow.component.less']
})
export class GameFlowComponent implements OnInit {

  phase = 1;

  constructor() { }

  ngOnInit() {
  }

}
