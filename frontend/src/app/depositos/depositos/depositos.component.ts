import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPencil, faEye, faTrashCan} from '@fortawesome/free-solid-svg-icons';
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
  depositoVerDatos: Deposito= new DepositoImpl();



  constructor(
    private router: Router,
    private depositoService: DepositoService,
    ) { }

  ngOnInit(): void {
    this.depositoService.getDepositos().subscribe((response) =>
    this.depositos = this.depositoService.extraerDepositos(response));
  }

  verDatos(deposito: Deposito): void {
    this.depositoVerDatos = deposito;
  }

  onDepositoEliminar(deposito: Deposito) {
    console.log(`Ha eliminado el deposito ${deposito.codigoDeposito}`);
    this.depositoService.deleteDeposito(deposito.idDeposito).subscribe();
    this.router.navigate(['depositos']);
  }

  onDepositoEditar(depositos: Deposito){
    this.verDatos(depositos);
  let url = `depositos/editar/${depositos.idDeposito}`;
  this.router.navigate([url])}

  onDepositoConsultar(depositos: Deposito){
    this.verDatos(depositos);
    let url = `depositos/consultar/${depositos.idDeposito}`;
    this.router.navigate([url])
  }


  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;

}
