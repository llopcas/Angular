import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { ArmaImpl,  } from '../models/arma-impl';
import { BlancaImpl } from '../models/blanca-impl';
import { FuegoImpl } from '../models/fuego-impl';
import { FuegoService } from '../service/fuegoiservice';
import { BlancaService } from '../service/blanca.service';


@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css'],
})
export class ArmasComponent implements OnInit {
  todosArmas: ArmaImpl[] = [];

  public fuego: FuegoImpl = new FuegoImpl('', 0, 0, '', '','', 0);
  public blanca: BlancaImpl = new BlancaImpl('', 0, 0, '','', 0);

  constructor(
    private fuegoService: FuegoService,
    private blancaService: BlancaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    debugger;
    this.getTodosArmas();
  }

  getTodosArmas(): void {
    this.todosArmas = [];
    this.fuegoService.getFuego().subscribe((response) => {
      debugger;
      this.todosArmas.push(

        ...this.fuegoService.extraerFuego(response)
      );

      this.blancaService.getBlanca().subscribe((response) => {
        debugger;
        this.todosArmas.push(
          ...this.blancaService.extraerBlanca(response)
        );
      });
    });
  }

  onArmaEliminar(arma: ArmaImpl) {
    if (arma.tipo === 2) {
      this.fuegoService
        .deleteFuego(arma.id)
        .subscribe((response) => {
               this.getTodosArmas();
        });
    } else {
      this.blancaService
        .deleteBlanca(arma.id)
        .subscribe((response) => {
                  this.getTodosArmas();
        });
    }
  }
}
