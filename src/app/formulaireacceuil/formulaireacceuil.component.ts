import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/todo"
import {TodoServiceService} from "../../service/todo-service.service";
import {LocalStorageService} from "../../service/local-storage.service";

@Component({
  selector: 'app-formulaireacceuil',
  templateUrl: './formulaireacceuil.component.html',
  styleUrls: ['./formulaireacceuil.component.scss']
})
export class TodoForm {

  todo: Todo = new Todo();

  constructor(public myTodo: TodoServiceService,  private localStorageService: LocalStorageService) {
  }

  onSubmit(): void {
    const todocopie = new Todo();
    todocopie.what=this.todo.what;
    todocopie.when=this.todo.when;
    this.todo.what = '';
    this.todo.when = '';
    this.myTodo.addTodo(todocopie);

  }

}
