import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css']
})
export class ArmasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
function escribir() {
  console.log("Pasando Por LC1");
  alert("¡Genial! ¡Has creado un Deposito ahora toca llenarlo!");
}
function escribir2() {   
  alert("¡Campos Limpios como una Patena!"); 
}