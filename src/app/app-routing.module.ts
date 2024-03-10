import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:'' , redirectTo:'HOME',pathMatch:'full'},
  {path:'HOME',component: HomeComponent},
  {path:'HOME/SIGN_UP',component:SignUpComponent},
  {path:'HOME/LOGIN',component: LoginComponent },
  {path:'HOME/:name',component:TodoListComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
