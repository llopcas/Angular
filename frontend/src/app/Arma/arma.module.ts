import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArmaRoutingModule } from './arma-routing.module';
import { ArmasComponent } from './armas/armas.component';


@NgModule({
  declarations: [
    ArmasComponent,

  ],
  imports: [
    CommonModule,
    ArmaRoutingModule
  ]
})
export class ArmaModule { }
