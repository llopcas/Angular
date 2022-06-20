import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [ //incluiremos todas las rutas de elementos que haya en la página, como Cliente, Contacto,....

//Se cargarán debajo de <router-outlet></router-outlet> del main

{
  path: "" , //ruta no indicada
  loadChildren: () => import ( "./home/home.module" ). then ( (m) => m.HomeModule),
},


{
  path: "depositos" ,
  loadChildren: () => import ( "src/app/depositos/depositos.module" ). then ( (m) => m.DepositosModule),
},

{
  path: "armas" ,
  loadChildren: () => import ( "src/app/armas/armas.module" ). then ( (m) => m.ArmasModule),
},

  {
    path: "not-found" ,
    component: NotFoundComponent,
  },
  {
    path: "**" , //cualquier valor que no este indicado
    redirectTo: "not-found" ,
  },
];  //AQUÍ ES DONDE IMPLEMENTO LAS RUTAS

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
