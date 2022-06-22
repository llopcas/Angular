import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FuegoImpl } from '../../models/fuego-impl';


@Component({
  selector: 'app-fuegos-consultar',
  templateUrl: './fuegos-consultar.component.html',
  styleUrls: ['./fuegos-consultar.component.css']
})
export class FuegosConsultarComponent implements OnInit {

  lupa = faMagnifyingGlass;
  fpencil = faPencil;
  trashC = faTrashCan;

  @Input() fuego: FuegoImpl = new FuegoImpl();
  @Output() fuegoConsultar = new EventEmitter<FuegoImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.fuegoConsultar.emit(this.fuego);
  }

}
