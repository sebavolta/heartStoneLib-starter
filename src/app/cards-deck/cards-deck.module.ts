import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from "@angular/common/http";

import { CardsDeckPage } from './cards-deck.page';
import {CardService} from '../shared/card.service';
import { CardListComponent } from "../components/card-list/card-list.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: CardsDeckPage }])
  ],
  providers: [
    CardService,
  ],
  declarations: [
    CardsDeckPage,
    CardListComponent,
  ]
})
export class CardsDeckPageModule {}
