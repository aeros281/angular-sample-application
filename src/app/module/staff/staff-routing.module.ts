import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { StaffDetailWrapperComponent } from './staff-detail-wrapper/staff-detail-wrapper.component';
import { StaffCreateWrapperComponent } from './staff-create-wrapper/staff-create-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: StaffHomeComponent,
    children: [
      {
        path: '',
        component: StaffListComponent,
        children: [
          { path: 'create', component: StaffCreateWrapperComponent },
          { path: ':id', component: StaffDetailWrapperComponent },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
