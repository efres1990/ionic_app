import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

import 'rxjs/add/operator/map';

@Injectable()
export class ArenaDataProvider {

  data: any = null;
  page: number = 0;
  dataJson: FirebaseListObservable<any>;

  constructor(public http: Http, public database: AngularFireDatabase) {
    console.log('Hello ArenaDataProvider Provider');
    //this.dataJson = this.database.list('json');
    
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
   /* if (this.dataJson) {
      
      return Promise.resolve(this.dataJson);
    }*/
    return new Promise(resolve => {
      this.http.get('https://clashapi.now.sh/api/arenas', "")
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          //this.dataJson.push(data);
          resolve(this.data);
        });
    });
  }

  getArenas() {
    return this.load().then(data => {
      return data;
    })
  }
}