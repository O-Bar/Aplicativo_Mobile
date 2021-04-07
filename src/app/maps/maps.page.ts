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
