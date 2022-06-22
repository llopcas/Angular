import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faCapsules, faPenToSquare, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Deposito } from '../../models/deposito';
import { BlancaImpl } from '../../models/blanca-impl';


@Component({
  selector: 'app-blanca-item',
  templateUrl: './blanca-item.component.html',
  styleUrls: ['./blanca-item.component.css']
})
export class BlancaItemComponent implements OnInit {
  depositos: Deposito[] = [];
  todosDepositos: Deposito[] = [];
  numPaginas: number = 0;

  @Input() blanca: BlancaImpl = new BlancaImpl();
  @Output() blancaEliminar = new EventEmitter<BlancaImpl>();
  @Output() blancaEditar= new EventEmitter<BlancaImpl>();

  constructor() { }

  ngOnInit(): void {
    }


//delete
borrarBlanca(): void {
  if (confirm(`¿Está seguro de que desea eliminar este arma?`)){
  this.blancaEliminar.emit(this.blanca);
}
}

//patch
modificarBlanca(): void {
  this.blancaEditar.emit(this.blanca);
}

pencil = faPencil;
trash = faTrashCan;
eraser=faEraser;


}
