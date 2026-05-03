import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownRoutePage } from './unknown-route-page';

describe('UnknownRoutePage', () => {
  let component: UnknownRoutePage;
  let fixture: ComponentFixture<UnknownRoutePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnknownRoutePage],
    }).compileComponents();

    fixture = TestBed.createComponent(UnknownRoutePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
