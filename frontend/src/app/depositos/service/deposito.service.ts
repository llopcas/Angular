import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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

    // findById(serviceId: any) :Observable<any> {
    //   return this.http.get<any>(`${this.urlEndPoint}/${serviceId}`);
    // }
  getDepositos(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerDepositos(respuestaApi: any): Deposito[] {
    const depositos: Deposito[] = [];
    respuestaApi._embedded.depositos.forEach((p: any) => {   //mirar si fallo aqui
      depositos.push(this.mapearDepositos(p));

    });
    return depositos;
  }

  mapearDepositos(depositoApi: any): DepositoImpl {
    debugger;
    const url = depositoApi._links.self.href;
    const aux = url.split('/');
    const id = parseInt(aux[aux.length-1]);

 return new DepositoImpl(
  id,
  depositoApi.codigoDeposito,
  depositoApi.url)


  }

  create(deposito: Deposito): void {
    console.log(`Se ha creado un nuevo empleado: ${JSON.stringify(deposito)}`);
  }
  postDeposito(deposito: DepositoImpl){
    this.http.post(this.urlEndPoint, deposito).subscribe();
  }
  update(empl: DepositoImpl, id: number) : Observable<any>  {
    return this.http.put<any>(`${this.urlEndPoint}/${id}`, empl);
  }

  getDepositosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
  patchDeposito(deposito: DepositoImpl) {
    return this.http.patch<any>(`${this.urlEndPoint}/${deposito.id}`, deposito);
  }

  deleteDeposito(id: number): Observable<Deposito> {
    const url = `${this.urlEndPoint}/${id}`;
    ;
    return this.http.delete<any>(url);
    
  }


}
