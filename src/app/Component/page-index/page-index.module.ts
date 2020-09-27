import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageIndexRoutingModule } from './page-index-routing.module';
import { CategoryspentModule } from './catagory-spent/categoryspent.module';
import { PageIndexComponent } from './page-index.component';


@NgModule({
  declarations: [
    PageIndexComponent,
  ],
  imports: [
    CommonModule,
    
    PageIndexRoutingModule,
    CategoryspentModule,
  ],
  providers : []
})
export class PageIndexModule { }
