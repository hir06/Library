import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {NgrxHelperModule} from 'ngrx-helpers';
import {rootReducers, metaReducers} from './_store/meta-reducers';
import {FEATURE} from './_store/features';
import {appReducers} from './_store/app-reducers';
import {appEffects} from './_store/app-effects';
import {HttpClientModule} from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import { HeaderComponent } from './header/header.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule }   from '@angular/forms';
import { BookComponent } from './book/book.component';
import { GetWidthPipe } from './utils/lib.pipes';
import { MyBooksComponent } from './my-books/my-books.component'
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    AddBookComponent,
    BookComponent,
    GetWidthPipe,
    MyBooksComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducers, { metaReducers }),
    StoreModule.forFeature(FEATURE.APP, appReducers),
    EffectsModule.forRoot(appEffects),
    NgrxHelperModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store DevTools',
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
