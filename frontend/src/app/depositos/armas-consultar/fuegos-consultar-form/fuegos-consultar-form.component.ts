import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuegoImpl } from '../../models/fuego-impl';
import { ArmaService } from '../../service/arma.service';


@Component({
  selector: 'app-fuegos-consultar-form',
  templateUrl: './fuegos-consultar-form.component.html',
  styleUrls: ['./fuegos-consultar-form.component.css']
})
export class FuegosConsultarFormComponent implements OnInit {

  fuego: FuegoImpl = new FuegoImpl();

  constructor(private armaService: ArmaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarFuego();
    this.armaService.getFuego(id).subscribe(response =>
      this.fuego = this.armaService.mapearFuego(response));
  }

  cargarFuego(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
