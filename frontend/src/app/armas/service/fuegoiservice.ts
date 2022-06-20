import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { FuegoImpl } from '../models/fuego-impl';


@Injectable({
  providedIn: 'root',
})
export class FuegoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}fuegos`;

  constructor(private http: HttpClient, private auxService: AuxiliarService) {}

  getFuego(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  findById(serviceId: any) :Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${serviceId}`);
  }

  extraerFuego(respuestaApi: any): FuegoImpl[] {
    const fuego: FuegoImpl[] = [];
    respuestaApi._embedded.fuegos.forEach((ge: any) => {
      fuego.push(this.mapearFuego(ge));
    });
    return fuego;
  }

  mapearFuego(fuegoApi: any): FuegoImpl {
    const url = fuegoApi._links.self.href;
    const aux = url.split('/');
    const id = (aux[aux.length-1]);
    return new FuegoImpl(
      fuegoApi.nombre,
      fuegoApi.peso,
      id,
      url,
      fuegoApi.urlArma,
      fuegoApi.sistemaAccion,
      fuegoApi.calibreEnMilimetros
    );
  }

  create(arma: FuegoImpl):  Observable<any>  {
    const url = `${this.host}fuegos`;

    debugger;
    return this.http.post<any>(url, arma);
  }
  update(fue: FuegoImpl, id: number) : Observable<any>  {
    return this.http.put<any>(`${this.urlEndPoint}/${id}`, fue);
  }

  deleteFuego(id: number): Observable<any>{
    return this.http.delete<FuegoImpl>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );


  }

  getFuegoPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
