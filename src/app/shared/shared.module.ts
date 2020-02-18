import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator/paginator.component';
import { RouterModule } from '@angular/router';
import {PageNotFoundComponent} from 'src/app/shared/page-not-found/page-not-found.component';
import { FormErrorOutputComponent } from './form-error-output/form-error-output.component';
import { FormErrorOutputSingleComponent } from './form-error-output-single/form-error-output-single.component';



@NgModule({
  declarations: [
    PaginatorComponent,
    PageNotFoundComponent,
    FormErrorOutputComponent,
    FormErrorOutputSingleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PaginatorComponent,
    PageNotFoundComponent,
    FormErrorOutputComponent,
    FormErrorOutputSingleComponent
  ]
})
export class SharedModule { }
