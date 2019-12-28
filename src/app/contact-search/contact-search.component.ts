import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../contact';
import { ContactService } from '../services/contact.service';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss']
})
export class ContactSearchComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  private searchTerms$ = new Subject<string>();

  constructor(private contactService:ContactService ) { }

  search(term: string): void {
    this.searchTerms$.next(term);
  }

  ngOnInit() {
    this.contacts$ = this.searchTerms$.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.contactService.searchContacts(term)),
    );
  }

}
