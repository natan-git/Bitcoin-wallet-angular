import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  userId: string;
  constructor(private route: ActivatedRoute) {
    this.userId= route.snapshot.params['id'];
    console.log('this.userId',this.userId);
   }

  ngOnInit() {
    
    
  }

}
