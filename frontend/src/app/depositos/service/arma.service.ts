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
  private urlEndPointTel: string = `${this.host}fuego`;


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

   
    blancaNueva.longitudEnMilimetros= blancaApi.longitudEnMilimetros;
    blancaNueva.nombre= blancaApi.nombre;
    blancaNueva.filo= blancaApi.filo;
    blancaNueva.peso= blancaApi.peso;
    blancaNueva.forma= blancaApi.forma;
  
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
   addBlanca(blancas: BlancaImpl): Observable <any>{
    return this.http.post(this.urlEndPointLav, blancas).pipe(
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

  findBlanca(): Observable <any>{
    return this.http.get(this.urlEndPointLav).pipe(
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
//put
  updateBlanca(blancas: BlancaImpl){
    return this.http.put<any>(`${this.urlEndPointLav}/${blancas.idArma}`, blancas).pipe(
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
    fuegoNuevo.cargador= fuegoApi.cargador;
    fuegoNuevo.idArma=this.getId(fuegoApi._links.fuego.href);
    fuegoNuevo.deposito= `${this.host}deposito/${this.getDepId(fuegoApi._links.deposito.href)}`;
    debugger;
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

   //post 
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
  findFuego(): Observable <any>{
    return this.http.get(this.urlEndPointTel).pipe(
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
//put
  updateFuego(fuego: FuegoImpl){
    debugger;
    return this.http.put<any>(`${this.urlEndPointTel}/${fuego.idArma}`, fuego).pipe(
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

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

  getDepId(url:string): string {
    let posicionFinal:string[] = url.split('/');
    let numId: string = posicionFinal[posicionFinal.length-2];
    return numId;
  }
 
}
