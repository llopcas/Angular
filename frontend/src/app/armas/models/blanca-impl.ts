import { ArmaImpl } from "./arma-impl";


export class BlancaImpl  extends ArmaImpl
 {
  filter(arg0: (m: ArmaImpl) => boolean): BlancaImpl {
    throw new Error('Method not implemented.');
  }
  longitudEnMilimetos: number;


constructor(nombre: string, peso: number, tipo: number ,id: number, urlArma:string , longitudEnMilimetros: number){
  super(nombre, peso, id,tipo,urlArma);
  super.tipo = 1;
  this.longitudEnMilimetos = longitudEnMilimetros;
}
getIdJardineria(url: string): string {
  url = url.slice(0, url.length - 1)
  return url.slice(url.lastIndexOf('/') + 1, url.length);
}

}
