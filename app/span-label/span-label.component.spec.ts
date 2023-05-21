import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanLabelComponent } from './span-label.component';

describe('SpanLabelComponent', () => {
  let component: SpanLabelComponent;
  let fixture: ComponentFixture<SpanLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpanLabelComponent]
    });
    fixture = TestBed.createComponent(SpanLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
