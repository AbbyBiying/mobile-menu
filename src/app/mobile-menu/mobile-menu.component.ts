import { Component, OnInit, Input, ViewChild, HostListener, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  animations: [
    trigger('menuState', [
      state('inactive', style({
        color: 'transparent',
        transform: 'translateY(-200px)',
        //opacity:0
      })),
      state('active',   style({
        //backgroundColor: '#FFEBCD',
        transform: 'translateY(0%)',        
        //opacity:1

      })),
      transition('inactive => active', animate('0.3s ease-in')),
      transition('active => inactive', animate('0.3s ease-out'))
    ])
  ]
})

export class MobileMenuComponent implements OnInit {
  state: string = "inactive";
  values = [ "Dashboard", "Orders", "Reports", "Consumers", "Level 2/3 Data", "Recurring Payments"];
  
  constructor(
    private eRef: ElementRef, 
     ){}

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';    
  }

  // close() {
  //   this.state = 'inactive';
  // }

  ngOnInit() {
  }
}
