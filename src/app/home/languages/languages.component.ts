import { Component, HostListener, Renderer2, ElementRef} from '@angular/core';
import { faUpDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {

  faUpDown =faUpDown;

}
