import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineValidationComponent } from './inline-validation.component';

describe('InlineValidationComponent', () => {
  let component: InlineValidationComponent;
  let fixture: ComponentFixture<InlineValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
