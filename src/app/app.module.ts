import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { StaffModule } from './staff/staff.module';
import { CommonModule } from '@angular/common';
import { RuleModule } from './rule/rule.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    StaffModule,
    RuleModule,
    AppRoutingModule,
    RuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
