import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormulaireacceuilComponent} from "./formulaireacceuil/formulaireacceuil.component";

const routes: Routes = [

  {path: '', component: FormulaireacceuilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
