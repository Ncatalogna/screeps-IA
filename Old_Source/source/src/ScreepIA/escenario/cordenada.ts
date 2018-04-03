
export class Cordenada {
  public posicion: RoomPosition;
  /**
   *
   * @param x Posicion x
   * @param y Posicion y
   * @param tipo Tipo de Terreno
   * @param RoomName Nombre del cuarto
   * @param asignado Creep Asinado
   */
  constructor(private x: number, private y:number, tipo: TipoTerreno, RoomName: string, asignado?:string) {
    this.posicion = new RoomPosition(x, y, RoomName);
  }
}

export enum TipoTerreno{
  tierra,
  recurso,
  mina,
  muro,
  vacio,
  puerta
}


