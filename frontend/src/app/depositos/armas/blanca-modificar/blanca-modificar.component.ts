import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCirclePlus, faPencilAlt, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Deposito } from '../../models/deposito';
import { BlancaImpl } from '../../models/blanca-impl';
import { DepositoService } from '../../service/deposito.service';
import { ArmaService } from '../../service/arma.service';


@Component({
  selector: 'app-blanca-modificar',
  templateUrl: './blanca-modificar.component.html',
  styleUrls: ['./blanca-modificar.component.css']
})
export class BlancaModificarComponent implements OnInit {



  blanca: BlancaImpl= new BlancaImpl();
  depositos: Deposito[]=[];


  constructor(
    private depositoService: DepositoService,
    private armaService: ArmaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
    this.armaService.getBlanca(id).subscribe(res =>      {
      debugger;
      this.blanca = this.armaService.mapearBlanca(res);
  });
}

  cargarBlanca(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onModificarBlanca(): void {
    this.armaService.updateBlanca(this.blanca).subscribe();
  }


  pencil=faPencilAlt;
  plus=faCirclePlus;
  cambio=faPenNib;
}
