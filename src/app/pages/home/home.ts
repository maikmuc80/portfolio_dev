import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { Skills } from '../../sections/skills/skills';
import { Portfolio } from '../../sections/portfolio/portfolio';
import { References } from '../../sections/references/references';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Portfolio, References, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
