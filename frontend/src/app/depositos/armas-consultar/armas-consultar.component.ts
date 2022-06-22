import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlancaImpl } from '../models/blanca-impl';
import { FuegoImpl } from '../models/fuego-impl';
import { ArmaService } from '../service/arma.service';


@Component({
  selector: 'app-armas-consultar',
  templateUrl: './armas-consultar.component.html',
  styleUrls: ['./armas-consultar.component.css']
})
export class ArmasConsultarComponent implements OnInit {

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
    this.blancas = this.armaService.extraerBlancas(res));
    this.armaService.getArmasAlmacenados(id).subscribe((res) =>
    this.fuegos = this.armaService.extraerFuego(res));
  }

  onBlancaConsultar(blancas: BlancaImpl){
    this.verDatosBlanca(blancas);
    let url = `depositos/blancas/consultar/${blancas.idArma}`;
    this.router.navigate([url])
  }

  verDatosBlanca(blanca: BlancaImpl): void {
    this.blancaVerDatos = blanca;
  }

  onFuegoConsultar(fuegos: FuegoImpl){
    this.verDatosFuego(fuegos);
    let url = `depositos/fuegos/consultar/${fuegos.idArma}`;
    this.router.navigate([url])
  }

  verDatosFuego(fuegos: FuegoImpl): void {
    this.fuegoVerDatos = fuegos;
  }

}
