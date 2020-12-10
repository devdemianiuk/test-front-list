import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfferContainerComponent} from './components/offer-container/offer-container.component';
import {offerReducer} from './state/reducer';
import {StoreModule} from '@ngrx/store';
import {FilterComponent} from './components/filter/filter.component';
import {MaterialModule} from '../shared/material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {OffersListComponent} from './components/offers-list/offers-list.component';
import {OfferItemComponent} from './components/offer-item/offer-item.component';


@NgModule({
  declarations: [OfferContainerComponent, FilterComponent, OffersListComponent, OfferItemComponent],
  exports: [
    OfferContainerComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('offer', offerReducer),
    HttpClientModule,
    MaterialModule
  ]
})
export class OfferModule {
}
