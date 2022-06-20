import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faTrash, faX, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ArmaImpl } from '../../models/arma-impl';
import { ArmaService } from '../../service/arma.service';


@Component({
  selector: 'app-se-item',
  templateUrl: './se-item.component.html',
  styleUrls: ['./se-item.component.css']
})
export class SeItemComponent implements OnInit {
  @Input() arma: ArmaImpl = new ArmaImpl('',0,0,'', '');
  @Output() armaSeleccionado = new EventEmitter<ArmaImpl>();
  @Output() armaEliminar = new EventEmitter<ArmaImpl>();
  @Output() armaEditar = new EventEmitter<ArmaImpl>();

  pencil = faPencil;
  mirar = faEye;
  trash = faTrashCan;
  eraser = faEraser;
  trash2 = faTrash;
  x = faX;
  modificar = faFilePen;

  arma$: Observable<any> = new Observable<any>();
  todosArmas: ArmaImpl[] = [];

  constructor(
    private armaService: ArmaService


) { }

  ngOnInit(): void {
  }

  public onSubmit() {


  }
  borrarArma(arma: ArmaImpl["id"]): void {
    //    this.negocioService.deleteNegocio(this.negocioItem.urlNegocio);
    if (confirm('Confirme para eliminar')) {
      this.armaEliminar.emit(this.arma);


    }

  }
  obtenerArma() {
    this.armaSeleccionado.emit(this.arma);
  }
  modificarArma(arma: ArmaImpl): void {
    this.armaService.patchArma(arma).subscribe();
  }
}