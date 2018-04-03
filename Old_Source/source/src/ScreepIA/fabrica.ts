import { Zona } from './escenario/mapa';
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
    if (this.spawning == null) {

      var zona = new Zona(this.room.name);

      zona.AnalizarRecursos();

      //Todo: Tengo energia o estoy en proceso? (Terminar energia)
      if (this.room.energyAvailable >= 300) {
        Log.Notificar("Mi nergia: " + this.room.energyAvailable );
      }

    }
    else{
      Log.Notificar("Soy fabrica: " + this.spawning.name);
    }

  }

}
