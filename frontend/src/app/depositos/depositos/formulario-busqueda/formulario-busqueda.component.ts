import { Component, Input, OnInit, Output } from '@angular/core';
import { Deposito } from '../../models/deposito';
import { DepositoImpl } from '../../models/deposito-impl';

import { DepositoService } from '../../service/deposito.service';


@Component({
  selector: 'app-formulario-busqueda',
  templateUrl: './formulario-busqueda.component.html',
  styleUrls: ['./formulario-busqueda.component.css']
})
export class FormularioBusquedaComponent implements OnInit {

  @Input() deposito: Deposito= new DepositoImpl();
  depositos: Deposito[] = [];
  depositoVerDatos: Deposito = new DepositoImpl();
  sistemaAccion: string='';
  calibreEnMilimetros:number=0;

  constructor(
    private depositoService: DepositoService,
   ) { }

  ngOnInit(): void {

  }

  depositosBuscados(sistemaAccion:string, calibreEnMilimetros:number){
    this.depositoService.getDepositosBuscados(sistemaAccion,calibreEnMilimetros).subscribe(response => {
      this.depositos = this.depositoService.extraerDepositosMetodo(response)
    });
  }

  verDatos(deposito: Deposito): void {
    this.depositoVerDatos = deposito;
  }

}
