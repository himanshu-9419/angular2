import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';




@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  /*hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };*/
  selectedHero: Hero;
  heroes: Hero[] ;
  constructor(
    private heroService: HeroService,
    private router: Router) { }
  getHeroes(): void {
     this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes );
  }
  ngOnInit(): void {
    this.getHeroes();
  }
   gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}

