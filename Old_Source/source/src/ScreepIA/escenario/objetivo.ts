import { Cordenada } from './cordenada';

export class Objetivo {
    locaciones: Cordenada[];
    /**
     * Objetivos encontrados
     * @param cordenada Donde se encuentra
     * @param tipo Tipo de objetivo
     */
    constructor(cordenada: Cordenada, tipo: TipoObjetivo) {
      this.locaciones = [];
    }
    /**
     * Se agregaron locaciones
     * @param locaciones Tengo Locaciones
     */
    AgregarLocaciones(locaciones: Cordenada | Cordenada[]){

    }
}

export enum TipoObjetivo{
  minar,
  construir,
  transportar,
  atacar,
  defender
}



