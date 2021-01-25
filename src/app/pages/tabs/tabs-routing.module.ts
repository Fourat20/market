import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../../pages/home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: 'categorie',
        loadChildren: () => import('../categorie/categorie.module').then( m => m.CategoriePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'seller',
        loadChildren: () => import('../seller/seller.module').then( m => m.SellerPageModule)
      },
      {
        path: 'game',
        loadChildren: () => import('../../pages/game/game.module').then( m => m.GamePageModule)
      },
    ]
  },
  {
    path:'',
    redirectTo:'tabs/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
