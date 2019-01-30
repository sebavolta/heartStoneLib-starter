import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardItem } from "../../shared/card.model";
import { CardService } from '../../shared/card.service';
import { LoadingController } from '@ionic/angular';
import { LoaderService } from '../../shared/loader.service';
import { ToastService } from '../../shared/toast.service';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage  {
  private cardId:string = '';
  private card: CardItem;

  constructor(private actRoute: ActivatedRoute,
              private cardService: CardService,
              private loaderSrv: LoaderService,
              private toastSrv: ToastService,
              private alertSrv: AlertService ) { }



  private getCard() {
    this.cardService.getCardById(this.cardId).subscribe(
      (card: CardItem[]) => {
        this.card = card[0];
        this.card.text = this.cardService.replaceTextLine(this.card.text);
        this.loaderSrv.dismissLoading();       
      },(error) => {
        this.toastSrv.presentToast('Error loading data');
        this.alertSrv.presentAlert('Error loading data');
        this.loaderSrv.dismissLoading();
      })
  }

  async ionViewWillEnter() {
    await this.loaderSrv.presentLoader()
    this.actRoute.params.subscribe(
      (data) => {this.cardId = data.cardDetail}
    )
    this.getCard();
  }

  updateImg($event) {
    this.card.img = '/assets/images/DefaultCard.png';
  }

}
