import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { ArmasRoutingModule } from './armas-routing.module';
import { ArmasComponent } from './armas/armas.component';

import { ArmasDepositoComponent } from './armas-deposito/armas-deposito.component';
import { ArmasFormComponent } from './armas-form/armas-form.component';
import { ArmasItemComponent } from './armas-item/armas-item.component';
import { BlancaItemComponent } from './blanca-item/blanca-item.component';
import { EdicionArmasComponent } from './edicion-armas/edicion-armas.component';
import { FuegoItemComponent } from './fuego-item/fuego-item.component';
import { BlancaComponent } from './blanca/blanca.component';
import { FuegoComponent } from './fuego/fuego.component';




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
  ],
  imports: [
    CommonModule,
    ArmasRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class ArmasModule { }
