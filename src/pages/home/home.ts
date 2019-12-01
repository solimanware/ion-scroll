import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VirtualPage } from '../virtual/virtual';
import { PhysicalPage } from '../physical/physical';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openPhysicalScroll(){
    this.navCtrl.push(PhysicalPage);
  }
  openVirtualScroll(){
    this.navCtrl.push(VirtualPage);
  }

}
