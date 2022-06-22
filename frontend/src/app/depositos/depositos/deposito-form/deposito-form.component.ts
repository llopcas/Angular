import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepositoImpl } from '../../models/deposito-impl';
import { DepositoService } from '../../service/deposito.service';


@Component({
  selector: 'app-deposito-form',
  templateUrl: './deposito-form.component.html',
  styleUrls: ['./deposito-form.component.css']
})
export class DepositoFormComponent implements OnInit {
  deposito: DepositoImpl = new DepositoImpl();

  constructor(private depositoService: DepositoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.depositoService.crearDeposito(this.deposito).subscribe();
    this.router.navigate(['/depositos']);
  }

}
