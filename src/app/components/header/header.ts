import { DOCUMENT, Component, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE, SECTIONS } from '../../core/portfolio-data';
import { Lang, TranslationKey } from '../../core/i18n';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly i18n = inject(TranslationService);
  protected readonly t = this.i18n.t;
  protected readonly profile = PROFILE;
  protected readonly sections = SECTIONS;

  /** Reihenfolge wie im Figma-Header: EN zuerst. */
  protected readonly langs: { code: Lang; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ];

  readonly menuOpen = signal(false);

  private readonly document = inject(DOCUMENT);

  constructor() {
    // Bei offenem Overlay soll die Seite dahinter nicht mitscrollen.
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

  /** Anker-Name zum Übersetzungs-Key, z.B. 'about' -> 'nav.about'. */
  protected navKey(section: string): TranslationKey {
    return `nav.${section}` as TranslationKey;
  }
}
