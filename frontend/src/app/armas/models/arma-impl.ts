

export class ArmaImpl {
  nombre: string;
  peso: number;
  tipo: number;
  id: number;
  urlArma: string;
 

  constructor(nombre: string, peso: number, tipo: number, id: number, urlArma: string) {
    this.nombre = nombre;
    this.peso = peso;
    this.tipo = 0; //OJO con esto
    this.id = id;
    this.urlArma = urlArma;
  }

  getIdArma(urlArma: string): string {
    // urlArma = urlArma.slice(0, urlArma.length - 1)
    return urlArma.slice(urlArma.lastIndexOf('/') + 1, urlArma.length);
  }


}
