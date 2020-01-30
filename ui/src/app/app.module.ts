import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameFlowComponent } from './view/game-flow/game-flow.component';

import { MatExpansionModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { PhaseOneComponent } from './view/game-flow/phase-one/phase-one.component';
import { PhaseTwoComponent } from './view/game-flow/phase-two/phase-two.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhaseThreeComponent } from './view/game-flow/phase-three/phase-three.component';

@NgModule({
  declarations: [
    AppComponent,
    GameFlowComponent,
    PhaseOneComponent,
    PhaseTwoComponent,
    PhaseThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    // Material
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
