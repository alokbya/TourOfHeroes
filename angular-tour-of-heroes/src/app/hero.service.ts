import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

// this decorator marks that this class 
// participates in the DI system.
// providing service at root level creates single, shared
// instance of service
@Injectable({
  providedIn: 'root' // root injector
})
export class HeroService {

  // constructor
  constructor(private messageService: MessageService) {

   }

   // get heroes
   // this is an async method signature
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
