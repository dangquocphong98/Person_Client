import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenRoutingModule } from './authen-routing.module';
import { AuthenComponent } from './authen.component';
import { MateriamoduleModule } from 'src/app/CommonModule/materiamodule/materiamodule.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthenComponent
  ],
  imports: [
    CommonModule,
    AuthenRoutingModule,
    MateriamoduleModule,
    FormsModule
  ]
})
export class AuthenModule { }
