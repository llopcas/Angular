import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlancasConsultarFormComponent } from './armas-consultar/blancas-consultar-form/blancas-consultar-form.component';
import { BlancasConsultarComponent } from './armas-consultar/blancas-consultar/blancas-consultar.component';
import { FuegosConsultarFormComponent } from './armas-consultar/fuegos-consultar-form/fuegos-consultar-form.component';
import { ArmasConsultarComponent } from './armas-consultar/armas-consultar.component';
import { FuegosConsultarComponent } from './armas-consultar/fuegos-consultar/fuegos-consultar.component';
import { ArmasFormComponent } from './armas/armas-form/armas-form.component';
import { ArmasComponent } from './armas/armas.component';
import { BlancaItemComponent } from './armas/blanca-item/blanca-item.component';
import { BlancaModificarComponent } from './armas/blanca-modificar/blanca-modificar.component';
import { FuegoItemComponent } from './armas/fuego-item/fuego-item.component';
import { FuegoModificarComponent } from './armas/fuego-modificar/fuego-modificar.component';
import { DepositosRoutingModule } from './depositos-routing.module';
import { DepositoFormComponent } from './depositos/deposito-form/deposito-form.component';
import { DepositoConsultarComponent } from './depositos/deposito-consultar/deposito-consultar.component';
import { DepositoItemComponent } from './depositos/deposito-item/deposito-item.component';
import { DepositoModificarComponent } from './depositos/deposito-modificar/deposito-modificar.component';
import { DepositosBuscadosComponent } from './depositos/depositos-buscados/depositos-buscados.component';
import { DepositosComponent } from './depositos/depositos.component';
import { FormularioBusquedaComponent } from './depositos/formulario-busqueda/formulario-busqueda.component';


@NgModule({
  declarations: [
    DepositosComponent,
    DepositoConsultarComponent,
    DepositoFormComponent,
    DepositoItemComponent,
    DepositoModificarComponent,
    ArmasComponent,
    BlancaItemComponent,
    BlancaModificarComponent,
    ArmasFormComponent,
    FuegoItemComponent,
    FuegoModificarComponent,
    ArmasConsultarComponent,
    BlancasConsultarComponent,
    BlancasConsultarFormComponent,
    FuegosConsultarComponent,
    FuegosConsultarFormComponent,
    FormularioBusquedaComponent,
    DepositosBuscadosComponent,
  ],
  imports: [
    CommonModule,
    DepositosRoutingModule, FormsModule,ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers:[],
  exports:[]
})
export class DepositosModule { }
