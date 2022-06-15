import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shell/footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from '../home/home/home.component';



@NgModule({
  declarations: [ShellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ShellComponent]
})
export class CoreModule { }
