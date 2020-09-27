import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

const MaterialComponent = [
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTooltipModule,
  MatDialogModule,
  MatSelectModule
];

@NgModule({
  imports: [
    MaterialComponent
  ],
  exports : [
    MaterialComponent
  ]
})
export class MateriamoduleModule { }
