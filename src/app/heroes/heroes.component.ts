import {Component, OnInit} from '@angular/core';
import {Hero} from '../../model/hero';
import {HEROES} from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.heroes = HEROES;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
