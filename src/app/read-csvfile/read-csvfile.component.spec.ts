import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCSVFileComponent } from './read-csvfile.component';

describe('ReadCSVFileComponent', () => {
  let component: ReadCSVFileComponent;
  let fixture: ComponentFixture<ReadCSVFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadCSVFileComponent]
    });
    fixture = TestBed.createComponent(ReadCSVFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
