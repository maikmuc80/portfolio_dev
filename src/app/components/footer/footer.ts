import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE, SOCIALS } from '../../core/portfolio-data';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly t = inject(TranslationService).t;
  protected readonly profile = PROFILE;
  protected readonly socials = SOCIALS;
}
