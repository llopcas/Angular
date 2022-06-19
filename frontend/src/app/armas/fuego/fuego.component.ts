import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { FuegoImpl } from '../models/fuego-impl';
import { FuegoService } from '../service/fuego.service';


@Component({
  selector: 'app-fuego',
  templateUrl: './fuego.component.html',
  styleUrls: ['./fuego.component.css']
})
export class FuegoComponent implements OnInit {
  fuegos: FuegoImpl[] = [];
  todosFuegos: FuegoImpl[] = [];
    numPaginas: number = 0;

    constructor(
  private fuegoService: FuegoService,
  private auxService: AuxiliarService) {}


    ngOnInit(): void {
      this.fuegoService.getFuego().subscribe((response) => this.fuegos =
      this.fuegoService.extraerFuego(response));
      this.getTodosFuego();
    }


    getTodosFuego(): void {
      this.fuegoService.getFuego().subscribe(r => {
        this.numPaginas = this.auxService.getPaginasResponse(r);
        for (let index = 1; index <= this.numPaginas; index++) {
          this.fuegoService.getFuegoPagina(index)
            .subscribe(response => {
              this.todosFuegos.push(...this.fuegoService.extraerFuego(response));
            });
        }
      });
    }

  }
