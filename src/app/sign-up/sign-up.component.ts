import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router:Router){}
  
  gotosignup(){
    this.router.navigate(['/HOME/SIGN_UP']);
  }
  gotologin(){
    this.router.navigate(['HOME/LOGIN']);
  }

}
