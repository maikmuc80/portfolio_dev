import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { Skills } from './sections/skills/skills';
import { Portfolio } from './sections/portfolio/portfolio';
import { Header } from './components/header/header';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Skills, Portfolio, Header, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio_dev');
}
