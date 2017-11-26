import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArenaDataProvider } from '../providers/arena-data/arena-data';
import { Splash } from '../pages/splash-screen/splash-screen';
import { Platform, ModalController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, private afAuth: AngularFireAuth, statusBar: StatusBar, splashScreen: SplashScreen, public arenaDataProvider : ArenaDataProvider, modalCtrl: ModalController) {
    this.afAuth.authState.subscribe(auth => {
      if(!auth)
        this.rootPage = LoginPage;
      else
        this.rootPage = HomePage;
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      let splash = modalCtrl.create(Splash);
      splash.present();
      //splashScreen.hide();
    });
    arenaDataProvider.load();
    
  }
}

