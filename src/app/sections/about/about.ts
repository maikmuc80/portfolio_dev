import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly t = inject(TranslationService).t;
}
