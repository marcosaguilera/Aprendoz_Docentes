dojo.declare("Horarios", wm.Page, {
  start: function() {
    
  },
  
  syHorarioChange: function(inSender, inDisplayValue, inDataValue) {
     var username   = this.getUserName.getData().dataValue;
     var idsy       = this.syHorario.getDataValue();
     this.sv_asignaturas_docentes.input.setValue("usuario", username);
     this.sv_asignaturas_docentes.input.setValue("sy", idsy);
     this.sv_asignaturas_docentes.update();
  },
  
  asignaturas_docentesSelect: function(inSender, inItem) {
      var index     = this.asignaturas_docentes.getSelectedIndex();
      var data      = this.asignaturas_docentes.getItemData(index);
      var subjectid = data.idasignatura;
      var cursoid   = data.idcurso;
      var syid      = data.idsy;
      this.nuevohorario.enable();
      this.horariosServiceVariable.input.setValue("pasignatura",subjectid);
      this.horariosServiceVariable.input.setValue("pcurso",cursoid);
      this.horariosServiceVariable.input.setValue("psy",syid);
      this.horariosServiceVariable.update(); 
  },
 
  guardarNewButtonClick: function(inSender, inEvent) {
     var index        = this.asignaturas_docentes.getSelectedIndex();
     var data         = this.asignaturas_docentes.getItemData(index);
     var cursoid      = data.idcurso;
     var curso        = data.curso;
     var syid         = data.idsy
     var sy           = data.sy_escolar;
     var idasignatura = data.idasignatura;
     var asignatura   = data.asignatura;
     var sesion       = this.idSesionEditor1.getDataValue();
     var idtipoSemana = this.idTipoSemanaEditor1.getDataValue();
     var tiposemana   = this.idTipoSemanaEditor1.getDisplayValue();
     var _dia         = this.idDiaSemanaEditor1.getDataValue();

     this.accionesHorarios.setValue("numeroSesion", sesion); 
     this.accionesHorarios.setValue("tipoSemana.idTipoSemana", idtipoSemana); 
     this.accionesHorarios.setValue("tipoSemana.tipoSemana", tiposemana); 
     this.accionesHorarios.setValue("dia", _dia); 
     this.accionesHorarios.setValue("curso.idCurso", cursoid); 
     this.accionesHorarios.setValue("curso.curso", curso); 
     this.accionesHorarios.setValue("asignatura.idAsignatura", idasignatura); 
     this.accionesHorarios.setValue("asignatura.asignatura", asignatura);
     this.accionesHorarios.setValue("sy.idSy", syid);
     this.accionesHorarios.setValue("sy.schoolYear", sy);
     this.horariosLiveForm.setDataSet(this.accionesHorarios);   
     this.horariosLiveForm.insertData();   
  },
  
  guardarUpdateButtonClick: function(inSender, inEvent) {
     var index        = this.asignaturas_docentes.getSelectedIndex();
     var data         = this.asignaturas_docentes.getItemData(index);
     var cursoid      = data.idcurso;
     var curso        = data.curso;
     var syid         = data.idsy
     var sy           = data.sy_escolar;
     var idasignatura = data.idasignatura;
     var asignatura   = data.asignatura;
     var sesion       = this.idSesionEditor1.getDataValue();
     var idtipoSemana = this.idTipoSemanaEditor1.getDataValue();
     var tiposemana   = this.idTipoSemanaEditor1.getDisplayValue();
     var _dia         = this.idDiaSemanaEditor1.getDataValue();
     var idhorario    = this.idHorarioEditor1.getDataValue();
     
     this.accionesHorarios.setValue("idHorario", idhorario);
     this.accionesHorarios.setValue("numeroSesion", sesion); 
     this.accionesHorarios.setValue("tipoSemana.idTipoSemana", idtipoSemana); 
     this.accionesHorarios.setValue("tipoSemana.tipoSemana", tiposemana); 
     this.accionesHorarios.setValue("dia", _dia); 
     this.accionesHorarios.setValue("curso.idCurso", cursoid); 
     this.accionesHorarios.setValue("curso.curso", curso); 
     this.accionesHorarios.setValue("asignatura.idAsignatura", idasignatura); 
     this.accionesHorarios.setValue("asignatura.asignatura", asignatura);
     this.accionesHorarios.setValue("sy.idSy", syid);
     this.accionesHorarios.setValue("sy.schoolYear", sy);
     this.horariosLiveForm.setDataSet(this.accionesHorarios);  
     this.horariosLiveForm.updateData();          
  },
  
  eliminahorarioClick: function(inSender, inEvent) {
     var index        = this.asignaturas_docentes.getSelectedIndex();
     var data         = this.asignaturas_docentes.getItemData(index);
     var cursoid      = data.idcurso;
     var curso        = data.curso;
     var syid         = data.idsy
     var sy           = data.sy_escolar;
     var idasignatura = data.idasignatura;
     var asignatura   = data.asignatura;
     var sesion       = this.idSesionEditor1.getDataValue();
     var idtipoSemana = this.idTipoSemanaEditor1.getDataValue();
     var tiposemana   = this.idTipoSemanaEditor1.getDisplayValue();
     var _dia         = this.idDiaSemanaEditor1.getDataValue();
     var idhorario    = this.idHorarioEditor1.getDataValue();
     
     this.accionesHorarios.setValue("idHorario", idhorario);
     this.horariosLiveForm.setDataSet(this.accionesHorarios);  
     this.horariosLiveForm.deleteData();   
  },
  
  nuevohorarioClick: function(inSender, inEvent) {
     var index     = this.asignaturas_docentes.getSelectedIndex();
     var data      = this.asignaturas_docentes.getItemData(index);
     var cursoid   = data.idcurso;
     var curso     = data.curso;
     var syid      = data.idsy
     var sy        = data.sy_escolar;
     var idasignatura = data.idasignatura;
     var asignatura   = data.asignatura;
     
     this.idSyEditor1.setDataValue(sy); 
     this.idCursoEditor1.setDataValue(curso);
     this.idAsignaturaEditor1.setDataValue(asignatura);
     this.idDiaSemanaEditor1.clear();
     this.idTipoSemanaEditor1.clear();
     this.idSesionEditor1.clear();
     this.idDiaSemanaEditor1.setReadonly(false);
     this.idTipoSemanaEditor1.setReadonly(false);
     this.idSesionEditor1.setReadonly(false);  
     this.nuevohorario.hide();
     this.actualizahorario.hide();
     this.eliminahorario.hide();
     this.guardarUpdateButton.hide();
     this.guardarNewButton.show();
     this.cancelarButton.show();
  },
  
  cancelarButtonClick: function(inSender, inEvent) {
     this.idDiaSemanaEditor1.setReadonly(true);
     this.idTipoSemanaEditor1.setReadonly(true);
     this.idSesionEditor1.setReadonly(true); 
     this.guardarNewButton.hide();
     this.cancelarButton.hide(); 
     this.guardarUpdateButton.hide();
     this.nuevohorario.show();
     this.actualizahorario.show();
     this.eliminahorario.show();
  },
  
  actualizahorarioClick: function(inSender, inEvent) {  
     this.idDiaSemanaEditor1.setReadonly(false);
     this.idTipoSemanaEditor1.setReadonly(false);
     this.idSesionEditor1.setReadonly(false);    
     this.guardarNewButton.hide();
     this.nuevohorario.hide();
     this.actualizahorario.hide();
     this.eliminahorario.hide();
     this.cancelarButton.show();  
     this.guardarUpdateButton.show();
  },
  
  horariosDataGridSelected: function(inSender, inIndex) {
      var idhorario= this.horariosDataGrid.selectedItem.getData().id;
      var asignatura= this.horariosDataGrid.selectedItem.getData().asignatura;
      var idasignatura= this.horariosDataGrid.selectedItem.getData().idasignatura;
      var sy= this.horariosDataGrid.selectedItem.getData().sy_schoolar;
      var idsy= this.horariosDataGrid.selectedItem.getData().idsy;
      var curso= this.horariosDataGrid.selectedItem.getData().curso;
      var idcurso= this.horariosDataGrid.selectedItem.getData().idcurso;
      var dia= this.horariosDataGrid.selectedItem.getData().dia;
      var semana= this.horariosDataGrid.selectedItem.getData().tiposemana;
      var idsemana= this.horariosDataGrid.selectedItem.getData().idsemana;
      var sesion= this.horariosDataGrid.selectedItem.getData().numero_sesion;   
      this.idDiaSemanaEditor1.clear();
      this.idTipoSemanaEditor1.clear();
      this.idSesionEditor1.clear();
      this.actualizahorario.enable();
      this.eliminahorario.enable();
      this.idSyEditor1.setDataValue(sy); 
      this.idCursoEditor1.setDataValue(curso); 
      this.idAsignaturaEditor1.setDataValue(asignatura); 
      this.idHorarioEditor1.setDataValue(idhorario); 
      this.idDiaSemanaEditor1.setDataValue(""+dia+""); 
      this.idTipoSemanaEditor1.setDataValue(""+idsemana+""); 
      this.idSesionEditor1.setDataValue(""+sesion+""); 
  },

  horariosLiveFormInsertData: function(inSender) {
    this.horariosServiceVariable.update();
  },
  
  horariosLiveFormUpdateData: function(inSender) {
    this.horariosServiceVariable.update();
  },
  
  horariosLiveFormDeleteData: function(inSender) {
    this.horariosServiceVariable.update();
  },
  
  horariosLiveFormSuccess: function(inSender, inData) {
    this.cancelarButtonClick();
  },
   
  _end: 0
});