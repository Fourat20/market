import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriePageRoutingModule } from './favorie-routing.module';

import { FavoriePage } from './favorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriePageRoutingModule
  ],
  declarations: [FavoriePage]
})
export class FavoriePageModule {}
