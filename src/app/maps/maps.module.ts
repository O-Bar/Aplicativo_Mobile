import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

import { IonicModule } from '@ionic/angular';

import { MapsPageRoutingModule } from './maps-routing.module';

import { MapsPage } from './maps.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsPageRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  declarations: [MapsPage],
  exports: [
    MapsPage,
  ],
})
export class MapsPageModule {
  
}
