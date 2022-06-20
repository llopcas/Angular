import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faEraser,
  faEye,
  faFilePen,
  faPencil,
  faTrash,
  faTrashCan,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { ArmaImpl } from '../models/arma-impl';
import { ArmaService } from '../service/arma.service';



@Component({
  selector: 'app-armas-item',
  templateUrl: './armas-item.component.html',
  styleUrls: ['./armas-item.component.css'],
})
export class ArmasItemComponent implements OnInit {
@Input() arma: any;

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

  constructor(
    private armaService: ArmaService,
    // private auxService: AuxiliarService,
    // private activateRoute: ActivatedRoute,
    // private router: Router,
  ) {}

  ngOnInit(): void {
    console.log(this.arma);
    debugger;
  }

  public onSubmit() {



  }

  borrarArma(arma: ArmaImpl["id"]): void {
    //    this.negocioService.deleteNegocio(this.negocioItem.urlNegocio);
    if (confirm('Confirme para eliminar')){
    this.armaEliminar.emit(this.arma);


  }
}
obtenerArma(){
 this.armaSeleccionado.emit(this.arma);
}


  modificarArma(arma: ArmaImpl): void {
    this.armaService.patchArma(arma).subscribe();
  }
}
