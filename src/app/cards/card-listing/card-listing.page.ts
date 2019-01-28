import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CardService } from '../../shared/card.service';
import { CardItem } from "../../shared/card.model";

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {
  private cardDeckGroup: string;
  private cardItem:string;
  private cards: CardItem[] = [];

  constructor(private actRoute: ActivatedRoute, 
              private cardService: CardService) { }

  
  ionViewWillEnter() {
    this.actRoute.params.subscribe(data => {
      this.cardDeckGroup = data.cardDeckGroup;
      this.cardItem = data.cardItem;
    })

    this.cardService.getCardsByDeck(this.cardDeckGroup,this.cardItem).subscribe(
      (cards: CardItem[]) => this.cards = cards.map((card:CardItem) => {
         card.text = this.cardService.replaceTextLine(card.text);
         return card;
      })
    )

  }

}
