import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmasModule } from './armas/armas.module';
import { CoreModule } from './core/core.module';
import { DepositosModule } from './depositos/depositos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    DepositosModule,
    ArmasModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
