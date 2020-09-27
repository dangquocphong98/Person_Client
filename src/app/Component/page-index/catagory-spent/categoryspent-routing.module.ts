import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatagorySpentComponent } from './catagory-spent.component';
import { CanAcitvateCategoryGuard } from 'src/app/Guard/can-acitvate-category.guard';
import { AuthoriGuard } from 'src/app/Guard/authori.guard';


const routes: Routes = [
    {
      path : '',
      component : CatagorySpentComponent,
     // canActivate : [AuthoriGuard],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers : []
})
export class CategoryspentRoutingModule { }
