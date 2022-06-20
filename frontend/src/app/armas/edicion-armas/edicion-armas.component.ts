import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { BlancaImpl } from '../models/blanca-impl';
import { FuegoImpl } from '../models/fuego-impl';
import { FuegoService } from '../service/fuegoiservice';
import { BlancaService } from '../service/blanca.service';


@Component({
  selector: 'app-edicion-armas',
  templateUrl: './edicion-armas.component.html',
  styleUrls: ['./edicion-armas.component.css']
})
export class EdicionArmasComponent implements OnInit {

  public armaForm: FormGroup;
  type: number = 0;
  id: number = 0;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private fuegoService: FuegoService,
    private blancaService: BlancaService) {
      this.armaForm = this.formBuilder.group({
        name: ['', Validators.required],
        mass: ['', Validators.required],
        longitudEnMilimetros: [''],
        calibreEnMilimetros: [''],
        sistemaAccion: ['' ],
      })
     }

  ngOnInit(): void {
    debugger;
    this.id = this.route.snapshot.params['id'];
    this.type = parseInt(this.route.snapshot.params['type']);
    console.log(this.id);
    console.log(this.type);

    if(this.type === 2){


    this.fuegoService.findById(this.id).subscribe(
      (service)=>{
        debugger;
        console.log(service);
        this.armaForm = this.formBuilder.group({
          name: [service.nombre, Validators.required],
          mass: [service.peso, Validators.required],
          calibreEnMilimetros: [service.calibreEnMilimetros, Validators.required],
          sistemaAccion: [service.sistemaAccion,Validators.required ],
        });
      },
     (error)=> {
      console.error(error);
     });
    }else{


      this.blancaService.findById(this.id).subscribe(
        (service)=>{
          debugger;
          console.log(service);

          this.armaForm = this.formBuilder.group({
            name: [service.nombre, Validators.required],
            mass: [service.peso, Validators.required],
            longitudEnMilimetros: [service.longitudEnMilimetros , Validators.required],
          });
        },
       (error)=> {
        console.error(error);
       });
    }
  }

  public onSubmit() {
    debugger;

    const servicioEntity = this.armaForm.value;
    debugger;
    if (confirm('¿Realmente quiere modificar el Arma?')){
      debugger;
    if (!this.armaForm.invalid) {
      if (this.type == 2) {
        const sger: FuegoImpl = new FuegoImpl(
          servicioEntity.name,
          servicioEntity.mass,
          0,
          servicioEntity.deposito,
          servicioEntity.url,
          servicioEntity.sistemaAccion ,
          servicioEntity.calibreEnMilimetros, );
          this.fuegoService.update(sger,this.id ).subscribe(
            () => {
              debugger;
              console.log('OK');
            },
            (error:any) => {
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
        this.blancaService.update(sjar, this.id).subscribe(
          () => {
            debugger;
            console.log('OK');
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
    }
  }


}


