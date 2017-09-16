//rol.Minero
//using
var creepMovimiento = require('creep.Movimiento');

var rolMinero = {

    /** @param {Creep} creep **/
    run: function(creep) {
				
		if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            //debugger;
            
            var cosSourceMin = 0;
            var positionSourceMin = 0;
            var primaryCost = true;
            var setSource = false;
            
            // Busco que recursos tengo disponible para trabajar
            for (var i = 0; i < sources.length; i++) {
                var resultCreep = false;
                
                var harvestResult = creep.harvest(sources[i]);
                
                if(harvestResult != ERR_NOT_IN_RANGE) {
                    
                    if (harvestResult == OK) {
                        
                       resultCreep = creep.moveTo(sources[i], {visualizePathStyle: {stroke: '#ffaa00'}});
                       
                       if (resultCreep == OK) {
                           i = sources.length;
                           setSource = true;
                       }
                       
                    }
                }
                else
                {
                    let costs = new PathFinder.CostMatrix;
                    let pos = sources[i].pos;
                    var resultCost = costs.get(pos.x, pos.y, 255); // Can't walk over a building
                    
                    if (primaryCost) {
                        cosSourceMin = resultCost;
                        positionSourceMin = i;
                        primaryCost = false;
                    }
                    
                    if (resultCost < cosSourceMin) {
                        cosSourceMin = resultCost;
                        positionSourceMin = i;
                    }
                }
            }
            //debugger;
            if (!setSource) {
                var result = creepMovimiento.moveTo(creep);
                
            }
            
		}
		else{			
			creep.say('??');			
			creep.memory.work = 'standby';		
		}		
	}
};

module.exports = rolMinero;
