import { Injectable } from '@angular/core';
import {Todo} from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private _arrayTodo: Array<Todo> = [];


  get arrayTodo(): Array<Todo> {
    return this._arrayTodo;
  }

  addTodo(todo: Todo): void {
    this._arrayTodo.push(todo);
  }

}
