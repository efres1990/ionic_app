import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {ChestDataProvider} from '../../providers/chest-data/chest-data';
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
  chests: Array<Object> = [];  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public chestData:ChestDataProvider) {
    this.img='super-magical-chest-close.png';
    this.chestData.getChest().then(arenaList => {
      this.chests = arenaList;
      console.log("Chest " + this.chests);

    })
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
