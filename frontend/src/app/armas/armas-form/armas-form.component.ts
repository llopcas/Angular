import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { DepositoImpl } from 'src/app/depositos/models/deposito-impl';
import { DepositoService } from 'src/app/depositos/service/deposito.service';


import { environment } from 'src/environments/environment';
import { ArmaImpl } from '../models/arma-impl';
import { BlancaImpl } from '../models/blanca-impl';
import { FuegoImpl } from '../models/fuego-impl';

import { Tipo } from '../models/tipo';

import { FuegoService } from '../service/fuegoiservice';
import { BlancaService } from '../service/blanca.service';


@Component({
  selector: 'app-armas-form',
  templateUrl: './armas-form.component.html',
  styleUrls: ['./armas-form.component.css'],
})
export class ArmasFormComponent implements OnInit {

  public arma: ArmaImpl = new ArmaImpl('', 0, 0, '','');
  public fuego: FuegoImpl = new FuegoImpl('', 0, 0, '','',"",0);
  public blanca: BlancaImpl = new BlancaImpl('', 0, 0, '','',0);
  public armaForm: FormGroup;
  private host: string = environment.host;
  public urlEndPoint: string = `${this.host}armas`;
  
  public deposito: DepositoImpl[] = [];


  public tipos: Tipo[] = [
    { id: 0, description: 'Elige Tipo' },
    { id: 1, description: 'Arma Blanca' },
    { id: 2, description: 'Arma Fuego' },
  ];

  
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private depositoService: DepositoService,
    private fuegoService: FuegoService,
    private blancaService: BlancaService
  ) {
    this.armaForm = this.formBuilder.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      mass: ['', Validators.required],
      longitudEnMilimetros: [''],
      calibreEnMilimetros: [''],
      sistemaAccion: [''],
      deposito:['', Validators.required]
    });
  }
  

  ngOnInit(): void {
    this.depositoService.getDepositos().subscribe(
      (response) => {
        this.deposito = this.depositoService.extraerDepositos(response);
        debugger;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  get form() {
    return this.armaForm.controls;
  }

  public onSubmit() {
    debugger;

    this.submitted = true;

    const servicioEntity = this.armaForm.value;
    debugger;
    if (confirm('Realmente quiere añadir un nuevo elemento')) {
      debugger;
      if (!this.armaForm.invalid) {
        if (this.armaForm.value.type == 2) {
          const sger: FuegoImpl = new FuegoImpl(
            servicioEntity.name,
            servicioEntity.mass,
            0,
            servicioEntity.deposito,
            servicioEntity.url,
            servicioEntity.sistemaAccion,
            servicioEntity.calibreEnMilimetros
          );
          this.fuegoService.create(sger).subscribe(
            () => {
              console.log('OK');
            },
            (error: any) => {
              console.error(error);
            }
          );
        } else {
          const sjar: BlancaImpl = new BlancaImpl(
            servicioEntity.name,
            servicioEntity.mass,
            0,
            servicioEntity.deposito,
            servicioEntity.url,
            servicioEntity.longitudEnMilimetros
          );
          this.blancaService.create(sjar).subscribe(
            () => {
              console.log('OK');
            },
            (error) => {
              console.error(error);
            }
          );
        }
      }
    }

    //se para aqui si el formulario es invalido
    if (this.armaForm.invalid) {
      return;
    }
    //display si hay exito
    alert(
      'GUARDADO CON EXITO :-)' +
        JSON.stringify(this.armaForm.value, null, 4)
    );

    console.warn('Your order has been submitted', customerData);
  }

  OnReset() {
    this.submitted = false;
    this.armaForm.reset();
  }

  cambiaTipo(event: any) {
    const val = event.currentTarget.value;
    console.log(this.armaForm.value.type);
    debugger;
    if (this.armaForm.value.type == 2) {
      this.armaForm = this.formBuilder.group({
        type: [this.armaForm.value.type, Validators.required],
        name: [
          this.armaForm.value.name,
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
        mass: [
          this.armaForm.value.mass,
          Validators.required,
          Validators.min(0),
        ],
        longitudEnMilimetros: [''],
        calibreEnMilimetros: [
          this.armaForm.value.calibreEnMilimetros,
          Validators.required,
          Validators.min(0),
          Validators.max(10),
        ],
        sistemaAccion: [this.armaForm.value.sistemaAccion, Validators.required],
        deposito: [this.armaForm.value.deposito, Validators.required]
      });
    } else {
      this.armaForm = this.formBuilder.group({
        type: [this.armaForm.value.type, Validators.required],
        name: [
          this.armaForm.value.name,
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
        mass: [
          this.armaForm.value.mass,
          Validators.required,
          Validators.min(0),
        ],
        longitudEnMilimetros: [
          this.armaForm.value.longitudEnMilimetros,
          Validators.required,
        ],
        calibreEnMilimetros: [''],
        sistemaAccion: [''],
        deposito: [this.armaForm.value.deposito, Validators.required]
      });
    }
  }

}
function customerData(arg0: string, customerData: any) {
  throw new Error('Function not implemented.');
}
