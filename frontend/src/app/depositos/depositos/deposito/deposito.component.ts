import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Deposito } from '../../models/deposito';
import { DepositoImpl } from '../../models/deposito-impl';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  @Input() deposito: Deposito = new DepositoImpl(0);
	@Output() depositoEliminar = new EventEmitter<Deposito>()
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(): void {
    this.depositoEliminar.emit(this.deposito);
  }
}

