import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact'

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact;
  private contacts:Contact[];
  constructor() { }

  ngOnInit() {
  }
  


}
