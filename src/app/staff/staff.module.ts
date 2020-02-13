import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { StaffDetailWrapperComponent } from './staff-detail-wrapper/staff-detail-wrapper.component';

@NgModule({
  declarations: [StaffDetailComponent, StaffListComponent, StaffHomeComponent, StaffDetailWrapperComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    StaffRoutingModule
  ],
  entryComponents: [StaffDetailComponent, ]
})
export class StaffModule { }
