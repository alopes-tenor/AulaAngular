import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {


descricao: string;
concluida: boolean;

tarefas = [
{descricao: 'Arrumar a casa' , concluida : true},
{descricao: 'Fazer o café da manhã' , concluida : false},
{descricao: 'Estudar' , concluida : false},
{descricao: 'Enviar tarefa' , concluida : false},

]

  constructor() {
    this.descricao = "";
    this.concluida = false;

   }

   txtBotao(obj: any){
    if(obj.concluida){
      obj.concluida = false
    } 
  else{
    obj.concluida = true
  } }


  ngOnInit(): void {
  }

}
