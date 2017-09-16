/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Mantenimiento');
 * mod.thing == 'a thing'; // true
 */
 //
 //
 //
var Mantenimiento = function(db) {'use strict';
    this.db = db;
};

Mantenimiento.prototype = {

	Creeps: function(Game) {		
        
	    var CreepsData = this.db.censoCreeps.Data;
		var guardarCambios = false;
		var spawn;
		
		//debugger;
		if(CreepsData != null){
		    
		    var i = CreepsData.length;
		    
            while (i--) {
                var creep = CreepsData[i];
                
                 if (Game.spawns[creep.spawn] != null) {
                    spawn = Game.spawns[creep.spawn];
                }
                else{
                     //Busco mis Rooms Spawns
                     //TODO : Terminar
                    // const targets = Game.rooms.find(FIND_MY_SPAWNS);
                    
                    //targets.sort((a,b) => a.level - b.level);
                    
                    //spawn = targets[0];
                }
                   
                
			   if(spawn != null && spawn.spawning == null){
			       
			       var nameCreep = creep.name + "-" + creep.numero;
			       var bodyString = JSON.parse(creep.body);
			       
			       var result = spawn.canCreateCreep(bodyString, nameCreep);
			       
			       if(result == OK) {
					   var resultCreate = spawn.createCreep(bodyString, nameCreep, { rol: creep.rol, work: creep.work, spawn: creep.spawn } );
					   //debugger;
					   if (resultCreate == nameCreep) {
					       this.db.censoCreeps.Data.splice(i, 1);
					       guardarCambios = true;
					       break; //Finalizo porque ya envie el Create
					   }
				    }
				    else if(result == ERR_NAME_EXISTS){
        		       if(creep.tipoMuerte){
        		          var creepLive = Game.creeps[nameCreep];
        		          
        		          if (creepLive.hits == creepLive.hitsMax){
        		                this.db.censoCreeps.Data.splice(i, 1);
					            guardarCambios = true;
        		          }
        		       }
				    }
			   }
            }
		}
	}
};

module.exports = Mantenimiento;
