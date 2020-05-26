import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mode-configuration',
  templateUrl: './mode-configuration.page.html',
  styleUrls: ['./mode-configuration.page.scss'],
})
export class ModeConfigurationPage implements OnInit {

  selectedSegment = "card" ;


  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss() ;
  }


  segmentChanged(ev: any) {
    this.selectedSegment = ev.detail.value ;
  }

    test(element) {
        console.log(element)
    }
}
