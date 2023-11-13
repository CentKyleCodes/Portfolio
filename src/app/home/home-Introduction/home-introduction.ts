import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { faCode} from '@fortawesome/free-solid-svg-icons';
import { faMapPin, faLaptopCode} from '@fortawesome/free-solid-svg-icons';



@Component({
    selector: 'home-introduction',
    templateUrl: 'home-introduction.html',
    styleUrls: ['home-introduction.css']
})
export class homeIntroduction {
  faCode =faCode;
  faMapPin = faMapPin;
  faLaptopCode= faLaptopCode;
  

    visible: boolean = false;

  constructor(private router:Router){}
 
  goToPage(pageName:string):void{
    this.router.navigate(['${pageName}']);
  } 
  onClick(){
  this.visible = !this.visible
  }


  // TEST THIS
  


}