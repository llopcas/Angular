import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { FuegoImpl} from '../models/fuego-impl';
import { FuegoService } from '../service/fuegoiservice';


@Component({
  selector: 'app-fuego',
  templateUrl: './fuego.component.html',
  styleUrls: ['./fuego.component.css']
})
export class FuegoComponent implements OnInit {
  fuegos: FuegoImpl[] = [];
  todosFuego: FuegoImpl[] = [];
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
              this.todosFuego.push(...this.fuegoService.extraerFuego(response));
            });
        }
      });
    }

  }
