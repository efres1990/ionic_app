import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArenaDetailsComponent } from '../pages/arena-details/arena-details';
import { Splash } from '../pages/splash-screen/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ArenaDataProvider } from '../providers/arena-data/arena-data';
import { CardDataProvider } from '../providers/cards-data/cards-data';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
var config = {
  apiKey: "AIzaSyAGefjIcoiM-_ppHAdbNGUM2fA2_Gh3KYc",
  authDomain: "loginpractica.firebaseapp.com",
  databaseURL: "https://loginpractica.firebaseio.com",
  projectId: "loginpractica",
  storageBucket: "",
  messagingSenderId: "76186552008"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ArenaDetailsComponent,
    Splash  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),    
    AngularFireAuthModule,    
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArenaDetailsComponent,
    Splash,
    LoginPage,
    SignupPage  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArenaDataProvider,
    CardDataProvider
  ]
})
export class AppModule {}
