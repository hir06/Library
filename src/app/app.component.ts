import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_ACTIONS } from './_store/app-actions';
import { NgrxStoreSubscription } from 'ngrx-helpers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends NgrxStoreSubscription implements OnInit{
  title = 'Library';
  tabIndex = 0;
  constructor(private store: Store<any>) {
    super(store);
   }
   ngOnInit() {
    this.store.dispatch({
      type: APP_ACTIONS.FETCH_BOOKS_DATA
    });
   }
  
}
