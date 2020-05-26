import { Component } from '@angular/core';
import {CartPage} from '../cart/cart.page';
import {ModalController} from '@ionic/angular';
import {NotificationPage} from '../notification/notification.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController : ModalController) {}

  async openCart(){
    const modal = await this.modalController.create({
      component: CartPage ,
    });
    return await modal.present();
  }

  async openNotification(){
    const modal = await this.modalController.create({
      component: NotificationPage ,
    });
    return await modal.present();
  }
}
