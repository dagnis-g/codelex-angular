import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHomeworkComponent } from './form-homework.component';

describe('FormHomeworkComponent', () => {
  let component: FormHomeworkComponent;
  let fixture: ComponentFixture<FormHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHomeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
