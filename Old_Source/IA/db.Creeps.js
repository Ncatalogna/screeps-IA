/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('db.Creeps');
 * mod.thing == 'a thing'; // true
 */

'use strict';
module.exports = {
    //Data por defecto son los datos
    Data: [],
    //Data: [{ 
    //        name:"",
    //        spawn:"",
    //        numero: 0,
    //        body:[], 
    //        rol: "",
    //        work: ""
    //    }],
    GetKey: function(Name){
      var value = [];
      
      if (this.Data.length != null) {
          for (var i = 0; i < this.Data.length; i++) {
              if (this.Data[i].name == Name) {
                  value = this.Data[i];
                  return value;
              }
             
          }
      }
    },
    SetKey: function(keyName, value){
      if (keyName != null) {
          this.Data.push({ 
                key:keyName, 
                value:value
            });
      }
    },
    Registrar: function(creep, tipoMuerte){
        //debugger;
        var registrado = true;
       
    	var nombre = creep.name.split("-");
    
        for (var i = 0; i < this.Data.length; i++) {
            if (this.Data[i].name == nombre[0] && this.Data[i].numero == nombre[1]) {
                registrado = false
                i = this.Data.length;
            }
        }
        
        if (registrado) {
            //Body array create
            var listBody = [];
            var stringBody = "";
            
            for (var i = 0; i < creep.body.length; i++) {
               listBody.push(creep.body[i].type);
            }
            
            stringBody = JSON.stringify(listBody);
           
    	    this.Data.push({work: creep.memory.work, rol: creep.memory.rol, name: nombre[0], numero: nombre[1], spawn: creep.memory.spawn, body: stringBody, tipoMuerte: tipoMuerte});
        }
    },
    Verificar: function(posicion){
        
        var guardarCambios = false;
		var spawn;
		
		if(this.Data != null){
		    for (var i = 0; i < this.Data.length; i++) {
		        var creep = this.Data[i];
		        //debugger;
		        for(const i in Game.spawns) {
		            var nameSpawn = Game.spawns[i].name;
		            
		            if (nameSpawn == creep.spawn) {
		                spawn = Game.spawns[i];
		                break;
		            }
                    
                }
                
			   if(spawn != null){
			       
			       var nameCreep = creep.name + "-" + creep.numero;
			       var bodyString = JSON.parse(creep.body);
			       
			       var result = spawn.canCreateCreep(bodyString, nameCreep);
			       
			       if(result == OK) {
					   var resultCreate = spawn.createCreep(bodyString, nameCreep, { rol: creep.rol, work: creep.work, spawn: creep.spawn } );
					   if (resultCreate == nameCreep) {
					       listCreateCreeps.splice(i, 1);
					       guardarCambios = true;
					   }
				    }
				    else if(result == ERR_NAME_EXISTS){
        		       if(creep.tipoMuerte){
        		          var creepLive = Game.creeps[nameCreep];
        		          
        		          if (creepLive.hits == creepLive.hitsMax){
        		                this.Data.splice(i, 1);
					            guardarCambios = true;
        		          }
        		       }
    		       
				    }
			   }
			   
		    }
		}
    }
    
};
