import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlancaImpl } from '../../models/blanca-impl';
import { ArmaService } from '../../service/arma.service';


@Component({
  selector: 'app-blancas-consultar-form',
  templateUrl: './blancas-consultar-form.component.html',
  styleUrls: ['./blancas-consultar-form.component.css']
})
export class BlancasConsultarFormComponent implements OnInit {

  blanca: BlancaImpl = new BlancaImpl();

  constructor(private armaService: ArmaService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarBlanca();
    this.armaService.getBlanca(id).subscribe(response =>
      this.blanca = this.armaService.mapearBlanca(response));
  }


  cargarBlanca(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
