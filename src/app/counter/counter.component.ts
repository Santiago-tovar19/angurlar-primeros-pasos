import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../services/global-service.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {

  constructor(
    public _globalService: GlobalServiceService
  ){

  }

  ngOnInit(){
    this._globalService.nombre = 'Juan';
  }


  // imprimirNombre(){
  //   this._globalService.nombre
  // }
}
