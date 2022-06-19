import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositoEdicionComponent } from './deposito-edicion/deposito-edicion.component';
import { DepositoFormComponent } from './deposito-form/deposito-form.component';
import { DepositosComponent } from './depositos/depositos.component';
import { NuevoComponent } from './depositos/nuevo/nuevo.component';

const routes: Routes = [
  {
    path:'',
  component: DepositosComponent,

  children: [
    {
      path: 'nuevo', component: NuevoComponent
    },

  ]

  },
  {
    path:'deposito-form',
  component: DepositoFormComponent,
  },
  {
    path:'deposito-edicion/:id',
  component: DepositoEdicionComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositosRoutingModule { }
