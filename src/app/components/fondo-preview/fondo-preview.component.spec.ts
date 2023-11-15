import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoPreviewComponent } from './fondo-preview.component';

describe('FondoPreviewComponent', () => {
  let component: FondoPreviewComponent;
  let fixture: ComponentFixture<FondoPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondoPreviewComponent]
    });
    fixture = TestBed.createComponent(FondoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
