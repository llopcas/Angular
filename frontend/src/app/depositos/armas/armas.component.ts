import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlancaImpl } from '../models/blanca-impl';
import { FuegoImpl } from '../models/fuego-impl';
import { ArmaService } from '../service/arma.service';


@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css']
})
export class ArmasComponent implements OnInit {

  blancas: BlancaImpl[] = [];
  fuegos: FuegoImpl[] = [];
  blancaVerDatos: BlancaImpl = new BlancaImpl();
  fuegoVerDatos: FuegoImpl = new FuegoImpl();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private armaService: ArmaService) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
  this.armaService.getArmasAlmacenados(id).subscribe((res) =>
  this.blancas= this.armaService.extraerBlancas(res));
  this.armaService.getArmasAlmacenados(id).subscribe((res) =>
  this.fuegos = this.armaService.extraerFuego(res));
  }

  onBlancaEliminar(blancas: BlancaImpl){
    this.armaService.deleteBlanca(blancas.idArma).subscribe();
  }

  onBlancaEditar(blancas: BlancaImpl){
    this.blancaVerDatos = blancas;
    let url = `depositos/blancas/editar/${blancas.idArma}`;
    this.router.navigate([url])
  }

  onFuegoEliminar(fuegos: FuegoImpl){
    this.armaService.deleteFuego(fuegos.idArma).subscribe();
  }

  onFuegoEditar(fuegos: FuegoImpl){
    this.fuegoVerDatos = fuegos;
    let url = `depositos/fuegos/editar/${fuegos.idArma}`;
    this.router.navigate([url])
  }
  
}
