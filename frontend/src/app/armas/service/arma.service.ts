import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
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

  extraerArmas(respuestaApi: any): ArmaImpl[] {
    const armas: ArmaImpl[] = [];
    respuestaApi.results.forEach((p: any) => {
      armas.push(this.mapearArma(p));

    });
    return armas;
  }

  mapearArma(armaApi: any): ArmaImpl {
    return new ArmaImpl(
      armaApi.nombre,
      armaApi.peso,
      armaApi.id,
      armaApi._links.self.href
     );
  }

  create(arma: ArmaImpl): void {
    console.log(`Se ha creado el arma: ${JSON.stringify(arma)}`);
  }

  getArmasPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

  deleteArma(direccionEliminar: string): Observable<any>{
    return this.http.delete(direccionEliminar);
  }

 // Para cargar en modal
 getDatosArma(direccionConsulta: string){
  this.http.get(direccionConsulta).subscribe();
}

//para editar
patchArma(arma: ArmaImpl) {
  return this.http.patch<any>(`${this.urlEndPoint}/${arma.id}`, arma);
}


}
