import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShovableBtn } from './shovable-btn';

describe('ShovableBtn', () => {
  let component: ShovableBtn;
  let fixture: ComponentFixture<ShovableBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShovableBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShovableBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
