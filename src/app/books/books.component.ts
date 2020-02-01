import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { APP_REDUCERS } from '../_store/app-reducers';
import { FEATURE } from '../_store/features';
import { Store } from '@ngrx/store';
import { NgrxStoreSubscription, DATA_STATE } from 'ngrx-helpers';
import { Book } from '../add-book/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent extends NgrxStoreSubscription implements OnInit {
  data: any = [];
  filterData: any =[];
  cols: any = [];
  dataState: string = DATA_STATE.RESOLVING;
  updateBookID : number;
  filterText:string = '';
  isEditable : boolean = false;
  model : Book = new Book();
  @ViewChild('test',{static:false}) test: ElementRef; 

  constructor(private store: Store<any>, private ngZone: NgZone) {
    super(store);
   }

  ngOnInit() {
          super.getState({
            feature: FEATURE.APP,
            reducer: APP_REDUCERS.APP_DATA,
            state: 'surveyData'
            }).subscribe((data) => {
              this.dataState = data.state;
              if(this.dataState  == 'RESOLVED') {
                this.data = data.data;
                this.filterData = data.data;
                this.cols = Object.keys(this.data[0]);
              }
            });
  }
  filters(text) {
    let newData;
    newData = text ? newData = this.data.filter((d) => d.name.includes(text)) : this.data;
    this.filterData = newData;
    }
 

}
