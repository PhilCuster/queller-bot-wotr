import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameFlowComponent } from './view/game-flow/game-flow.component';

import { MatExpansionModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { PhaseOneComponent } from './view/game-flow/phase-one/phase-one.component';
import { PhaseTwoComponent } from './view/game-flow/phase-two/phase-two.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameFlowComponent,
    PhaseOneComponent,
    PhaseTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
