import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ChestDataProvider } from '../../providers/chest-data/chest-data';
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
  chestsFirst: Array<Object> = [];
  public premio: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chestData: ChestDataProvider) {
    this.img = 'super-magical-chest-close.png';
    this.chests = [];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }
  ionViewDidLeave() {
    this.img = 'super-magical-chest-close.png';
    this.chests = [];
    this.chestsFirst = [];
  }
  public openChest() {
    this.img = 'super-magical-chest-open.png';
    this.chestData.getChest().then(chestList => {
      console.log(chestList);
      this.chests = chestList.slice(4, 8);
      this.chestsFirst = chestList.slice(0, 4);
      this.premio="!!PREMIOOOO¡¡";
      //this.getSecondArray();
      console.log(chestList + " First " + this.chestsFirst + "Segundo " + this.chests);

    })
  }
  /*public getSecondArray() {
    for (let i = 0; i < this.chests.length/2; i++) {
      this.chests.shift();
      this.chestsFirst.pop();
      
    }
  }*/

}
