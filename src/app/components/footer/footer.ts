import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Logo } from '../logo/logo';
import { PROFILE, SOCIALS } from '../../core/portfolio-data';
import { TranslationKey } from '../../core/i18n';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly t = inject(TranslationService).t;
  protected readonly profile = PROFILE;
  protected readonly socials = SOCIALS;

  protected socialKey(key: string): TranslationKey {
    return `social.${key}` as TranslationKey;
  }
}
