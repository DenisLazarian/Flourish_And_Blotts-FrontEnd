import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMenuOptComponent } from './public-menu-opt.component';

describe('PublicMenuOptComponent', () => {
  let component: PublicMenuOptComponent;
  let fixture: ComponentFixture<PublicMenuOptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicMenuOptComponent]
    });
    fixture = TestBed.createComponent(PublicMenuOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
