import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { BlancaImpl } from '../models/blanca-impl';


@Injectable({
  providedIn: 'root',
})
export class BlancaService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}blancas`;

  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

  getBlanca(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  findById(serviceId: any) :Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${serviceId}`);
  }

  extraerBlanca(respuestaApi: any): BlancaImpl[] {
    const blanca: BlancaImpl[] = [];
    debugger;
    respuestaApi._embedded.blancas.forEach((ja: any) => {
      blanca.push(this.mapearBlanca(ja));
    });
    debugger;
    return blanca;
  }

  mapearBlanca(blancaAPI: any): BlancaImpl {
    debugger;
    const url = blancaAPI._links.self.href;
    const aux = url.split('/');
    const id = (aux[aux.length - 1]);
    return new BlancaImpl(
      blancaAPI.nombre,
      blancaAPI.peso,
      id,
      blancaAPI.urlArma,
      blancaAPI.longitudEnMetros,
    );
  }

  create(arma: BlancaImpl):  Observable<any>  {
    const url = `${this.host}blancas`;

    debugger;
    return this.http.post<any>(url, arma);
  }

  update(sjar: BlancaImpl, id: number) : Observable<any>  {
    return this.http.put<any>(`${this.urlEndPoint}/${id}`, sjar);
  }

  deleteBlanca(id: number): Observable<any>{
    return this.http.delete<BlancaImpl>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );


  }

  getBlancaPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
