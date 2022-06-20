
import { ArmaImpl} from "./arma-impl";

export class BlancaImpl  extends ArmaImpl
 {
  filter(arg0: (m: ArmaImpl) => boolean): BlancaImpl {
    throw new Error('Method not implemented.');
  }
  longitudEnMilimetros: number;


constructor(nombre: string, peso: number, id: number, deposito: string, urlArma:string , longitudEnMilimetros:number){
  super(nombre, peso, id, deposito, urlArma );
  super.tipo=1;
  this.longitudEnMilimetros = longitudEnMilimetros;
}
getIdBlanca(url: string): string {
  url = url.slice(0, url.length - 1)
  return url.slice(url.lastIndexOf('/') + 1, url.length);
}

}
