import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageIndexComponent } from './page-index.component';
import { AuthoriGuard } from 'src/app/Guard/authori.guard';


const routes: Routes = [
  {
    path : '',
    component : PageIndexComponent,
    children: [
      {
        path : 'category',
        loadChildren :  () => import('./catagory-spent/categoryspent.module').then(m => m.CategoryspentModule) 
      },
      {
        path : 'profile',
        loadChildren : () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path : 'spent-plan',
        loadChildren : () => import('./spent-plan/spent-plan.module').then(m => m.SpentPlanModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageIndexRoutingModule { }
