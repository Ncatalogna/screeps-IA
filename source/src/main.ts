import { Log } from './ScreepIA/herramientas/log';
import { Fabrica } from './ScreepIA/fabrica';


export const loop = function() {
    try {

        debugger;
        Log.Notificar('Testeo');

        for(let nombre in Game.spawns){

            var zz = new Fabrica(Game.spawns[nombre].id);

            zz.Estado();
        }
    } catch (error) {
        var zzx = error;
    }
};
