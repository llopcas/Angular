import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArmaDepositoService } from 'src/app/armas/service/arma-deposito.service';
import { Deposito } from '../models/deposito';
import { DepositoImpl } from '../models/deposito-impl';


@Component({
  selector: 'app-deposito-item',
  templateUrl: './deposito-item.component.html',
  styleUrls: ['./deposito-item.component.css']
})
export class DepositoItemComponent implements OnInit {
  @Input() deposito: Deposito = new DepositoImpl(0, 0);
  @Output() depositoSeleccionado = new EventEmitter<Deposito>();
  @Output() depositoEliminar = new EventEmitter<DepositoImpl>();
  @Output() depositoEditar = new EventEmitter<DepositoImpl>();
  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit() {

  }
  borrarDeposito(deposito: DepositoImpl["id"]): void {
    //    this.negocioService.deleteNegocio(this.negocioItem.urlNegocio);
    if (confirm('Confirme para eliminar')){
    this.depositoEliminar.emit(deposito);
}
//   obtenerDepostito(){
//   // return this.servicioService.getDatosServicio(String.valueOf(this.servicio.tipo));
//  }

//   modificarArma(arma: DepositoImpl): void {
//   this.depositoService.patchArma(deposito).subscribe();
// }

  }
}
