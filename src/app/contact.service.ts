import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor() { }
  getById(id : number) {
    return {name: 'Meghatron', email: 'Meghatron@gmail.com'}  
  }
}
