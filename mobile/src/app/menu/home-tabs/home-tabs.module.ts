import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeTabsPageRoutingModule } from './home-tabs-routing.module';
import { HomeTabsPage } from './home-tabs.page';
import { CartPage } from './cart/cart.page';
import { ModeConfigurationPage } from './cart/mode-configuration/mode-configuration.page';
import { NotificationPage } from './notification/notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTabsPageRoutingModule
  ],
  declarations: [ HomeTabsPage , CartPage , ModeConfigurationPage , NotificationPage] ,
  exports : [ CartPage , ModeConfigurationPage , NotificationPage]
})
export class HomeTabsPageModule {}
