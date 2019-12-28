import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
        { id: 11, name: 'Mario',email: 'Nice@gmail.com', },
        { id: 12, name: 'Narco',email: 'Narco@gmail.com' },
        { id: 13, name: 'Bombasto',email: 'Bombasto@gmail.com' },
        { id: 14, name: 'Celeritas',email: 'Celeritas@gmail.com' },
        { id: 15, name: 'Magneta',email: 'Magneta@gmail.com' },
        { id: 16, name: 'RubberMan',email: 'RubberMan@gmail.com' },
        { id: 17, name: 'Dynama',email: 'Dynama@gmail.com' },
        { id: 18, name: 'Dr IQ',email: 'Dr IQ@gmail.com' },
        { id: 19, name: 'Magma',email: 'Magma@gmail.com' },
        { id: 20, name: 'Tornado',email: 'Tornado@gmail.com' }
    ];
    return {contacts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(contacts: Contact[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 11;
  }
}
