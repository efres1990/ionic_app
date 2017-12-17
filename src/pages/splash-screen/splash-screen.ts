import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SplashScreenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 *
 Components.
 */
@Component({
  selector: 'page-splash',
  templateUrl: 'splash-screen.html',
})
export class Splash {
 
  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) {
 
  }
 
  /**
   * Al acceder se lanza un Splash que durara en función de un timeout
   */
  ionViewDidEnter() {
    this.splashScreen.hide();
 
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000);
 
  }
 
}