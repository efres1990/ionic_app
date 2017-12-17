import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { ArenaDetailsComponent } from '../arena-details/arena-details';
import { ArenaDataProvider } from '../../providers/arena-data/arena-data';
import { NavController, Events, LoadingController, ToastController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { arenaObject } from './model/arenaObject';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arenas: Array<Object> = [];
  arenasEmptyDatabase: boolean = true;
  arenasDB: FirebaseListObservable<any[]>;
  backcolor: string = "#dddddd";
  loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  constructor(public platform: Platform, public database: AngularFireDatabase, public loadingCtrl: LoadingController, public events: Events, public navCtrl: NavController, public arenaData: ArenaDataProvider, private toastCtrl: ToastController) {

    this.arenasDB = this.database.list('/arenas');
    if (this.arenas.length <= 0) {

      console.log("Hago la petición");
      arenaData.getArenas()
        .then(arenaList => {
          this.arenas = arenaList;
          this.saveDataBase(this.arenas);

          console.log("Arenas" + this.arenas[0]);
          //   this.loading.dismiss();
        })
        .catch(err => {
          // Handle error
          console.log("Error " + err.message + "  " + err.code);
          this.presentToast(err.message);
        });
    }

  }
  /**
   * Lanza la pantalla de detalles de la arena.
   * @param arena arena.
   */
  goArenaDetails(arena) {
    this.navCtrl.push(ArenaDetailsComponent, {
      arenaData: arena
    });
  }
  /**
   * Lanza Toast.
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
   * Se encarga de almacenar las arenas en la base de datos de firebase,
   *  comprobando si exiten ya o no, si ya se ha guardado antes no la vuleve a guardar.
   * @param listArena lista de las arenas a guardar.
   */
  saveDataBase(listArena) {
    if (this.arenasDB != null) {
      this.arenasDB.$ref.once("value", (snapshot) => {

        if (snapshot != null) {
          snapshot.forEach((childSnapshot) => {
            this.arenasEmptyDatabase = false;
            return false

          });
          if (this.arenasEmptyDatabase) {
            console.log('No estan almacenadas las arenas, almacenando...');

            this.arenasDB.push({ listaArenas: listArena });
          } else {
            console.log('Ya estan almacenadas las arenas');
          }
        }
      })
    } else {
      this.arenasDB.push({ listaArenas: listArena });
    }
  }
}







