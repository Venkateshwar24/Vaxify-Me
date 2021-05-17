import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatFormFieldModule}from '@angular/material/form-field';
import{MatDatepickerModule}from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import{MatInputModule}from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
const materialcomponents =[
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  MatListModule,
  MatSelectModule,
  MatDividerModule,
  MatTabsModule,
  MatButtonToggleModule
];



@NgModule({
  imports: [materialcomponents],
  exports:[materialcomponents]
})
export class MaterialModule { }
