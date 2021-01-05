import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Side3Component } from './side3.component';

describe('Side3Component', () => {
  let component: Side3Component;
  let fixture: ComponentFixture<Side3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Side3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Side3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
