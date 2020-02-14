import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { RouterModule } from '@angular/router';
import {PageNotFoundComponent} from 'src/app/shared/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    PaginatorComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginatorComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
