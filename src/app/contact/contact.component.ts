import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mpk-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: any;

  emailSent = false;

  loading = false;

  form = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
  }
  sendEmail() {
  }
}
