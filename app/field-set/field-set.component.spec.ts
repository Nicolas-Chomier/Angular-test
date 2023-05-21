import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSetComponent } from './field-set.component';

describe('FieldSetComponent', () => {
  let component: FieldSetComponent;
  let fixture: ComponentFixture<FieldSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldSetComponent]
    });
    fixture = TestBed.createComponent(FieldSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
