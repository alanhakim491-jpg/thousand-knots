import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentButton } from './content-button';

describe('ContentButton', () => {
  let component: ContentButton;
  let fixture: ComponentFixture<ContentButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
