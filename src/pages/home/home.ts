import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { ArenaDetailsComponent } from '../arena-details/arena-details';
import { ArenaDataProvider } from '../../providers/arena-data/arena-data';
import { NavController,Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arenas: Array<Object> = [];
  backcolor: string = "#dddddd";

  constructor( public events: Events,public navCtrl: NavController, public arenaData: ArenaDataProvider) {
    
    arenaData.getArenas().then(arenaList => {
      this.arenas = arenaList;
      console.log("Arenas" + this.arenas[0]);

    })

  }
  goRestaurantDetails(arena) {
    this.navCtrl.push(ArenaDetailsComponent, { arenaData: arena 
    });
    
  }
}







