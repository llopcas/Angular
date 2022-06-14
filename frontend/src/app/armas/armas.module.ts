import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { ArmasRoutingModule } from './armas-routing.module';
import { ArmasComponent } from './armas/armas.component';
import { BlancaIdComponent } from './armas/blanca/blanca-id/blanca-id.component';
import { BlancaComponent } from './armas/blanca/blanca.component';
import { FuegoIdComponent } from './armas/fuego/fuego-id/fuego-id.component';
import { FuegoComponent } from './armas/fuego/fuego.component';
import { NuevoComponent } from './armas/nuevo/nuevo.component';
import { VerComponent } from './armas/ver/ver.component';
import { CrearArmasComponent } from './crear-armas/crear-armas.component';
import { VerTodasArmasComponent } from './ver-todas-armas/ver-todas-armas.component';




@NgModule({
  declarations: [
    ArmasComponent,
    FuegoComponent,
    BlancaComponent,
    FuegoIdComponent,
    BlancaIdComponent,
    NuevoComponent,
    VerComponent,
    VerTodasArmasComponent,
    CrearArmasComponent,
  ],
  imports: [
    CommonModule,
    ArmasRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class ArmasModule { }
