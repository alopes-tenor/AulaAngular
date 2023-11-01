import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { TarefaComponent } from './tarefa/tarefa.component';

const routes: Routes = [
  {path: 'calculadora', component: CalculadoraComponent},
  {path: 'calcular-media', component: CalcularMediaComponent},
  {path:'', component: TarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
