import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MapsPageRoutingModule } from './maps-routing.module';

import { MapsPage } from './maps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsPageRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAV8JNLGGLWj9V77RPLh4GQtz2z7oeNDhI',
      libraries: ['places']
    }) 
  ],
  declarations: [MapsPage],
})
export class MapsPageModule {}
   

