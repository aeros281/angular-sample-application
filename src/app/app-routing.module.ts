import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/staff', pathMatch: 'full' },
  { path: 'staff', loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule) },
  { path: 'rule', loadChildren: () => import('./rule/rule.module').then(m => m.RuleModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
     )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
