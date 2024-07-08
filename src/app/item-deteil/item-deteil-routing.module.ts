import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDeteilPage } from './item-deteil.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDeteilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDeteilPageRoutingModule {}
