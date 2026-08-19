/** Breathing room between the header and the heading it stops above. */
const ANCHOR_GAP = 16;

/**
 * How far above a section's own top edge an anchor has to stop so that the
 * section's heading ends up fully below the fixed header.
 *
 * Subtracting the header height alone is not enough. In the skills section the
 * heading is pulled up out of its box so the rule can cut through it
 * (`.skills__head` in skills.scss), which puts it above the section's top edge;
 * in the contact section the slanted black wedge pushes the title far down.
 * Measuring the heading covers both without naming either: stop at whichever
 * of the two edges sits higher.
 */
export function anchorOffset(document: Document, fragment: string | null | undefined): number {
  const header =
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0;
  const base = header + ANCHOR_GAP;

  if (!fragment) {
    return base;
  }

  const section = document.getElementById(fragment);
  const heading = section?.querySelector('h1, h2');
  if (!section || !heading) {
    return base;
  }

  const pull = section.getBoundingClientRect().top - heading.getBoundingClientRect().top;
  return base + Math.max(0, pull);
}
