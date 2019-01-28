import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardItem } from "../../shared/card.model";
import { CardService } from '../../shared/card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage  {
  private cardId:string = '';
  private card: CardItem;

  constructor(private actRoute: ActivatedRoute,
              private cardService: CardService) { }

  ionViewWillEnter() {
    this.actRoute.params.subscribe(
      (data) => {this.cardId = data.cardDetail}
    )

    this.cardService.getCardById(this.cardId).subscribe(
      (card: CardItem[]) => this.card = card[0]
    )
  }

  updateImg($event) {
    this.card.img = '/assets/images/DefaultCard.png';
  }

}
