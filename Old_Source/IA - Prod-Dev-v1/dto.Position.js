/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('dto.Position');
 * mod.thing == 'a thing'; // true
 */


var PositionDto = (function () {
	'use strict';
	
    // Constructor
    function ParametersDto (Data) {
        this.Data = Data;
        
        this.SetLocationCreep = function(pos, id, creep){
            
            this.Data[pos.nameRoom][id]
            
        }
        
        this.GenerateLocation = function(pos, id, structure, terrain)
        {
            var dataRoom = {};
            var dataPosition = [];
            
            var result = false;
            
            var nameRoom = pos.name;
           
            var xStart = (pos.x - 1);
            var yStart = (pos.y - 1);
            
            var xFinish = (pos.x + 1);
            var yFinish = (pos.y + 1);
            
            var countData = 0;
             
            if (this.Data[nameRoom] == null) {
                this.Data[nameRoom] = {};
            }
            
            if (this.Data[nameRoom][id] == null) {
                this.Data[nameRoom][id] = { 
                    structure: structure,
                    data: []
                };
            }
            
            const look = creep.room.lookAtArea(xStart, yStart, xFinish, yFinish);
            
            for (var x = xStart; x < xFinish; x++) {
                
                for (var y = yStart; y < yFinish; y++) {
                    
                    for (var i = 0; i < look[x][y].length; i++) {
                            if(look[x][y][i].type == LOOK_TERRAIN && look[x][y][i].terrain == terrain) {
                            
                                var position = new RoomPosition(x, y, nameRoom);
                            
                                debugger;
                                
                                var data = {
                                    type: look[x][y][i].type,
                                    pos: position,
                                    terrain: terrain,
                                    creepName: ""
                                };
                                
                                this.Data[nameRoom][id].data[countData] = data;
                                
                                result = true;
                                
                                countData++;
                                
                        }
                    }
                }
            }
            
            return result;
                
        }
    }

    PositionDto.prototype = {
		Get: function(pos, id) {		
			return this.Data[pos.nameRoom][id];
		},
		Set: function(pos, id, structure, terrain, creep){
		    if (this.Data[pos.nameRoom] == null && this.Data[pos.nameRoom][id] == null) {
		        
		        this.GenerateLocation(pos, id, structure, terrain);
		        
		        return "OK";
		    }
		    else{
		        
		    }
		    
		},
		Length: function(){
		   return Object.keys(this.Data).length;
		}
	};

    return PositionDto;
})();

module.exports = PositionDto;