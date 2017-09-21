import { Log } from './herramientas/log';

export class Fabrica extends Spawn {

  constructor(id: string) {
    super(id);
  }

  /**
   * Valido su estado y trabajo
   */
  Estado(){
    Log.Notificar("Soy fabrica: " + this.name);
    //Todo: Tengo para crear o hay en cola
    if (true) {

      //Todo: Tengo energia o estoy en proceso? (Terminar energia)
      if (this.spawning == null && this.room.energyAvailable >= 300) {
        Log.Notificar("Mi nergia: " + this.room.energyAvailable );
      }

    }

  }

}
