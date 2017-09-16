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
    var Tower = require('Tower');
    var UI = require('UI');
} 
catch (e){
    var message = "Exception error in Using" + e.toString();
    debugger;
    console.log(message);
    Game.notify(message);
}
//
//
module.exports.loop = function () {
   try {
       
        //
        db.load();
        //DEB
            var poblacionCreeps= Object.keys(Game.creeps).length;
            db.estado.Set("poblacionCreeps", poblacionCreeps);
            var ui = new UI(db, Game);
        //
        
        //Rooms
        
        debugger;
        
        var creature = new Creature(db);
        
        //creature.Creacion();
        
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            
            creature.Estado(creep);
            
            //db.roomsDto.Set(creep.room.name);
        }
        
        debugger;
        
        var roomData = db.roomsDto.GetConquered();
        
        
        //var tower = Tower(db);
        
        //for (var i = 0; i < roomData.length; i++) {
        //    tower.run(roomData[i].name);
        //}
        
        var helpert = new Helper(db);
        helpert.CreacionCreepsDefinidos('Spawn-1');
        
        //var mantenimiento = new Mantenimiento(db);
        //mantenimiento.Creeps(Game);
        
        
        ui.Update();
        //debugger;
        db.save();
      
   } catch (e){
       debugger;
       var data = db.getJsonData();
       var message = 'Error: ' + e.message + ' Datos: ' + data;
       console.log(message);
       Game.notify(message);
   }
}