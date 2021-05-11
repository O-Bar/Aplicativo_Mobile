import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemedioFormComponent } from './remedio-form/remedio-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RemedioFormComponent],
  exports: [RemedioFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
