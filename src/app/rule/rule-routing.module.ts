import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleListComponent } from './rule-list/rule-list.component';
import { RuleDetailComponent } from './rule-detail/rule-detail.component';


const routes: Routes = [
  { path: '', component: RuleListComponent },
  { path: ':id', component: RuleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuleRoutingModule { }
