import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { ArenaDetailsComponent } from '../arena-details/arena-details';
import { ArenaDataProvider } from '../../providers/arena-data/arena-data';
import { NavController, Events, LoadingController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { arenaObject } from './model/arenaObject';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arenas: Array<Object> = [];
  //arenasDB: FirebaseListObservable<any>;
  backcolor: string = "#dddddd";
  loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  constructor(public database: AngularFireDatabase, public loadingCtrl: LoadingController, public events: Events, public navCtrl: NavController, public arenaData: ArenaDataProvider, private toastCtrl: ToastController) {
    //this.loading.present();
   // this.arenasDB = this.database.list('arenas');
    console.log(this.arenas.length);
    if (this.arenas.length <= 0) {
      console.log("Hago la petición");
      arenaData.getArenas()
        .then(arenaList => {
          this.arenas = arenaList;
          //this.arenasDB.push(arenaList);
          console.log("Arenas" + this.arenas[0].minTrophies);
          //   this.loading.dismiss();
        })
        .catch(err => {
          // Handle error
          console.log("holiii" + err.message + "  " + err.code);
          this.presentToast(err.message);
        });
    }
  }
  goRestaurantDetails(arena) {
    this.navCtrl.push(ArenaDetailsComponent, {
      arenaData: arena
    });
  }
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
}







