import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
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
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  declarations: [MapsPage]
})
export class MapsPageModule {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display: google.maps.LatLngLiteral;

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng.toJSON();
  }
}
