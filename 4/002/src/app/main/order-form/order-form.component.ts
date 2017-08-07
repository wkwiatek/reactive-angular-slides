import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../shared/models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Input() products: IProduct[];
  @Output() orderSubmit = new EventEmitter();

  // Definition of a form
  public orderForm: FormGroup;
  // form submit can be initialized with false using BehaviorSubject
  public formSubmit$ = new BehaviorSubject(false);
  public checkAsyncErrors$;

  // Form builder to create a reactive form
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    //4/ Initialize a form
    this.orderForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      product: ['', Validators.required]
    });

    //3/ Let's test some async error
    this.checkAsyncErrors$ = this.orderForm.valueChanges
      .debounceTime(1000)
      .switchMap(() => of({error: 'Some async error!'}));

    //4/ Stream of submits
    this.formSubmit$
      .withLatestFrom(this.orderForm.valueChanges, (_, values) => values)
      .filter(() => !this.orderForm.invalid)
      .subscribe((values) => this.orderSubmit.next(values));
  }

}
