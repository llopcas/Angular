import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deposito } from '../../models/deposito';
import { DepositoImpl } from '../../models/deposito-impl';
import { DepositoService } from '../../service/deposito.service';


@Component({
  selector: 'app-deposito-consultar',
  templateUrl: './deposito-consultar.component.html',
  styleUrls: ['./deposito-consultar.component.css']
})
export class DepositoConsultarComponent implements OnInit {

  deposito: Deposito = new DepositoImpl();

  constructor(private depositoService: DepositoService,
    
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarDeposito();
    this.depositoService.getDeposito(id).subscribe(response =>
       this.deposito=this.depositoService.mapearDeposito(response));
  }

  cargarDeposito(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
