import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormTODO, TODO } from '../model/model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  label:string='';
  date:Date = new Date();
  update =false;

  @Input()
  task: TODO | undefined;

  @Output()
  taskUpdate = new EventEmitter<TODO>();
  @Output()
  taskDelete  = new EventEmitter<number>;


  edition = false;

  todoUpdate(){
    if(this.task){
      this.task.date = this.date;
      this.task.label = this.label;
    }
    this.update = false;
    this.taskUpdate.emit(this.task);
  }

  delete(){
    this.taskDelete.emit(this.task?.id);
  }
 

  TaskDone(){
    if(this.task){
      this.task.done = ! this.task.done;
    }
    this.update = false;
    this.taskUpdate.emit(this.task);
  }

}
