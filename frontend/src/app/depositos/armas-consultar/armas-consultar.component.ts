import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { BlancaImpl } from '../models/blanca-impl';
import { FuegoImpl } from '../models/fuego-impl';
import { ArmaService } from '../service/arma.service';
import { DepositoService } from '../service/deposito.service';


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
  host: any;
  depositoId:string ='';

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private armaService: ArmaService,
              private depositoService: DepositoService) { }

  ngOnInit(): void {
    this.depositoId  = this.activatedRoute.snapshot.params['id'];
       this.findArmas(this.depositoId);

    
    /*this.depositoService.findArmas(id).subscribe((res) =>{
      debugger;
      this.fuegos = this.armaService.extraerFuego(res)
  });*/
  }

  findArmas(id:string){
    this.depositoService.findArmas(id).subscribe((res) =>{
      debugger;
      this.blancas = this.armaService.extraerBlancas(res);
      this.fuegos = this.armaService.extraerFuego(res);
    });
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
    debugger;
    this.verDatosFuego(fuegos);
    let url = `depositos/fuegos/consultar/${fuegos.idArma}`;
    this.router.navigate([url])
  }

  onFuegoEditar(fuegos: FuegoImpl){
    debugger;
    this.fuegoVerDatos = fuegos;
    let url = `depositos/fuegos/editar/${fuegos.idArma}`;
    this.router.navigate([url])
  }

  verDatosFuego(fuegos: FuegoImpl): void {
    this.fuegoVerDatos = fuegos;
  }
   onFuegoEliminar(fuego: FuegoImpl){
     this.armaService.deleteFuego(fuego.idArma).subscribe((res) =>{
       debugger;
       this.findArmas(this.depositoId);
     });

   }
  

}
