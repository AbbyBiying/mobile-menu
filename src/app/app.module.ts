import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { offClicksDirective } from './off-clicks.directive'
import { mobileMenuTriggerDirective } from './mobile-menu-trigger.directive'

@NgModule({
  declarations: [
    AppComponent,
    MobileMenuComponent,
    offClicksDirective,
    mobileMenuTriggerDirective
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
