import { Component, isDevMode } from '@angular/core';
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
export class Home {
  /**
   * The references section is built and styled after the Figma design, but the
   * three quotes are example copy — no one has actually said them. Shown while
   * developing so the layout can be checked against the design, and withheld
   * from the deployed site, where invented testimonials would be read as real
   * endorsements by anyone looking at the portfolio.
   *
   * `isDevMode()` is false in every production build, so `ng build` alone keeps
   * it out; there is no flag to remember to flip before deploying.
   *
   * To publish the section: put real names into REFERENCES (portfolio-data.ts),
   * real quotes into `references.*` (i18n.ts), then replace this with `true`.
   */
  protected readonly showExampleReferences = isDevMode();
}
