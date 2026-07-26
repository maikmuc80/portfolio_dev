import { Component } from '@angular/core';
import { PROJECTS } from '../../core/portfolio-data';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projects = PROJECTS;
}