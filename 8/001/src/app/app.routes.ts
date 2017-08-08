import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductsResolver } from './shared/resolvers/products.resolver';

export const routes: Routes = [{
  path: '',
  component: MainComponent,
  resolve: {
    productsAction: ProductsResolver
  }
}];
