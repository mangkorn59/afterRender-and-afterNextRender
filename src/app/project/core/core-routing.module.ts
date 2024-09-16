import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial', pathMatch: 'full' },
  {
    path: 'tutorial',
    loadChildren: () =>
      import('../modules/tutorial/tutorial.module').then(
        (m) => m.TutorialModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
