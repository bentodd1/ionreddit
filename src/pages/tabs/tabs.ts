import { Component } from '@angular/core';

import { RedditsPage } from '../reddits/reddits';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RedditsPage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
