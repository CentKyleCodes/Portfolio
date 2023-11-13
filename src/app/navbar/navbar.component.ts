import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCode, faLaptopCode, faLink, faTimes} from '@fortawesome/free-solid-svg-icons';

import { NgModule } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], 

})
export class NavbarComponent {
  faLaptopCode = faLaptopCode;
  faCode = faCode;
  faTimes = faTimes;

  toggleMenu(){
     const menu = document.querySelector(".menu-links");
     const icon = document.querySelector(".hamburger-icon");

     menu?.classList.toggle("open");
     icon?.classList.toggle("open");
  }

visible: boolean = false;

constructor(private router:Router){}

goToPage(pageName:string):void{
  this.router.navigate(['${pageName}']);
} 

onClick(){
this.visible = !this.visible
}




//   hideNavigationBar(){

//     let prevScrollpos: number = window.pageYOffset;
//     window.onscroll = function() {

//       let currentScrollPos: number: = window.pageYOffset;
//           if (prevScrollpos > currentScrollPos) {
            
//             window.getElementById("navbar").style.top = "0";
//           } else {

//             window.getElementById("navbar").style.top = "-50px";
//           }

//       prevScrollpos = currentScrollPos;
// }

// };


}





