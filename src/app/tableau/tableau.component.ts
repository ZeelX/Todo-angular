import {Component, inject, Inject, OnInit} from '@angular/core';
import {LocalStorageService} from "../../service/local-storage.service";
import {TodoServiceService} from "../../service/todo-service.service";


@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {


  constructor(public todoService: TodoServiceService,private localStorageService: LocalStorageService) {
  }

  

  persist(key: string, value: any) {
    this.localStorageService.set(key, value);
  }
}
