import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsFilterPage} from './products/products-filter/products-filter.page';
import {ModalController} from '@ionic/angular';
import {CartPage} from '../cart/cart.page';
import {NotificationPage} from '../notification/notification.page';

@Component({
  selector: 'app-cotegory',
  templateUrl: './cotegory.page.html',
  styleUrls: ['./cotegory.page.scss'],
})
export class CotegoryPage implements OnInit {

  constructor(private router : Router , private modalController : ModalController) { }

  ngOnInit() {
  }

  getProducts() {
    this.router.navigate(['/menu/home-tabs/category/products']) ;
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
