import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/todo"
import {TodoServiceService} from "../../service/todo-service.service";
@Component({
  selector: 'app-formulaireacceuil',
  templateUrl: './formulaireacceuil.component.html',
  styleUrls: ['./formulaireacceuil.component.scss']
})
export class TodoForm {

  todo: Todo = new Todo();

  constructor(public myTodo: TodoServiceService) {
  }

  onSubmit(): void {
    this.myTodo.addTodo(this.todo)

  }
}
