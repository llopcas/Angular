import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule} from '@angular/forms';

import { AuxiliarService } from '../service/auxiliar.service';
import { DepositosRoutingModule } from './depositos-routing.module';
import { DepositosComponent } from './depositos/depositos.component';
import { DepositoComponent } from './depositos/deposito/deposito.component';

import { DepositoFormComponent } from './deposito-form/deposito-form.component';
import { DepositoItemComponent } from './deposito-item/deposito-item.component';




@NgModule({
  declarations: [
    DepositosComponent,
    DepositoItemComponent,
    DepositoFormComponent,
    DepositoComponent,
   
  ],
  imports: [
    CommonModule,
    DepositosRoutingModule,
    FormsModule,
   
  ],
  providers: [AuxiliarService]
})
export class DepositosModule { }
