import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleComponentsInCellsComponent } from './multiple-components-in-cells.component';

describe('MultipleComponentsInCellsComponent', () => {
  let component: MultipleComponentsInCellsComponent;
  let fixture: ComponentFixture<MultipleComponentsInCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleComponentsInCellsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleComponentsInCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
