import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsFilterPage } from './products-filter/products-filter.page';
import { Router } from '@angular/router';
import { ProductPage } from './product/product.page';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private modalController : ModalController , private router : Router) { }

  ngOnInit() {
  }

  async openFilter() {
    const modal = await this.modalController.create({
      component: ProductsFilterPage,
    });
    return await modal.present();
  }

  getProduct() {
    this.router.navigate(['/menu/home-tabs/category/products/product']) ;
  }

}
