import { Component, EventEmitter , Output } from '@angular/core';
import { TODO } from '../model/model';
import { TASK } from '../mock-task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Tache:TODO[]=TASK;
  label:string='';
  date:string = '';
  user:string ="exemple";
  id:number = 3;


  emitFormValue() {
    let task : TODO[]=[];
    task.push({
      id:this.id,
      label: this.label,
      done:false,
      date :  new Date(this.date),
      user : this.user
    });
    this.Tache = task.concat(this.Tache);
    this.id ++;
    

  }
  deleTetask(task:TODO){
    this.Tache.splice(this.Tache.indexOf(task),1);
  }
  raiseTaskAcomplied(task :TODO){
    task.done = ! task.done;
    this.Tache.push({
      id:this.id,
      label : task.label,
      done:task.done,
      date:task.date,
      user:task.user
    })
    this.id++;
    this.deleTetask(task);

    
   
  }
}
