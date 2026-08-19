import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PROJECTS } from '../../core/portfolio-data';
import { Portfolio } from './portfolio';

describe('Portfolio', () => {
  let component: Portfolio;
  let fixture: ComponentFixture<Portfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Portfolio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('links every card to its source', () => {
    const links = fixture.nativeElement.querySelectorAll('.project__github');

    expect(links.length).toBe(PROJECTS.filter((project) => project.githubUrl).length);
    for (const link of links) {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toContain('noopener');
    }
  });

  // The button only makes sense once a project is actually running somewhere,
  // so it appears with the address and not before.
  it('shows the live button exactly for the projects that have an address', () => {
    const buttons = fixture.nativeElement.querySelectorAll('.project__live');

    expect(buttons.length).toBe(PROJECTS.filter((project) => project.liveUrl).length);
  });

  it('sends the round arrow to the source while there is no live address', () => {
    const withoutLive = PROJECTS.find((project) => !project.liveUrl && project.githubUrl);
    if (!withoutLive) {
      return;
    }

    const arrows = [...fixture.nativeElement.querySelectorAll('.project__open')];
    expect(arrows.some((arrow) => arrow.getAttribute('href') === withoutLive.githubUrl)).toBe(true);
  });
});
