import { Component, Input, OnInit } from '@angular/core';
import { Deposito } from '../../models/deposito';
import { DepositoImpl } from '../../models/deposito-impl';
import { DepositoService } from '../../service/deposito.service';


@Component({
  selector: 'app-depositos-buscados',
  templateUrl: './depositos-buscados.component.html',
  styleUrls: ['./depositos-buscados.component.css']
})
export class DepositosBuscadosComponent implements OnInit {

  @Input()deposito: Deposito=new DepositoImpl();
  depositos: Deposito[]= [];

  constructor(private depositoService: DepositoService) { }

  ngOnInit(): void {
    this.depositoService.getDepositos().subscribe(response=>{
      this.depositos = this.depositoService.extraerDepositos(response)
    })
  }

}
