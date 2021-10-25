import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoForm} from "./formulaireacceuil/formulaireacceuil.component";
import {TableauComponent} from "./tableau/tableau.component";

const routes: Routes = [

  {path: 'formulaire', component: TodoForm},
  {path: 'tableau', component: TableauComponent},
  {path: '', component: TableauComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
