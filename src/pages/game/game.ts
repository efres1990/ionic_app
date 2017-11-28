import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  public img: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img='super-magical-chest-close.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }
  ionViewDidLeave() {
    this.img='super-magical-chest-close.png';
    
     }
  public openChest() {
    this.img = 'super-magical-chest-open.png';
  }
}
