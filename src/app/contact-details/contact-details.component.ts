import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Contact } from '../contact';
import { ContactService } from '../services/contact.service';



@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})

export class ContactDetailsComponent implements OnInit {
  @Input() contact: Contact;
  isEdit:boolean=false;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getContact();
  }

  onEdit(){
    this.isEdit=!this.isEdit
  }

  getContact():void{
    this.route.params.subscribe(params => {
      this.contactService.getContact(+(params.id))
        .subscribe(contact => {
          console.log('Routing Param changed, loading the contact');
          this.contact = contact
        });
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.contactService.updateContact(this.contact)
      .subscribe(() => this.goBack());
  }

}
