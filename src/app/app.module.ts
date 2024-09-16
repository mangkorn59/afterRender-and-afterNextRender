import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './project/core/core.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    CoreModule,
    BrowserModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
