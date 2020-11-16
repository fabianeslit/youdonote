import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteupdatemodalPage } from './noteupdatemodal.page';

const routes: Routes = [
  {
    path: '',
    component: NoteupdatemodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteupdatemodalPageRoutingModule {}
