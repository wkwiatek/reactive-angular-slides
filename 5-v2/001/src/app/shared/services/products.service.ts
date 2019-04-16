import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//9/ In service, we'll keep just API calls
@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get('/assets/products.json');
  }
}
