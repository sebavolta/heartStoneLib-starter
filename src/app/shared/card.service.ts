import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Card, CardItem} from './card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private URL = 'https://omgvamp-hearthstone-v1.p.mashape.com';
  private API_KEY = 'U5KbXqZYnTmshtENTu1e2as6FZLtp1fS2AtjsnKuBuJtj3Aj1v';
  private headers = new HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'X-Mashape-Key': this.API_KEY,
      'Accept': 'application/json'
    })
   }

 // private cards :string[] = ['Druid', 'Mage','Warrior','Rogue','Shaman','Priest','Warlock','Hunter','Paladin'];

  public getAllCards(): Observable<Card[]> {
    //return ObservableOf(this.cards);
    return this.http.get<Card[]>(`${this.URL}/info`,{headers: this.headers})
  }

  public getCardsByDeck(cardDeckGroup: string, cardDeck:string): Observable<CardItem[]> {
    return this.http.get<CardItem[]>(`${this.URL}/cards/${cardDeckGroup}/${cardDeck}`,{headers: this.headers})
  }

  public getCardById(cardId:string):Observable<CardItem[]>{
    return this.http.get<CardItem[]>(`${this.URL}/cards/${cardId}`,{headers: this.headers})
  }

}
