import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../core/portfolio-data';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-datenschutz',
  imports: [RouterLink],
  templateUrl: './datenschutz.html',
  styleUrl: './datenschutz.scss',
})
export class Datenschutz {
  protected readonly t = inject(TranslationService).t;
  protected readonly profile = PROFILE;
}
