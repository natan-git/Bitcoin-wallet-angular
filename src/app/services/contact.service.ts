import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, interval } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { Contact } from '../contact';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private contactsUrl = 'api/contacts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http:HttpClient ) {}


  getContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.contactsUrl)
      // .pipe(
      //   tap(contacts => this.log('fetched contacts')),
      //   catchError(this.handleError<Contact[]>('getContacts', []))
      // );
  }

  deleteContact (contact: Contact | number): Observable<Contact> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;

    return this.http.delete<Contact>(url, this.httpOptions)
    // .pipe(
      // tap(_ => this.log(`deleted contact id=${id}`)),
      // catchError(this.handleError<Contact>('deleteHero'))
    // );
  }
  
  getContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url)
    // .pipe(
    //   tap(_ => this.log(`fetched hero id=${id}`)),
    //   catchError(this.handleError<Hero>(`getHero id=${id}`))
    // );
  }

  
  updateContact (contact: Contact): Observable<any> {
    return this.http.put(this.contactsUrl, contact, this.httpOptions)
    // .pipe(
    //   tap(_ => this.log(`updated hero id=${hero.id}`)),
    //   catchError(this.handleError<any>('updateHero'))
    // );
  }

  addContact (contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, this.httpOptions)
    // .pipe(
    //   tap((newContact: Contact) => this.log(`added hero w/ id=${newContact.id}`)),
    //   catchError(this.handleError<Contact>('addHero'))
    // );
  }

  searchContacts(term: string): Observable<Contact[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Contact[]>(`${this.contactsUrl}/?name=${term}`)
    // .pipe(
    //   tap(_ => this.log(`found heroes matching "${term}"`)),
    //   catchError(this.handleError<Hero[]>('searchHeroes', []))
    // );
  }
  

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // /** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}
