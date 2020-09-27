import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MateriamoduleModule } from 'src/app/CommonModule/materiamodule/materiamodule.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    MateriamoduleModule,
    
  ]
})
export class ProfileModule { }
