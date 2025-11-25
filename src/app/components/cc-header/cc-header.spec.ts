import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcHeader } from './cc-header';

describe('CcHeader', () => {
  let component: CcHeader;
  let fixture: ComponentFixture<CcHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
