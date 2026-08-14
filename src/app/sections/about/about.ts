import { Component, inject } from '@angular/core';
import { InView } from '../../core/in-view';
import { SmoothAnchor } from '../../core/smooth-anchor';
import { TranslationService } from '../../core/translation-service';

@Component({
  selector: 'app-about',
  imports: [SmoothAnchor, InView],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly t = inject(TranslationService).t;
}
