import { Directive, OnInit, ElementRef, ViewChild, HostListener, Input, Renderer2, HostBinding } from '@angular/core';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component'; 

@Directive({
  selector: 'app-mobile-menu'
})
export class offClicksDirective implements OnInit {
  @Input() menu: MobileMenuComponent;
  @Input() defaultColor: string = 'transparent';
  @Input('app-mobile-menu') highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.menu.state = "inactive";
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('document:click', ['$event'])
    onClick(event) {
    if (this.el.nativeElement.contains(event.target)) {
      console.log("Clicked inside menu");      
      console.log(this.menu.state);

      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      this.backgroundColor = this.highlightColor;      
   } 
    else {
      console.log(event.view);
      console.log("Clicked outside menu");
      console.log(this.menu.state);

      this.backgroundColor = this.defaultColor;

      //this.menu.state = "inactive";

    }
  }  

}
