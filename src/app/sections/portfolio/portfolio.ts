import { Component, inject } from '@angular/core';
import { PROJECTS, Project } from '../../core/portfolio-data';
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

  /** Counter as in the design: 01/04, 02/04, … */
  protected counter(index: number): string {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(index + 1)}/${pad(this.projects.length)}`;
  }

  protected descKey(key: string): TranslationKey {
    return `projects.${key}.desc` as TranslationKey;
  }

  /**
   * Where the round arrow leads. The live demo when there is one, otherwise the
   * repository — the design puts the button on every card, and a project whose
   * demo is not published yet still has something to show.
   */
  protected openUrl(project: Project): string {
    return project.liveUrl || project.githubUrl;
  }
}
