import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalChestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-chest',
  templateUrl: 'modal-chest.html',
})
export class ModalChestPage {
data: any;
  constructor(    public viewCtrl: ViewController,
    public navParams: NavParams) {
    this.data = navParams.data;
    console.log("Datos: " + this.data);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalChestPage');
  }

}
