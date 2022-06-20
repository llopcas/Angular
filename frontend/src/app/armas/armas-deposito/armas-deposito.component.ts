import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArmaImpl } from '../models/arma-impl';
import { BlancaImpl } from '../models/blanca-impl';
import { FuegoImpl } from '../models/fuego-impl';
import { ArmasDepositoService } from '../service/arma-deposito.service';
import { ArmaService } from '../service/arma.service';
import { BlancaService } from '../service/blanca.service';
import { FuegoService } from '../service/fuegoiservice';



@Component({
  selector: 'app-armas-deposito',
  templateUrl: './armas-deposito.component.html',
  styleUrls: ['./armas-deposito.component.css']
})
export class ArmasDepositoComponent implements OnInit {
  @Input() arma: ArmaImpl = new ArmaImpl(' ', 0, 0,'','');
  arma$: Observable<any> = new Observable<any>();
  todosArmas: ArmaImpl[] = [];
  public name: string = '';
  public fuego: FuegoImpl = new FuegoImpl('', 0, 0,'' , '','', 0);
  public blanca: BlancaImpl = new BlancaImpl('', 0, 0, '', '', 0);


  constructor(
    private activateRoute: ActivatedRoute,
    private armaService: ArmaService,
   private armasDepositoService: ArmasDepositoService,
   private blancaService: BlancaService,
   private fuegoService: FuegoService,

    ) { }

  ngOnInit(): void {
    this.arma$ = this.cargarArma();
  }

   cargarArma(): any {
    this.todosArmas = [];
    console.log('id = ', this.activateRoute.snapshot.params['id']);
    this.name = this.activateRoute.snapshot.params['name'];
    this.armasDepositoService
      .getArmaDeposito(this.activateRoute.snapshot.params['id'])
      .subscribe(
        (user) => {
          console.log(user);
          if (user._embedded.sangres) {
            user._embedded.sangres.forEach((a: any) => {
              debugger;
              const urlSelf = a._links.self.href;
              const url = urlSelf.split('/');
              const id = parseInt(url[url.length - 1]);
              a.tipo = 2;
              a.id = id;
              this.todosArmas.push(a);
            });
          }
          if (user._embedded.blancas) {
            user._embedded.orinas.forEach((o: any) => {
              const urlSelf = o._links.self.href;
              const url = urlSelf.split('/');
              const id = parseInt(url[url.length - 1]);
              o.tipo = 1;
              o.id = id;
              this.todosArmas.push(o);
            });
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }
  onDepositoEliminar(arma: ArmaImpl) {
    if (arma.tipo === 2) {
      this.fuegoService.deleteFuego(arma.id).subscribe((response) => {
        this.cargarArma();
      });
    } else {
      this.blancaService.deleteBlanca(arma.id).subscribe((response) => {
        this.cargarArma();
      });
    }
  }
  verArma(arma: ArmaImpl) {
    console.log(arma);
  }
   
}
