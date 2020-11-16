import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotemodalPage } from './notemodal.page';

const routes: Routes = [
  {
    path: '',
    component: NotemodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotemodalPageRoutingModule {}
