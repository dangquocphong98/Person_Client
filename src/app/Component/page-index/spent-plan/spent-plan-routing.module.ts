import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpentPlanComponent } from './spent-plan.component';


const routes: Routes = [
  {
    path : '',
    component: SpentPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpentPlanRoutingModule { }
