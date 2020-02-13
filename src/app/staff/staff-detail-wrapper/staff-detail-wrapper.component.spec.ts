import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDetailWrapperComponent } from './staff-detail-wrapper.component';

describe('StaffDetailWrapperComponent', () => {
  let component: StaffDetailWrapperComponent;
  let fixture: ComponentFixture<StaffDetailWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffDetailWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDetailWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
