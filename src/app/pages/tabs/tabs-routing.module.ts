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
      {
        path: 'news',
        loadChildren: () => import('../../pages/news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'interest',
        loadChildren: () => import('../../pages/interest/interest.module').then( m => m.InterestPageModule)
      },
      {
        path: 'article',
        loadChildren: () => import('../../pages/article/article.module').then( m => m.ArticlePageModule)
      },
      {
        path: 'favorie',
        loadChildren: () => import('../../pages/favorie/favorie.module').then( m => m.FavoriePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../../pages/search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'edit-profile',
        loadChildren: () => import('../../pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
      }
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
