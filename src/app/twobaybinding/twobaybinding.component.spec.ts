import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwobaybindingComponent } from './twobaybinding.component';

describe('TwobaybindingComponent', () => {
  let component: TwobaybindingComponent;
  let fixture: ComponentFixture<TwobaybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwobaybindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwobaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
