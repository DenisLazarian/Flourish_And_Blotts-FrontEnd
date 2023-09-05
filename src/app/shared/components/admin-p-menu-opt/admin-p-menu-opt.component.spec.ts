import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPMenuOptComponent } from './admin-p-menu-opt.component';

describe('AdminPMenuOptComponent', () => {
  let component: AdminPMenuOptComponent;
  let fixture: ComponentFixture<AdminPMenuOptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPMenuOptComponent]
    });
    fixture = TestBed.createComponent(AdminPMenuOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
