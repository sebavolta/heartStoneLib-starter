import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() filterProperty: string = '';
  
  @Output() searchCompleted = new EventEmitter();
  @Output() searchStarted = new EventEmitter();

  private searchSubject = new BehaviorSubject('');


  handleSearch($event) {
    this.searchStarted.emit();
    this.searchSubject.next($event.target.value);
 }

 ngOnInit() {
  this.searchSubject.pipe(debounceTime(500),distinctUntilChanged()).subscribe((searchText) => {
    if(!this.items) return this.searchCompleted.emit([]);
    if(!searchText) return this.searchCompleted.emit(this.items);

    const filteredItems = this.items.filter((item) => {
      return item[this.filterProperty].toLowerCase().includes(searchText.toLowerCase());
    });
    this.searchCompleted.emit(filteredItems);
  })
 }

}
