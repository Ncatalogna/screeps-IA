/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('UI');
 * mod.thing == 'a thing'; // true
 */

//
//Creature
//
//Using
//
//
var UI = (function () {
	'use strict';
	
    // Constructor
    function Creature (db, Game) {
        
        this.db = db;
        this.Game = Game;
        this.PreTime = 0;
        
        //Private Metodos
        this.CPUAnalitis = function(){
            //debugger;
          if (this.PreTime === 0) {
              this.PreTime = this.Game.time;
          }
          else{
              const startCpu = this.Game.time - this.PreTime;
          
              var message = 'CPU: ' + startCpu;
        	    
               new RoomVisual().text(message, 15, 0, {
                       font: 'bold italic .7 serif', 
                       color: 'white', 
                       //backgroundColor: '#88ff88', 
                       //backgroundPadding: 0.1,//.3,
                       stroke: '#005500',
                       strokeWidth: .15         
                    });
          }
    	}
    	
    	this.CantidadCreeps = function(){
    	    //debugger;
    	   var message = 'Creeps: ' + this.db.estado.Get("poblacionCreeps");
    	    
           new RoomVisual().text(message, 10, 0, {
                   font: 'bold italic .7 serif', 
                   color: 'white', 
                   //backgroundColor: '#88ff88', 
                   //backgroundPadding: 0.1,//.3,
                   stroke: '#005500',
                   strokeWidth: .15         
                });
        }
        
        this.CantidadCreeps();
        //this.CPUAnalitis();
    }

    Creature.prototype = {
		Update: function() {	
            this.CantidadCreeps();
            //this.CPUAnalitis();
		}
	};

    return Creature;
})();


module.exports = UI;