import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPencilAlt, faCirclePlus, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Deposito } from '../../models/deposito';
import { FuegoImpl } from '../../models/fuego-impl';
import { DepositoService } from '../../service/deposito.service';
import { ArmaService } from '../../service/arma.service';


@Component({
  selector: 'app-fuego-modificar',
  templateUrl: './fuego-modificar.component.html',
  styleUrls: ['./fuego-modificar.component.css']
})
export class FuegoModificarComponent implements OnInit {

  fuego: FuegoImpl = new FuegoImpl();
  depositos: Deposito[] = [];

  constructor(private armaService: ArmaService,
              private depositoService: DepositoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarFuego();
    this.armaService.getFuego(id).subscribe(res =>
      this.fuego = this.armaService.mapearFuego(res));
    this.depositoService.getDepositos().subscribe((response) =>
      this.depositos = this.depositoService.extraerDepositos(response));
  }

  cargarFuego(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onEditarFuego(): void {
    this.armaService.updateFuego(this.fuego).subscribe();
  }


  pencil=faPencilAlt;
  plus=faCirclePlus;
  cambio=faPenNib;

}
