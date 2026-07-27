import { Component, inject } from '@angular/core';
import { REFERENCES } from '../../core/portfolio-data';
import { TranslationKey } from '../../core/i18n';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  protected readonly t = inject(TranslationService).t;
  protected readonly references = REFERENCES;

  protected refKey(key: string, field: 'role' | 'text'): TranslationKey {
    return `references.${key}.${field}` as TranslationKey;
  }
}
