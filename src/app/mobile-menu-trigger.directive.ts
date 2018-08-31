import { Directive, OnInit, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component'; 

@Directive({
  selector: '[mobile-menu-trigger]'
})
export class mobileMenuTriggerDirective implements OnInit {
  @Input() target: MobileMenuComponent;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  onClick(event) {
    console.log("Clicked hamburger");
    this.target.toggleState();
  }
  ngOnInit() {

  }

}
