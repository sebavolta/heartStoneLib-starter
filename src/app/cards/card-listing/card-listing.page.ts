import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CardService } from '../../shared/card.service';
import { CardItem } from "../../shared/card.model";
import { LoadingController } from "@ionic/angular";
import { LoaderService } from '../../shared/loader.service';
import { ToastService } from '../../shared/toast.service';

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
              private loaderSrv: LoaderService,
              private toastSrv: ToastService) { }

   
   private getCards() {
  //  if(this.cards && this.cards.length === 0) {
      this.loaderSrv.presentLoader();
      this.cardService.getCardsByDeck(this.cardDeckGroup,this.cardItem).subscribe(
      (cards: CardItem[]) => {
        this.cards = cards.map((card:CardItem) => {
         card.text = this.cardService.replaceTextLine(card.text);
         return card;
      })
      this.loaderSrv.dismissLoading();
    },(error) => {
      this.toastSrv.presentToast('Error loading data');
      this.loaderSrv.dismissLoading();
    })
    //} else {
      //this.loaderSrv.dismissLoading();
    //}

   }
   
  ionViewWillEnter() {
    this.actRoute.params.subscribe(data => {
      this.cardDeckGroup = data.cardDeckGroup;
      this.cardItem = data.cardItem;
    })
    this.getCards();
  }

  doRefresh($event) {
    $event.target.complete()
  }

}
