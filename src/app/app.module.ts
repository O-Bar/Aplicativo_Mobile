import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from "angularfire2";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

export const firebaseConfig = {
    apiKey: "AIzaSyAV8JNLGGLWj9V77RPLh4GQtz2z7oeNDhI",
    authDomain: "ultra-ace-309500.firebaseapp.com",
    projectId: "ultra-ace-309500",
    storageBucket: "ultra-ace-309500.appspot.com",
    messagingSenderId: "1060399087486",
    appId: "1:1060399087486:web:be0e72dbd912244d487d2f"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAV8JNLGGLWj9V77RPLh4GQtz2z7oeNDhI',
      libraries: ['places']
    }) 
     ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
