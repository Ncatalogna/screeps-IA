/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('creep.Rol');
 * mod.thing == 'a thing'; // true
 */
//
//
"use strict";
//

//

module.exports = {
   Minero: {"","",""},
   Constructor: {"","",""},
   Medico: {},
   Soldado: {}
};

function RetornarRol(creep)
{
    switch(creep.memory.rol){
        
        case ROL_MINERO:
            Standby(creep);
            break;
            
        case ROL_CONSTRUCTOR:
        
            break;
        
        case ROL_MEDICO:
            
            break;
        
        case ROL_SOLDADO:
            
            break;
            
    }
    
}