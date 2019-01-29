import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { CardItem } from './card.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public favoriteCards = {};
  constructor(private storage:Storage){}

  getStorage() {
    this.storage.get('favoriteCards').then((favoriteCards) => {
      this.favoriteCards = favoriteCards || {};
    })
  }

  getStorageItems() {
    return this.storage.get('favoriteCards').then((favoriteCards) => {
      return this.favoriteCards = favoriteCards || {};
    })
  }

  setStorage(card: CardItem) {
    if(card.favorite) {
      card.favorite = false;
      delete this.favoriteCards[card.cardId]
    } else {
      card.favorite = true;
      this.favoriteCards[card.cardId] = card;
    }
    this.storage.set('favoriteCards',this.favoriteCards).then(done => {
      console.log(done);
    })
  }

  isCardFavorite(cardId:string):boolean {
    return this.favoriteCards[cardId];
  }
}
