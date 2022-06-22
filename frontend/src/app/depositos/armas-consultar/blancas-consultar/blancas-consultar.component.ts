import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { BlancaImpl } from '../../models/blanca-impl';


@Component({
  selector: 'app-blancas-consultar',
  templateUrl: './blancas-consultar.component.html',
  styleUrls: ['./blancas-consultar.component.css']
})
export class BlancasConsultarComponent implements OnInit {

  lupa = faMagnifyingGlass;
  pencil = faPencil;
  trashC = faTrashCan;

  @Input() blanca: BlancaImpl = new BlancaImpl();
  @Output() blancaConsultar = new EventEmitter<BlancaImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.blancaConsultar.emit(this.blanca);
  }


}
