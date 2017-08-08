import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routes';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './reducers/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    // Store module has also option to add for specific module
    StoreModule.forFeature('login', loginReducer)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
