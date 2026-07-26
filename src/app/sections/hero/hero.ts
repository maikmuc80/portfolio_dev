import { Component } from '@angular/core';
import { PROFILE } from '../../core/portfolio-data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  profile = PROFILE;
}