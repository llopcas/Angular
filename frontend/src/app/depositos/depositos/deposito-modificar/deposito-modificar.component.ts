import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deposito } from '../../models/deposito';
import { DepositoImpl } from '../../models/deposito-impl';
import { DepositoService } from '../../service/deposito.service';


@Component({
  selector: 'app-deposito-modificar',
  templateUrl: './deposito-modificar.component.html',
  styleUrls: ['./deposito-modificar.component.css']
})
export class DepositoModificarComponent implements OnInit {

    deposito: Deposito= new DepositoImpl();

    todosDepositos: Deposito[]= [];

  constructor(
    private depositoService: DepositoService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let id: string = this.cargarDeposito();
    this.depositoService.getDeposito(id).subscribe((response) =>{
      this.deposito = this.depositoService.mapearDeposito(response);
    })
  }

cargarDeposito(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

onEditarDeposito(): void{
    this.depositoService.updateDeposito(this.deposito).subscribe();
    this.router.navigate(['depositos']);
  }

onArmaCrear(depositos: Deposito){
  this.verDatos(depositos);
  let url = `depositos/editar/${depositos.idDeposito}/formularioArma`;
  this.router.navigate([url]);
}

verDatos(depositos: Deposito): void {
  this.deposito = depositos;
}
  // getTodosDepositos(): void {
  //   this.depositoService.getDepositos().subscribe(r =>{
  //           this.todosDepositos.push(...this.depositoService.extraerDepositos(r));
  //         });
  // }

  // modificarDeposito(idDeposito: string, deposito: DepositoImpl): void{
  //   this.depositoService.patchDeposito(idDeposito,deposito).subscribe();
  // }
}
