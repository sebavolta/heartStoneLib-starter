import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader: any;
  //loader: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) { }

  public async presentLoader() {
    this.loader = await this.loadingCtrl.create({
      content: 'Loading...',
      translucent: true
    });
    this.loader.present();
  }

  public dismissLoading() {
    if(this.loader) {
      this.loader.dismiss();
    }
  }
}
