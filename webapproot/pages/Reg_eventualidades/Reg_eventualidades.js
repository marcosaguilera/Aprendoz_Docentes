dojo.declare("Reg_eventualidades", wm.Page, {
  start: function() {
    this.tipo_eventualidad_select.disable();
    this.searchInput.disable();
    this.subtipo_eventualidad.disable();
    this.agregar_butt.disable();
    this.quitar_butt.disable();
    /**** disable DataGrid ****/
    wm.DataGrid.extend({
    setDisabled: function(inDisabled) {
    dojo[inDisabled ? "addClass" : "removeClass"](this.domNode, "wmgrid-disabled");
        }
    });
  },

  eventualidadpersonasLiveForm1BeginInsert: function(inSender) {
    try {
    var idp = this.tabla_buscar_persona.selectedItem.getData().id;
    var ide = this.eventualidadesDataGrid1.selectedItem.getData().idEventualidad;
    this.eventualidadesLookup1.setDataValue(ide); 
    this.personaLookup1.setDataValue(idp); 
    var eventualidad= this.eventualidadesLookup1.getDataValue(); 
    var persona= this.personaLookup1.getDataValue();    
     if(eventualidad >0 && persona >0){
       this.editPanel2.saveData();
     }   
    } catch(e) {
      console.error('ERROR IN eventualidadpersonasLiveForm1BeginInsert: ' + e); 
    }},
  eventualidadesLiveForm1BeginInsert: function(inSender) {
    try {
     this.fechaIngresoEditor1.setDataValue(new Date());
     this.usuarioRegEditor1.setValue("dataValue", this.setUsername.getDataValue()); 
     this.confidencialcheckBoxEditor1.setDataValue("No");
     this.usuarioRegEditor1.setReadonly(true);
     this.tipo_eventualidad_select.disable();
     this.searchInput.disable();
     this.descripcion.setReadonly(true);
     this.autoevaluacion.setReadonly(true);
     this.pregunta2.setReadonly(true);
     this.pregunta3.setReadonly(true);
     this.confidencialcheckBoxEditor1.setReadonly(true);
     this.fechaPlanReparacionEditor1.setReadonly(true);
    
     this.tipo_eventualidad_select.clear();
     this.subtipo_eventualidad.clear();
     this.complexSearch.clearData();
     this.svEventualidadPersonas.clearData();
     this.subtipo_eventualidad.disable();
          
    } catch(e) {
      console.error('ERROR IN eventualidadesLiveForm1BeginInsert: ' + e); 
    }},
  eventualidadpersonasLiveForm1Success: function(inSender, inData) {
    try {
     this.limpiar_boton_1.enable();
     this.tabla_buscar_persona.setDisabled(false);        
     this.eventualidadpersonasLiveVariable1.update();
      
    } catch(e) {
      console.error('ERROR IN eventualidadpersonasLiveForm1Success: ' + e); 
    }},
  eventualidadpersonasLiveForm1CancelEdit: function(inSender) {
    try {
     this.limpiar_boton_1.enable();
     this.tabla_buscar_persona.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN eventualidadpersonasLiveForm1CancelEdit: ' + e); 
    }},
  subtipo_eventualidad_select_1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.subtipoEventualidadLookup1.setValue("dataValue", this.subtipo_eventualidad_select_1.getDataValue());
      
    } catch(e) {
      console.error('ERROR IN subtipo_eventualidad_select_1Change: ' + e); 
    }},
    
  b_consultaClick: function(inSender, inEvent) {
        this.Ingreso_Eventualidades.hide();
        this.registro_orientacion.hide();
        this.Consulta_Eventualidades.show();
      },
      
  r_eventualidadesClick: function(inSender, inEvent) {
     this.Consulta_Eventualidades.hide();
     this.registro_orientacion.hide();
     this.Ingreso_Eventualidades.show();
     
     },
  eventualidadesLiveForm1BeginUpdate: function(inSender) {
    try { 
     this.tipo_eventualidad_select.enable();
     this.tipo_eventualidad_select.setReadonly(false);   
    } catch(e) {
      console.error('ERROR IN eventualidadesLiveForm1BeginUpdate: ' + e); 
    }},
  eventualidadesLiveForm1CancelEdit: function(inSender) {
    try { 
     this.tipo_eventualidad_select.setReadonly(true);
      
    } catch(e) {
      console.error('ERROR IN eventualidadesLiveForm1CancelEdit: ' + e); 
    }},
  limpiar_boton_2Click: function(inSender, inEvent) {
    try {
     this.a_searchEventualities.clearData();
     this.inputSearchEventuralidades.clear();
      
    } catch(e) {
      console.error('ERROR IN limpiar_boton_2Click: ' + e); 
    }},
  limpiar_boton_1Click: function(inSender, inEvent) {
    try {
     this.estudiantes_liveVariable.clearData();
     this.searchInput.clear();
   
    } catch(e) {
      console.error('ERROR IN limpiar_boton_1Click: ' + e); 
    }},
  tabla_buscar_personaRowDblClick: function(inSender, inEvent) {
    try {
     var selectEventualidad = this.eventualidadesDataGrid1.getEmptySelection();
     var selectInvolucrado = this.tabla_buscar_persona.getEmptySelection();
     if(selectEventualidad== false && selectInvolucrado== false ){
       this.editPanel2.beginDataInsert();
     }else{ alert("Upsss! Quiza debas seleccionar una eventualidad o una persona.");}
      
    } catch(e) {
      console.error('ERROR IN tabla_buscar_personaRowDblClick: ' + e); 
    }},
  eventualidadpersonasDataGrid1RowDblClick: function(inSender, inEvent) {
    try {
     this.editPanel2.deleteData();
      
    } catch(e) {
      console.error('ERROR IN eventualidadpersonasDataGrid1RowDblClick: ' + e); 
    }},
  agregarPlanReparacionClick: function(inSender, inEvent) {
    try {
     app.pageDialog.showPage("Respuesta", false, 500, 540);
     var id= this.eventualidadesDataGrid1.selectedItem.getData().idEventualidad;
     var pr1= this.eventualidadesDataGrid1.selectedItem.getData().pregunta1;
     var pr2= this.eventualidadesDataGrid1.selectedItem.getData().pregunta2;
     var pr3= this.eventualidadesDataGrid1.selectedItem.getData().pregunta3;
     var fecha= this.eventualidadesDataGrid1.selectedItem.getData().fechaPlanReparacion;
     var tipo=  this.eventualidadesDataGrid1.selectedItem.getData().subtipoEventualidad.subtipoEventualidad;
     
     app.pageDialog.page.idBox.setDataValue(id); 
     app.pageDialog.page.pregunta1Box.setDataValue(pr1); 
     app.pageDialog.page.pregunta2Box.setDataValue(pr2); 
     app.pageDialog.page.pregunta3Box.setDataValue(pr3); 
     app.pageDialog.page.fechaPlanBox.setDataValue(fecha);
     app.pageDialog.page.avisoOk.hide(); 
     app.pageDialog.page.infoEventualidad.setCaption("Detalles de la Eventualidad:<br/>"+"Identificador: "+id+"<br/>Tipo eventudalidad: "+tipo);
    } catch(e) {
      console.error('ERROR IN agregarPlanReparacionClick: ' + e); 
    }},
  eventualidadesDataGrid1Selected: function(inSender, inIndex) {
    try {
     this.quitar_butt2.enable();
     this.guardar_cuerpo_eventualidades.enable();
     this.eventualidadpersonasLiveVariable1.update(); 
     var idsubtipo= this.eventualidadesDataGrid1.selectedItem.getData().subtipoEventualidad.idSubtipoEventualidad;
     this.getTipoEventualidad.input.setValue("id", idsubtipo);
     this.getTipoEventualidad.update();

    } catch(e) {
      console.error('ERROR IN eventualidadesDataGrid1Selected: ' + e); 
    }},
  getTipoEventualidadSuccess: function(inSender, inDeprecated) {
    try {
     var json= this.getTipoEventualidad.getItem(0);
     var idTipoJson= json.data.idTipo;
     this.tipo_eventualidad_select.setDataValue(idTipoJson); 
      
    } catch(e) {
      console.error('ERROR IN getTipoEventualidadSuccess: ' + e); 
    }},
  eventualidadesLiveForm1UpdateData: function(inSender) {
    try {
     this.tipo_eventualidad_select.setReadonly(true); 
      
    } catch(e) {
      console.error('ERROR IN eventualidadesLiveForm1UpdateData: ' + e); 
    }},
 
  eventualidadesLiveForm1Success: function(inSender, inData) {
    try {
     this.eventualidadesLiveVariable1.update();
  
    } catch(e) {
      console.error('ERROR IN eventualidadesLiveForm1Success: ' + e); 
    }},
  eventualidadesLiveVariable1Success: function(inSender, inDeprecated) {
    try {   
     this.eventualidadesDataGrid1.select(0); 
     this.tipo_eventualidad_select.enable();
     this.searchInput.enable();
     this.subtipo_eventualidad.enable();
 
     var _eventualidad= this.eventualidadesDataGrid1.selectedItem.getData().idEventualidad;
     this.svEventualidadPersonas.input.setValue("ide", _eventualidad);
     this.svEventualidadPersonas.update();   
    } catch(e) {
      console.error('ERROR IN eventualidadesLiveVariable1Success: ' + e); 
    }},
  agregar_buttClick: function(inSender, inEvent) {
    try {
     var _persona= this.tabla_buscar_persona.selectedItem.getData().id;
     var _eventualidad= this.eventualidadesDataGrid1.selectedItem.getData().idEventualidad;
     var _subtipoEventualidad= this.subtipo_eventualidad.getDataValue();
     var _fecha= this.fechaEditor1.getDataValue();
     var _tipoEventualidad= this.tipo_eventualidad_select.getDataValue();
     this.a_insertarPersonaEventualidad.setValue("persona.idPersona", _persona);
     this.a_insertarPersonaEventualidad.setValue("eventualidades.idEventualidad", _eventualidad);
     this.a_insertarPersonaEventualidad.setValue("subtipoEventualidad.idSubtipoEventualidad", _subtipoEventualidad);
       
     this.agregarLiveForm.setDataSet(this.a_insertarPersonaEventualidad);          
     this.agregarLiveForm.insertData(); 
     this.testSV.enable();
     
    } catch(e) {
      console.error('ERROR IN button1Click: ' + e); 
    }},
  quitar_buttClick: function(inSender, inEvent) {
    try{
     var _idep= this.eventualidadPersonasDataGrid.selectedItem.getData().id;
     this.deleteEventualidadPersona.input.setValue("epid", _idep);
     this.deleteEventualidadPersona.update();
     this.svEventualidadPersonas.update();
     
    } catch(e) {
      console.error('ERROR IN quitar_buttClick: ' + e); 
    }},
  actualizarEventualidad_buttClick: function(inSender, inEvent) {
    try {
     var _user= this.eventualidades.selectedItem.getData().resgistrante; 
     this.eventualidadesLiveVariable1.filter.setValue("usuarioReg", _user);
     var _eventualidad= this.eventualidades.selectedItem.getData().ideventualidad;
     this.eventualidadesLiveVariable1.filter.setValue("idEventualidad", _eventualidad);
     this.eventualidadesLiveVariable1.update();
 
     this.eventualidadesDataGrid1.select(0); 
     this.Consulta_Eventualidades.hide();
     this.Ingreso_Eventualidades.show();
     this.svEventualidadPersonas.input.setValue("ide", _eventualidad);
     this.svEventualidadPersonas.update(); 
     this.usuarioRegEditor1.setReadonly(true);
     this.testSV.enable();
    } catch(e) {
      console.error('ERROR IN actualizarEventualidad_buttClick: ' + e); 
    }},
  eventualidadesSelected: function(inSender, inIndex) {
    try {
     this.actualizarEventualidad_butt.enable(); 
     this.quitar_butt2.enable();
      
    } catch(e) {
      console.error('ERROR IN eventualidadesSelected: ' + e); 
    }},
  agregarLiveFormSuccess: function(inSender, inData) {
    try {
     var _eventualidad= this.eventualidadesDataGrid1.selectedItem.getData().idEventualidad;
     this.svEventualidadPersonas.input.setValue("ide", _eventualidad);
     this.svEventualidadPersonas.update(); 
     
     var _persona= this.tabla_buscar_persona.selectedItem.getData().id;
     var _eventualidad= this.eventualidadesDataGrid1.selectedItem.getData().idEventualidad;
     var _subtipoEventualidad= this.subtipo_eventualidad.getDataValue();
     var _fecha= this.fechaEditor1.getDataValue();
     var _tipoEventualidad= this.tipo_eventualidad_select.getDataValue();

     this.faltasLeves2GraveSV.input.setValue("fecha", _fecha);
     this.faltasLeves2GraveSV.input.setValue("persona", _persona);
     this.faltasLeves2GraveSV.input.setValue("tipo",  _tipoEventualidad);
     this.faltasLeves2GraveSV.update(); 
  
    } catch(e) {
      console.error('ERROR IN agregarLiveFormSuccess: ' + e); 
    }},
  quitar_butt2Click: function(inSender, inEvent) {
    try {
     this.editPanel1.beginDataUpdate();
      
    } catch(e) {
      console.error('ERROR IN quitar_butt1Click: ' + e); 
    }},
  imprimir_actaClick: function(inSender, inEvent) {
    try {
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var _eventualidad= this.eventualidadesDataGrid1.selectedItem.getData().idEventualidad;
      var formatType= "PDF";
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/EVE001",
               format: formatType,
               params: { id_eventualidad: _eventualidad }
         }
       });
       inEvent.preventDefault(); 
      
    } catch(e) {
      console.error('ERROR IN button1Click: ' + e); 
    }},
  guardar_cuerpo_eventualidadesClick: function(inSender, inEvent) {
    try {
     this.editPanel1.saveData(); 
      
    } catch(e) {
      console.error('ERROR IN guardar_cuerpo_eventualidadesClick: ' + e); 
    }},
  reporte_eventualidadesClick: function(inSender, inEvent) {
    try {
     main.a_informacionUsuario.update();
     var getter = main.a_informacionUsuario2.getItem(0);
     var id= getter.data.idpersona;
     var clave= getter.data.clave;
     var _persona= this.eventualidades.selectedItem.getData().idpersona;
     console.log(_persona);
     var formatType= "PDF";
     $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
       failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
       httpMethod: "POST",
       data:{ idp: id, 
              pass: clave,
              uri: "/aprendozreports/EVE003",
              format: formatType,
              params: { idpersona: _persona }
        }
      });
       inEvent.preventDefault();  
      
    } catch(e) {
      console.error('ERROR IN reporte_eventualidadesClick: ' + e); 
    } 
  },
  eventualidadesLiveForm1InsertData: function(inSender) {
    try { 
     var _user= this.setUsername.getDataValue(); 
     this.eventualidadesLiveVariable1.filter.setValue("usuarioReg", _user); 
     var _un= null;
     this.eventualidadesLiveVariable1.filter.setValue("idEventualidad", _un);
     this.eventualidadesLiveVariable1.update();
    } catch(e) {
      console.error('ERROR IN eventualidadesLiveForm1InsertData: ' + e); 
    }}, 
  testSVClick: function(inSender, inEvent) {
    try {
     var _ide= this.idEventualidadEditor1.getDataValue();
     console.log(_ide);
     this.sendMailHQLService.input.setValue("ide", _ide);
     this.sendMailHQLService.update();
           
    } catch(e) {
      console.error('ERROR IN testSVClick: ' + e); 
    }},
    
  sendMailHQLServiceSuccess: function(inSender, inDeprecated) {
    try {
     var _acum=""; 
     var _cursos="";
     var _cont=  this.sendMailHQLService.getCount();
     for(i=0; i<_cont; i++){
        console.log(i); 
        var _json= this.sendMailHQLService.getItem(i);
        var _alumno= _json.data.nombreAlumno;
        var _curso= _json.data.curso;
        var _cursos= _cursos+" - "+_curso;
        var _acum= _acum+" * "+_alumno;
        var _correocoordinador= _json.data.cor_mail;
        var _correodirector= _json.data.dir_mail;
        var _lugar= _json.data.lugar;
        var _docente= _json.data.registrante;
        var _fecha= _json.data.fecha;
        var _eve= _json.data.tipo;
        var _sub= _json.data.subtipo;         
     }      
      console.log(_acum);
      console.log(_correocoordinador);
      console.log(_correodirector);
      console.log(_lugar);
      this.jsSendMail.input.setValue("alumnos",_acum);
      this.jsSendMail.input.setValue("correocoordinador",_correocoordinador);
      this.jsSendMail.input.setValue("correodirector",_correodirector);
      this.jsSendMail.input.setValue("lugar",_lugar);
      this.jsSendMail.input.setValue("profesorRemitente",_docente);
      this.jsSendMail.input.setValue("fechaEventualidad",_fecha);
      this.jsSendMail.input.setValue("eventualidad",_eve);
      this.jsSendMail.input.setValue("subtipoEventualidad",_sub);
      this.jsSendMail.input.setValue("cursos", _cursos);
      this.jsSendMail.update(); 
     
    } catch(e) {
      console.error('ERROR IN sendMailHQLServiceSuccess: ' + e); 
    }},  
  jsSendMailSuccess: function(inSender, inDeprecated) {
      app.pageDialog.dismiss("SendingMessage");
      app.pageDialog.showPage("SendedMessage", false, 260,130);
    },
    
  jsSendMailError: function(inSender, inError) {
     alert("error!"); 
    }, 
    
  button1Click: function(inSender, inEvent) {
     this.tabla_buscar_persona.setDisabled(true); 
  },
  
  subtipo_eventualidadChange: function(inSender, inDisplayValue, inDataValue) {
    var _tipo= this.tipo_eventualidad_select.getDataValue();
    var _sub=  this.subtipo_eventualidad.getDataValue();
    
    if(_tipo != undefined && _sub != undefined){
      this.agregar_butt.enable();
      this.quitar_butt.enable();
    }else{
      this.agregar_butt.disable();
      this.quitar_butt.disable();
    }
  },

  faltasLeves2GraveSVSuccess: function(inSender, inDeprecated) {
    var _count = this.faltasLeves2GraveSV.getData().dataValue;
    var _tipo  = this.tipo_eventualidad_select.getDataValue();
    var _sub   = this.subtipo_eventualidad.getDataValue();
    var _persona= this.tabla_buscar_persona.selectedItem.getData().id;
    var _personanombre= this.tabla_buscar_persona.selectedItem.getData().complex;
    var _eventualidad= this.eventualidadesDataGrid1.selectedItem.getData().idEventualidad;
    if(_count > 2 && _tipo == 2){     
      this.faltagraveRegistroV.setValue("persona.idPersona", _persona);
      this.faltagraveRegistroV.setValue("eventualidades.idEventualidad", _eventualidad);
      this.faltagraveRegistroV.setValue("subtipoEventualidad.idSubtipoEventualidad", "17");
      this.getCurseOne.input.setValue("ide",_eventualidad);
      this.getCurseOne.input.setValue("ppersona",_persona);    
      this.graveRegistroLiveForm.setDataSet(this.faltagraveRegistroV);
      this.graveRegistroLiveForm.insertData();
      this.getCurseOne.update();
    }else{/*nothing to do here!*/}
  },
  
  buscarEventualidadesClick: function(inSender, inEvent) {
     var _fecha= this.fecha.getDataValue();
     this.historicosEventualidades.input.setValue("pfecha", _fecha);
     this.historicosEventualidades.update();
  },
  
  eventualidadPersonasDataGridSelected: function(inSender, inIndex) {
     this.agregar_butt.enable();
     this.quitar_butt.enable(); 
  },
  
  b_orientacionClick: function(inSender, inEvent) {
     this.Consulta_Eventualidades.hide();
     this.Ingreso_Eventualidades.hide();
     this.registro_orientacion.show(); 
  },
  
  orientacionEventualidadesSelected: function(inSender, inIndex) {
     var _ideventualidad= this.orientacionEventualidades.selectedItem.getData().ideventualidad; 
     this.involucradoSv.input.setValue("peventualidad",_ideventualidad);
     this.orientacionDocentesCorreo.input.setValue("ide",_ideventualidad);
     this.involucradoSv.update();
     this.orientacionDocentesCorreo.update(); 
  },
  
  orientacionInvolucradosSelect: function(inSender, inItem) {
      var index     = this.orientacionInvolucrados.getSelectedIndex();
      var data      = this.orientacionInvolucrados.getItemData(index);
      var id        = data.idpersona;
      var nombre    = data.nombre;       
      var grupofamiliar = data.idgrupofamiliar;
      this.headMessage.setCaption("Usted ha seleccionado al estudiante "+nombre+", por favor ingrese la <u>hora y fecha</u> para la citación de los padres. <br>Los detalles adicionales estan descritos en el correo a enviar.");
      this.svNotificacionCorreosPadres.input.setValue("pgrupo", grupofamiliar);
      this.svNotificacionCorreosPadres.input.setValue("ppersona", id);
      this.svNotificacionCorreosPadres.update();    
       
      this.fechaCita.enable();
      this.horaCita.enable();
      this.enviarCita.enable();
      this.imprimirCita.enable();
      this.cancelar.enable();
  },
  
  enviarCitaClick: function(inSender, inEvent) {
    var _json      = this.svNotificacionCorreosPadres.getItem(0);
    var _json2     = this.involucradoSv.getItem(0);
    var _json3     = this.orientacionDocentesCorreo.getItem(0);
    var stdname    = _json.data.stdn1+" "+_json.data.stdn2+" "+_json.data.stda1+" "+_json.data.stda2;
    var fathername = _json.data.papan1+" "+_json.data.papan2+" "+_json.data.papaa1+" "+_json.data.papaa2;
    var mothername = _json.data.maman1+" "+_json.data.maman2+" "+_json.data.mamaa1+" "+_json.data.mamaa2;
    var fatheremail= _json.data.correopapa;
    var motheremail= _json.data.correomama;
    var dnifather= _json.data.dnipapa;
    var dnimother= _json.data.dnimama;
    var curse= _json2.data.curso;
    var fechacita= this.fechaCita.getDisplayValue();
    var horacita= this.horaCita.getDisplayValue();
    var falta= this.orientacionEventualidades.selectedItem.getData().subtipo;
    var coordinador= _json3.data.cor_mail;
    var dirnivel= _json3.data.dir_mail;

    console.log("Alumno: "+stdname);
    console.log("Papa:"+ fathername);
    console.log("Mama:"+ mothername);
   
    var r=confirm("¿Se enviará una notificación a los padres del estudiante "+stdname+", esta seguro de realizar esta acción?");
    if (r==true){
      this.enviarNotificacionCorreo.input.setValue("alumno", stdname);
      this.enviarNotificacionCorreo.input.setValue("nombremadre", mothername);
      this.enviarNotificacionCorreo.input.setValue("nombrepadre", fathername);
      this.enviarNotificacionCorreo.input.setValue("correopadre", fatheremail);
      this.enviarNotificacionCorreo.input.setValue("correomadre", motheremail);
      this.enviarNotificacionCorreo.input.setValue("correomadre", motheremail);
      this.enviarNotificacionCorreo.input.setValue("curso", curse);
      this.enviarNotificacionCorreo.input.setValue("fechaCita", fechacita);
      this.enviarNotificacionCorreo.input.setValue("horaCita", horacita);
      this.enviarNotificacionCorreo.input.setValue("subtipoEventualidad", falta);
      this.enviarNotificacionCorreo.input.setValue("dnipap", dnifather);
      this.enviarNotificacionCorreo.input.setValue("dnimam", dnimother);
      this.enviarNotificacionCorreo.input.setValue("correocoordinador", coordinador);
      this.enviarNotificacionCorreo.input.setValue("correodirector", dirnivel);
      this.enviarNotificacionCorreo.update();
    }else{/*nothing to do*/}
  },

  graveRegistroLiveFormSuccess: function(inSender, inData) {
     this.svEventualidadPersonas.update();
     app.pageDialog.dismiss("CreandoFaltaGrave"); 
   
  },
  
  orientacionEventualidadesSetColumns: function(inSender, inColumn, inIndex) {
    try {
     if (inIndex == 0)// 1st column is zero   
       inColumn.formatter = function(inDatum, inRowIndex) { 
       if(! inDatum)
           return '<center><INPUT TYPE=CHECKBOX NAME="Active"><P></center>';
       else 
           return '<center><INPUT TYPE=CHECKBOX NAME="Active" CHECKED><P></center>';
       }  
    } catch(e) {
      console.error('ERROR IN orientacionEventualidadesSetColumns: ' + e); 
    } 
  },
  
  enviarNotificacionCorreoSuccess: function(inSender, inDeprecated) {
     this.responseMessageBad.hide();
     this.responseMessageWait.hide();
     this.responseMessageOk.show(); 
  },
  enviarNotificacionCorreoError: function(inSender, inError) {
     this.responseMessageOk.hide();
     this.responseMessageWait.hide();
     this.responseMessageBad.show();
  },
  enviarNotificacionCorreoBeforeUpdate: function(inSender, ioInput) {
     this.responseMessageWait.show();
  },
  
  imprimirCitaClick: function(inSender, inEvent) {
      main.a_informacionUsuario.update();
      var _json      = this.svNotificacionCorreosPadres.getItem(0);
      var _json2     = this.involucradoSv.getItem(0);
      var _json3     = this.orientacionDocentesCorreo.getItem(0);
      var stdname    = _json.data.stdn1+" "+_json.data.stdn2+" "+_json.data.stda1+" "+_json.data.stda2;
      var fathername = _json.data.papan1+" "+_json.data.papan2+" "+_json.data.papaa1+" "+_json.data.papaa2;
      var mothername = _json.data.maman1+" "+_json.data.maman2+" "+_json.data.mamaa1+" "+_json.data.mamaa2;
      var fatheremail= _json.data.correopapa;
      var motheremail= _json.data.correomama;
      var dnifather= _json.data.dnipapa;
      var dnimother= _json.data.dnimama;
      var curse= _json2.data.curso;
      var fechacita= this.fechaCita.getDisplayValue();
      var horacita= this.horaCita.getDisplayValue();
      var falta= this.orientacionEventualidades.selectedItem.getData().subtipo;
      var coordinador= _json3.data.cor_mail;
      var dirnivel= _json3.data.dir_mail;
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var _eventualidad= this.orientacionEventualidades.selectedItem.getData().ideventualidad;
      var formatType= "PDF";
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var curdateApr= (curr_date + "/" + curr_month + "/" + curr_year);
      
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/EVE006",
               format: formatType,
               params: { 
                 id_eventualidad: _eventualidad,
                 curdate: curdateApr,
                 curso: curse,
                 fechaCita: fechacita,
                 horaCita: horacita,
                 faltaGrave: falta,
                 madre: mothername,
                 padre: fathername,
                 noMadre: dnimother,
                 noPadre: dnifather,
                 pnombreestudiante: stdname
               }
         }
       });
       inEvent.preventDefault();  
  },
  getCurseOneSuccess: function(inSender, inDeprecated) {
     var json= this.getCurseOne.getItem(0);
     var fechaeventualidad= this.fechaEditor1.getDisplayValue();
     var _personanombre= json.data.nombreAlumno;
     var _eventualidad= json.data.ide; 
     var _coordinador= json.data.cor_mail;
     var _dirnivel= json.data.dir_mail;
     var _curso= json.data.curso;
     var _reg= json.data.registrante;

     this.enviaCorreoAcumulado.input.setValue("alumno",_personanombre);
     this.enviaCorreoAcumulado.input.setValue("correocoordinador",_coordinador);
     this.enviaCorreoAcumulado.input.setValue("correodirector",_dirnivel);
     this.enviaCorreoAcumulado.input.setValue("curso",_curso);
     this.enviaCorreoAcumulado.input.setValue("fecha",fechaeventualidad);   
     this.enviaCorreoAcumulado.input.setValue("id",_eventualidad);
     this.enviaCorreoAcumulado.input.setValue("profesorRemitente",_reg);    
     this.enviaCorreoAcumulado.update();
  },
  _end: 0
});