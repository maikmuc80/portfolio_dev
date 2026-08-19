import { anchorOffset } from './anchor-offset';

/** A section whose top edge and heading sit where the test wants them. */
function section(id: string, sectionTop: number, headingTop: number): HTMLElement {
  const element = document.createElement('section');
  element.id = id;
  element.getBoundingClientRect = () => ({ top: sectionTop }) as DOMRect;

  const heading = document.createElement('h2');
  heading.getBoundingClientRect = () => ({ top: headingTop }) as DOMRect;
  element.append(heading);

  document.body.append(element);
  return element;
}

describe('anchorOffset', () => {
  // The header height comes from a custom property, which jsdom does not
  // resolve. Everything is therefore asserted against the offset the function
  // itself returns without a target.
  let base: number;

  beforeEach(() => {
    document.body.innerHTML = '';
    base = anchorOffset(document, null);
  });

  it('falls back to the plain header offset without a fragment', () => {
    expect(anchorOffset(document, '')).toBe(base);
  });

  it('falls back for a fragment that names nothing', () => {
    expect(anchorOffset(document, 'nowhere')).toBe(base);
  });

  it('stops at the section when the heading starts there', () => {
    section('about', 500, 500);
    expect(anchorOffset(document, 'about')).toBe(base);
  });

  it('reaches further up when the heading sticks out above the section', () => {
    section('skills', 500, 470);
    expect(anchorOffset(document, 'skills')).toBe(base + 30);
  });

  it('keeps the section top when the heading sits far below it', () => {
    section('contact', 500, 700);
    expect(anchorOffset(document, 'contact')).toBe(base);
  });
});
