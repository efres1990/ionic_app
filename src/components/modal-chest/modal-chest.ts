import { Component } from '@angular/core';

/**
 * Generated class for the ModalChestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-chest',
  templateUrl: 'modal-chest.html'
})
export class ModalChestComponent {

  text: string;

  constructor() {
    console.log('Hello ModalChestComponent Component');
    this.text = 'Hello World';
  }

}
