import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { BlancaImpl } from '../models/blanca-impl';
import { FuegoImpl } from '../models/fuego-impl';
import { BlancaService } from '../service/blanca.service';
import { FuegoService } from '../service/fuego.service';


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
        price: ['', Validators.required],
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
          calibreEnMilimetros: [service.calibreMilimetros, Validators.required],
          sistemaAccion: [service.sistemaAccion,Validators.required ],
        });
      },
     (error)=> {
      console.error(error);
     });
    }else{


      this.blancaService.findById(this.id).subscribe(
        (service: { nombre: any; peso: any; longitudEnMilimetros: { toString: () => any; }; })=>{
          debugger;
          console.log(service);

          this.armaForm = this.formBuilder.group({
            name: [service.nombre, Validators.required],
            mass: [service.peso, Validators.required],
            longitudEnMilimetros: [service.longitudEnMilimetros.toString() , Validators.required],
          });
        },
       (error: any)=> {
        console.error(error);
       });
    }
  }

  public onSubmit() {
    debugger;

    const armaEntity = this.armaForm.value;
    debugger;
    if (confirm('Realmente quiere añadir un nuevo elemento')){
      debugger;
    if (!this.armaForm.invalid) {
      if (this.type == 2) {
        const sger: FuegoImpl = new FuegoImpl(
          armaEntity.name,
          armaEntity.mass,
          0,
          0,
          armaEntity.url,
          armaEntity.sistemaAccion ,
          armaEntity.calibreEnMilimetros );
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
          armaEntity.name,
          armaEntity.mass,
          0,
          0,
          armaEntity.url,
          armaEntity.longitudEnMilimetros,
        );
        this.blancaService.update(sjar, this.id).subscribe(
          () => {
            debugger;
            console.log('OK');
          },
          (error: any) => {
            console.error(error);
          }
        );
      }
    }
    }
  }


}


