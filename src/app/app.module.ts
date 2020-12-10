import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OfferModule} from './offer/offer.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MaterialModule} from './shared/material/material.module';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OfferModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
