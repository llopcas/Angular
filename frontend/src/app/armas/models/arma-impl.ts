

export class ArmaImpl {
  nombre: string;
  peso: number;
  tipo: number;
  id: number;
  urlArma: string;
  deposito:string;

  constructor(nombre: string, peso: number, id: number, deposito:string, urlArma: string) {
    this.nombre = nombre;
    this.peso = peso;
    this.tipo = 0; //OJO con esto
    this.id = id;
    this.deposito =deposito;
    this.urlArma= urlArma;
  }

  getIdArma(urlArma: string): string {
    // urlServicio = urlServicio.slice(0, urlServicio.length - 1)
    return urlArma.slice(urlArma.lastIndexOf('/') + 1, urlArma.length);
  }


}
