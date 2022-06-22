import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faAdd, faEraser, faMagnifyingGlass, faPencilAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Deposito } from '../../models/deposito';
import { DepositoImpl } from '../../models/deposito-impl';



@Component({
  selector: 'app-deposito-item',
  templateUrl: './deposito-item.component.html',
  styleUrls: ['./deposito-item.component.css']
})
export class DepositoItemComponent implements OnInit {

  @Output() depositoResultado = new EventEmitter<Deposito>();
  depositos: Deposito[] = [];
  todosDepositos: Deposito[] = [];
  numPaginas: number = 0;

  @Input() deposito: Deposito = new DepositoImpl ();
  @Output() depositoConsultar = new EventEmitter<DepositoImpl>();
  @Output() depositoEditar = new EventEmitter<Deposito>();
  @Output() depositoEliminar = new EventEmitter<DepositoImpl>();

  constructor() { }

  ngOnInit(): void {
  }


  eliminar(): void {
    if (confirm('¿Está seguro? Se borrará el deposito')){
      this.depositoEliminar.emit(this.deposito);
    }
  }


  consultar():void{
    this.depositoConsultar.emit(this.deposito);

  }

  editar(): void{
    this.depositoEditar.emit(this.deposito);
  }


  pencil=faPencilAlt;
  lupa=faMagnifyingGlass;
  trash=faTrashCan;
  eraser= faEraser;
  plus=faAdd;


}
