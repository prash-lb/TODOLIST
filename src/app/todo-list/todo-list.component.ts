import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormTODO, TODO ,TODOResponse, USER} from '../model/model';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  todos :TODO[] =[];
  users: USER[] =[];

  isLoading = false;
  label:string='';
  done:boolean = false;
  date:Date = new Date();
  name:string ="";

  private RefreshTodo(){
    this.isLoading = true;
    this.userservice.getTodo().subscribe((todo) => {
      this.todos = [];
      todo.forEach(t => {
        if(t.user===this.name){this.todos.push(t);}
      });
      this.isLoading = false
    });}
  
  gotodisconnect(){
    this.cookieService.delete('user')
    this.router.navigate(['HOME']);
  }
  gotosignup(){
    this.router.navigate(['HOME/SIGN_UP']);
  }
  deleteTask(id:number){
    this.userservice.DeleteTask(id).subscribe(
      (resp)=>{
        if(resp){
          this.RefreshTodo();
        }
        else{
          alert("Erreur server");
        }
      }
  );}

  updateTask(todo:TODO){
    this.userservice.updateTask(todo).subscribe(
      (update)=>{
        if(update){
          this.RefreshTodo();
        }else{
          alert("ERROR SERVER")
        }
      }
    );
  }

  emitSignFormValue(task : FormTODO){
    this.userservice.createTodo(task.label,false,task.date,this.name).subscribe(
      (created) => {
        if(created){
          this.RefreshTodo();
        } else{
          alert('Error server')
        }
      }
    );
    
  }
  constructor(private route: ActivatedRoute,private router:Router ,protected userservice : UserService,private cookieService: CookieService ) {}
  
  
  
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.cookieService.set('user',this.name);
    this.RefreshTodo() ;
   
  }
  
}

