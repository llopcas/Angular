import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { DepositosModule } from './depositos/depositos.module';
import { ArmasModule } from './armas/armas.module';






@NgModule({
  declarations: [  //lugar donde declaro cada uno de los componentes de la aplicación
    AppComponent,
  ],
  imports: [   //importo los elementos que tienen que aparecer al principio, en cada import, aparecen los modulos que cualgan de este módulo
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DepositosModule,
    ArmasModule

  ],
  providers: [], //en servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
