import * as screepIA from 'screepIA'

export const loop = function() {
        screepIA.Log.Notificar('Testeo');

        for(let nombre in Game.spawns){
            debugger;
            var zz = new screepIA.Fabrica(Game.spawns[nombre].id);

            zz.Estado();
        }

    };


