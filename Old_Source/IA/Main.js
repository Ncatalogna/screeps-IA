//
//
'use strict';
//Using
try {
    var creepObrero = require('creep.Obrero');
    var db = require('db.UnitOfWork');
    var _const = require('Constants');
    var Helper = require('Helper');
    var Mantenimiento = require('Mantenimiento');
    var Creature = require('Creature');
} 
catch (e){
    var message = "Exception error in Using" + e.toString();
    console.log(message);
    Game.notify(message);
}
//
//
module.exports.loop = function () {
   try {
        db.load();
        //Test GitHub
        var helpert = new Helper(db);
        helpert.CreacionCreepsDefinidos('Spawn-1');
        
        var mantenimiento = new Mantenimiento(db);
        mantenimiento.Creeps(Game);
        
        var creature = new Creature(db);
        
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            creature.Estado(creep);
        }
        
        db.save();
      
   } catch (e){
       var data = db.getJsonData();
       var message = 'Error: ' + e.message + ' Datos: ' + data;
       console.log(message);
       Game.notify(message);
   }
}
