import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRMenuOptComponent } from './admin-r-menu-opt.component';

describe('AdminRMenuOptComponent', () => {
  let component: AdminRMenuOptComponent;
  let fixture: ComponentFixture<AdminRMenuOptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRMenuOptComponent]
    });
    fixture = TestBed.createComponent(AdminRMenuOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
