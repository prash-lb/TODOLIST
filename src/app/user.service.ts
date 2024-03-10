import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { FormTODO, TODO, TODOResponse, USER, UserResponse } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  getTodo() :Observable<TODO[]>{
    return this.http.get<TODOResponse>('assets/json/user.json').pipe(map(res  =>  res.todo));
   
  }
     
  getUser() : Observable<USER[]>{
    return this.http.get<UserResponse>('assets/json/user.json').pipe(map((userreponse) => userreponse.users));
  }

  private calcid(todo:boolean):number{
    let compteur = 0;
    if (!todo) {  
      this.getUser().subscribe((user) => {
        for(let i = 0 ; i<= user.length;i++){
          compteur ++;
        }
        
      });
    }
    else
    {
      this.getTodo().subscribe((todo) => {
        for(let i = 0 ; i<= todo.length;i++){
          compteur ++;
        }
        
      });
    }
  return compteur;
}

  createTodo(label :string,done:boolean,date:Date,user:string):Observable<boolean>{
    let data : TODO = {
      id : this.calcid(true),
      label : label,
      done: done,
      date: date,
      user:user
    };
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    return this.http.post<TODO>(this.baseURL+"todo",body,{'headers':headers}).pipe(map((todo)=>true), catchError((err)=> of(false)));
   
  }
  
  createUser(password1:string,name1:string):Observable<boolean>{
    let data : USER = {
      "id" : this.calcid(false),
      password : password1,
      name : name1
    };
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
   return this.http.post<USER>(this.baseURL+"users",body,{'headers':headers}).pipe(map((user)=>true), catchError((err)=> of(false)));
   ;
  }

  DeleteTask(id:number):Observable<boolean>{
    return this.http.delete(this.baseURL+'todo/'+(id)).pipe(map((resp) =>true),catchError((err)=> of(false)));

  }
  
  
  updateTask(Task : TODO): Observable<boolean>{
    let data : TODO = {
      id: Task.id,
      user:Task.user,
      done:Task.done,
      date : Task.date,
      label : Task.label,
    };
    return this.http.put<TODO>(this.baseURL+'todo/'+data.id,data).pipe(
      map((update)=> true),
      catchError((err)=> of(false))
    );
  }
}

