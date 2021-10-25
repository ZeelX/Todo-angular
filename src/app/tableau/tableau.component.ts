import {Component, inject, Inject, OnInit} from '@angular/core';
import { TodoForm} from "../formulaireacceuil/formulaireacceuil.component";
import {TodoServiceService} from "../../service/todo-service.service";


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent{

    private _listTodo: Array<string>;

  constructor(what: string, when: string) {

    this._listTodo = [];
  }

  get listTodo(): Array<string> {
    return this._listTodo;
  }

  set listTodo(value: Array<string>) {
    this._listTodo = value;
  }


}
