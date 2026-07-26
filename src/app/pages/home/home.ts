import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Skills } from '../../sections/skills/skills';
import { Portfolio } from '../../sections/portfolio/portfolio';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Skills, Portfolio, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}