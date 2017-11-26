import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArenaDataProvider {

  data: any = null;
  page: number = 0;
  constructor(public http: Http) {
    console.log('Hello ArenaDataProvider Provider');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('https://www.clashapi.xyz/api/arenas', "")
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
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