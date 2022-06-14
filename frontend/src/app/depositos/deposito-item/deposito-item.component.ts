import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Deposito } from '../models/deposito';
import { DepositoImpl } from '../models/deposito-impl';


@Component({
  selector: 'app-deposito-item',
  templateUrl: './deposito-item.component.html',
  styleUrls: ['./deposito-item.component.css']
})
export class DepositoItemComponent implements OnInit {
  @Input() deposito: Deposito = new DepositoImpl(0);
  @Output() depositoSeleccionado = new EventEmitter<Deposito>();

  constructor() { }

  ngOnInit(): void {
  }

}
