import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArmasRoutingModule } from './armas-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';

import { FuegoComponent } from './fuego/fuego.component';
import { FuegoItemComponent} from './fuego-item/fuego-item.component';


import {HttpClientModule } from '@angular/common/http';

import { SeItemComponent } from './armas-deposito/se-item/se-item.component'
import { BlancaComponent } from './blanca/blanca.component';
import { BlancaItemComponent } from './blanca-item/blanca-item.component';
import { ArmasComponent } from './armas/armas.component';
import { ArmasItemComponent } from './armas-item/armas-item.component';
import { EdicionArmasComponent } from './edicion-armas/edicion-armas.component';
import { ArmasDepositoComponent } from './armas-deposito/armas-deposito.component';
import { ArmasFormComponent } from './armas-form/armas-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ArmasComponent,
    ArmasItemComponent,
    FuegoComponent,
    FuegoItemComponent,
    BlancaItemComponent,
    BlancaComponent,
    ArmasFormComponent,
    ArmasDepositoComponent,
    EdicionArmasComponent,
    SeItemComponent,

  ],
  imports: [
    CommonModule,
    ArmasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
   CommonModule,

  ],
  providers: [AuxiliarService],
  bootstrap: []
})
export class ArmasModule { }
