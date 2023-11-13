import { Component, Renderer2, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Router } from '@angular/router';
import { faEnvelope, faMessage, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  faMessage = faMessage;
  faMapMarkerAlt = faMapMarkerAlt;


  form: FormGroup = this.fb.group({
    from_email: '',
    Subject: '',
    Message: ''
  })

  constructor(private fb: FormBuilder){

  }

  send(){
    emailjs.send('service_r02k8tq', 'template_r44r5eI6', {
      from_email: '',
      Subject: '',
      Message: ''

    })

    
  }

}
