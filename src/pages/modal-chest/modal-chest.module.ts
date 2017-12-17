import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalChestPage } from './modal-chest';

@NgModule({
  declarations: [
    ModalChestPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalChestPage),
  ],
})
export class ModalChestPageModule {}
