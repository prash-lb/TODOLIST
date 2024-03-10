import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { FormsSignupComponent } from './forms-signup/forms-signup.component';
import { FormsLoginComponent } from './forms-login/forms-login.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormTodoComponent } from './form-todo/form-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    TodoListComponent,
    FormsSignupComponent,
    FormsLoginComponent,
    TodoItemComponent,
    FormTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
