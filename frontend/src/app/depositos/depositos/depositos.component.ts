import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';

import { Router } from '@angular/router';
import { Deposito } from '../models/deposito';
import { DepositoImpl } from '../models/deposito-impl';
import { DepositoService } from '../service/deposito.service';



@Component({
  selector: 'app-depositos',
  templateUrl:'./depositos.component.html',
  styleUrls: ['./depositos.component.css']
})
export class DepositosComponent implements OnInit {
  depositos: Deposito[] = [];
  todosDepositos: Deposito[] = [];
  numPaginas: number = 0;
  depositoVerDatos: Deposito = new DepositoImpl(0,"","");

  constructor(
    private depositoService: DepositoService,
    private auxService: AuxiliarService,
    private router:Router) { }

  ngOnInit(): void {
    this.depositoService.getDepositos().subscribe((response) => this.depositos = this.depositoService.extraerDepositos(response));
    this.getTodosDepositos();
  }

  verDatos(deposito: Deposito): void {
    this.depositoVerDatos = deposito;
  }

  onDepositoEliminar(deposito: Deposito): void {
    ;
    console.log(`He eliminado a ${deposito.codigoDeposito}`);
    this.depositoService.deleteDeposito(deposito.id).subscribe(
      () => { console.log('usuario eliminado');},
      (error) => {console.error(error);}
    )
    this.depositos = this.depositos.filter(u => deposito !== u);
  }

  getTodosDepositos(): void {
    this.depositoService.getDepositos().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.depositoService.getDepositosPagina(index)
          .subscribe(response => {
            this.todosDepositos.push(...this.depositoService.extraerDepositos(response));
          });
      }
    });
  }
  borrarDeposito(id: number): void {
    this.depositoService.deleteDeposito(id);
  }

  modificarDeposito(deposito: DepositoImpl): void {
    this.depositoService.patchDeposito(deposito).subscribe();
  }
  

  

}
