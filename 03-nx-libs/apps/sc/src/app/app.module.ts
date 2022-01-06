import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OutsideComponent } from './outside.component';
import { StolenComponent } from './stolen.component';

@NgModule({
  declarations: [AppComponent, OutsideComponent, StolenComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
