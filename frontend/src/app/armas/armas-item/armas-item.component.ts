import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { ArmaImpl } from '../models/arma-impl';
import { ArmaService } from '../service/arma.service';
;


@Component({
  selector: 'app-armas-item',
  templateUrl: './armas-item.component.html',
  styleUrls: ['./armas-item.component.css'],
})
export class ArmasItemComponent implements OnInit {
@Input() arma: ArmaImpl = new ArmaImpl(' ', 0, 0,0,'');

  @Output() armaSeleccionado = new EventEmitter<ArmaImpl>();
  @Output() armaEliminar = new EventEmitter<ArmaImpl>();
  @Output() armaEditar = new EventEmitter<ArmaImpl>();
  
  constructor(
    private armaService: ArmaService,
    private auxService: AuxiliarService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    debugger;
  }

  public onSubmit() {



  }

  borrarArma(arma: ArmaImpl["id"]): void {
    //    this.armaService.deleteArma(this.armaItem.urlArma);
    if (confirm('Confirme para eliminar')){
    this.armaEliminar.emit(this.arma);


  }
}
obtenerArma(){
 // return this.armaService.getDatosArma(String.valueOf(this.arma.tipo));
}


  modificarArma(arma: ArmaImpl): void {
    this.armaService.patchArma(arma).subscribe();
  }
}
