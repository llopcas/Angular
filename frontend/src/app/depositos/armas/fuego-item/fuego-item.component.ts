import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faTrashCan, faEye, faEraser, faCapsules, faPenToSquare, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FuegoImpl } from '../../models/fuego-impl';



@Component({
  selector: 'app-fuego-item',
  templateUrl: './fuego-item.component.html',
  styleUrls: ['./fuego-item.component.css']
})
export class FuegoItemComponent implements OnInit {


  @Input() fuego: FuegoImpl = new FuegoImpl();
  @Output() fuegoEliminar = new EventEmitter<FuegoImpl>();
  @Output() fuegoEditar= new EventEmitter<FuegoImpl>();

  constructor() { }

  ngOnInit(): void {
    }


//delete
borrarFuego(): void {
  if (confirm(`¿Está seguro de que desea eliminar este arma?`)){
  this.fuegoEliminar.emit(this.fuego);
}
}

//patch
modificarFuego(): void {
  this.fuegoEditar.emit(this.fuego);
}

pencil = faPencil;
trash = faTrashCan;
eraser=faEraser;


}
