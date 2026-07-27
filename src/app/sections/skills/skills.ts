import { Component, inject } from '@angular/core';
import { SKILLS } from '../../core/portfolio-data';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly t = inject(TranslationService).t;
  protected readonly skills = SKILLS;
}
