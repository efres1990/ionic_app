import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  data: any;
  constructor(
    public viewCtrl: ViewController,
    public params: NavParams
  ) {
    
    this.data = params.data;
    console.log("Datos: " + this.data);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
