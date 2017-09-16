/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Tower');
 * mod.thing == 'a thing'; // true
 */

var Tower = (function () {
	'use strict';
	
    // Constructor
    function Tower (db) {
        this.db = db;
        
        //Private Metodos
        this.PosibleMuerte = function(creep){
        
    	}
    	
    	this.EnemigosCercanos = function(creep){
           
        }
    }

    Tower.prototype = {
		Run: function(roomName) {		
			
			var roomData = Game.rooms[roomName];
			
			var tower = Game.rooms[roomName].find(STRUCTURE_TOWER);
			
            //var tower = Game.getObjectById('TOWER_ID');
             
            for (var i = 0; i < tower.length; i++) {
                
                var closestDamagedStructure = tower[i].pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.hits < structure.hitsMax
                });
                if(closestDamagedStructure) {
                    tower[i].repair(closestDamagedStructure);
                }
        
                var closestHostile = tower[i].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                
                if(closestHostile) {
                    tower[i].attack(closestHostile);
                }
            }
            
		}
	};

    return Tower;
})();


module.exports = Tower;