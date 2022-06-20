import { ArmaImpl } from "./arma-impl";



export class FuegoImpl extends ArmaImpl
{
  filter(arg0: (m: ArmaImpl) => boolean): FuegoImpl {
    throw new Error('Method not implemented.');
  }
  sistemaAccion: string;
  calibreEnMilimetros: number;

  constructor(nombre: string, peso: number, id: number , deposito: string, urlArma: string , sistemaAccion: string, calibreEnMilimetros: number){
    super(nombre, peso, id, deposito, urlArma);
    super.tipo=2;
    this.sistemaAccion=sistemaAccion;
    this.calibreEnMilimetros = calibreEnMilimetros;
  }

  getIdFuego(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }

}
