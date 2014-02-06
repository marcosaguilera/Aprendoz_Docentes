dojo.declare("Demografica", wm.Page, {
  start: function() {
    
  },
  boton_limpiarClick: function(inSender, inEvent) {
    try {
      
      this.cfamilia.clear();
      this.n1.clear();
      this.n2.clear();
      this.a1.clear();
      this.a2.clear();
      this.codigo.clear();
      this.Vista_Personas_Demografica.clearData();
      this.personaLiveVariable1.clearData();
      this.Vista_Detalles_Academicos.clearData();
      
    } catch(e) {
      console.error('ERROR IN boton_limpiarClick: ' + e); 
    } 
  },
  boton_detallesClick: function(inSender, inEvent) {
    try {
      this.iradetalles.update();
     
    } catch(e) {
      console.error('ERROR IN boton_detallesClick: ' + e); 
    } 
  },

  tipoPersonaLookup1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     if(this.tipoPersonaLookup1.dataValue=="Estudiante"){  
      
      this.nivelAcademicoEditor1.disable();
      
                }  
      if(this.tipoPersonaLookup1.dataValue!="Estudiante"){  
     
       this.nivelAcademicoEditor1.enable();
                }  
            } catch(e) {
      console.error('ERROR IN tipoPersonaLookup1Change: ' + e); 
    } 
  },
  tab_detalles_academicosShow: function(inSender) {
    try {
     this.sylista.update();
      this.aux1.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().apellido1+" "+this.personaDataGrid1.selectedItem.getData().apellido2);
      this.aux2.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().nombre1+ " "+this.personaDataGrid1.selectedItem.getData().nombre2);
      this.aux3.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().tipoDocumento);
      this.aux4.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().noDocumento);
      this.aux5.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().cursoIngreso);
      this.aux6.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().email);
      
    } catch(e) {
      console.error('ERROR IN tab_detalles_academicosShow: ' + e); 
    } 
  },
  layer13Show: function(inSender) {
    try {
      this.aux7.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().apellido1+" "+this.personaDataGrid1.selectedItem.getData().apellido2);
      this.aux8.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().nombre1+ " "+this.personaDataGrid1.selectedItem.getData().nombre2);
      this.aux9.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().tipoDocumento);
      this.aux10.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().noDocumento);
      this.aux11.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().cursoIngreso);
      this.aux12.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().email);
      
    } catch(e) {
      console.error('ERROR IN layer13Show: ' + e); 
    } 
  },
  
  Tabla_personas_docentesSelected: function(inSender, inIndex) {
    try {
      this.boton_detalles.enable();
       this.caja_sy_detalles_academicos.enable();
        this.tiny_img.setSource("http://aprendoz.rochester.edu.co/stds/"+this.Tabla_personas_docentes.selectedItem.getData().id.codigo+".jpg");
         this.personaLiveVariable1.update();
      
    } catch(e) {
      console.error('ERROR IN personaDataGrid2Selected: ' + e); 
    } 
  },
  Tabla_personas_docentesDeselected: function(inSender, inIndex) {
    try {
      this.boton_detalles.disable();
       this.caja_sy_detalles_academicos.disable();      
    } catch(e) {
      console.error('ERROR IN personaDataGrid2Deselected: ' + e); 
    } 
  },
  personaDataGrid1Selected: function(inSender, inIndex) {
     var tipo= this.personaDataGrid1.selectedItem.getData().tipoPersona.idTipoPersona;
     var idpersona= this.personaDataGrid1.selectedItem.getData().idPersona;
     this.a_getCursoProcesoSV.input.setValue("ppersona", idpersona);
     this.a_getCursoProcesoSV.update();
     if(tipo == 1){
       this.jobInfo.hide();
       this.personalInfo.show();
       this.familiarInfo.show();
     }else{
       this.ServicesInfo.hide();
       this.familiarInfo.hide();
       this.jobInfo.show();
     }
     if(this.ls_tipo_persona.dataSetCount == undefined){//if liveVariable loaded by first time, update
        this.ls_tipo_persona.update();
     }else{
     /*nothing happens here!*/
     }
     if(this.listaNacionalidades.dataSetCount == undefined){//if liveVariable loaded by first time, update
        this.listaNacionalidades.update();
     }else{
     /*nothing happens here!*/
     }
     if(this.listaEstados.dataSetCount == undefined){//if liveVariable loaded by first time, update
        this.listaEstados.update();
     }else{
     /*nothing happens here!*/
     }
     if(this.lsEps.dataSetCount == undefined){//if liveVariable loaded by first time, update
        this.lsEps.update();
     }else{
     /*nothing happens here!*/
     }
  },
  ls_tipo_personaBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN ls_tipo_personaBeforeUpdate: ' + e); 
    } 
  },
  ls_tipo_personaSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      
    } catch(e) {
      console.error('ERROR IN ls_tipo_personaSuccess: ' + e); 
    } 
  },
  listaNacionalidadesBeforeUpdate: function(inSender, ioInput) {
    try {
       app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN listaPaisBeforeUpdate: ' + e); 
    } 
  },
  listaNacionalidadesSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      
    } catch(e) {
      console.error('ERROR IN listaPaisSuccess: ' + e); 
    } 
  },
  demo_nameComplex_searchChange: function(inSender, inDisplayValue, inDataValue) {
     var _search= this.demo_nameComplex_search.getDataValue();
     this.studentosByComplexName.input.setValue("search", _search);
     this.studentosByComplexName.update();
  },
  studentsSelect: function(inSender, inItem) {
     var index  = this.students.getSelectedIndex();
     var data   = this.students.getItemData(index);
     var codigo = data.codigo;
     var idpersona= data.idpersona;
     var nombre   = data.complex;
     var idfamilia= data.idgf;
     
     //var cursoActual= data.cursoActual;
     this.student_pic.setSource("http://www.rochester.edu.co/fotosestudiantes/"+codigo+".Jpeg");
     this.personaLiveVariable1.filter.setValue("grupoFamiliar.idGrupoFamiliar", idfamilia);
     this.personaLiveVariable1.update();
     
  },
  a_getCursoProcesoSVSuccess: function(inSender, inDeprecated) {
    try {
     var cursoProceso = this.a_getCursoProcesoSV.getItem(0);
     var y = cursoProceso.data.idcurso;  
     this.cursoActualSelectEditor.setDataValue(y); 
     
    } catch(e) {
      console.error('ERROR IN a_getCursoProcesoSVSuccess: ' + e); 
    } 
  },
  clear_button_demograpClick: function(inSender, inEvent) {
    try {
     this.studentosByComplexName.clearData();
     this.personaLiveVariable1.clearData();
     this.student_pic.setSource("http://opticians-website.co.uk/wp-content/uploads/2011/04/staffNoImageLarge.jpg"); 
      
    } catch(e) {
      console.error('ERROR IN clear_button_demograpClick: ' + e); 
    } 
  },
  _end: 0
});
