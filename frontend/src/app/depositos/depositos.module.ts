import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositosRoutingModule } from './depositos-routing.module';
import { DepositosComponent } from './depositos/depositos.component';
import { DepositoFormComponent } from './deposito-form/deposito-form.component';
import { DepositoItemComponent } from './deposito-item/deposito-item.component';
import { AuxiliarService } from '../service/auxiliar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepositoComponent } from './depositos/deposito/deposito.component';
import { VerComponent } from './depositos/ver/ver.component';
import { NuevoComponent } from './depositos/nuevo/nuevo.component';


@NgModule({
  declarations: [
    DepositosComponent,
    DepositoComponent,
    DepositoItemComponent,
    DepositoFormComponent,
    VerComponent,
    NuevoComponent
  ],
  imports: [
    CommonModule,
    DepositosRoutingModule,
    FormsModule,
  ReactiveFormsModule  ],
    exports: [ DepositoComponent],
  providers: [AuxiliarService]
})
export class DepositosModule { }
