import { Component, OnInit } from '@angular/core';
import {CardService} from '../shared/card.service';
import { Card } from '../shared/card.model';

@Component({
  selector: 'app-cards-deck',
  templateUrl: './cards-deck.page.html',
  styleUrls: ['./cards-deck.page.scss'],
})
export class CardsDeckPage implements OnInit {

  private allowed_cards = ['classes','factions', 'qualities','types','races'];
  private cards:Card[] = [];
 
  constructor(private cardService:CardService) {}

  ngOnInit() {
    this.getCards();
  } 

  getCards() {
    this.cardService.getAllCards().subscribe(
       (cards:Card[]) =>  {
         this.extractAllowedCards(cards)
        }
    )
  } 

  extractAllowedCards(cards: Card[]) {
    this.allowed_cards.forEach((cardName:string) => this.cards.push({name: cardName, types: cards[cardName]}))
  }

  /*generateUrl(cardDeckGroup:string, cardList:string):string {
    return `/tabs/(card:card/${cardDeckGroup}/${cardList})`
  }*/

}
