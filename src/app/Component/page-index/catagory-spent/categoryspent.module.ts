import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryspentRoutingModule } from './categoryspent-routing.module';
import { CatagorySpentComponent } from './catagory-spent.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { MateriamoduleModule } from 'src/app/CommonModule/materiamodule/materiamodule.module';
import { FormsModule } from '@angular/forms';
import { DialogdeleteComponent } from './list-category/dialogdelete/dialogdelete.component';
import { CanAcitvateCategoryGuard } from 'src/app/Guard/can-acitvate-category.guard';
import { AuthoriGuard } from 'src/app/Guard/authori.guard';



@NgModule({
  declarations: [CatagorySpentComponent, ListCategoryComponent, AddCategoryComponent, DialogdeleteComponent],
  imports: [
    CommonModule,
    MateriamoduleModule,
    CategoryspentRoutingModule,
    FormsModule
  ],
  providers : []
})
export class CategoryspentModule { }
