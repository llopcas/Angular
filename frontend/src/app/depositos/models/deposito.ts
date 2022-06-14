export interface Deposito {
  codigoDeposito: number;
  urlDeposito: string;
  getIdDeposito(urlDeposito: string): string;
}
