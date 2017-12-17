import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArenaDetailsComponent } from './arena-details';

@NgModule({
  declarations: [
    ArenaDetailsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ArenaDetailsComponent),
  ]
})
export class ArenaDetailsPageModule {}