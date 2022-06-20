import { Deposito} from './deposito';

export class DepositoImpl implements Deposito {
  id: number;
  codigoDeposito: string;
  urlDeposito: string;

  constructor(
    id: number,
    codigoDeposito: any,
     urlDeposito: any
  ) {
    this.id = id;
    this.codigoDeposito = codigoDeposito;
    this.urlDeposito = urlDeposito;
  }

}
