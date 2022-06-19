import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositosRoutingModule } from './depositos-routing.module';
import { DepositosComponent } from './depositos/depositos.component';
import { DepositoFormComponent } from './deposito-form/deposito-form.component';
import { DepositoItemComponent } from './deposito-item/deposito-item.component';
import { AuxiliarService } from '../service/auxiliar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepositoComponent } from './depositos/deposito/deposito.component';

import { NuevoComponent } from './depositos/nuevo/nuevo.component';
import { DepositoEdicionComponent } from './deposito-edicion/deposito-edicion.component';


@NgModule({
  declarations: [
    DepositosComponent,
    NuevoComponent,
    DepositoComponent,
    DepositoItemComponent,
    DepositoFormComponent,
    DepositoEdicionComponent
   
  ],
  imports: [
    CommonModule,
    DepositosRoutingModule,
    FormsModule,
  ReactiveFormsModule  ],
   
  providers: [AuxiliarService]
})
export class DepositosModule { }
