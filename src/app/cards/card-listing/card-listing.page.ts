import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CardService } from '../../shared/card.service';
import { CardItem } from "../../shared/card.model";
import { LoaderService } from '../../shared/loader.service';
import { ToastService } from '../../shared/toast.service';
import { StorageService } from '../../shared/storage.service';


@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {
  private cardDeckGroup: string;
  private cardItem:string;
  private cards: CardItem[] = [];
  private copyOfCards: CardItem[] = [];
  private loader: any;
  private isLoadingSearch: boolean = false;
  private favoriteCards: any = {};
  //private storeSubscription: Subscription;

  constructor(private actRoute: ActivatedRoute, 
              private cardService: CardService,
              private loaderSrv: LoaderService,
              private toastSrv: ToastService,
              private storageSrv:StorageService) { 
  }

   
   private getCards() {
      this.loaderSrv.presentLoader();
      this.cardService.getCardsByDeck(this.cardDeckGroup,this.cardItem).subscribe(
      (cards: CardItem[]) => {
        this.cards = cards.map((card:CardItem) => {
         card.text = this.cardService.replaceTextLine(card.text);
         card.favorite = this.isCardFavorite(card.cardId);
         return card;
      })
      this.copyOfCards = Array.from(this.cards);
      this.loaderSrv.dismissLoading();
    },(error) => {
      this.toastSrv.presentToast('Error loading data');
      this.loaderSrv.dismissLoading();
    })
   }
   
  ionViewWillEnter() {
    this.actRoute.params.subscribe(data => {
      this.cardDeckGroup = data.cardDeckGroup;
      this.cardItem = data.cardItem;
    })
    this.storageSrv.getStorage();
    this.getCards();
  }

  doRefresh($event) {
    $event.target.complete()
  }

  listSearchCards(cards: CardItem[]) {
    this.cards = cards;
    this.isLoadingSearch = false;
  }

  searchStarted() {
    this.isLoadingSearch = true;
  }

  favoriteCard(card: CardItem) {
    this.storageSrv.setStorage(card);
  }

  isCardFavorite(cardId:string):boolean {
    return this.storageSrv.favoriteCards[cardId];
  }
}
