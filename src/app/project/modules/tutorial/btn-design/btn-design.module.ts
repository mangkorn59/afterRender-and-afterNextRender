import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtnDesignRoutingModule } from './btn-design-routing.module';
import { FormsModule } from '@angular/forms';
import { BtnDesignComponent } from './page/btn-design/btn-design.component';


@NgModule({
  declarations: [
    BtnDesignComponent
  ],
  imports: [
    CommonModule,
    BtnDesignRoutingModule,
    FormsModule,
  ]
})
export class BtnDesignModule { }
