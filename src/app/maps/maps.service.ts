import { NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

export interface MapGeocoderResponse {
  status: google.maps.GeocoderStatus;
  results: google.maps.GeocoderResult[];
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private _geocoder: google.maps.Geocoder|undefined;
  constructor(private readonly _ngZone: NgZone) { }
    geocode(request: google.maps.GeocoderRequest): Observable<MapGeocoderResponse> {
    return new Observable(observer => {
      // Initialize the `Geocoder` lazily since the Google Maps API may
      // not have been loaded when the provider is instantiated.
      if (!this._geocoder) {
        this._geocoder = new google.maps.Geocoder();
      }

      this._geocoder.geocode(request, (results, status) => {
        this._ngZone.run(() => {
          observer.next({results, status});
          observer.complete();
        });
      });
    });
  }
}

