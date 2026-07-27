import { Component, inject } from '@angular/core';
import { PROFILE } from '../../core/portfolio-data';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly t = inject(TranslationService).t;
  protected readonly profile = PROFILE;
}
