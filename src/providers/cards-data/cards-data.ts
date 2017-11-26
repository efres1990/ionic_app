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
    /*if (this.data) {
      return Promise.resolve(this.data);
    }*/
    return new Promise(resolve => {
      this.http.get('https://www.clashapi.xyz/api/cards/' + id, "")
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          console.log("Información de la carta para el id " + id + " " + this.data.name);
          resolve(this.data);
        });
    });

  }
  //REVISAR
  getCardsInfo(idCard: any) {
    this.idCards = idCard;
    console.log("Id " + idCard);
    return this.load(idCard).then(data => {
      //console.log("Cartas solicitadas " + data[0].name);
      return data;
    })
  }
  /*var promises = [];
  for(var i = 0; i < 5; i++) {
    var promise = $http.get('/data' + i);
    promises.push(promise);
  }
  $q.all(promises).then(doSomethingAfterAllRequests);*/
  
  /*getCardsInfo(idCard: any): Promise<any> {
    let promises_array: Array<any> = [];
    this.idCards = idCard;
    console.log(this.idCards);
    for (let id of this.idCards) {
      promises_array.push(new Promise(function (resolve, reject) {
        this.load(id).then(data => {
          console.log("Cartas solicitadas " + data.length);
          return data;
        })
      }));
      return Promise.all(promises_array);
    }
  }*/
}