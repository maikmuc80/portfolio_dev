import { Component, inject } from '@angular/core';
import { SmoothAnchor } from '../../core/smooth-anchor';
import { PROFILE } from '../../core/portfolio-data';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-hero',
  imports: [SmoothAnchor],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly t = inject(TranslationService).t;
  protected readonly profile = PROFILE;
}
