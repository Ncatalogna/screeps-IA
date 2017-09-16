/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Constants');
 * mod.thing == 'a thing'; // true
 */

'use strict';
module.exports = {
            ROL_MINER: "Miner", //Miner
            ROL_BUILDER: "Builder", //Constructor
            ROL_CONTROL: "Control", //Controll
            ROL_DOCTOR: "Doctor", //Medico
            ROL_SOLDIER: "Soldier", //Soldado
            
            ROOM_HOSTILE: "Hostile",
            ROOM_INHABITED: "Inhabited",
            ROOM_ALLY: "Ally",
            ROOM_CONQUERED: "Conquered",
            ROOM_UNKNOWN: "Unknown",
            
            WORK_STANDBY: "standby", // EN Espera
            WORK_CONTROLL_UP: "controlle-up", //Controlador Subir Energia
            WORK_TRANSFER: "transfer", //Transferir
            WORK_RECHARGE: "recharge", //Recargar
            WORK_BUILD: "build", //Construir
            WORK_REPAIR: "repair",
            WORK_MINING: "Mining",
            WORK_WITHDRAWAL: "Withdrawal" //Retirarce
        };
            