import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArmaImpl } from '../models/arma-impl';
import { BlancaImpl } from '../models/blanca-impl';
import { FuegoImpl } from '../models/fuego-impl';
import { BlancaService } from '../service/blanca.service';
import { FuegoService } from '../service/fuego.service';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css']
})
export class ArmasComponent implements OnInit {
  todosArmas: ArmaImpl[] = [];
  public fuego: FuegoImpl = new FuegoImpl('', 0, 0, '', '', 0);
  public blanca: BlancaImpl = new BlancaImpl('', 0, 0, '', 0);
  constructor( 
    private blancaService: BlancaService,
    private fuegoService: FuegoService,
    private router: Router) { }

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
          //this.router.navigate(['servicios']);
         /* this.geriatria = this.geriatria.filter(
            (m: ServicioImpl) => servicio !== m
          );*/
          this.getTodosArmas();
        });
    } else {
      this.blancaService
        .deleteBlanca(arma.id)
        .subscribe((response) => {
          //this.router.navigate(['armas']);
          /*this.blanca = this.blanca.filter(
            (m: ArmaImpl) => arma !== m
          );*/
          this.getTodosArmas();
        });
    }
  }


}
