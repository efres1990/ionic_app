import { ModalController, LoadingController, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CardDataProvider } from '../../providers/cards-data/cards-data';
import { ModalPage } from '../../pages/modal/modal';
import { HomePage } from '../home/home';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Generated class for the ArenaDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'arena-details',
  templateUrl: 'arena-details.html'
})
export class ArenaDetailsComponent {
  arenaInfo: any;
  cards: Array<Object>;
  hasOwnProperty = Object.prototype.hasOwnProperty;
  dialog: any;
  img: any;
  nodata: Boolean;
  constructor( private loadingCtrl: LoadingController,public navCtrl: NavController, public platform: Platform,
    public navParams: NavParams, public cardData: CardDataProvider, public modalCtrl: ModalController) {
    this.arenaInfo = navParams.data.arenaData;
    this.cards = [];
    /*let loadingPopup = this.loadingCtrl.create({
      content: 'Loading data...'
    });*/
    console.log("asda" + this.arenaInfo.cardUnlocks);

    for (let card = 0; card < this.arenaInfo.cardUnlocks.length; card++) {

      cardData.getCardsInfo(this.arenaInfo.cardUnlocks[card]).then(arenaList => {
        if (!this.isEmpty(arenaList)) {
          this.cards.push(arenaList);
          console.log("Cartas" + this.cards);
        } else {
          console.log('Is Empty');
          this.img = "face_cry";
        }
      })
    }
    //loadingPopup.dismiss();
    //cardData.load();
  }

  isEmpty(obj) {
    this.nodata = true;
    if (obj == null) return true;
    if (obj.length > 0) {
      this.nodata = false;
      return false;
    }
    if (obj.length === 0) return true;
    if (typeof obj !== "object") return true;
    for (var key in obj) {
      if (this.hasOwnProperty.call(obj, key)) {
        this.nodata = false;
        return false;
      }
    }

    return true;
  }
  openModal(card) {
    console.log("Open modal " + card);
    let modal = this.modalCtrl.create(ModalPage, card);
    modal.present();
  }
  ionViewDidLeave() {
    this.navCtrl.setRoot(HomePage);
  }
}
