import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio_dev');
}
