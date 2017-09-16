/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep.Work');
 * mod.thing == 'a thing'; // true
 */
//
//Using
try {
    var _const = require('Constants');
    var Rol = require('creep.Rol');
} catch (e) {
    var message = "Exception error in Using" + e.toString();
    debugger;
    
    return message;
}

//

var Work = (function () {
	'use strict';
	
    // Constructor
    function Work (db) {
        this.db = db;
        
        this.rol = new Rol();
        
        //Private Metodos
        this.WorkSwitch = function(creep, work)
        {
            debugger;
			switch(work){
                case _const.WORK_STANDBY:
                    /// Ir a Rol?
                    this.Standby(creep);
                    break;
                    
                case _const.WORK_CONTROLL_UP:
                    this.ControllUp(creep); 
                    break;
                
                case _const.WORK_TRANSFER:
                    this.Transfer(creep);
                    break;
                
                case _const.WORK_RECHARGE:
                    this.Recharger(creep);
                    break;
                    
                case _const.WORK_BUILD:
                    this.Build(creep);
                    break;  
                    
                case _const.WORK_REPAIR:
                    this.Repair(creep);
                    break;
                    
                case _const.WORK_WITHDRAWAL:
                    
                    break;
                    
                case _const.WORK_MINING:
                    this.Mining(creep);
                    break;
                    
            }    
        }
        
        this.Standby = function(creep){
            
            var work = _const.WORK_STANDBY;
            
			work = this.rol.Retornar(creep);
			
			this.WorkSwitch(creep, work);
    	}
    	
    	this.Finalizo = function(creep){
            creep.memory.Asignate = null;
            creep.memory.work = _const.WORK_STANDBY;
            creep.memory.priority = 0;
            creep.say('🚦');
    	}
    	
    	//Private Metodos
        this.ValidacionEnergia = function(creep){
            debugger;
            //tengo energia?
			if(creep.carry.energy === 0){
			    creep.say('⛽');
			    creep.memory.work = _const.WORK_RECHARGE;
				return true;
			}
			return false;
    	}
    	
    	this.Recharger = function(creep){
    	    
    	    if (creep.memory.Asignacion != null  && creep.memory.work == _const.WORK_RECHARGE) {
    	        
    	        var result = creep.withdraw(creep.memory.Asignacion.target, RESOURCE_ENERGY);
    	        
    	        if (result == ERR_FULL) {
    	            this.Finalizo(creep);
    	        }
                
                return;
    	    }
    	    
    	    //Busco lugares de almacenamiento.
    	    var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER ||
                        structure.structureType == STRUCTURE_STORAGE) && structure.energy > 0;
                }
            });
            
            if(targets.length) {
                
                creep.memory.Asignate = {
                            target: targets[0],
                            move: targets[0],
                            visualizeStyle: {stroke: '#ffffff'}
                        };
			}
			else
			{
			    creep.memory.work = _const.WORK_STANDBY;
				creep.memory.priority++;
			}
            	
        }
        
        this.Transfer = function(creep){
            
            if (creep.memory.Asignacion != null && creep.memory.work == _const.WORK_TRANSFER) {
    	        
    	        var result = creep.transfer(creep.memory.Asignacion.target, RESOURCE_ENERGY);
    	        
                if (result == ERR_FULL) {
    	            this.Finalizo(creep);
    	        }
                
                return;
    	    }
            
            //creep.memory.work  == 'transfer';
			 var targets = creep.room.find(FIND_STRUCTURES, {
				filter: (structure) => {
					return (structure.structureType == STRUCTURE_EXTENSION ||
							structure.structureType == STRUCTURE_SPAWN ||
							structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
				}
			});
			
			if (targets.length) {
    		    creep.memory.Asignate = {
                            target: targets[0],
                            move: targets[0],
                            visualizeStyle: {stroke: '#fff'}
                        };
                creep.say('⚡');         
                creep.memory.work = _const.WORK_TRANSFER;
			   
			}
			else
			{
				creep.memory.priority++;
			}
    	}
    	
    	this.ControllUp = function(creep){
            
            if (creep.memory.Asignacion != null && creep.memory.work == _const.WORK_CONTROLL_UP) {
    	        
    	        var result = creep.upgradeController(creep.memory.Asignacion.target);
    	        
    	        //Solo finaliza cuando estoy vacio
                //if (result == ERR_FULL) {
    	        //    this.Finalizo(creep);
    	        //}
                
                return;
    	    }
            
			creep.memory.Asignate = {
                            target: creep.room.controller,
                            move: creep.room.controller,
                            visualizeStyle: {stroke: '#fff'}
                        };
                        
            creep.say('🌐');        
            creep.memory.work = _const.WORK_TRANSFER;
    	}
    	
    	this.Build = function(creep){
                        
            if (creep.memory.Asignacion != null && creep.memory.work == _const.WORK_TRANSFER) {
    	        
    	        if (creep.memory.Asignacion.target.progress <= creep.memory.Asignacion.target.progressTotal) {
    	            var result = creep.build(creep.memory.Asignacion.target);
    	        }
    	        else{
    	            this.Finalizo(creep);
    	        }
                
                return;
    	    }
            
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
		
			if (targets.length) {
    		    creep.memory.Asignate = {
                            target: targets[0],
                            visualizeStyle: {stroke: '#ffffff'}
                        };
                creep.say('🔨');         
                creep.memory.work = _const.WORK_BUILD;
			}
			else
			{
				creep.memory.priority++;
			}
    	}
    	
    	this.Repair = function(creep){
                        
            if (creep.memory.Asignacion != null && creep.memory.work == _const.WORK_TRANSFER) {
    	        
    	        if (creep.memory.Asignacion.target.hits <= creep.memory.Asignacion.target.hitsMax) {
    	            var result = creep.repair(creep.memory.Asignacion.target);
    	        }
    	        else{
    	            this.Finalizo(creep);
    	        }
                
                //return;
    	    }
            
            var targets = creep.room.find(FIND_STRUCTURES, {
                                            filter: object => object.hits < object.hitsMax
                                        });
		
            targets.sort((a,b) => a.hits - b.hits);
            
			if (targets.length) {
    		    creep.memory.Asignate = {
                            target: targets[0],
                            visualizeStyle: {stroke: '#ffffff'}
                        };
                creep.say('🛠');         
                creep.memory.work = _const.WORK_REPAIR;
			}
			else
			{
				creep.memory.priority++;
			}
    	}
    	
    	this.Mining = function(creep){
                  
            if (creep.memory.Asignacion != null && creep.memory.work == _const.WORK_TRANSFER) {
    	        
    	        if (creep.carry.energy < creep.carryCapacity) {
    	            var result = creep.repair(creep.memory.Asignacion.target);
    	        }
    	        else{
    	            this.Finalizo(creep);
    	        }
                
                return;
    	    }
            
            var target = creep.room.find(FIND_SOURCES);
            
            var setTarget = false;
            
            if (target.length) {
                //Buscar posiciones...
                
                
                
                var xStart = (target[0].pos.x - 1);
                var yStart = (target[0].pos.y - 1);
                
                var xFinish = (target[0].pos.x + 1);
                var yFinish = (target[0].pos.y + 1);
                
                const look = creep.room.lookAtArea(xStart, yStart, xFinish, yFinish);
                
                for (var x= xStart; x < xFinish; x++) {
                    
                    for (var y = yStart; y < yFinish; y++) {
                        
                        for (var i = 0; i < look[x][y].length; i++) {
                                if(look[x][y][i].type == LOOK_TERRAIN && look[x][y][i].terrain == 'plain') {
                                
                                var position = new RoomPosition(x, y, target[0].room.name);
                                
                                debugger;
                                
                                if (target[0].Memory.Minigs == null) {
                                    target[0].Memory.Minigs = {};
                                    
                                    target[0].Memory.Minigs[position] = creep.name;
                                }
                                else{
                                    
                                    var creepName = target[0].Memory.Minigs[position];
                                    
                                    if (Game.creeps[creepName] == null) {
                                        target[0].Memory.Minigs[position] = creep.name;
                                    }
                                    else
                                    {
                                        return;
                                    }
                                }
                                
                                creep.memory.Asignate = {
                                        target: targets[0],
                                        move: position,
                                        visualizeStyle: {stroke: '#ffaa00'}
                                    };
                                creep.say('⛏');         
                                creep.memory.work = _const.WORK_REPAIR;
                                setTarget = true;
                                
                                return;
                            }
                        }
                    }
                }
                
            }
            
            
			if (setTarget) {
    		    
			}
			else
			{
			    debugger;
				creep.memory.priority++;
			}
    	}
    }

    Work.prototype = {
		Asignar: function(creep) {		
			
		},
		Ralizar: function(creep) {	
		    
		    if (creep.memory.rol != _const.ROL_MINER){
		         if(this.ValidacionEnergia(creep)){
		             return;
		         }
		    }
		    
			this.WorkSwitch(creep, creep.memory.work);
			
		}
	};

    return Work;
})();

module.exports = Work;

