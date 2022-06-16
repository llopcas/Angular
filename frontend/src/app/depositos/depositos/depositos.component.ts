import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Deposito } from '../models/deposito';
import { DepositoImpl } from '../models/deposito-impl';
import { DepositoService } from '../service/deposito.service';

@Component({
  selector: 'app-depositos',
  templateUrl: './depositos.component.html',
  styleUrls: ['./depositos.component.css']
})
export class DepositosComponent implements OnInit {
  depositos: Deposito[] = [];
  todosDepositos: Deposito[] = [];
  depositoVerDatos: Deposito = new DepositoImpl(0, 0);
  numPaginas: number = 0;
  constructor(
  private depositoService: DepositoService,
  private auxService: AuxiliarService,
  private router: Router) { }
 
  ngOnInit(): void {
    this.depositoService.getDepositos().subscribe((response) =>
    this.depositos = this.depositoService.extraerDepositos(response));
    this.getTodosDepositos();
  } 
  verDatos(deposito: Deposito): void {
    this.depositoVerDatos = deposito;
  }
  onDepositoEliminar(deposito: Deposito): void {
    console.log(`He eliminado a ${deposito.codigoDeposito}`);
    
    this.depositos = this.depositos.filter(u => deposito !== u);
  }
  getTodosDepositos(): void {
    this.depositoService.getDepositos().subscribe((r) => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.depositoService.getDepositosPagina(index).subscribe(response => {
          this.todosDepositos.push(
            ...this.depositoService.extraerDepositos(response)
          );
        });
      }
    });
  }
  borrarDeposito(id: string): void {
    this.depositoService.deleteDeposito(id)
  }
  modificarUsuario(deposito: DepositoImpl): void {
    this.depositoService.patchDeposito(deposito).subscribe();
  }

}
