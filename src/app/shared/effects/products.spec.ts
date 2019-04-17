import { ProductsEffects } from './products';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { asyncGetProducts } from '../actions/products';
import { ProductsService } from "../services/products.service";

describe('[Effects]', () => {
  //3/ Here we can define helpers that will be needed across tests
  let effects: ProductsEffects;
  let actions$: Observable<any>;
  let productsService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // First, effects that we're about to test
        ProductsEffects,
        // Mock actions
        provideMockActions(() => actions$),
        //4/ Mocked service (the one that is calling API)
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
    //7/ Action that initializes effect, and the one that's expected to be dispatched
    const initAction = asyncGetProducts.init();
    const products = [{
      id: 0,
      name: 'async test',
      price: 100
    }];
    const completeAction = asyncGetProducts.success(products);

    //3/ Marbles for action, response, and expected value
    actions$ = hot('-a---', { a: initAction });
    const response = cold('---b|', { b: products });
    const expected = cold('----c', { c: completeAction });

    // Value to respond with
    productsService.getProducts.and.returnValue(response);

    // Eventually, the check
    expect(effects.getProducts$).toBeObservable(expected);
  });

});
