/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('db.Estado');
 * mod.thing == 'a thing'; // true
 */
//
//

var EstadoDto = (function () {
	'use strict';
	
    // Constructor
    function EstadoDto (Data) {
        this.Data = Data;
    }

    EstadoDto.prototype = {
		Get: function(key) {		
			return this.Data[key];
		},
		Set: function(key, value){
		    if (this.Data[key] != null) {
		        this.Data[key] = value;
		        return "INSERT";
		    }
		    else{
		        this.Data[key] = value;
		        return "UPDATE";
		    }
		    
		},
		Length: function(){
		   return Object.keys(this.Data).length;
		}
	};

    return EstadoDto;
})();

module.exports = EstadoDto;
