import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtr: AlertController) { }

  async presentAlert(msg:string) {
    const alert = await this.alertCtr.create({
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }


}
