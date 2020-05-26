import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModeConfigurationPage } from './mode-configuration/mode-configuration.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss()
  }

  async openConfiguration() {
    const modal = await this.modalController.create({
      component: ModeConfigurationPage,
    });
    return await modal.present();
  }
}
