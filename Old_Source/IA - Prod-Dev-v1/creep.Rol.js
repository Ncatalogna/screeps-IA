/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep.Rol');
 * mod.thing == 'a thing'; // true
 */
//
//Creature
//
//Using
//var rolConstructor = require('rol.Constructor');
//var rolMinero = require('rol.Minero');
var _const = require('Constants');
//
//
var Rol = (function () {
	'use strict';
	
    // Constructor
    function Rol () {
        //Private Metodos
        this.Minero = {
            0: _const.WORK_MINING, 1: _const.WORK_MINING, 2: _const.WORK_MINING //0: _const.WORK_MINING, 1: _const.WORK_TRANSFER, 2: _const.WORK_CONTROLL_UP
        };
        
        this.Constructor = {
            0: _const.BUILD, 1: _const.WORK_REPAIR, 2: _const.WORK_CONTROLL_UP
        };    
        
        this.Controll = {
            0: _const.WORK_CONTROLL_UP, 1: _const.WORK_REPAIR
        };   
    }

    Rol.prototype = {
		Retornar: function(creep) {	
		    
		    if (creep.memory.priority == null) {
		        creep.memory.priority = 0;
		    }
		    
		    var work = "";
		    
    		switch(creep.memory.rol){
            
                case _const.ROL_MINER:
                    work = this.Minero[creep.memory.priority];
                    break;
                    
                case _const.ROL_CONSTRUCTOR:
                    work = this.Constructor[creep.memory.priority];
                    break;
                    
                case _const.ROL_CONTROL:
                    work = this.Controll[creep.memory.priority];
                    break;
                
                case _const.ROL_MEDICO:
                    
                    break;
                
                case _const.ROL_SOLDADO:
                    
                    break;
                
            }
            
            return work;
		}
	};

    return Rol;
})();

module.exports = Rol;
