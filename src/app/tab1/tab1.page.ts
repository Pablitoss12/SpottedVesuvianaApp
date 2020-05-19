import { Component } from '@angular/core';
import { Utility } from '../services/utility';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  prova: string;
  url: string;
  today = Date.now();
  visible = false;
  users = ['user1' , 'user2' , 'user3'];

  constructor(utils: Utility) {

  }

  clickHandler() {
    console.log(this.prova);
  }
  clickHandlerButton() {
    this.visible = false;
  }
  inputHandler(value) {
    this.prova = value;
    console.log(this.prova);
  }

  load() {
    this.url = 'https://angular.io/assets/images/logos/angular/angular.png';
  }
}
