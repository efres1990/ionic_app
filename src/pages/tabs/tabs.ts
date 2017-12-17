import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GamePage } from '../game/game';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {  
  
  tab1Root = HomePage;
  tab2Root = GamePage;
  tab3Root = AboutPage;

  constructor() {
  }
}
