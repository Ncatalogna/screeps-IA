//rol.Constructor
//rol : constructor
//
var rolConstructor = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    
		if(creep.carry.energy == 0){
			creep.say('⚡️');
			creep.memory.work = 'recharge'
			return;
		}
		
		var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
		
		if(targets.length) {
			if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
			}
		}
		else
		{
            creep.say('🕛');			
			creep.memory.work = 'standby';	
		}
	},
	Reparar: function(creep) {
	    
		if(creep.carry.energy == 0){
			creep.say('⚡️');
			creep.memory.work = 'recharge'
			return;
		}
		
	    const targets = creep.room.find(FIND_STRUCTURES, {
            filter: object => object.hits < object.hitsMax
            });
                    
        //targets.sort((a,b) => a.hits - b.hits);
            
        if(targets.length > 0) {
            if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
        else
        {
            creep.say('🕛');			
		    creep.memory.work = 'standby';	
        }
        
	}
};

module.exports = rolConstructor;

