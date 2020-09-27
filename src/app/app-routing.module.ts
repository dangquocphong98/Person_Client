import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthoriGuard } from './Guard/authori.guard';
import { AuthoriCanLoadGuard } from './Guard/authori-can-load.guard';


const routes: Routes = [
  {
    path : '',
    loadChildren : () => import('./Component/page-index/page-index.module').then(m => m.PageIndexModule),
    canActivate : [AuthoriGuard],
  },
  {
    path : 'login',
    //canActivate : [AuthoriGuard],
    //canLoad : [AuthoriCanLoadGuard],
    loadChildren: () => import('./Component/authen/authen.module').then(m => m.AuthenModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [AuthoriGuard]
})
export class AppRoutingModule { }
