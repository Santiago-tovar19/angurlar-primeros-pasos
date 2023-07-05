import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  form: any;

  constructor(
    private _formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nombre: [''],
      apellido: [''],
      edad: [''],
      nacimiento: [''],
    });
  }

  enviar(){

    const usuarioDeBaseDatos = {nombre: 'Jose', apellido: 'Hernandez', edad: '28', nacimiento: '1995'}

    this.form.patchValue(usuarioDeBaseDatos);
  }
}
