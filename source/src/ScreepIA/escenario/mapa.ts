namespace screepIA {
    class Mapa {
        recursos: Objetivo[];
        objetivos: Cordenada[];
        constructor(nombre:string) {
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

            this.recursos.push(obj);

            let mapResult: GameMap = Game.map[recurso.roomName];

            const look = recurso.roomName.lookAtArea(xI, yI, xF, yF);

            for (var x= xI; x < xF; x++) {

                for (var y = yI; y < yF; y++) {

                    for (var i = 0; i < look[x][y].length; i++) {

                        if(look[x][y][i].type == LOOK_TERRAIN && look[x][y][i].terrain == 'plain') {

                        var cordenadas = new Cordenada(x, y, Terreno.vacio ,room.name);
                        //this.recursos.push(cordenadas);

                        }
                    }
                }
            }
        }
    }

}

