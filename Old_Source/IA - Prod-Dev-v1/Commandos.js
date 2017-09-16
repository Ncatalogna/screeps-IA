//Commandos


Game.spawns['Spawn-1'].createCreep([WORK, CARRY, MOVE], 'Obrero-1', 
    {rol: 'minero', work: 'standby', spawn: 'Spawn-1'});

Game.spawns['Spawn-1'].createCreep([WORK, CARRY, MOVE], 'Obrero-2', 
    {rol: 'constructor', work: 'standby', spawn: 'Spawn-1'});

require('dto.Rooms').Set('sim','');

    STRUCTURE_SPAWN: "spawn",
    STRUCTURE_EXTENSION: "extension",
    STRUCTURE_ROAD: "road",
    STRUCTURE_WALL: "constructedWall",
    STRUCTURE_RAMPART: "rampart",
    STRUCTURE_KEEPER_LAIR: "keeperLair",
    STRUCTURE_PORTAL: "portal",
    STRUCTURE_CONTROLLER: "controller",
    STRUCTURE_LINK: "link",
    STRUCTURE_STORAGE: "storage",
    STRUCTURE_TOWER: "tower",
    STRUCTURE_OBSERVER: "observer",
    STRUCTURE_POWER_BANK: "powerBank",
    STRUCTURE_POWER_SPAWN: "powerSpawn",
    STRUCTURE_EXTRACTOR: "extractor",
    STRUCTURE_LAB: "lab",
    STRUCTURE_TERMINAL: "terminal",
    STRUCTURE_CONTAINER: "container",
    STRUCTURE_NUKER: "nuker",
    
⚒
🛠
⚔
🗡
🏹
🛡
⚙
💉
⚰
🛢
🛒
⛔
⚠
✔
✖
🆘
🏳
🏴
🇦🇷


    
//
//Creature
//
//Using
var rolConstructor = require('rol.Constructor');
var rolMinero = require('rol.Minero');
var _const = require('Constants');
//
//
var Creature = (function () {
	'use strict';
	
    // Constructor
    function Creature (db) {
        this.db = db;
        
        //Private Metodos
        this.PosibleMuerte = function(creep){
            throw new Error({
            name: "JavaScriptKit Error",
            message: "Error detected. Please contact webmaster"
             });
        
    	}
    	
    	this.EnemigosCercanos = function(creep){
           
        }
    }

    Creature.prototype = {
		Estado: function(creep) {		
			
		}
	};

    return Creature;
})();


module.exports = Creature;

//Class declaration

var User = function(name, age) { // constructor
}

User.prototype = {}
//Instance variables (members)

var User = function(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype = {}
//Static variables

var User = function(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype = {
    staticVar: 15,
    anotherStaticVar: 'text'
}
//Here I defined two static variables. Each User instance has access to these two variables. Note, that we can initialize it with value;

//Instance functions (methods)

var User = function(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype = {
    getName: function() {
        return this.name;
    },

    setName: function(name) {
        this.name = name;
    }
}
//Usage example:

var user = new User('Mike', 29);
user.setName('John');
alert(user.getName()); //should be 'John'
//Static functions

var User = function(name, age) {
    this.name = name;
    this.age = age;
}

User.create = function(name, age) {
    return new User(name, age);
}

User.prototype = {}

propertiesInfo['spawning'] = {
                enumerable: true,
                get() {
                    if(!this['_spawning']) {
                        this['_spawning'] = properties['spawning'](dataFn(this.id));
                    }
                    return this['_spawning'];
                }
            }
