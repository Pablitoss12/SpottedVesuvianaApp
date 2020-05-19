import { Component } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tabsLabelHome = 'Home';
  tabsLabelInfo = 'Info';
  tabsLabelServizi = 'Servizi';
  condizione = '2';
}
