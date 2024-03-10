import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router,private cookieService: CookieService ){
    if (this.cookieService.get('user')){
      this.router.navigate(['/HOME',this.cookieService.get('user')]);
    }
  }
  
  gotosignup(){
    this.router.navigate(['/HOME/SIGN_UP']);
  }
  gotologin(){
    this.router.navigate(['HOME/LOGIN']);
  }
}
