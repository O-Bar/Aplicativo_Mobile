import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent , CalendarComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule , 
      BrowserAnimationsModule,
      FlatpickrModule.forRoot(),
      FormsModule,
      CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
     ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
