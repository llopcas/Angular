export interface Arma {
  idArma: number;
  nombre: string,
    peso: string,
    calibre: number,
    urlArma: string;
    getIdArma(urlArma: string): string;
}
