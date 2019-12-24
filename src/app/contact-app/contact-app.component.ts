import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  contacts = [
    {name: 'mario', email: 'mario@gmail.com'},
    {name: 'puki', email: 'mario@gmail.com'},
    {name: 'koki', email: 'mario@gmail.com'},
    {name: 'muki', email: 'mario@gmail.com'},
  ];

}
