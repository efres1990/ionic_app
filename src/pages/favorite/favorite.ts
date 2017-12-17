import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { ItemSliding } from 'ionic-angular';

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  favoriteDB: FirebaseListObservable<any>;
  favorite: Array<Object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public database: AngularFireDatabase) {

  }
  eliminarTarea(slidingItem: ItemSliding, card) {
    this.favoriteDB.remove(card.$key);
    this.removePost(card);
    
    slidingItem.close()
  }
  ionViewDidLoad() {

    console.log('ionViewDidLoad FavoritePage');
  }

  ionViewWillEnter() {
    this.favorite = [];
    this.favoriteDB = this.database.list('/favorite');
    this.favoriteDB.$ref.once("value", (snapshot) => {

      if (snapshot != null) {
        snapshot.forEach((childSnapshot) => {
          var key = childSnapshot.key;
          this.favorite.push(childSnapshot.val());
          console.log('Favoritos bbdd ' + this.favorite);
          return false

        });
      }

    });
  }

  removePost(post){
    let index = this.favorite.indexOf(post);

    if(index > -1){
      this.favorite.splice(index, 1);
    }
}
}
