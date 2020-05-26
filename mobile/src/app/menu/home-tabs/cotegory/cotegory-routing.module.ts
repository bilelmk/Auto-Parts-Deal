import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotegoryPage } from './cotegory.page';

const routes: Routes = [
  {
    path: '',
    component: CotegoryPage,
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotegoryPageRoutingModule {}
