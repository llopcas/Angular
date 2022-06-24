import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faTrashCan, faEye, faEraser, faCapsules, faPenToSquare, faPenNib, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FuegoImpl } from '../../models/fuego-impl';



@Component({
  selector: 'app-fuego-item',
  templateUrl: './fuego-item.component.html',
  styleUrls: ['./fuego-item.component.css']
})
export class FuegoItemComponent implements OnInit {
  fuegos: FuegoImpl[] = [];

  @Input() fuego: FuegoImpl = new FuegoImpl();
  @Output() fuegoConsultar = new EventEmitter<FuegoImpl>();
  @Output() fuegoEliminar = new EventEmitter<FuegoImpl>();
  @Output() fuegoEditar= new EventEmitter<FuegoImpl>();

  constructor() { }

  ngOnInit(): void {
    }

consultarFuego(): void{
      this.fuegoConsultar.emit(this.fuego);
    }

//delete
borrarFuego(): void {
    this.fuegoEliminar.emit(this.fuego);

}

//patch
modificarFuego(): void {
  this.fuegoEditar.emit(this.fuego);
}

pencil = faPencil;
trash = faTrashCan;
eraser=faEraser;
lupa = faMagnifyingGlass;


}
