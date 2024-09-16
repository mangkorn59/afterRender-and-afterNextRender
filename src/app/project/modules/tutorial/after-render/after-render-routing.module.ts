import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterRenderComponent } from './pages/after-render/after-render.component';
import { GameComponent } from './pages/game/game.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'after-render',
    pathMatch: 'full',
  },
  {
    path: 'after-render',
    component: AfterRenderComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterRenderRoutingModule { }
