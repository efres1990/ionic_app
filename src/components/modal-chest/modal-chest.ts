import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalChestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-chest',
  templateUrl: 'modal-chest.html'
})
export class ModalChestComponent {

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
    console.log('ionViewDidLoad Modal chest');
  }


}
