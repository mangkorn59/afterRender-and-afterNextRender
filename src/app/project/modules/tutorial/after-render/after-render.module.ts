import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterRenderRoutingModule } from './after-render-routing.module';
import { AfterRenderComponent } from './pages/after-render/after-render.component';
import { C11Component } from './components/c11/c11.component';
import { C12Component } from './components/c12/c12.component';
import { C21Component } from "./components/c2/c21/c21.component";
import { C22Component } from './components/c2/c22/c22.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './pages/game/game.component';
import { GamePlayComponent } from './components/game-play/game-play.component';


@NgModule({
  declarations: [
    AfterRenderComponent,
    C11Component,
    C12Component,
    C21Component,
    C22Component,
    GameComponent,
    GamePlayComponent,
    
  ],
  imports: [
    CommonModule,
    AfterRenderRoutingModule,
    FormsModule,
]
})
export class AfterRenderModule { }
