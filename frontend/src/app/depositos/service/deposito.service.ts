import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deposito } from '../models/deposito';
import { DepositoImpl } from '../models/deposito-impl';


@Injectable({
  providedIn: 'root'
})
export class DepositoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}depositos`;
  private urlEndPointTel: string = `${this.host}fuegos`;


constructor(
    private http: HttpClient,
) { }

getId(url: string):string{
      let posicionFinal: number = url.lastIndexOf('/');
      let numId:string = url.slice(posicionFinal + 1, url.length);
      return numId;
    }


getDepositos(): Observable<any> {
  return this.http.get<any>(this.urlEndPoint);
  }

mapearDeposito(depositoApi: any): DepositoImpl {
  let deposito: Deposito = new DepositoImpl();
  deposito.idDeposito= this.getId(depositoApi._links.deposito.href);
  deposito.codigoDeposito= depositoApi.codigoDeposito;
  // deposito.urlDeposito=depositoApi._links.deposito.href;
  return deposito;
}

extraerDepositos(respuestaApi: any): Deposito[] {
  const depositos: Deposito[] = [];
  respuestaApi._embedded.depositos.forEach((a: any) => {
  depositos.push(this.mapearDeposito(a));
  });
  return depositos;
}

crearDeposito(deposito: Deposito): Observable<any>{
  return this.http.post(`${this.urlEndPoint}`, deposito).pipe(
    catchError((e) =>{
      if(e.status ===400) {
        return throwError(()=> new Error (e));
      }
      if(e.roor.mensaje){
        console.error(e.error.mensaje);
      }
      return throwError(()=> new Error(e));
    })
    );
}

deleteDeposito(id: string): Observable<Deposito> {
  return this.http
    .delete<Deposito>(`${this.urlEndPoint}/${id}`).pipe(
    catchError((e) =>{
      if(e.status ===400) {
        return throwError(()=> new Error (e));
      }
      if(e.roor.mensaje){
        console.error(e.error.mensaje);
      }
        return throwError(()=> new Error(e));
      })
    );
}


updateDeposito(deposito:Deposito): Observable<any>{
  return this.http.patch<any>(`${this.urlEndPoint}/${deposito.idDeposito}`, deposito).pipe(
    catchError((e) => {
      if (e.status === 400) {
        return throwError(() => new Error(e));
      }
      if (e.error.mensaje) {
        console.error(e.error.mensaje);
      }
      return throwError(() => new Error(e));
      })
    );
}

getDeposito(id:string): Observable<any>{
  return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
    catchError((e) => {
      if (e.status === 400) {
        return throwError(() => new Error(e));
      }
      if (e.error.mensaje) {
        console.error(e.error.mensaje);
      }
      return throwError(() => new Error(e));
    })
  );
}

getDepositosBuscados(sistemaAccion:string, calibreEnMilimetros:number): Observable<any>{
  return this.http.get<any>(`${this.host}fuegos/search/buscar-armas?sistemaAccion=${sistemaAccion}&calibreEnMilimetros=${calibreEnMilimetros}`).pipe(
    catchError((e) => {
      if (e.status === 400) {
        return throwError(() => new Error(e));
      }
      if (e.error.mensaje) {
        console.error(e.error.mensaje);
      }
      return throwError(() => new Error(e));
    })
  );
}
extraerDepositosMetodo(respuestaApi: any): Deposito[] {
  const depositos: Deposito[] = [];
  respuestaApi._embedded.depositos.forEach((a: any) => {
  depositos.push(this.mapearDeposito(a));
  });
  return depositos;
}

}
