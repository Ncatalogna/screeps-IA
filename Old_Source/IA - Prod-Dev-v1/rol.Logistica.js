/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('rol.Logistica');
 * mod.thing == 'a thing'; // true
 */

//
//
var Logistica = (function () {
	'use strict';
	
    // Constructor
    function Logistica (db) {
        this.db = db;
        
        //Private Metodos
        this.PosibleMuerte = function(creep){
           
    	}
    	
    	this.EnemigosCercanos = function(creep){
           
        }
    }

    Logistica.prototype = {
		Run: function(creep) {		
			
		}
	};

    return Logistica;
})();


module.exports = Logistica;