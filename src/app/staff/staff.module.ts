import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';

import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [StaffDetailComponent, StaffListComponent, StaffHomeComponent],
  imports: [
    CommonModule,
    MatTableModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
