import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';
import { RuleListComponent } from './rule-list/rule-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'staff-management', component: StaffListComponent },
  { path: 'rule-management', component: RuleListComponent },

  { path: '', redirectTo: '/staff-management', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
     )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
