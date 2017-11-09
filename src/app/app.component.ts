import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <app-heroes></app-heroes>
  <app-messages></app-messages>
  `
})
export class AppComponent  {
  name = 'Angular';
  title = 'Tour of Heroes';
}
