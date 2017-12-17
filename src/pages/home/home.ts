import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { ArenaDetailsComponent } from '../arena-details/arena-details';
import { ArenaDataProvider } from '../../providers/arena-data/arena-data';
import { NavController, Events, LoadingController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { arenaObject } from './model/arenaObject';
import { AngularFireAuth } from 'angularfire2/auth';
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
    //this.loading.present();
    //this.arenasEmptyDatabase = false;
      this.arenasDB = this.database.list('/arenas');
      this.arenasDB.$ref.orderByChild("listaArenas").once("child_added", function(snapshot) {
        console.log(snapshot.key + " was " + snapshot.val().listaArenas + " meters tall");
      });
      if (this.arenas.length <= 0) {

        console.log("Hago la petición");
        arenaData.getArenas()
          .then(arenaList => {
            this.arenas = arenaList;
            this.saveDataBase(this.arenas);
           /* platform.ready().then(() => {
              this.nativeStorage.setItem('Arenas', { property: this.arenas })
              .then(
              () => console.log('Stored item!'),
              error => console.error('Error storing item', error)
              );
            });*/
           /* this.nativeStorage.getItem('Arenas')
            .then(
              data => console.log(data),
              error => console.error(error)
            );*/
            /*var update={};
            update['newTitle'] = arenaList; */
            //if (this.arenasEmptyDatabase)
              //this.saveDataBase(arenaList);
            console.log("Arenas" + this.arenas[0]);
            //   this.loading.dismiss();
          })
          .catch(err => {
            // Handle error
            console.log("holiii" + err.message + "  " + err.code);
            this.presentToast(err.message);
          });
      }
   

    /*if (this.arenasDB != null) {
      this.arenasDB.$ref.once("value", (snapshot) => {
        this.arenasEmptyDatabase = true;
        
        if (snapshot != null) {
          snapshot.forEach((childSnapshot) => {
            var key = childSnapshot.key;
            this.arenas = childSnapshot.val().arenaList;
            console.log('Arenas bbdd ' + this.arenas);
            this.arenasEmptyDatabase = true;
            return false
            
          });
        }
      })
    }*/
    /*this.database.list('/arenas', { preserveSnapshot: true })
    .subscribe(snapshots => {
      if (snapshots[0] != null && this.arenas.length <= 0) {
        console.log("Key " + snapshots[0].key, "Value " + snapshots[0].val());
        this.arenas = snapshots[0].val().arena;
      }
    });*/
    
  }

  goArenaDetails(arena) {
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

  saveDataBase(listArena) {
    this.arenasDB.push( {listaArenas:listArena} );
    this.arenasEmptyDatabase = false;
  }
}







