dojo.declare("Coordinador", wm.Page, {
  start: function() {
    this.curdate = new Date().getTime();
    this.a_cursy.input.setValue("f1",this.curdate);
    this.a_cursy.update(); 
  },

  alumnos_curso_listadoSelected: function(inSender, inIndex) {
     var json= this.a_cursy.getItem(0);
     var idsy= json.data.idsy;
     var idpersona= this.alumnos_curso_listado.selectedItem.getData().idpersona;
     this.insccomentariosalumnosLiveVariable1.filter.setValue("sy.idSy",idsy);
     this.insccomentariosalumnosLiveVariable1.filter.setValue("persona.idPersona",idpersona);
     this.insccomentariosalumnosLiveVariable1.update();
  },
  insccomentariosalumnosLiveForm1BeginInsert: function(inSender) {
     var json= this.a_cursy.getItem(0);
     var idsy= json.data.idsy;
     var idpersona= this.alumnos_curso_listado.selectedItem.getData().idpersona;
     var curdate= new Date().getTime();
     this.syLookup1.setDataValue(idsy);     
     this.personaLookup1.setDataValue(idpersona);
     this.fechaActualEditor1.setReadonly(true);
     this.fechaActualEditor1.setDataValue(curdate);
  },
  alumnos_curso_listadoSelectionChanged: function(inSender) {
     this.editPanel1.cancelEdit();   
  },
  insccomentariosalumnosLiveForm1BeginUpdate: function(inSender) {
    try {
     var bim= this.insccomentariosalumnosDataGrid1.selectedItem.getData().numeroBimestre; 
     this.numeroBimestreEditor1.setDataValue(""+bim+""); 
     this.fechaActualEditor1.setReadonly(true);
      
    } catch(e) {
      console.error('ERROR IN insccomentariosalumnosLiveForm1BeginUpdate: ' + e); 
    } 
  },
  insccomentariosalumnosDataGrid1SelectionChanged: function(inSender) {
     this.editPanel1.cancelEdit();  
  },
  _end: 0
});