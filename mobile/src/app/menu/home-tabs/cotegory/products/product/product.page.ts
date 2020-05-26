import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss()
  }
}
