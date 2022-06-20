import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

import { DepositoImpl } from '../models/deposito-impl';
import { DepositoService } from '../service/deposito.service';


@Component({
  selector: 'app-deposito-form',
  templateUrl:'./deposito-form.component.html',
  styleUrls: ['./deposito-form.component.css']
})
export class DepositoFormComponent implements OnInit {

  public deposito : DepositoImpl = new DepositoImpl(0,'','')
  //public servicioForm: FormGroup;

  

  constructor(
    private formBuilder: FormBuilder,
    private depositoService: DepositoService,
  ) {

  }

  ngOnInit(): void {
  }

  create(): void {

    this.depositoService.postDeposito(this.deposito);

  }
}
