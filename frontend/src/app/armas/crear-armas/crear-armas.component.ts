import { Component, OnInit } from '@angular/core';
import { Arma } from '../models/arma';

@Component({
  selector: 'app-crear-armas',
  templateUrl: './crear-armas.component.html',
  styleUrls: ['./crear-armas.component.css']
})
export class CrearArmasComponent implements OnInit {

  public nuevaArma = {
    nombre: '',
    calibreEnMilimetros: 0,
    longitudEnMilimetros: 0,
  };
  public armas: Arma[] = [];
  public numeroArmas = 0;

  public guardarArmas() {
    //this.negocios.push({...this.nuevoNegocio});
    this.numeroArmas = this.armas.length;
  }

  public borrarArma(arma: Arma){
    this.armas = this.armas.filter(a => a.idArma !== arma.idArma );
    this.numeroArmas = this.armas.length;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
