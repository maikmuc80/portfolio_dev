import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { References } from './references';

describe('References', () => {
  let component: References;
  let fixture: ComponentFixture<References>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [References],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(References);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
