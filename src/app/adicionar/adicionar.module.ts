import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarPageRoutingModule } from './adicionar-routing.module';

import { AdicionarPage } from './adicionar.page';
import { RemedioFormComponent } from '../components/remedio-form/remedio-form.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdicionarPage]
})
export class AdicionarPageModule {}
