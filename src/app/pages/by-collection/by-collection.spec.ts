import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCollection } from './by-collection';

describe('ByCollection', () => {
  let component: ByCollection;
  let fixture: ComponentFixture<ByCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
