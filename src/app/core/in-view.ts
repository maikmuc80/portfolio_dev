import { Directive, ElementRef, OnDestroy, inject, signal } from '@angular/core';

/**
 * Adds `is-in-view` once the element has been scrolled into view, and never
 * takes it off again — the animations hanging off it are entrances, and one
 * that replays every time the user scrolls past would turn into a tic.
 *
 * The observer is dropped after the first hit, so nothing keeps watching a
 * decorative arrow for the rest of the visit.
 */
@Directive({
  selector: '[appInView]',
  host: { '[class.is-in-view]': 'seen()' },
})
export class InView implements OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  protected readonly seen = signal(false);

  constructor() {
    // Without the API — very old browsers, or a non-browser render — the class
    // goes on straight away. Better a missed animation than a hidden element.
    if (typeof IntersectionObserver === 'undefined') {
      this.seen.set(true);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        this.seen.set(true);
        this.observer?.disconnect();
      },
      // Most of the element has to be on screen: these arrows sit at the edge of
      // a section, and a sliver appearing is not yet an arrival.
      { threshold: 0.6 },
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
