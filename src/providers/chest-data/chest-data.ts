import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ChestDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChestDataProvider {
  data: any = null;
  page: number = 0;
  constructor(public http: Http) {
    console.log('Hello ChestDataProvider Provider');
  }
  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
   /* if (this.dataJson) {
      
      return Promise.resolve(this.dataJson);
    }*/
    return new Promise(resolve => {
      this.http.get('https://clashapi.now.sh/api/random-deck', "")
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getChest() {
    return this.load().then(data => {
      return data;
    })
  }
}
