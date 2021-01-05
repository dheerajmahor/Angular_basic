import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaterefrshvarialeComponent } from './templaterefrshvariale.component';

describe('TemplaterefrshvarialeComponent', () => {
  let component: TemplaterefrshvarialeComponent;
  let fixture: ComponentFixture<TemplaterefrshvarialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplaterefrshvarialeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplaterefrshvarialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
