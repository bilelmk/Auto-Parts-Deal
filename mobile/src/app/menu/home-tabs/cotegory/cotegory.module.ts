import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CotegoryPageRoutingModule } from './cotegory-routing.module';
import { CotegoryPage } from './cotegory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotegoryPageRoutingModule
  ],
  declarations: [CotegoryPage]
})
export class CotegoryPageModule {}
