import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoDepositoRoutingModule } from './nuevo-deposito-routing.module';
import { DepositoComponent } from './deposito/deposito.component';


@NgModule({
  declarations: [
    DepositoComponent
  ],
  imports: [
    CommonModule,
    NuevoDepositoRoutingModule
  ]
})
export class NuevoDepositoModule { }
