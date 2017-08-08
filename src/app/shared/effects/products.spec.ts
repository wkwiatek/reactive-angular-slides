import { ProductsEffects } from './products';
import { Observable } from 'rxjs/Observable';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { asyncGetProducts } from '../actions/products';
import { ProductsService } from "../services/products.service";

describe('[Effects]', () => {
  let effects: ProductsEffects;
  let actions$: Observable<any>;
  let productsService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsEffects,
        provideMockActions(() => actions$),
        {
          provide: ProductsService,
          useValue: jasmine.createSpyObj('ProductsService', ['getProducts']),
        },
      ],
    });

    effects = TestBed.get(ProductsEffects);
    productsService = TestBed.get(ProductsService);
  });

  it('should work', () => {
    const initAction = asyncGetProducts.init();
    const products = [{
      id: 0,
      name: 'async test',
      price: 100
    }];
    const completeAction = asyncGetProducts.success(products);

    actions$ = hot('-a---', { a: initAction });
    const response = cold('---b|', { b: products });
    const expected = cold('----c', { c: completeAction });

    productsService.getProducts.and.returnValue(response);

    expect(effects.getProducts$).toBeObservable(expected);
  });

});
