/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('db.Misiones');
 * mod.thing == 'a thing'; // true
 */
//
//
//db.Misiones
//Using
var helper = require('helper');
//
module.exports = {
    Data: [],
    //Data: [{ 
    //        ID:"", 
    //        Evento:"",
    //       Creeps:[],
    //        Acciones:[
    //            {X:"",Y:"",Elemento:""}
    //            ]
    //    }],
    Create: function(Evento, Acciones){
      var value = "";
      
      var id = helper.GenerateID();
      
      if (this.Data.length != null) {
          
          if (Acciones == null) {
              Acciones = [];
          }
          
          var data = {
              ID: id,
              Evento: Evento,
              Creeps:[],
              Acciones:[ Acciones ]
          };
          
          this.Data.push(data);
      }
    },
    Finish: function(keyName, value){
      var resultSearch = false;
      //debugger;
      if (keyName != null) {
          
          if (this.Data.length != null) {
              for (var i = 0; i < this.Data.length; i++) {
                  if (this.Data[i].key == keyName) {
                      this.Data[i].value = value;
                      resultSearch = true;
                      i = this.Data.length;
                  }
                 
              }
          }
          
          if (!resultSearch) {
              this.Data.push({ 
                        key:keyName, 
                        value:value
                    });
          }
      }
    },
    Search: function(evento){
      
      //debugger;
      if (this.Data.length != null) {
          for (var i = 0; i < this.Data.length; i++) {
              if (this.Data[i].Evento == evento) {
                  return this.Data[i];
                  //return value;
              }
             
          }
      }
    },
    
};

