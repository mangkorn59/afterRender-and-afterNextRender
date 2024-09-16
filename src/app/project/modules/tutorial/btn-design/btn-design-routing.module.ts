import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BtnDesignComponent } from './page/btn-design/btn-design.component';

const routes: Routes = [
  {
    path: '',
    component: BtnDesignComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BtnDesignRoutingModule { }
