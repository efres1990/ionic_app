import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ChestDataProvider } from '../../providers/chest-data/chest-data';
import { ModalChestComponent } from '../../components/modal-chest/modal-chest';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  public img: any;
  chests: Array<Object> = [];
  chestsFirst: Array<Object> = [];
  chestsAll: Array<Object> = [];
  public premio: any;
  public close: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chestData: ChestDataProvider, private toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.img = 'super-magical-chest-close.png';
    this.chests = [];
    this.premio = "";
    this.close = "OPEN";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }
  /**
   * Se lanza al abandonar la página de game
   * y reinicializa las variables necesarias para restaurar la pagina.
   */
  ionViewDidLeave() {
    this.img = 'super-magical-chest-close.png';
    this.chests = [];
    this.chestsFirst = [];
    this.premio = "";
    this.close = "OPEN";
  }

  /**
   * Se activa cuando pulsamos en el cofre. Modifica la imagen del cofre
   *  y divide los arrays en dos para mostrarlos en cada row.
   */
  public openChest() {
    if (this.img != 'super-magical-chest-open.png') {
      this.img = 'super-magical-chest-open.png';
      this.close = "";
      this.chestData.getChest()
        .then(chestList => {
          console.log(chestList);
          this.chestsAll = chestList;
          this.chests = chestList.slice(4, 8);
          this.chestsFirst = chestList.slice(0, 4);
          this.premio = "!!YOUR NEW CARDS¡¡";
          console.log(chestList + " First " + this.chestsFirst + "Segundo " + this.chests);

        })
        .catch(err => {
          // Handle error
          console.log("Error detectado " + err.message + "  " + err.code);
          this.presentToast(err.message);

        });

    }
  }
  /**
   * Muestra un toast.
   * @param err error.
   */
  presentToast(err) {
    let toast = this.toastCtrl.create({
      message: err,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  /**
   * Lanza el modal que mostrará las información de cada carta.
   * @param card carta a mostrar
   */
  openModal(card) {
    console.log("Open modal " + card);
    let modal = this.modalCtrl.create(ModalChestComponent, card);
    modal.present();
  }
}
