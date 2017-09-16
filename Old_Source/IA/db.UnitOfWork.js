//
//
'use strict';
//Using
var ParametersDto = require('dto.Parameters');
var creepsDto = require('db.Creeps');
var misionesDto = require('db.Misiones');
//Using mapper
var misiones = [];
var censoCreeps = [];
var estado = {};
//

module.exports = {
    load: function(){
        //debugger;
        RawMemory.setActiveSegments([0,4]);
        this.estado = loadMemory(0, ParametersDto);
        this.censoCreeps = loadMemoryTest(1, creepsDto);
        this.misiones = loadMemoryTest(2, misionesDto);
        
        //this.censoCreeps = loadMemory(1, this.censoCreeps);
        //this.misiones = loadMemory(2, this.misiones);
    },
    save: function(){
        //debugger;
        SaveMemory(this.estado.Data, ParametersDto);
        SaveMemoryTest(this.censoCreeps, 1);
        SaveMemoryTest(this.misiones, 2);
        
       // SaveMemory(this.misiones, 2);
    },
    getJsonData: function(){
        var string = "";
        try {
            var data = {
               estado: this.estadoDto.Data,
               censoCreeps: this.censoCreeps.Data,
               misiones: this.misiones.Data
            };
            
            string = JSON.stringify(data);
            
        } catch (e) {
            //Soy parte del log, si fallo tengo que retornar error.
            string = e.message;
        }
        return string;
    },
    misiones: function (){ return this.misiones; },
    censoCreeps : function (){ return this.censoCreeps; }
};

function loadMemory(position, Dto)
{
    var data = {};
    var memory = Memory[Dto.name];
    
    if (memory != null) {
        data = memory;
    }
    
    var dto = new Dto(data);
    return dto;
}

function SaveMemory(data, Dto)
{
    Memory[Dto.name] = data;
}

function loadMemoryTest(position, dataDto)
{
    var data;
    var memory = RawMemory.segments[position];
        
    if (memory != null) {
        data = JSON.parse(memory);
        dataDto.Data = data;
        
    }
    return dataDto;
}

function SaveMemoryTest(data, position)
{
    RawMemory.segments[position] = JSON.stringify(data.Data);
}