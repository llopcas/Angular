import { Component, OnInit } from '@angular/core';
import { DepositoImpl } from '../models/deposito-impl';
import { DepositoService } from '../service/deposito.service';



@Component({
  selector: 'app-deposito-form',
  templateUrl: './deposito-form.component.html',
  styleUrls: ['./deposito-form.component.css']
})
export class DepositoFormComponent implements OnInit {
  deposito: DepositoImpl = new DepositoImpl(0, 0);

  constructor(private depositoService: DepositoService) { }

  ngOnInit(): void {
  }
  create(): void {

    this.depositoService.postDeposito(this.deposito);

  }
}
