import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';

import { CardDataProvider } from '../../providers/cards-data/cards-data';
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

  constructor(public navCtrl: NavController, public platform: Platform,
    public navParams: NavParams, public cardData: CardDataProvider) {
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

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
      if (this.hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  }
}
