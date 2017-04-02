import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  private heroesUrl = 'http://starlord.hackerearth.com/kickstarter';  // URL to web api
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }


  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroesAPI()
      .then(heroes => heroes.find(hero => hero.id === id));
  }


  constructor(private http: Http) { }

  getHeroesAPI(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data )
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
