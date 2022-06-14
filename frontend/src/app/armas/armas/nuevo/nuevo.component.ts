import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  public arma = {
   tipo: 0,
   nombre: "",
   calibreEnMilimetros: 0,
   longitudEnMilimetros: 0
  };

  public tipos = [
    {id: 0, description: ' Arma '},
    {id: 1, description: 'Arma de fuego'},
    {id: 2, description: 'Arma de blanca'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
