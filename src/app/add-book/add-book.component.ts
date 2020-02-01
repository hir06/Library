import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { Store } from '@ngrx/store';
import { APP_ACTIONS } from '../_store/app-actions';
import { NgrxStoreSubscription, DATA_STATE } from 'ngrx-helpers';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent extends NgrxStoreSubscription implements OnInit {
  dataState = DATA_STATE.RESOLVED;
  constructor(private store: Store<any>) {
    super(store);
   }

  ngOnInit() {
  }
  model = new Book(null, 'jj', 'GOT', 'Non-fictional','R.R.Martin', 45);

  submitted = false;

 onSubmit() { 
   this.submitted = true;
   this.dataState = DATA_STATE.RESOLVING;
        this.store.dispatch({
          type: APP_ACTIONS.ADD_BOOK_RESOLVED,
          payload: this.model
        });
   setTimeout(() => {
     alert('Book Added Successfully');
     this.dataState = DATA_STATE.RESOLVED;
   }, 1000);
}

}
