import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { RuleListComponent } from './rule-list/rule-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffListComponent,
    RuleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
