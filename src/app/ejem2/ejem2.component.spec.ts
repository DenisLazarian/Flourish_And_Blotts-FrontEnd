import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejem2Component } from './ejem2.component';

describe('Ejem2Component', () => {
  let component: Ejem2Component;
  let fixture: ComponentFixture<Ejem2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejem2Component]
    });
    fixture = TestBed.createComponent(Ejem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
