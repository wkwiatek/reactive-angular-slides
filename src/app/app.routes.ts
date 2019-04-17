import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductsResolver } from './shared/resolvers/products';

export const routes: Routes = [{
  path: '',
  component: MainComponent,
  //3/ Let's add resolver to wait until products are loaded
  resolve: {
    productsAction: ProductsResolver
  }
}];
