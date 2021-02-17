import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriePage } from './favorie.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriePageRoutingModule {}
