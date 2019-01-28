import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardItem } from "../../shared/card.model";
import { CardService } from '../../shared/card.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage  {
  private cardId:string = '';
  private card: CardItem;
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
    this.actRoute.params.subscribe(
      (data) => {this.cardId = data.cardDetail}
    )

    this.cardService.getCardById(this.cardId).subscribe(
      (card: CardItem[]) => {
        this.card = card[0];
        this.card.text = this.cardService.replaceTextLine(this.card.text);
        this.loader.dismiss();
      }
    )
  }

  updateImg($event) {
    this.card.img = '/assets/images/DefaultCard.png';
  }

}
