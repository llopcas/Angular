import { Deposito } from "./deposito";

export class DepositoImpl implements Deposito{

  codigoDeposito:any;
  id: any 
  urlDeposito: string = "";
  
  constructor (codigoDeposito: number , id: any) {
    this.codigoDeposito = codigoDeposito;
    this.id = id;
   
  }
  
  getIdDeposito(url: string): string {
	  url = url.slice(0, url.length - 1)
	  return url.slice(url.lastIndexOf('/') + 1, url.length);
	}

}
