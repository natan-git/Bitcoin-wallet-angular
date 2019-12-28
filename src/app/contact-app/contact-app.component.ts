import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { UserService } from '../services/user.service'
import { Contact } from '../contact'
@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss']
})
export class ContactAppComponent implements OnInit {
  private contacts:Contact[];
  amount='10';
  isShowInput=false;
  constructor(private contactService:ContactService,private userService:UserService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts():void{
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.contactService.addContact({ name } as Contact)
      .subscribe(contact => {
        this.contacts.unshift(contact);
      });
  }

  delete(contact: Contact): void {
    var keepContacts = this.contacts;
    this.contacts = this.contacts.filter(h => h !== contact);
    // Optimisitc Updates
    try {
      this.contactService.deleteContact(contact)
        .subscribe()

    } catch (err) {
      this.contacts = keepContacts;
    }
  }

  move(){
    this.isShowInput=!this.isShowInput
  }
  
  addAmount(amount: number,contact): void {
    this.userService.addMove(contact,amount);
    this.isShowInput=!this.isShowInput
  }


}
  

