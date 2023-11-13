import { Component, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  constructor(private renderer: Renderer2) { }

  
  ngOnInit(): void {
    // Scroll to the top of the page when the component is initialized
    this.renderer.setProperty(document.body, 'scrollTop', 0);
  }

}
