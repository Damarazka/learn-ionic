import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDeteilPageRoutingModule } from './item-deteil-routing.module';

import { ItemDeteilPage } from './item-deteil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDeteilPageRoutingModule
  ],
  declarations: [ItemDeteilPage]
})
export class ItemDeteilPageModule {}
