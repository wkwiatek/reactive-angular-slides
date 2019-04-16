import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './main/products/products.component';
import { ProductComponent } from './main/products/product/product.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './shared/reducers';
import { StoreModule } from '@ngrx/store';
import { OrderFormComponent } from './main/order-form/order-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './shared/services/products.service';
import { ProductsEffects } from './shared/effects/products';

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
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([ProductsEffects])
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
