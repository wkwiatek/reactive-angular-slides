import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routes';
import { RouterModule } from '@angular/router';
import { loginReducer } from './reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    StoreModule.forFeature('login', loginReducer)
  ]
})
export class LoginModule { }
