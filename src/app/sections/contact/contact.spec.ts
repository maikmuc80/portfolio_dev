import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets the consent by way of the box', () => {
    const box: HTMLInputElement = fixture.nativeElement.querySelector('#contact-privacy');
    const label: HTMLLabelElement = fixture.nativeElement.querySelector(
      'label[for="contact-privacy"]',
    );

    label.click();

    expect(box.checked).toBe(true);
  });

  // The privacy link sits next to the box, not inside its label — otherwise
  // following the link would give consent on the way past.
  it('keeps the privacy link out of the label', () => {
    const label = fixture.nativeElement.querySelector('label[for="contact-privacy"]');

    expect(label).toBeTruthy();
    expect(label.querySelector('a')).toBeNull();
  });

  it('names and describes the checkbox through existing elements', () => {
    const root = fixture.nativeElement;
    const box: HTMLInputElement = root.querySelector('#contact-privacy');

    expect(root.querySelector(`#${box.getAttribute('aria-labelledby')}`)).toBeTruthy();
    expect(root.querySelector(`#${box.getAttribute('aria-describedby')}`)).toBeTruthy();
  });
});
