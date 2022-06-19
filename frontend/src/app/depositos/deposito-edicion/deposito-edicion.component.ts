import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DepositoImpl } from '../models/deposito-impl';
import { DepositoService } from '../service/deposito.service';


@Component({
  selector: 'app-deposito-edicion',
  templateUrl: './deposito-edicion.component.html',
  styleUrls: ['./deposito-edicion.component.css']
})
export class DepositoEdicionComponent implements OnInit {
  public deposito: DepositoImpl = new DepositoImpl(0 ,"");

  
  public depositoForm: FormGroup;
  type: number = 0;
  id: number = 0;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private depositoService: DepositoService) {
      this.depositoForm = this.formBuilder.group({
        codigoDeposito: ['', Validators.required],
        // peso: ['', Validators.required],
        // longitudEnMilimetros: [''],
        // sistemaAccion: [''],
        // calibreEnMilimetros: ['' ],
      })
     }

  ngOnInit(): void {
    debugger;
    this.id = this.route.snapshot.params['id'];
    this.type = parseInt(this.route.snapshot.params['type']);
    console.log(this.id);
    console.log(this.type);




    this.depositoService.findById(this.id).subscribe(
      (service)=>{
        debugger;
        console.log(service);
        this.depositoForm = this.formBuilder.group({
          codigo: [service.codigoDeposito, Validators.required],
          // mass: [service.peso, Validators.required],
          // sistemaAccion: [service.sistemaAccion, Validators.required],
          // calibreEnMilimetros: [service.calibreEnMilimetros,Validators.required ],
        });
      },
     (error)=> {
      console.error(error);
     });

  }

  public onSubmit() {
    debugger;

    const depositoEntity = this.depositoForm.value;
    debugger;
    if (confirm('¿Realmente quiere modificar el elemento?')){
      debugger;
    if (!this.depositoForm.invalid) {

        const sger: DepositoImpl = new DepositoImpl(
        //  depositoEntity.id,
          depositoEntity.codigoDeposito,
          // servicioEntity.apellido,
          // servicioEntity.direcion,
          // servicioEntity.dni,
          // servicioEntity.email,
          // servicioEntity.ciudad,
          // servicioEntity.provincia,
          // servicioEntity.servicios ,
          depositoEntity.urlDeposito, );
          this.depositoService.update(sger,this.id ).subscribe(
            () => {
              debugger;
              console.log('OK');
            },
            (error:any) => {
              console.error(error);
            }

        );
      }
    }
    }
  }





