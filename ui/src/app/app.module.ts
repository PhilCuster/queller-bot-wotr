import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameFlowComponent } from './view/game-flow/game-flow.component';

import { MatExpansionModule, MatButtonModule } from '@angular/material';
import { PhaseOneComponent } from './view/game-flow/phase-one/phase-one.component';

@NgModule({
  declarations: [
    AppComponent,
    GameFlowComponent,
    PhaseOneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Material
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
