import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlancasConsultarFormComponent } from './armas-consultar/blancas-consultar-form/blancas-consultar-form.component';
import { FuegosConsultarFormComponent } from './armas-consultar/fuegos-consultar-form/fuegos-consultar-form.component';
import { ArmasFormComponent } from './armas/armas-form/armas-form.component';
import { BlancaModificarComponent } from './armas/blanca-modificar/blanca-modificar.component';
import { FuegoModificarComponent } from './armas/fuego-modificar/fuego-modificar.component';
import { DepositoFormComponent } from './depositos/deposito-form/deposito-form.component';
import { DepositoConsultarComponent } from './depositos/deposito-consultar/deposito-consultar.component';
import { DepositosComponent } from './depositos/depositos.component';
import { FormularioBusquedaComponent } from './depositos/formulario-busqueda/formulario-busqueda.component';

const routes: Routes = [ {
  path: '',
  component: DepositosComponent
},
{
  path: 'formulario-deposito',
  component: DepositoFormComponent
},
{
  path: 'editar/:id',
  component: ArmasFormComponent
},
{
  path: 'editar/:id/formularioArma',
  component: ArmasFormComponent
},
{
  path: 'consultar/:id',
  component: DepositoConsultarComponent
},
{
  path: 'blancas/consultar/:id',
  component: BlancasConsultarFormComponent
},
{
  path: 'fuegos/consultar/:id',
  component: FuegosConsultarFormComponent
},
{
  path: 'blancas/editar/:id',
  component: BlancaModificarComponent
},
{
  path: 'fuegos/editar/:id',
  component: FuegoModificarComponent
},
{
  path: 'formulario-busqueda',
  component: FormularioBusquedaComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositosRoutingModule { }
