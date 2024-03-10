import { Component, OnInit } from '@angular/core';
import { USER } from '../model/model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-forms-login',
  templateUrl: './forms-login.component.html',
  styleUrls: ['./forms-login.component.css']
})
export class FormsLoginComponent  implements OnInit {
  users: USER[] =[];
  isLoading = false;
  name:string='';
  password:string ='';

  constructor(private router:Router ,private userservice : UserService){}

  ngOnInit(){
    this.RefreshUser();
  }

  private RefreshUser(){
    this.isLoading = true;
    this.userservice.getUser().subscribe((user) => {
      for(let i = 0 ; i< user.length;i++){
        this.users[i] = user[i];
      }
      this.isLoading = false;
    });
  }

  gototodos(){
    this.router.navigate(['/HOME',this.name]);
  }

  verificationuser(name:string,password:string){
    for(let i = 0 ; i< this.users.length;i++){
      if(this.users[i].name === name && this.users[i].password === password){
        return true;
      }
    }
    return false;
  }
}
