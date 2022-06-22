import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlancaImpl } from '../models/blanca-impl';
import { FuegoImpl } from '../models/fuego-impl';



@Injectable({
  providedIn: 'root'
})
export class ArmaService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}depositos`;
  private urlEndPointLav: string = `${this.host}blancas`;
  private urlEndPointTel: string = `${this.host}fuegos`;


  constructor(
    private http: HttpClient,
    ) { }


  getArmasAlmacenados(id:string): Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}/${id}/armas`).pipe(
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

  mapearBlanca(blancaApi: any): BlancaImpl {

    let blancaNueva: BlancaImpl = new BlancaImpl();

    // blancNueva.deposito=depositoApi._links.deposito.href;
    // blancaNueva.calificacionEnergetica=blancaApi.calificacionEnergetica;
    blancaNueva.longitudEnMilimetros= blancaApi.longitudEnMilimetros;
    blancaNueva.nombre= blancaApi.nombre;
    // blancaNueva.modelo= blancaApi.modelo;
    blancaNueva.peso= blancaApi.peso;
    // lavadoraNueva.urlProducto=lavadoraApi._links.self.href;
    blancaNueva.idArma=this.getId(blancaApi._links.blanca.href);
    return blancaNueva;
  }

  extraerBlancas(respuestaApi: any): BlancaImpl[]{
    const blancas: (BlancaImpl[]) = [];
    let respuesta :any = respuestaApi._embedded.blancas;
    if( respuesta === undefined){
      console.info('No hay Armas Blancas en el Deposito');
    }
    else{
      respuestaApi._embedded.blancas.forEach((p:any)=> {
        blancas.push(this.mapearBlanca(p));
      });
    }
    return blancas;
  }

   //post
   addBlanca(blanca: BlancaImpl): Observable <any>{
    return this.http.post(this.urlEndPointLav, blanca).pipe(
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

  //delete
  deleteBlanca(id: string): Observable <any>{
    return this.http.delete(`${this.urlEndPointLav}/${id}`).pipe(
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
//patch
  updateBlanca(blanca: BlancaImpl){
    return this.http.patch<any>(`${this.urlEndPointLav}/${blanca.idArma}`, blanca).pipe(
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

  //get

  getBlanca(id:string): Observable<any>{
    return this.http.get<any>(`${this.urlEndPointLav}/${id}`).pipe(
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



  mapearFuego(fuegoApi: any): FuegoImpl {

    let fuegoNuevo = new FuegoImpl();

    // fuegoNuevo.deposito=fuegoApi._links.deposito.href;
    
    // fuegoNuevo.urlProducto=fuegoApi._links.self.href;
    fuegoNuevo.nombre= fuegoApi.nombre;
    fuegoNuevo.tipoArma= fuegoApi.tipoArma;
    fuegoNuevo.peso= fuegoApi.peso;
    fuegoNuevo.sistemaAccion=fuegoApi.sistemaAccion;
    fuegoNuevo.calibreEnMilimetros=fuegoApi.calibreEnMilimetros;
    fuegoNuevo.idArma=this.getId(fuegoApi._links.fuego.href);
    return fuegoNuevo;

  }

  extraerFuego(respuestaApi: any): FuegoImpl[] {
    const fuegos: FuegoImpl[] = [];
    let respuesta: any= respuestaApi._embedded.fuegos;
    if(respuesta===undefined){
      console.info('No existen Armas de Fuego en este deposito');
    }
    else{
    respuestaApi._embedded.fuegos.forEach((p: any) => {
      fuegos.push(this.mapearFuego(p));
    });}
    return fuegos;
  }

   //post televisor
   addFuego(fuego: FuegoImpl): Observable <any>{
    return this.http.post(this.urlEndPointTel, fuego).pipe(
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

  //delete televisor
  deleteFuego(id: string): Observable <any>{
    return this.http.delete(`${this.urlEndPointTel}/${id}`).pipe(
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
//patch televisor
  updateFuego(fuego: FuegoImpl){
    return this.http.patch<any>(`${this.urlEndPointTel}/${fuego.idArma}`, fuego).pipe(
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

  getFuego(id:string): Observable<any>{
    return this.http.get<any>(`${this.urlEndPointTel}/${id}`).pipe(
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



  // getProductosPagina(pagina: number): Observable<any> {
  //   return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  // }

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

}
