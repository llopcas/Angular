import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Arma } from '../models/arma';

import { ArmaImpl } from '../models/arma-impl';


@Injectable({
  providedIn: 'root'
})
export class ArmaService {
 private host: string = environment.host;
private urlEndPoint: string = `${this.host}armas`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getArmas(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  mapearArma(armaApi: any): ArmaImpl {
    const urlSelf = armaApi._links.self.href;
    console.log(urlSelf);
    const url = urlSelf.split('/');
	  const id =   parseInt(url[url.length -1]);

    return new ArmaImpl(
      armaApi.nombre,
      armaApi.peso,
      armaApi.id,
      armaApi.deposito,
      armaApi._links.self.href
     );
  }

  create(arma: Arma): void {
    console.log(`Se ha creado el Arma: ${JSON.stringify(arma)}`);
  }
  postArma(arma: ArmaImpl){
    this.http.post(this.urlEndPoint, arma).subscribe();
  }

  getArmasPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

  deleteArma(id: number): Observable<any>{
    const url = `${this.urlEndPoint}/${id}`;
    ;
    return this.http.delete<any>(url);
  }

 
//para editar
patchArma(arma: ArmaImpl) {
  return this.http.patch<any>(`${this.urlEndPoint}/${arma.id}`, arma);
}


}
