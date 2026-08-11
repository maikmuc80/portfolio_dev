import { Component, inject } from '@angular/core';
import { SmoothAnchor } from '../../core/smooth-anchor';
import { SKILLS } from '../../core/portfolio-data';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-skills',
  imports: [SmoothAnchor],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly t = inject(TranslationService).t;
  protected readonly skills = SKILLS;

  /** Mask source for a skill icon — see the comment on .skill__icon. */
  protected iconUrl(icon: string): string {
    return `url(assets/icons/${icon}.svg)`;
  }
}
