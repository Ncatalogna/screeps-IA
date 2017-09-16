/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('dto.Rooms');
 * mod.thing == 'a thing'; // true
 */
//Using
var _const = require('Constants');
//
//
var RoomsDto = (function () {
	'use strict';
	
    // Constructor
    function RoomsDto (Data) {
        this.Data = Data;
        
        this.insertar = function(){
            
        }
    }

    RoomsDto.prototype = {
		Get: function(key) {	
		    debuger;
		    roomData = this.Data[key];
		    
		    if (roomData != null) {
		        return roomData;
		    }
		    else{
		        
		        var newRoom = { key: {
		            status: _const.ROOM_UNKNOWN,
		        }};
		        
		        this.Data[key] = newRoom;
		        
		        return newRoom;
		    }
		},
		GetConquered: function(){
		    debuger;
		    var roomsData = [];
		    var count = 0;
		    for (var i = 0; i < this.Data.length; i++) {
		        
		        if (this.Data[i].status == _const.ROOM_CONQUERED) {
		            roomsData[count] = this.Data[i];
		            count++;
		        }
		    }
		    return roomsData;
		},
		Set: function(key, status){
		    debuger;
		    if (this.Data[key] != null) {
		        this.Data[key].status = status;
		        return "INSERT";
		    }
		    else{
		        this.Data[key].status = status;
		        return "UPDATE";
		    }
		    
		},
		UpdateFromCreep: function(creep){
		    
		}
		Length: function(){
		   return Object.keys(this.Data).length;
		}
	};

    return RoomsDto;
})();

module.exports = RoomsDto;