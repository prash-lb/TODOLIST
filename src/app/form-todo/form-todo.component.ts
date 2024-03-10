import { Component, EventEmitter, Output } from '@angular/core';
import { FormTODO } from '../model/model';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent {
  label:string='';
  date:Date = new Date();

  @Output()
  task: EventEmitter<FormTODO>  = new EventEmitter();
   
  emitFormValue(){
    let task : FormTODO = {
      label : this.label,
      date : this.date,
    }
    this.task.emit(task);
  }

}
