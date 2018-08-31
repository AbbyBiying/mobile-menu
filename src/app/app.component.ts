import { MobileMenuComponent } from './mobile-menu/mobile-menu.component'; 
import { Component, OnInit, Input, ViewChild, HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { offClicksDirective } from './off-clicks.directive'
import { mobileMenuTriggerDirective } from './mobile-menu-trigger.directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
})
export class AppComponent {
  title = 'mobile-menu-app';

}
