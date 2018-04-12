
export class Coordinates {
  public posicion: RoomPosition;
  /**
   *
   * @param x Posicion x
   * @param y Posicion y
   * @param tipo Tipo de Terreno
   * @param RoomName Nombre del cuarto
   * @param asignado Creep Asinado
   */
  constructor(private x: number, private y:number, typeTerrain: TypeTerrain, roomName: string, asignado?:string) {
    this.posicion = new RoomPosition(x, y, roomName);
  }
}

export enum TypeTerrain {
  Terrain,
  Power,
  mine,
  Wall,
  empty,
  forceField
}


