import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaArmaRoutingModule } from './nueva-arma-routing.module';
import { ArmasComponent } from './armas/armas.component';


@NgModule({
  declarations: [
    ArmasComponent,
    
  ],
  imports: [
    CommonModule,
    NuevaArmaRoutingModule
  ]
})
export class NuevaArmaModule { }
