import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CartPage} from '../cart/cart.page';
import {NotificationPage} from '../notification/notification.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(private modalController : ModalController) {}

  ngOnInit() {
  }

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
