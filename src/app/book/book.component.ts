import { Component, OnInit, Input } from '@angular/core';
import {Book} from '../add-book/book'
import { Store } from '@ngrx/store';
import { APP_ACTIONS } from '../_store/app-actions';
import { NgrxStoreSubscription } from 'ngrx-helpers';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent extends NgrxStoreSubscription implements OnInit {
  updateBookID : number;
  filterText:string = '';
  isEditable : boolean = false;
  model : Book = new Book();
  @Input() row;
  @Input() cols;
  @Input() data;

  constructor(private store: Store<any>) { 
     super(store);
  }

  ngOnInit() {  
  }
 
updateBook(row,model) {
  const id = row.id;
  this.isEditable = this.updateBookID == id && this.isEditable ? false : true;
  this.updateBookID = id;
  this.model = new Book(row.id, row.name, row.desc, row.category,row.author, row.count);
  if(!this.isEditable && model.id) {
    this.store.dispatch({
      type: APP_ACTIONS.UPDATE_BOOK_DATA_RESOLVED,
      payload: model
    });
  } 
}
}
