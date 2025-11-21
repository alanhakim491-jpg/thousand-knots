import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsButton } from './ls-button';

describe('LsButton', () => {
  let component: LsButton;
  let fixture: ComponentFixture<LsButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LsButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
