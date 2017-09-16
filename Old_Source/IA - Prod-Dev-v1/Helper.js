/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Helper');
 * mod.thing == 'a thing'; // true
 */
//
//using
var _const = require('Constants');
//

var Helper = function(db) {'use strict';
    this.db = db;
};

Helper.prototype = {
	nombreCreep: 'O',
	
    CreacionCreepsDefinidos: function(spawnName){
        
        var spawn = Game.spawns[spawnName];
       
        var resultCreate = "";
        
        //Spawn Esta analizado sus recursos?
        if (this.db.Parameters[spawn.pos.roomName]) {
            
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
    },
    
    GenerateID: function(){
        var text = "";
        //debugger;
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }
};

module.exports = Helper;