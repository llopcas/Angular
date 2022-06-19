import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { ArmaImpl } from '../models/arma-impl';
import { BlancaImpl } from '../models/blanca-impl';
import { FuegoImpl } from '../models/fuego-impl';
import { Tipo } from '../models/tipo';
import { BlancaService } from '../service/blanca.service';
import { FuegoService } from '../service/fuego.service';

@Component({
  selector: 'app-armas-form',
  templateUrl: './armas-form.component.html',
  styleUrls: ['./armas-form.component.css'],
})
export class ArmasFormComponent implements OnInit {
  public arma: ArmaImpl = new ArmaImpl('', 0, 0, 0 ,'');
  public armaForm: FormGroup;

  public tipos: Tipo[] = [
    { id: 0, description: 'Elige Arma' },
    { id: 1, description: 'Blanca' },
    { id: 2, description: 'Fuego' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private fuegoService: FuegoService,
    private blancaService: BlancaService,

  ) {
    this.armaForm = this.formBuilder.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      mass: ['', Validators.required],
      clibreEnMilimetros: [''],
      sistemaAccion: [''],
      longitudEnMilimetros: ['' ],
    });
  }

  ngOnInit(): void {}

  public onSubmit() {
    debugger;

    const armaEntity = this.armaForm.value;
    debugger;
    if (confirm('Realmente quiere añadir un nuevo elemento')){
      debugger;
    if (!this.armaForm.invalid) {
      if (this.armaForm.value.type == 2) {
        const sger: FuegoImpl = new FuegoImpl(
          armaEntity.name,
          armaEntity.mass,
          0,
          armaEntity.url,
          armaEntity.sistemaAccion ,
          armaEntity.calibreEnMilimetros, );
          this.fuegoService.create(sger).subscribe(
            () => {
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
          armaEntity.url,
          armaEntity.longitudEnMilimetros
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
  }

  cambiaTipo(event: any) {
    const val = event.currentTarget.value;
    console.log(this.armaForm.value.type);
    debugger;
    if (this.armaForm.value.type == 2) {
      this.armaForm = this.formBuilder.group({
        type: [this.armaForm.value.type, Validators.required],
        name: [this.armaForm.value.name, Validators.required],
        mass: [this.armaForm.value.mass, Validators.required],
       longitusEnMilimetros: [''],
        sistemaAccion: [this.armaForm.value.sistemaAccion,Validators.required],
        calibreEnMilimetros: [this.armaForm.value.calibreEnMilimetros,Validators.required ],
      });
    }else{
      this.armaForm = this.formBuilder.group({
        type: [this.armaForm.value.type, Validators.required],
        name: [this.armaForm.value.name, Validators.required],
        mass: [this.armaForm.value.mass, Validators.required],
        longitudEnMilimetros: [this.armaForm.value.longitudEnMilimetros, Validators.required],
        sistemaAccion: [''],
        calibreEnMilimetros: ['' ],
      });
    }
  }

  /* armaForm: FormGroup;
  hasError = false;
  message: string;
  submit = false;

  constructor(private formBuilder: FormBuilder,
    private armaService: armaService) { }

  ngOnInit() {
    this.armaForm = this.formBuilder.group({
      name: ['', Validators.required],
      acronym: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.armaForm;
  }

  onSubmit() {
    this.submit = true;
    if (!this.armaForm.invalid) {
      const armasEntity = this.armasForm.value;

      const formData: FormData = new FormData();
      formData.append('name', armasEntity.name);
      formData.append('acronym', armasEntity.acronym);

      this.armasService.addArma(formData).subscribe(
        (res: MessageResponse) => {
          this.setMessage(res);
        },
        (res: MessageResponse) => {
          this.setMessage(res);
        }
      );
    }
  }

  private setMessage(res: MessageResponse) {
    this.hasError = res.hasError;
    this.message = res.message;
  }*/
}
