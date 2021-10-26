import {Component, inject, Inject, OnInit} from '@angular/core';
import {LocalStorageService} from "../../service/local-storage.service";
import {TodoServiceService} from "../../service/todo-service.service";


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {

// a rajouter dans le constructor
  constructor(public todoService: TodoServiceService,) {
  }


  // public getControl($event:
  // , key: string): FormControl
  // {
  //   return (formGroup as FormGroup).get(key) as FormControl;
  // }


  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }


  removeTodo(i: number): void {
    this.todoService.arrayTodo.splice(i,1);

  }
}
