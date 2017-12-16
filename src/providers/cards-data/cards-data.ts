import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CardDataProvider {

  data: any = null;
  page: number = 0;
  idCards: any = [];
  id: String = "";
  constructor(public http: Http) {
    console.log('Hello CardDataProvider Provider');
  }

  public load(id: String) {
    console.log("Entramos a pedir las cartas");
    return new Promise(resolve => {
      this.http.get('https://clashapi.now.sh/api/cards/' + id, "")
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          console.log("Información de la carta para el id " + id + " " + this.data.name);
          resolve(this.data);
        });
    });

  }
  getCardsInfo(idCard: any) {
    this.idCards = idCard;
    console.log("Id " + idCard);
    return this.load(idCard).then(data => {
      return data;
    })
  }
}