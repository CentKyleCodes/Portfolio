import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { faEnvelope, faMessage, faMapMarkerAlt, faPhoneAlt, faArchway } from '@fortawesome/free-solid-svg-icons';
import { __await } from 'tslib';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  faMessage = faMessage;
  faMapMarkerAlt = faMapMarkerAlt;
  placeholder = 'Enter you message.'
  
  form: FormGroup = this.fb.group({
  
    from_email: '',
    subject: '',
    message: ''
  })

  constructor(private fb: FormBuilder){}

  async send(){
    emailjs.init('4xXreJFcKDaCgDhAb');
    let response = await emailjs.send('service_r02k8tq', 'template_r4r5ei6',{
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message

    });
    alert('Message has been sent.');
    this.form.reset();
}
}