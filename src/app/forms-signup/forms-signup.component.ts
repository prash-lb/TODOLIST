import { Component , OnInit } from '@angular/core';
//import userData from '../user.json'
import { USER } from '../model/model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-signup',
  templateUrl: './forms-signup.component.html',
  styleUrls: ['./forms-signup.component.css']
})
export class FormsSignupComponent  implements OnInit{
  users: USER[] =[];
  isLoading = false;
  name:string='';
  email:string = '';
  password:string ='';
  
  constructor( private router:Router ,private userservice : UserService){}

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
  private gotologin(){
    this.router.navigate(['HOME/LOGIN']);
  }

  emitSignFormValue(){
    this.userservice.createUser(this.password,this.name).subscribe(
      (created) => {
        if(created){
          this.gotologin();
        } else{
          alert('Error server')
        }
      }
    );
  }
  
  verificationname(name:string){
    for(let i = 0 ; i< this.users.length;i++){
      if(this.users[i].name === name){
        return true;
      }
    }
    return false;
  }
}
