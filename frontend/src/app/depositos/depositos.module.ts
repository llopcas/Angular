import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositosRoutingModule } from './depositos-routing.module';
import { DepositosComponent } from './depositos/depositos.component';
import { DepositoFormComponent } from './deposito-form/deposito-form.component';
import { DepositoItemComponent } from './deposito-item/deposito-item.component';
import { AuxiliarService } from '../service/auxiliar.service';
import { FormsModule } from '@angular/forms';
import { DepositoComponent } from './depositos/deposito/deposito.component';


@NgModule({
  declarations: [
   DepositosComponent,
    DepositoComponent,
    DepositoItemComponent,
    DepositoFormComponent
  ],
  imports: [
    CommonModule,
    DepositosRoutingModule,
    FormsModule  ],
    exports: [ DepositoComponent],
  providers: [AuxiliarService]
})
export class DepositosModule { }
