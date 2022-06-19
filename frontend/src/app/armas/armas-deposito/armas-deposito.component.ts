import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArmaDepositoService } from '../service/arma-deposito.service';



@Component({
  selector: 'app-armas-deposito',
  templateUrl: './armas-deposito.component.html',
  styleUrls: ['./armas-deposito.component.css']
})
export class ArmasDepositoComponent implements OnInit {
  arma$: Observable<any> = new Observable<any>();

  constructor(
    private activateRoute: ActivatedRoute,
    
    private armaDepositoService: ArmaDepositoService) { }

  ngOnInit(): void {
    this.arma$ = this.cargarArma();
  }

  cargarArma(): any {

    console.log('id = ', this.activateRoute.snapshot.params['id']);
   this.armaDepositoService.getArmaDeposito(this.activateRoute.snapshot.params['id']).subscribe(
    (user)=>{
      console.log(user);
    },
    (error)=> {console.error(error);}   );
  }
}
