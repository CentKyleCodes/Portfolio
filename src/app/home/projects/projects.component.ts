import { Component } from '@angular/core';
import { faAngular, faPhp, faHtml5, faCss3Alt, faJs, faWordpress} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  faAngular = faAngular;
  faPhp = faPhp;
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJs = faJs;
  faWordpress = faWordpress;

}
