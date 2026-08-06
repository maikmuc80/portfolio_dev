import { DOCUMENT, Component, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Logo } from '../logo/logo';
import { PROFILE, SECTIONS } from '../../core/portfolio-data';
import { Lang, TranslationKey } from '../../core/i18n';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly i18n = inject(TranslationService);
  protected readonly t = this.i18n.t;
  protected readonly profile = PROFILE;
  protected readonly sections = SECTIONS;

  /** Order as in the Figma header: EN first. */
  protected readonly langs: { code: Lang; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ];

  readonly menuOpen = signal(false);

  private readonly document = inject(DOCUMENT);

  constructor() {
    // While the overlay is open the page behind it must not scroll along.
    effect(() => {
      this.document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  /** Anchor name to translation key, e.g. 'about' -> 'nav.about'. */
  protected navKey(section: string): TranslationKey {
    return `nav.${section}` as TranslationKey;
  }
}
