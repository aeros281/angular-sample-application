import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorOutputSingleComponent } from './form-error-output-single.component';

describe('FormErrorOutputSingleComponent', () => {
  let component: FormErrorOutputSingleComponent;
  let fixture: ComponentFixture<FormErrorOutputSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormErrorOutputSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorOutputSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
