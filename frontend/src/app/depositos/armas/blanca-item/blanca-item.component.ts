import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faCapsules, faPenToSquare, faPenNib, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
  @Output() blancaConsultar = new EventEmitter<BlancaImpl>();
  @Output() blancaEliminar = new EventEmitter<BlancaImpl>();
  @Output() blancaEditar= new EventEmitter<BlancaImpl>();

  constructor() { }

  ngOnInit(): void {
    }


//delete
borrarBlanca(): void {

  this.blancaEliminar.emit(this.blanca);

}

//put

modificarBlanca(): void {
  this.blancaEditar.emit(this.blanca);
}
consultarBlanca(): void{
  this.blancaConsultar.emit(this.blanca);
}

pencil = faPencil;
trash = faTrashCan;
eraser=faEraser;
lupa = faMagnifyingGlass;

}
