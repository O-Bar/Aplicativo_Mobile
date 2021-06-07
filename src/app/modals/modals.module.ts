import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemedioDetailModalComponent } from './remedio-detail-modal/remedio-detail-modal.component';



@NgModule({
  declarations: [
    RemedioDetailModalComponent
  ],
  exports :[
    RemedioDetailModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModalsModule { }
