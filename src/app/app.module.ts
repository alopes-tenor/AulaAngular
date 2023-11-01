import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { TarefaComponent } from './tarefa/tarefa.component';

@NgModule({
  declarations: [AppComponent, MenuSuperiorComponent, CalculadoraComponent, CalcularMediaComponent, TelaPaiComponent, FormTemplateDrivenComponent, TarefaComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
