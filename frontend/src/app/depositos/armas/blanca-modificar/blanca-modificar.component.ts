import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ) { }

  ngOnInit(): void {
    let id: string = this.cargarBlanca();
    this.armaService.getBlanca(id).subscribe(response=>
      this.blanca = this.armaService.mapearBlanca(response));
      this.depositoService.getDepositos().subscribe((r)=>
      this.depositos=this.depositoService.extraerDepositos(r));
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
