import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from "@ionic/storage";
/*import { AngularFireModule } from "@angular/fire";
iimport { AngularFirestore } from '@angular/fire/firestore';*/

const config = {
  apiKey: "AIzaSyCAP75fUMaUbpgaXmcj0XqdYCZ6G8-VCsI",
  authDomain: "heartstonelib-48fbf.firebaseapp.com",
  databaseURL: "https://heartstonelib-48fbf.firebaseio.com",
  projectId: "heartstonelib-48fbf",
  storageBucket: "heartstonelib-48fbf.appspot.com",
  messagingSenderId: "814307901230"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
  /*AngularFireModule.initializeApp(config)
    /*AngularFirestore,*/
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
