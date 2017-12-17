import { Component } from '@angular/core';
import { ViewController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

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
  favoriteDB: FirebaseListObservable<any>;
  cardExist: Boolean = false;
  constructor(
    public viewCtrl: ViewController,
    public params: NavParams,
    public database: AngularFireDatabase,
    private alertCtrl: AlertController
  ) {
    this.favoriteDB = this.database.list('/favorite');

    this.data = params.data;
    console.log("Datos: " + this.data);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }


  addFavorite() {
    this.favoriteDB.$ref.once("value", (snapshot) => {

      if (snapshot.val() != null) {
        snapshot.forEach((childSnapshot) => {
          var key = childSnapshot.key;
          if (childSnapshot.val().nombre == this.data.idName) {
            this.cardExist = true;
          }
          return false
        });
        if (!this.cardExist) {
          console.log('Añadida carta' + this.data.idName);

          this.favoriteDB.push({ nombre: this.data.idName })
          return;
        } else {
          let alert = this.alertCtrl.create({
            title: 'Error',
            message: 'Card already inserted',
            buttons: ['OK']
          });
          alert.present();
          console.log("Ya insertada");
        }
      } else {
        console.log('Añadida carta' + this.data.idName);

        this.favoriteDB.push({ nombre: this.data.idName })
        return;

      }
    });
  }

}
