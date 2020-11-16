import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotemodalPageRoutingModule } from './notemodal-routing.module';

import { NotemodalPage } from './notemodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotemodalPageRoutingModule
  ],
  declarations: [NotemodalPage]
})
export class NotemodalPageModule {}
