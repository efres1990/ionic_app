import { ModalController, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CardDataProvider } from '../../providers/cards-data/cards-data';
import { ModalPage } from '../../pages/modal/modal';
import { HomePage } from '../home/home';

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
  constructor(public navCtrl: NavController, public platform: Platform,
    public navParams: NavParams, public cardData: CardDataProvider, public modalCtrl: ModalController) {
    this.arenaInfo = navParams.data.arenaData;
    this.cards = [];
    console.log("asda" + this.arenaInfo.cardUnlocks);

    for (let card = 0; card < this.arenaInfo.cardUnlocks.length; card++) {

      cardData.getCardsInfo(this.arenaInfo.cardUnlocks[card]).then(arenaList => {
        if (!this.isEmpty(arenaList)) {
          this.cards.push(arenaList);
          console.log("Cartas" + this.cards);
        }
      })
    }
    //cardData.load();
  }

  isEmpty(obj) {

    if (obj == null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    if (typeof obj !== "object") return true;
    for (var key in obj) {
      if (this.hasOwnProperty.call(obj, key)) return false;
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
