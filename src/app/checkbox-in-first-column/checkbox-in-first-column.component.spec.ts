import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxInFirstColumnComponent } from './checkbox-in-first-column.component';

describe('CheckboxInFirstColumnComponent', () => {
  let component: CheckboxInFirstColumnComponent;
  let fixture: ComponentFixture<CheckboxInFirstColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxInFirstColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxInFirstColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
