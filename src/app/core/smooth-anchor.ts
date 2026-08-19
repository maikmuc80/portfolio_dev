import { DOCUMENT, Directive, inject, input } from '@angular/core';
import { anchorOffset } from './anchor-offset';

/**
 * In-page anchor that scrolls with the duration and easing the Figma prototype
 * gives its SCROLL_ANIMATE actions, rather than the browser's own smooth
 * scroll — which has neither a settable duration nor a settable curve.
 *
 * Durations read from the prototype (all EASE_OUT unless noted):
 *   about CTA "Let's talk"          100ms
 *   skills "Contact me"             100ms
 *   footer logo                     150ms
 *   footer back-to-top arrow        300ms
 *   hero mail address                70ms  EASE_IN_AND_OUT
 */
@Directive({
  selector: '[appSmoothAnchor]',
  host: { '(click)': 'onClick($event)' },
})
export class SmoothAnchor {
  /** Target element id, without the leading '#'. */
  readonly appSmoothAnchor = input.required<string>();

  /** Figma's SCROLL_ANIMATE duration for this particular trigger, in ms. */
  readonly scrollDuration = input(100);

  private readonly document = inject(DOCUMENT);

  protected onClick(event: MouseEvent): void {
    // Let modified clicks (new tab, download, …) behave normally.
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) {
      return;
    }

    const target = this.document.getElementById(this.appSmoothAnchor());
    if (!target) {
      return;
    }

    event.preventDefault();
    this.scrollTo(target);
  }

  private scrollTo(target: HTMLElement): void {
    const view = this.document.defaultView;
    // Same target the menu entries aim at — they go through the router's
    // ViewportScroller, which is given this offset in app.config.ts.
    const offset = anchorOffset(this.document, this.appSmoothAnchor());
    const to = target.getBoundingClientRect().top + (view?.scrollY ?? 0) - offset;

    // Reduced motion means no travel animation at all, in line with the
    // blanket rule in styles.scss.
    const reduced = view?.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 0 : this.scrollDuration();

    if (!view || duration <= 0) {
      view?.scrollTo(0, to);
      this.focusTarget(target);
      return;
    }

    const from = view.scrollY;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // EASE_OUT — cubic-bezier(0, 0, 0.58, 1) closely enough for a scroll.
      const eased = 1 - Math.pow(1 - progress, 2);
      view.scrollTo(0, from + (to - from) * eased);

      if (progress < 1) {
        view.requestAnimationFrame(step);
      } else {
        this.focusTarget(target);
      }
    };

    view.requestAnimationFrame(step);
  }

  /** Keyboard users must land in the section, not stay on the link. */
  private focusTarget(target: HTMLElement): void {
    const hadTabindex = target.hasAttribute('tabindex');
    if (!hadTabindex) {
      target.setAttribute('tabindex', '-1');
    }
    target.focus({ preventScroll: true });
    if (!hadTabindex) {
      target.removeAttribute('tabindex');
    }
  }
}
