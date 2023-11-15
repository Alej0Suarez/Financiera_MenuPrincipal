import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionFormComponent } from './informacion-form.component';

describe('InformacionFormComponent', () => {
  let component: InformacionFormComponent;
  let fixture: ComponentFixture<InformacionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionFormComponent]
    });
    fixture = TestBed.createComponent(InformacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
