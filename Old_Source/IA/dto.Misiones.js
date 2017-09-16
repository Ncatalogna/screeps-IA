/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('dto.Misiones');
 * mod.thing == 'a thing'; // true
 */

var MisionesDto = (function () {
	'use strict';
	
    // Constructor
    function MisionesDto (Data) {
        this.Data = Data;
    }

    MisionesDto.prototype = {
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

    return MisionesDto;
})();

module.exports = MisionesDto;