import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArmasComponent } from './armas/armas.component';
import { BlancaIdComponent } from './armas/blanca/blanca-id/blanca-id.component';
import { BlancaComponent } from './armas/blanca/blanca.component';
import { FuegoIdComponent } from './armas/fuego/fuego-id/fuego-id.component';
import { FuegoComponent } from './armas/fuego/fuego.component';
import { NuevoComponent } from './armas/nuevo/nuevo.component';
import { VerComponent } from './armas/ver/ver.component';

const routes: Routes = [
  {
    path: '' ,
    component: ArmasComponent,
    children: [
      {
        path: 'nuevo', component: NuevoComponent
      },
      {
        path: 'ver', component: VerComponent
      },
  
      {
        path: 'fuego', component: FuegoComponent
      },
      {
        path: 'fuego/:Idfuego', component: FuegoIdComponent
      },
      {
      path: 'blanca', component: BlancaComponent
    },
    {
      path: 'blanca/:Idblanca', component: BlancaIdComponent
    }
  ]
   }
  ]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArmasRoutingModule { }
