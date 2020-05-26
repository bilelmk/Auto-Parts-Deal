import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        redirectTo: 'home-tabs',
        pathMatch: 'full'
      },
      {
        path: 'home-tabs',
        loadChildren: () => import('./home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'rate',
        loadChildren: () => import('./rate/rate.module').then(m => m.RatePageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'subscriptions',
        loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsPageModule)
      },
      {
        path: 'expert',
        loadChildren: () => import('./expert/expert.module').then(m => m.ExpertPageModule)
      },
      {
        path: 'promo',
        loadChildren: () => import('./promo/promo.module').then(m => m.PromoPageModule)
      },
      {
        path: 'wish-list',
        loadChildren: () => import('./wish-list/wish-list.module').then(m => m.WishListPageModule)
      },
      {
        path: 'chats',
        loadChildren: () => import('./chats/chats.module').then(m => m.ChatsPageModule)
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
