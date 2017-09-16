/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Creature');
 * mod.thing == 'a thing'; // true
 */
//
//Creature
//
//Using
try {
    var rolConstructor = require('rol.Constructor');
    var rolMinero = require('rol.Minero');
    var _const = require('Constants');
    var Work = require('creep.Work');
} catch (e) {
    var message = "Exception error in Using" + e.toString();
    debugger;
    
    return message;
}

//
//
var Creature = (function () {
	'use strict';
	
    // Constructor
    function Creature (db) {
        this.db = db;
        this.work = new Work(db);
        
        //Private Metodos
        this.PosibleMuerte = function(creep){
        
    		//Esta lastimado?
    		if (creep.hits < creep.hitsMax) {
    			//debugger;
    			var tt = this[db];
    			this.db.censoCreeps.Registrar(creep, true);
    			
    			
    			//TODO : Alertar
    			if (true) {
    				//Notificar Correo
    				
    			}
    			
    			
    			//TODO : Retirarce
    			if (creep.memory.rol != _const.ROL_SOLDIER) {
    				  creep.memory.work = _const.WORK_WITHDRAWAL;
    			}
    			
    		}
    		
    		//Envejece
    		if(creep.ticksToLive <= 2){
    			//debugger;
    			this.db.censoCreeps.Registrar(creep, false)
    		}
    	}
    	
    	this.EnemigosCercanos = function(creep){
            const target = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 6);
            
            if(target.length > 0) {
                //debugger;
                //Enviar alerta
                for(const i in Game.spawns) {
                    var name = Game.spawns[i].name;
                    
                    if (name = creep.memory.spawn){
                        creep.moveTo(Game.spawns[i].pos);
                        //TODO : 
                        break;
                    }
                }
            }
        }
        
        this.MoveTo = function(creep){
            
    	    if (true) {
    	         creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
    	    }
    	}
    }

    Creature.prototype = {
		Estado: function(creep) {		
		    try {
				var prioridad = false;
				
				//var tt = this.db;
				//Si la zona no esta reclamada, se reclama.
				//this.EnemigosCercanos(creep);
			
				debugger;
				//Validamos su estado
			    //this.PosibleMuerte(creep);
				
				this.work.Ralizar(creep);
				
			}catch (e){
			    var data = this.db.getJsonData();
                var message = 'Error: ' + e.message + ' Datos: ' + data;
                console.log(message);
                Game.notify(message);
				//debugger;
			}
			
		},
		Creacion: function(spawnName){
        
            var spawn = Game.spawns[spawnName];
            
            var resultCreate = "";
            
            for (var i = 0; i < this.db.roomsDto.Length; i++) {
                
                this.db.roomsDto[i]
            }
            
            //Spawn Esta analizado sus recursos?
            if (this.db.Parameters[spawn.pos.roomName] ) {
                
            }
            
            
            if (spawn.spawning == null && spawn.room.energyAvailable >= 300) {
             //debugger;
             
                var maximoCreeps = this.db.estado.Get("maximoCreeps");
                var poblacionCreeps= this.db.estado.Get("poblacionCreeps");
                
                if (maximoCreeps == null) {
                    maximoCreeps = 5;
                    this.db.estado.Set("maximoCreeps", maximoCreeps);
                }
                else if (poblacionCreeps >= maximoCreeps) {
                    return;
                }
                
                if (this.db.estado != null) {
                    
                    var randomCreep = Math.floor((Math.random() * 2) + 1);
                    var nameCreep = this.nombreCreep + '-' + poblacionCreeps;
                    
                    //Asigno minnero si tengo lugar
                    
                    
                    
                    if (randomCreep == 1) {
                       resultCreate = spawn.createCreep([WORK, CARRY, MOVE, MOVE], nameCreep, {rol: _const.ROL_MINER, work: _const.WORK_STANDBY, spawn: spawnName});
                    }
                    if (randomCreep == 2) {
                       resultCreate = spawn.createCreep([WORK, CARRY, MOVE, MOVE], nameCreep, {rol: _const.ROL_BUILDER, work: _const.WORK_STANDBY, spawn: spawnName});
                    }
                }
            }
        }
	};

    return Creature;
})();


module.exports = Creature;