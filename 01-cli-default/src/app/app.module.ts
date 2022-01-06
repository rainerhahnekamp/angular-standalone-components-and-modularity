import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleModule } from './module/module.module';
import { OutsideComponent } from './outside.component';
import { StolenComponent } from './stolen.component';

@NgModule({
  declarations: [AppComponent, OutsideComponent, StolenComponent],
  imports: [BrowserModule, AppRoutingModule, ModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
