import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestTutorialComponent } from './pages/test-tutorial/test-tutorial.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'test-tutorial',
    pathMatch: 'full',
  },
  {
    path: 'test-tutorial',
    component: TestTutorialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestTutorialRoutingModule { }
