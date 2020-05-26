import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTabsPage } from './home-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTabsPage ,
    children : [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersPageModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./cotegory/cotegory.module').then(m => m.CotegoryPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersPageModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTabsPageRoutingModule {}
