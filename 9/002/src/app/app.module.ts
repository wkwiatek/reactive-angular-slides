import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './main/products/products.component';
import { ProductComponent } from './main/products/product/product.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './shared/reducers';
import { OrderFormComponent } from './main/order-form/order-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './shared/effects/products';
import { ProductsService } from './shared/services/products.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ProductsResolver } from "./shared/resolvers/products.resolver";
import { logger } from './shared/reducers/logger.meta';
import { localStorageSyncReducer } from './shared/reducers/localstorage.meta';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsComponent,
    ProductComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    //3/ Add new meta reducer
    StoreModule.forRoot(reducers, {
      metaReducers: [logger, localStorageSyncReducer]
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ReactiveFormsModule,
    HttpModule,
    EffectsModule.forRoot([ProductsEffects]),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    ProductsService,
    ProductsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
