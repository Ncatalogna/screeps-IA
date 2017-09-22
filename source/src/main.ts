import { Zona } from './ScreepIA/escenario/mapa';
import { Log } from './ScreepIA/herramientas/log';
import { Fabrica } from './ScreepIA/fabrica';


export const loop = function() {
    try {

        debugger;
        Log.Notificar('Testeo');

        for(let nombre in Game.spawns){

            var zz = new Fabrica(Game.spawns[nombre].id);

            //var target = Game.spawns[nombre].room.find(FIND_SOURCES);

            var xx = new Zona(Game.spawns[nombre].room.name);
            xx.AnalizarRecursos();

            zz.Estado();
        }


    } catch (error) {
        var zzx = error;
        Log.Error(zzx);
    }
};
