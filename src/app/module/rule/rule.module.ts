import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuleRoutingModule } from './rule-routing.module';
import { RuleListComponent } from './rule-list/rule-list.component';
import { RuleDetailComponent } from './rule-detail/rule-detail.component';


@NgModule({
  declarations: [
    RuleListComponent,
    RuleDetailComponent,
  ],
  imports: [
    CommonModule,
    RuleRoutingModule
  ]
})
export class RuleModule { }
