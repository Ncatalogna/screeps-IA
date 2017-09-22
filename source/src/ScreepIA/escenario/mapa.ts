import { Cordenada, TipoTerreno } from './cordenada';
import { Objetivo, TipoObjetivo } from './objetivo';

export class Zona extends Room {
    //recursos: Objetivo[];
    //objetivos: Cordenada[];

    constructor(id: string) {
        super(id);

        //this.memory.recursos = this.recursos;
        debugger;
        if(this.memory.recursos == undefined){
            this.memory.recursos = [];
        }

        //this.objetivos = this.memory.recursos || [];
    }

    AnalizarRecursos(){
        debugger;
        var target = this.find<Resource>(FIND_SOURCES);

        var xStart = (target[0].pos.x - 1);
        var yStart = (target[0].pos.y - 1);

        var xFinish = (target[0].pos.x + 1);
        var yFinish = (target[0].pos.y + 1);

        var tt = new RoomPosition(target[0].pos.x, target[0].pos.y, target[0].room.name);

        this.AnalizarRecurso(xStart, yStart, xFinish, yFinish,tt);
    }

    /**
     * Analiza Recurso del mapa
     * @param xI posicion X Inicial
     * @param yI posicion Y Inicial
     * @param xF posicion X Final
     * @param yF posicion Y Final
     * @param room Objeto cuarto para trabajar
     */
    AnalizarRecurso(xI: number, yI: number, xF: number, yF: number, recurso: RoomPosition ){

        let cor: Cordenada = new Cordenada(recurso.x, recurso.y, TipoTerreno.mina, recurso.roomName);
        let obj: Objetivo = new Objetivo(cor, TipoObjetivo.minar);

        //let mapResult: GameMap = Game.map[recurso.roomName];

        const look = this.lookAtArea(xI, yI, xF, yF);

        for (var x= xI; x < xF; x++) {

            for (var y = yI; y < yF; y++) {

                for (var i = 0; i < look[x][y].length; i++) {

                    if(look[x][y][i].type == LOOK_TERRAIN && look[x][y][i].terrain == 'plain') {

                    var cordenadas = new Cordenada(x, y, TipoTerreno.vacio , this.name);
                    //Objetivo.
                    obj.locaciones.push(cordenadas);

                    }
                }
            }
        }
        debugger;
        this.memory.recursos.push(obj);
    }
}



