import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-order-filter',
  templateUrl: './order-filter.page.html',
  styleUrls: ['./order-filter.page.scss'],
})
export class OrderFilterPage implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  dismiss() {
      this.modalController.dismiss()
  }
}
