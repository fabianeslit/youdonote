import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteupdatemodalPageRoutingModule } from './noteupdatemodal-routing.module';

import { NoteupdatemodalPage } from './noteupdatemodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteupdatemodalPageRoutingModule
  ],
  declarations: [NoteupdatemodalPage]
})
export class NoteupdatemodalPageModule {}
