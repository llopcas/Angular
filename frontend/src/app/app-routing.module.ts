import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/shell/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: 'armas',
    loadChildren: () => import("src/app/nueva-arma/nueva-arma.module").then((m) => m.NuevaArmaModule),
  },
  {
    path: 'depositos',
    loadChildren: () => import("src/app/nuevo-deposito/nuevo-deposito.module").then((m) => m.NuevoDepositoModule),
  },

  {
    path: "not-found",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
