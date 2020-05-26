import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.page.html',
  styleUrls: ['./products-filter.page.scss'],
})
export class ProductsFilterPage implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss()
  }
}
