import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//10/ In service, we'll keep just API calls
@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  public getProducts() {
    return this.http.get('/assets/products.json')
      .map(res => res.json());
  }
}
