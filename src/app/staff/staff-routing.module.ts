import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';

const routes: Routes = [
  {
    path: 'staff',
    component: StaffHomeComponent,
    children: [
      {
        path: '',
        component: StaffListComponent,
        children: [
          { path: ':id', component: StaffDetailComponent },
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
