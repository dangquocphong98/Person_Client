import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpentPlanRoutingModule } from './spent-plan-routing.module';
import { SpentPlanComponent } from './spent-plan.component';
import { MateriamoduleModule } from 'src/app/CommonModule/materiamodule/materiamodule.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SpentPlanComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SpentPlanRoutingModule,
    MateriamoduleModule,
  ]
})
export class SpentPlanModule { }
