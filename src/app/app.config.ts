import {
  ApplicationConfig,
  DOCUMENT,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';
import { Router, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { anchorOffset } from './core/anchor-offset';
import { TranslationService } from './core/translation-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(
      routes,
      // Jump to the top on navigation, but still honour anchor links.
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
    ),
    // Instantiate early so <html lang>, page title and meta description are set.
    provideAppInitializer(() => {
      inject(TranslationService);

      // Anchor links scroll through Angular's ViewportScroller, which calls
      // window.scrollTo with a flat [0, 0] offset and ignores scroll-padding —
      // that is only read by scrollIntoView and scroll snapping. Left alone,
      // every section landed with its top 92px behind the fixed header. The
      // offset is a function and is called again for each jump, so it can
      // measure the section it is about to stop at.
      const document = inject(DOCUMENT);
      const router = inject(Router);
      inject(ViewportScroller).setOffset(() => [
        0,
        anchorOffset(document, router.parseUrl(router.url).fragment),
      ]);
    }),
  ],
};
