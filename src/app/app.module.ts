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
import { ModalPage } from '../pages/modal/modal';
import { TabsPage } from '../pages/tabs/tabs';
import { GamePage } from '../pages/game/game';

import { ArenaDataProvider } from '../providers/arena-data/arena-data';
import { CardDataProvider } from '../providers/cards-data/cards-data';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

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
    GamePage,
    LoginPage,
    SignupPage,
    ModalPage,
    TabsPage,
    ArenaDetailsComponent,
    Splash  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),    
    AngularFireAuthModule,
    AngularFireDatabaseModule,    
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage,
    ModalPage,
    ArenaDetailsComponent,
    Splash,
    LoginPage,
    TabsPage,
    SignupPage  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabaseModule,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArenaDataProvider,
    CardDataProvider
  ]
})
export class AppModule {}
