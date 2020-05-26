import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderFilterPage } from './order-filter/order-filter.page';
import { CartPage } from '../cart/cart.page';
import { NotificationPage } from '../notification/notification.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  selectedSegment = "commandes" ;

  constructor(private modalController : ModalController , private router : Router) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.selectedSegment = ev.detail.value ;
  }

  async presentFilterModal() {
    const modal = await this.modalController.create({
      component: OrderFilterPage,
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
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

  getOrder() {
    this.router.navigate(['/menu/home-tabs/orders/order'])
  }

}
