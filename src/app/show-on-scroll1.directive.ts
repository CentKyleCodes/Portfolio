import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowOnScroll1]'
})
export class ShowOnScroll1Directive {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const triggerPosition = 2500; // Change this value to the scroll position where you want to show the div

    if (scrollPosition >= triggerPosition) {
      // Show the div
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    } else {
      // Hide the div
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }

}