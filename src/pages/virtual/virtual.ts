import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-virtual',
  templateUrl: 'virtual.html',
})
export class VirtualPage {
  cards = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    for(let i =0;i<1000000;i++){
      this.cards.push({});
    }
  }

}
