import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  public deposito = {
    
   codigoDeposito:0,
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
