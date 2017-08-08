import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductsResolver } from './shared/resolvers/products.resolver';

//10/ Add login with loadChildren
export const routes: Routes = [{
  path: '',
  component: MainComponent,
  resolve: {
    productsAction: ProductsResolver
  },
}, {
  path: 'login',
  loadChildren: './login/login.module#LoginModule'
}];
