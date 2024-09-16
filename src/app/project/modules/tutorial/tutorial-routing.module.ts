import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'after-render', pathMatch: 'full' },
  {
    path: 'after-render',
    loadChildren: () =>
      import('./after-render/after-render.module').then(
        (m) => m.AfterRenderModule
      ),
  },
  {
    path: 'test-tutorial',
    loadChildren: () =>
      import('./test-tutorial/test-tutorial.module').then(
        (m) => m.TestTutorialModule
      ),
  },
  {
    path: 'button-design',
    loadChildren: () =>
      import('./btn-design/btn-design.module').then(
        (m) => m.BtnDesignModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
