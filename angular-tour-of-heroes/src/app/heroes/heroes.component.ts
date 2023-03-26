import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

// decorator to annotate a component class
// selector: Component's CSS element selector
// templateUrl: Location of component's template file
// styleUrls: location of component's private CSS styles
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // component property
  heroes: Hero[] = [];
  // selected hero
  selectedHero?: Hero;

  // inject service into constructor
  // this defines a heroService prop and 
  // identifies it as a HeroService injection site
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // don't use constructor to DO anything
  // use ngOnInit lifecycle hook so Angular calls this
  // after this class has been constructed
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // this implementation wats for the Observable to
  // emit the array of heroes.
  // Subscribe() passes the emitted array to the callback
  // which sets the component's heroes property
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
