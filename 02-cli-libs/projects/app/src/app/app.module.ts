import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Module } from 'lib1';

import { AppComponent } from './app.component';
import { OutsideComponent } from './outside.component';
import { StolenComponent } from './stolen.component';

@NgModule({
  declarations: [AppComponent, OutsideComponent, StolenComponent],
  imports: [BrowserModule, Lib1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
