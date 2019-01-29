import { Component } from '@angular/core';
import { StorageService } from '../shared/storage.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {
  private favCardsArray = [];

  constructor(private storageSrv:StorageService) { }

  
  ionViewWillEnter() {
    this.storageSrv.getStorageItems().then((favCards) => {
      this.favCardsArray = Object.keys(favCards).map((card) => favCards[card]);
      console.log(this.favCardsArray)
    })
  }


}
