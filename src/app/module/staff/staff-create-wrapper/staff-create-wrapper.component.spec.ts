import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCreateWrapperComponent } from './staff-create-wrapper.component';

describe('StaffCreateWrapperComponent', () => {
  let component: StaffCreateWrapperComponent;
  let fixture: ComponentFixture<StaffCreateWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCreateWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCreateWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
