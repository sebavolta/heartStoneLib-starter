import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CardService } from '../../shared/card.service';
import { CardItem } from "../../shared/card.model";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {
  private cardDeckGroup: string;
  private cardItem:string;
  private cards: CardItem[] = [];
  private loader: any;

  constructor(private actRoute: ActivatedRoute, 
              private cardService: CardService,
              private loadingCtrl: LoadingController) { }

  async presentLoading() {
    const loader = await this.loadingCtrl.create({
      content: 'Loading...',
      translucent: true
    });
    loader.present()
    return loader;
  }

  
  async ionViewWillEnter() {
    this.loader = await this.presentLoading();
    this.actRoute.params.subscribe(data => {
      this.cardDeckGroup = data.cardDeckGroup;
      this.cardItem = data.cardItem;
    })

    this.cardService.getCardsByDeck(this.cardDeckGroup,this.cardItem).subscribe(
      (cards: CardItem[]) => {
        this.cards = cards.map((card:CardItem) => {
         card.text = this.cardService.replaceTextLine(card.text);
         return card;
      })
      this.loader.dismiss();
    }
    )
   

    
  }

}
