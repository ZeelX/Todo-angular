import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoForm} from './formulaireacceuil/formulaireacceuil.component';
import { TableauComponent } from './tableau/tableau.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoForm,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
