import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GamePage } from '../game/game';
import { AboutPage } from '../about/about';
import { FavoritePage } from '../favorite/favorite';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {  
  
  tab1Root = HomePage;
  tab2Root = GamePage;
  tab3Root = FavoritePage;  
  tab4Root = AboutPage;

  constructor() {
  }
}
