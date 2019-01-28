import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() cardItems: any[] = [];
  @Input() listName: string;

  constructor() { }

  ngOnInit() {
  }

  navigateTo(cardItem:string):string {
    return `/tabs/(card:card/${this.listName}/${cardItem})`;
  }

}
