import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';

import { environment } from 'src/environments/environment';
import { Deposito } from '../models/deposito';
import { DepositoImpl } from '../models/deposito-impl';


@Injectable({
  providedIn: 'root'
})
export class DepositoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}depositos`;

  constructor(
  private http: HttpClient,
  private auxService: AuxiliarService) { }
  
  findById(serviceId: any) :Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${serviceId}`);
  }
  getDepositos(): Observable<any> {
  return this.http.get<any>(this.urlEndPoint);
  }

  extraerDepositos(respuestaApi: any): Deposito[] {
  const depositos: Deposito[] = [];
  respuestaApi._embedded.depositos.forEach((p: any) => {
  depositos.push(this.mapearDeposito(p));



  });
  return depositos;
  }

  mapearDeposito(depositoApi: any): DepositoImpl {
    
  return new DepositoImpl(depositoApi.codigoDeposito, depositoApi.id);
  }

  create(deposito: Deposito): void {
  console.log(`Se ha creado el deposito: ${JSON.stringify(deposito)}`);
  }

  postDeposito(deposito: DepositoImpl){
    this.http.post(this.urlEndPoint, deposito).subscribe();
  }
  update(empl: DepositoImpl, id: number) : Observable<any>  {
    return this.http.put<any>(`${this.urlEndPoint}/${id}`, empl);
  }

  deleteDeposito(codigoDepositoEliminar: string){
    this.http.delete(codigoDepositoEliminar).subscribe();
  }

  patchDeposito(deposito: DepositoImpl) {
    return this.http.patch<any>(`${this.urlEndPoint}/${deposito.getIdDeposito(deposito.urlDeposito)}`, deposito);
  }

  getDepositosPagina(pagina: number): Observable<any> {
  return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
