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
var rolConstructor = require('rol.Constructor');
var rolMinero = require('rol.Minero');
var _const = require('Constants');
//
//
var Creature = (function () {
	'use strict';
	
    // Constructor
    function Creature (db) {
        this.db = db;
        
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
    }

    Creature.prototype = {
		Estado: function(creep) {		
		    try {
				var prioridad = false;
				
				//var tt = this.db;
				//Si la zona no esta reclamada, se reclama.
				this.EnemigosCercanos(creep);
				
				if(creep.room.controller) {
					
					var resultClaim = creep.claimController(creep.room.controller);
					if(resultClaim == ERR_NOT_IN_RANGE) {
						creep.moveTo(creep.room.controller);
					}
				}
				
				//debugger;
				//Validamos su estado
			    this.PosibleMuerte(creep);
				
				
				if(creep.memory.rol == 'minero')
				{
					
					
					if(creep.memory.work != null){
						
						if(creep.memory.work == 'standby'){
							//Si tengo energia 0 recargo
							if(creep.carry.energy < (creep.carryCapacity / 2)){
									creep.say('⚡️');
									creep.memory.work = 'recharge'
									//rolMinero.run(creep);	
									return;
							}
							
							var targets = creep.room.find(FIND_STRUCTURES, {
								filter: (structure) => {
									return (structure.structureType == STRUCTURE_EXTENSION ||
											structure.structureType == STRUCTURE_SPAWN ||
											structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
								}
							});
							
							if(targets.length == 0)
							{
								//Si no tengo otra cosa que hacer
								creep.say('🔨');
								creep.memory.work = 'controlle-up'
								prioridad = false;
							}
							else
							{
								//TODO : Terminar
								//debugger;
								if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
									creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
									creep.memory.work = 'transfer';
									prioridad = true;
								}
							}
							
							//debugger;
							
							//Si controll es bajo, lo lleno
							if(creep.room.controller) {   
								
								if(creep.room.controller.level <= 1){				
									creep.say('🔨');
									creep.memory.work = 'controlle-up'
									
									if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
										creep.moveTo(creep.room.controller);
									}
								}
								else{	
									if (prioridad) {
										creep.memory.work = 'transfer';
									}
									
								}						
								//Si controll es 1 y tienen trabajadores ya, me asigno construccion - build						
								
							}
							
							
							//Si no hay contrucciones, recargo el controll
							
						}
						
						if(creep.memory.work == 'controlle-up'){
							
							//tengo energia?
							if(creep.carry.energy  === 0){
								creep.say('⚡️');
								creep.memory.work = 'recharge'
							}
							else{ //Si tengo
								if(creep.room.controller) {         
							
									if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
										creep.moveTo(creep.room.controller);
									}
								}
							
							}
						}
						
						if(creep.memory.work == 'recharge'){
							rolMinero.run(creep);	
						}		        
						
						//debugger;
						if (creep.memory.work == 'transfer') {
							
							//tengo energia?
							if(creep.carry.energy  === 0){
								creep.say('⚡️');
								creep.memory.work = 'recharge'
							}
							
							//creep.memory.work  == 'transfer';
							 var targets = creep.room.find(FIND_STRUCTURES, {
								filter: (structure) => {
									return (structure.structureType == STRUCTURE_EXTENSION ||
											structure.structureType == STRUCTURE_SPAWN ||
											structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
								}
							});
							
							if (targets.length > 0) {
							   if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
									creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
									creep.memory.work = 'transfer';
									prioridad = true;
								} 
							}
							else
							{
								creep.memory.work = 'controlle-up';
								prioridad = false;
							}
							
						}
						
						 if(creep.memory.work == 'retirada'){
							rolMinero.run(creep);	
						}		        
						
					}				
				}
				
				if(creep.memory.rol == 'constructor')
				{	
					
					
					if(creep.memory.work != null){
						
						if(creep.memory.work == 'standby'){
							//Si tengo energia 0 recargo
							if(creep.carry.energy  ===  0){
									creep.say('⚡️');
									creep.memory.work = 'recharge'
									//rolMinero.run(creep);	
									return;
							}
							
							var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
							if(targets.length == 0)
							{
								//Si no tengo otra cosa que hacer
								 const targetsRepair = creep.room.find(FIND_STRUCTURES, {
                                        filter: object => object.hits < object.hitsMax
                                    });
                    
        					    if (targetsRepair.length === 0) {
        					       //Si no tengo otra cosa que hacer
            						creep.say('🔨');
            						creep.memory.work = 'controlle-up'
            						prioridad = false;
        					    }
        					    else{
        					        creep.say('🔨');
            						creep.memory.work = 'repairman'
            						prioridad = false;
        					    }
        								
							}
							else
							{
								creep.memory.work = 'build';
								prioridad = true;
							}
							
							//Si controll es bajo, lo lleno
							if(creep.room.controller) {   
								
								if(creep.room.controller.level <= 1){				
									creep.say('🔨');
									creep.memory.work = 'controlle-up'
									
									if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
										creep.moveTo(creep.room.controller);
									}
								}
								else{	
									if (prioridad) {
										creep.memory.work = 'build';
									}
									
								}						
								//Si controll es 1 y tienen trabajadores ya, me asigno construccion - build						
								
							}
							
							//Si no hay contrucciones, recargo el controll
							
						}
						
						if(creep.memory.work == 'controlle-up'){
							
							//tengo energia?
							if(creep.carry.energy === 0){
								creep.say('⚡️');
								creep.memory.work = 'recharge'
							}
							else{ //Si tengo
								if(creep.room.controller) {         
							
									if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
										creep.moveTo(creep.room.controller);
									}
								}
							
							}
						}
						
						if(creep.memory.work == 'recharge'){
							rolMinero.run(creep);	
						}	
						
						if(creep.memory.work == 'build'){
							rolConstructor.run(creep);	
						}	
						
						if(creep.memory.work == 'repairman'){
							rolConstructor.Reparar(creep);	
						}	
						    
		
					}	
								
				}
				
				if(creep.memory.rol == 'soldado')
				{
					
					if(creep.memory.work != null){
						
						if(creep.memory.work == 'standby'){
							
						}
					}
				}  
			}catch (e){
			    var data = this.db.getJsonData();
                var message = 'Error: ' + e.message + ' Datos: ' + data;
                console.log(message);
                Game.notify(message);
				//debugger;
			}
			
		}
	};

    return Creature;
})();


module.exports = Creature;