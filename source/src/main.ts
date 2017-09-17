import { Log } from "./herramientas/log";
import { Fabrica } from "./fabrica"
import * as Profiler from "screeps-profiler";

export const loop = function() {
    Log.Notificar('Testeo');

    for(let nombre in Game.spawns){
        debugger;
        var zz = new Fabrica(Game.spawns[nombre].id);

        zz.Estado();
    }

};
