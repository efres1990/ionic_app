import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArenaDataProvider } from '../providers/arena-data/arena-data';
import { Splash } from '../pages/splash-screen/splash-screen';
import { Platform, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, private afAuth: AngularFireAuth, splashScreen: SplashScreen, public arenaDataProvider : ArenaDataProvider, modalCtrl: ModalController) {
    this.afAuth.authState.subscribe(auth => {
      if(!auth)
        this.rootPage = LoginPage;
      else
        this.rootPage = TabsPage;
    });
    platform.ready().then(() => {
      let splash = modalCtrl.create(Splash);
      splash.present();
    });
    
  }
}

