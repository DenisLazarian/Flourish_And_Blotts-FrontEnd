import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploRouteComponent } from './ejemplo-route.component';

describe('EjemploRouteComponent', () => {
  let component: EjemploRouteComponent;
  let fixture: ComponentFixture<EjemploRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjemploRouteComponent]
    });
    fixture = TestBed.createComponent(EjemploRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
