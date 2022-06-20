import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { BlancaImpl } from '../models/blanca-impl';
import { BlancaService } from '../service/blanca.service';


@Component({
  selector: 'app-blanca',
  templateUrl: './blanca.component.html',
  styleUrls: ['./blanca.component.css']
})
export class BlancaComponent implements OnInit {
  blancas: BlancaImpl[] = [];
  todosBlanca: BlancaImpl[] = [];
    numPaginas: number = 0;

    constructor(
  private blancaService: BlancaService,
  private auxService: AuxiliarService) {}


    ngOnInit(): void {
      this.blancaService.getBlanca().subscribe((response) => this.blancas =
      this.blancaService.extraerBlanca(response));
      this.getTodosBlanca();
    }


    getTodosBlanca(): void {
      this.blancaService.getBlanca().subscribe(r => {
        this.numPaginas = this.auxService.getPaginasResponse(r);
        for (let index = 1; index <= this.numPaginas; index++) {
          this.blancaService.getBlancaPagina(index)
            .subscribe(response => {
              this.todosBlanca.push(...this.blancaService.extraerBlanca(response));
            });
        }
      });
    }

  }

