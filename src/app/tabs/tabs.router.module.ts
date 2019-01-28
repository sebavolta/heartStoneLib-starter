import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

import { CardsDeckPage } from '../cards-deck/cards-deck.page';
import { CardListingPage } from '../cards/card-listing/card-listing.page';
import { CardDetailPage } from '../cards/card-detail/card-detail.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      {
        path: 'card', // path inside stack
        outlet: 'card', // stack
        component: CardsDeckPage
      },
      {
        path: 'card/:cardDeckGroup/:cardItem', // path inside card stack /:vars
        outlet: 'card',
        component: CardListingPage
      },
      {
        path: 'card/:cardDetail', // path inside card stack /:var
        outlet: 'card',
        component: CardDetailPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(card:card)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
