import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositoFormComponent } from './deposito-form/deposito-form.component';
import { DepositosComponent } from './depositos/depositos.component';

const routes: Routes = [
  {     path: '',     
  component: DepositosComponent   },
  {
    path: 'formulario',
    component: DepositoFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositosRoutingModule { }
