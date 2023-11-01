import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {

  nome: string = '';
  email: string = '';
  senha: string = '';
  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(form) {

  }

}
