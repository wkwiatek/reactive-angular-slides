import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../shared/reducers';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let store: Store<IState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      //4/ Mock store and dispatch, select functions
      providers: [{
        provide: Store,
        useValue: jasmine.createSpyObj('Store', ['dispatch', 'pipe']),
      }],
      // Tells the compiler not to error on unknown elements and attributes aka shallow render
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action when encountered buy click event', () => {
    component.handleBuyProduct('id');
    expect(store.dispatch).toHaveBeenCalled();
  });
});
