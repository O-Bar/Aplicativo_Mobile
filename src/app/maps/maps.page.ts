import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  options: google.maps.MapOptions = {
    center: {lat: -23.5489, lng: -46.6388},
    zoom: 8
  };

  apiLoaded: Observable<boolean>;
  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAV8JNLGGLWj9V77RPLh4GQtz2z7oeNDhI', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  ngOnInit() {
  }

}
