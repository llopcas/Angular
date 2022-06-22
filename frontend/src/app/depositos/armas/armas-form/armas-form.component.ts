import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faPencil, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { Deposito } from '../../models/deposito';
import { BlancaImpl } from '../../models/blanca-impl';
import { FuegoImpl } from '../../models/fuego-impl';
import { DepositoService } from '../../service/deposito.service';
import { ArmaService } from '../../service/arma.service';


@Component({
  selector: 'app-armas-form',
  templateUrl: './armas-form.component.html',
  styleUrls: ['./armas-form.component.css']
})
export class ArmasFormComponent implements OnInit {


  blanca: BlancaImpl = new BlancaImpl();
  fuego: FuegoImpl = new FuegoImpl();
  deposito:Deposito[]=[];
  formulario:number = 0;

  private host:string = environment.host;
  private urlEndpoint:string = `${this.host}depositos`


  constructor(
      private depositoService: DepositoService,
      private armaService: ArmaService,
      private router: Router,
      private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = this.cargarDeposito();
    this.blanca.deposito=`${this.urlEndpoint}/${id}`;
    this.fuego.deposito=`${this.urlEndpoint}/${id}`;
  }

  cargarDeposito(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onAddBlanca(): void {
    this.armaService.addBlanca(this.blanca).subscribe();
    let id: string = this.cargarDeposito();
    this.router.navigate([`/almacenes/editar/${id}`]);
  }

  onAddFuego(): void {
    this.armaService.addFuego(this.fuego).subscribe();
    let id: string = this.cargarDeposito();
    this.router.navigate([`/almacenes/editar/${id}`]);
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;

}
