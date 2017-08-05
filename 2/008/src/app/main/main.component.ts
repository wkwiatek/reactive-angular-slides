import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public products: IProduct[] = [{
    id: 0,
    name: 'coffee',
    price: 2.05
  }, {
    id: 1,
    name: 'apple',
    price: 0.95
  }];

  // Subject is both Observable and Observer so it can emit value and you can subscribe to it
  public toggleButtonClick$ = new Subject();
  // stream of states
  public counterState$: Observable<boolean>;
  // stream of strings representing states
  public counterStateDisplay$: Observable<string>;
  // timer stream
  public timer$ = Observable.interval(1000).timeInterval();
  // the actual counter
  public counter$: Observable<number>;

  ngOnInit() {
    //3/ Based on clicks we can define how the counter state depends on it
    this.counterState$ = this.toggleButtonClick$
      .startWith(true)
      .scan(state => !state);

    //2/ We can say how display depends on the actual state
    this.counterStateDisplay$ = this.counterState$
      .map(state => state ? 'on' : 'off');

    this.counter$ = this.timer$
      .map(x => x.value) // map timer to get value
      .startWith(10) // start counting from 10
      .withLatestFrom(this.counterState$) // take also the state
      .filter(([, state]) => !!state) // move on only when it's 'on'
      .map(([x, state]) => x) // forget about state
      .scan(x => x ? x - 1 : 0); // decrement down to 0
  }

  public handleBuyProduct(id: number | string) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
