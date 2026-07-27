import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { TranslationService } from './core/translation-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(
      routes,
      // Beim Seitenwechsel nach oben springen, Anker-Links weiterhin anspringen.
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
    ),
    // Früh instanziieren, damit <html lang>, Seitentitel und Meta-Description stehen.
    provideAppInitializer(() => {
      inject(TranslationService);
    }),
  ],
};
