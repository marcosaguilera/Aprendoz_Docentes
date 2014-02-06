dojo.declare("Eventualidades", wm.Page, {
  start: function() {
    
  },
  sesionLiveForm1BeginInsert: function(inSender) {
    try {
      this.asignaturaLookup1.setValue("dataValue", this.asignaturas.selectedItem.getData().id.asignaturaIdAsignatura);
       this.cursoLookup1.setValue("dataValue", this.asignaturas.selectedItem.getData().id.cursoIdCurso);
      
    } catch(e) {
      console.error('ERROR IN sesionLiveForm1BeginInsert: ' + e); 
    } 
  },
  
  button2Click: function(inSender, inEvent) {
    try {
          this.docenteAsig.update();
            app.lsEventualidad.update();    
              this.sesionLiveVariable1.clearData(); 
                this.asistencia.clearData(); 
      
    } catch(e) {
      console.error('ERROR IN button2Click: ' + e); 
    } 
  },
  button1Click: function(inSender, inEvent) {
    try {
      this.asignaturaCurso.clearData();
        this.sesionLiveVariable1.clearData();
          this.asistencia.clearData();
           this.selectEditor2.clear();
             this.selectEditor3.clear();
               
      
    } catch(e) {
      console.error('ERROR IN button1Click: ' + e); 
    } 
  },
  asignaturasCellClick: function(inSender, inEvent) {
    try {
      this.sesionLiveVariable1.clearData();
        this.asistencia.clearData();
      
    } catch(e) {
      console.error('ERROR IN asignaturasCellClick: ' + e); 
    } 
  },
  dataGrid1RowDblClick: function(inSender, inEvent) {
    try {
      
      this.editPanel2.beginDataUpdate();
      
    } catch(e) {
      console.error('ERROR IN dataGrid1RowDblClick: ' + e); 
    } 
  },
  picture1Click: function(inSender) {
    try {
      this.generoSelect.clear();
       this.asistencia.update();
      
    } catch(e) {
      console.error('ERROR IN picture1Click: ' + e); 
    } 
  },
  liveForm1CancelEdit: function(inSender) {
    try {
       this.dataGrid1.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN liveForm1CancelEdit: ' + e); 
    } 
  },
  liveForm1BeginUpdate: function(inSender) {
    try {
      this.dataGrid1.setDisabled(true);
      
    } catch(e) {
      console.error('ERROR IN liveForm1BeginUpdate: ' + e); 
    } 
  },
  asistenciadataGrid1SelectionChanged: function(inSender) {
    try {
   /* this.editPanel2.cancelEdit();
      this.dataGrid1.setDisabled(false);
      */
       
    } catch(e) {
      console.error('ERROR IN dataGrid1SelectionChanged: ' + e); 
    } 
  },
  button3Click: function(inSender, inEvent) {
    try {
     this.personaBox.clear();
       this.docenteAsig.update();
            app.lsEventualidad.update(); 
      
    } catch(e) {
      console.error('ERROR IN button3Click: ' + e); 
    } 
  },
  liveForm1UpdateData: function(inSender) {
    try {
      this.dataGrid1.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN liveForm1UpdateData: ' + e); 
    } 
  },
  liveForm1Result: function(inSender, inData) {
    try {
      this.dataGrid1.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN liveForm1Result: ' + e); 
    } 
  },
  _end: 0
});