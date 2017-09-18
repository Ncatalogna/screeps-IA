import { screepIA } from "./ScreepIA";

export const loop = function() {
    try {

        debugger;
        screepIA.Log.Notificar('Testeo');

        for(let nombre in Game.spawns){

            var zz = new screepIA.Fabrica(Game.spawns[nombre].id);

            zz.Estado();
        }
    } catch (error) {
        var zzx = error;
    }
};
