import { Deposito } from "./deposito";

export class DepositoImpl implements Deposito{

  codigoDeposito: number = 0;
  urlDeposito: string = "";

  constructor (codigoDeposito: number){
    this.codigoDeposito = codigoDeposito;
   
  }
  
  getIdDeposito(url: string): string {
	  url = url.slice(0, url.length - 1)
	  return url.slice(url.lastIndexOf('/') + 1, url.length);
	}

}
