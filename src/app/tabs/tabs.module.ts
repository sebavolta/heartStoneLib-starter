import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { CardsDeckPageModule } from '../cards-deck/cards-deck.module';
import { CardListingPageModule } from '../cards/card-listing/card-listing.module';
import { CardDetailPageModule } from '../cards/card-detail/card-detail.module';
import { FavoritesPageModule } from '../favorites/favorites.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    AboutPageModule,
    ContactPageModule,
    CardsDeckPageModule,
    CardListingPageModule,
    CardDetailPageModule,
    FavoritesPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
