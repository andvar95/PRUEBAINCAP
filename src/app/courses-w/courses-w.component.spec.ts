import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesWComponent } from './courses-w.component';

describe('CoursesWComponent', () => {
  let component: CoursesWComponent;
  let fixture: ComponentFixture<CoursesWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
