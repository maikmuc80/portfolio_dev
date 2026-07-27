import { Component, inject } from '@angular/core';
import { PROJECTS } from '../../core/portfolio-data';
import { TranslationKey } from '../../core/i18n';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  private readonly i18n = inject(TranslationService);
  protected readonly t = this.i18n.t;
  protected readonly tp = this.i18n.tp;
  protected readonly projects = PROJECTS;

  /** Zähler wie im Design: 01/04, 02/04, … */
  protected counter(index: number): string {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(index + 1)}/${pad(this.projects.length)}`;
  }

  protected descKey(key: string): TranslationKey {
    return `projects.${key}.desc` as TranslationKey;
  }
}
