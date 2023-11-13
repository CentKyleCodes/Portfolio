import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollHide]'
})
export class ScrollHideDirective {
  private lastScrollPosition = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  
  onWindowScroll() {

    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > this.lastScrollPosition) {

      // Scrolling down
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-100%)');
    } else {
      // Scrolling up
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
    }
    this.lastScrollPosition = currentScrollPosition;
  }
}