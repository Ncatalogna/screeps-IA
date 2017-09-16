/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('dto.Parameters');
 * mod.thing == 'a thing'; // true
 */


var ParametersDto = (function () {
	'use strict';
	
    // Constructor
    function ParametersDto (Data) {
        this.Data = Data;
    }

    ParametersDto.prototype = {
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

    return ParametersDto;
})();

module.exports = ParametersDto;