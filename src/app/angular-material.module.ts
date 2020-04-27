import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';






const mimaterial=[
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    mimaterial
  ],
  exports: [
   mimaterial
  ]
})
export class AngularMaterialModule { }
