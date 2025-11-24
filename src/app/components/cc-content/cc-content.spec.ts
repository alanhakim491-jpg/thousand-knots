import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcContent } from './cc-content';

describe('CcContent', () => {
  let component: CcContent;
  let fixture: ComponentFixture<CcContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
