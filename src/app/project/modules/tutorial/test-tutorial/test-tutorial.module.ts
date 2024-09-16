import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestTutorialRoutingModule } from './test-tutorial-routing.module';
import { TestTutorialComponent } from './pages/test-tutorial/test-tutorial.component';


@NgModule({
  declarations: [
    TestTutorialComponent,
  ],
  imports: [
    CommonModule,
    TestTutorialRoutingModule
  ]
})
export class TestTutorialModule { }
