import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponent } from '../depositos/depositos/nuevo/nuevo.component';
import { ArmasDepositoComponent } from './armas-deposito/armas-deposito.component';
import { ArItemComponent } from './armas-deposito/se-item/ar-item.component';
import { ArmasFormComponent } from './armas-form/armas-form.component';

import { ArmasComponent } from './armas/armas.component';
import { BlancaComponent } from './blanca/blanca.component';
import { EdicionArmasComponent } from './edicion-armas/edicion-armas.component';
import { FuegoComponent } from './fuego/fuego.component';

const routes: Routes = [
  {
    path: '' ,
    component: ArmasComponent,
    
     
    },
    {
      path: 'armas-form',
      component: ArmasFormComponent,
    },
    {
      path: 'edicion-armas/:id/:type',
      component: EdicionArmasComponent,
    },
    {
      path:'fuegos/:id',
      component:FuegoComponent
    },
    {
      path: 'blancas/:id',
      component:BlancaComponent
    },
  
  
    {
      path: 'armas-deposito/:id',
      component: ArmasDepositoComponent,
    }, 
    {
      path: 'armas-deposito/:id',
      component: ArmasDepositoComponent,
      children: [
        {
          path: 'arma-item', component: ArItemComponent
        }
      ]
    },
  ]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArmasRoutingModule { }
