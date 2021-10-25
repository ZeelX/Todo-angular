import {Component, inject, Inject, OnInit} from '@angular/core';
import { TodoForm} from "../formulaireacceuil/formulaireacceuil.component";
import {TodoServiceService} from "../../service/todo-service.service";


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {


  constructor(public todoService: TodoServiceService) {
  }
}
