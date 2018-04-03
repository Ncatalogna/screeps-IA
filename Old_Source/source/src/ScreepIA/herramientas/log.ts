export class Log {
  constructor() {
  }
  /**
   * Notificacion log por consola
   * @param mensaje Texto mensaje
   */
  static Notificar(mensaje: string) {
      //Todo: Terminar si siempre loguea

      if (true) {
        console.log('Notifica: ' + mensaje);
      }
  }

  /**
   *
   * @param mensaje
   */
  static Error(mensaje: string) {
    //Todo: Terminar si siempre loguea
    let envio = 'Error: ' + mensaje;

    if (true) {
      console.log(envio);
      Game.notify(envio);
    }
  }
}

