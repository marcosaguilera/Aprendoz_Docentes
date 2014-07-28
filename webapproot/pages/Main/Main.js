Date.prototype.getWeek = function() {
	
var onejan = new Date(this.getFullYear(),0,1);
return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
},
/*****************************/
dojo.declare("Main", wm.Page, {
  start: function() {
    this.curdate = new Date().getTime();
    main.global_cursy.input.setValue("f1",this.curdate);
    main.global_cursy.update();
  
  dojo.subscribe("session-expiration", this, "mySessionExpiredMethod");
     
  wm.DataGrid.extend({
  setDisabled: function(inDisabled) { dojo[inDisabled ? "addClass" : "removeClass"](this.domNode, "wmgrid-disabled");}
    });   
  },
 
  "preferredDevice": "desktop",
 
  mySessionExpiredMethod: function() {
      alert("Aviso importante: Sesión expirada \n\n"+"Su sesión ha excedido el tiempo de inactividad permitido en la aplicación. Por favor ingrese nuevamente.");
      window.location.reload();
  },  

  calif_encabezado_opciones_sel_gradoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
    if(this.calif_encabezado_opciones_sel_grado.dataValue== null ||this.calif_encabezado_opciones_sel_grado.dataValue==405){
       this.calif_encabezado_opciones_sel_curso.disable();
       }
    else{
       this.calif_encabezado_opciones_sel_curso.enable();
       this.l_calif_encabezado_opciones_listaCurso.update();
       }

       this.l_calif_contenedor_tablas_asignaturas_docentes.update();
       this.l_calif_contenedor_tablas_aprendizajes.clearData();
       this.l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso.clearData();
       this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.clearData();
       this.l_calif_contenedor_tablas_calificacion_final.clearData();          
      
    } catch(e) {
      console.error('ERROR IN calif_encabezado_opciones_sel_gradoChange: ' + e); 
    } 
  },
  
  inscalumaprendizajeLiveForm1BeginInsert: function(inSender) {
      try {
      this.calif_alumnos_curso_datag_alumnosDataGrid1.setDisabled(true);
      this.calif_asig_datag_aprendizajesDataGrid1.setDisabled(true);
      this.fechaIngresoEditor2.disable();
      this.fechaIngresoEditor2.setDataValue(new Date());
      this.calificacionNumEditor2.setValue("dataValue","0");
      this.aprendizajeLookup1.setValue("dataValue",this.calif_asig_datag_aprendizajesDataGrid1.selectedItem.getData().id.idAprendizaje);
      this.personaLookup1.setValue("dataValue",this.calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.getData().id.personaIdPersona);
      
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm1BeginInsert: ' + e); 
    } 
  },
  
  /* inscalumaprendizajeLiveForm2BeginInsert: function(inSender) {
    try {  
      this.calif_alumnos_datagrids_datag_alumnos_asignaturas.setDisabled(true);
      this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.setDisabled(true);
      this.calif_alumnos_datagrids_datag_alumnos_cursos.setDisabled(true);
    
      this.fechaIngresoEditor3.setDataValue(new Date());
      this.calificacionNumEditor3.setValue("dataValue","0");
      this.aprendizajeLookup3.setValue("dataValue",this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.getData().id.idAprendizaje);
      this.personaLookup3.setValue("dataValue",this.calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.getData().id.idPersona);
       
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm2BeginInsert: ' + e); 
    } 
  },*/

  
  
  button12Click: function(inSender, inEvent) {
    try {
      this.calf_panel_encabezado_opciones.hide();
      this.calif_panel_contenedor_promocion.hide();
      this.actividades.hide();
      this.calif_panel_contenedor_aprendizaje.hide();
      this.calif_panel_contenedor_alumnos.show();
      
    } catch(e) {
      console.error('ERROR IN button12Click: ' + e); 
    } 
  },
  
  l_calif_alumnos_panel1_butt_cambiarPanelClick: function(inSender, inEvent) {
    try {
      this.calif_panel_contenedor_alumnos.hide();
      this.calif_panel_contenedor_promocion.hide();
      this.actividades.hide();
      this.calf_panel_encabezado_opciones.show();
      this.calif_panel_contenedor_aprendizaje.show();
   
    } catch(e) {
      console.error('ERROR IN button14Click: ' + e); 
    } 
  },
  
  calif_alumnos_datagrids_datag_alumnos_cursosSelected: function(inSender, inIndex) {
    try {
    var idp= this.calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.getData().id.idPersona;
    var idsy= this.calif_alumnos_panel1_sel_sy.getDataValue();
    this.l_calif_alumnos_alumnos_asignaturas.input.setValue("idpersona", idp);
    this.l_calif_alumnos_alumnos_asignaturas.input.setValue("idsyp", idsy);
    this.l_calif_alumnos_alumnos_asignaturas.update();
      
    } catch(e) {
      console.error('ERROR IN alumnosSelected: ' + e); 
    } 
  },
  
  listaGRADO2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.asignaturasLV2.update();
        this.cursoslv2.update(); 
      
    } catch(e) {
      console.error('ERROR IN listaGRADO2Change: ' + e); 
    } 
  },
  
  asignaturas2Selected: function(inSender, inIndex) {
    try {
      this.asig2.setValue("dataValue",this.asignaturas2.selectedItem.getData().asignatura); 
      
    } catch(e) {
      console.error('ERROR IN asignaturas2Selected: ' + e); 
    } 
  },
  
  curso2Selected: function(inSender, inIndex) {
    try {
       this.cursost2.setValue("dataValue",this.curso2.selectedItem.getData().curso);   
      
    } catch(e) {
      console.error('ERROR IN curso2Selected: ' + e); 
    } 
  },
  
  layer27Show: function(inSender) {
    try {
      this.aux2.setValue(Demografica.personaDataGrid1.selectedItem.getData().codigo);
      
    } catch(e) {
      console.error('ERROR IN layer27Show: ' + e); 
    } 
  },
  
  button17Click: function(inSender, inEvent) {
    try {
      this.textEditor2.clear();
      this.textEditor3.clear();
      this.textEditor4.clear();
      this.asignaturaLiveVariable3.clearData();
      this.selectEditor15.clearData();
      this.selectEditor16.clearData();
      
    } catch(e) {
      console.error('ERROR IN button17Click: ' + e); 
    } 
  },
  
  inscalumaprendizajeDataGrid1RowDblClick: function(inSender, inEvent) {
    try {
      this.editPanel9.beginDataUpdate();
      
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeDataGrid1RowDblClick: ' + e); 
    }},
  inscalumaprendizajeLiveForm1BeginUpdate: function(inSender) {
    try {
     this.personas.setDisabled(true);
     this.tablaAprendizajes.setDisabled(true);
     this.fechaIngresoEditor2.disable();
     this.fechaIngresoEditor2.setDataValue(new Date());
      
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm1BeginUpdate: ' + e); 
    }},
  
  
  calif_asig_datag_aprendizajesDataGrid1Selected: function(inSender, inIndex) {
    try {
     var _emptyLearning= this.calif_asig_datag_aprendizajesDataGrid1.getEmptySelection();
     var _emptyStudents= this.calif_alumnos_curso_datag_alumnosDataGrid1.getEmptySelection();
     var _unidad= this.calif_asig_datag_aprendizajesDataGrid1.selectedItem.getData().id.unidad;
     var _subtopico= this.calif_asig_datag_aprendizajesDataGrid1.selectedItem.getData().id.subtopico;
     if(_emptyLearning == true || _emptyStudents == true){
        this.blink_message.show();
     }else if(_emptyLearning == false && _emptyStudents == false){     
        this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.update();
        this.l_calif_contenedor_tablas_calificacion_final.update();
        this.blink_message.hide();
     }
     this.calif_contenedor_cadena_curriculo.setCaption("Unidad» "+_unidad+" | "+" Subtopico »"+_subtopico);
      
    } catch(e) {
      console.error('ERROR IN calif_asig_datag_aprendizajesDataGrid1Selected: ' + e); 
    }}, 
  calif_alumnos_curso_datag_alumnosDataGrid1Selected: function(inSender, inIndex) {
    var _emptyLearning= this.calif_asig_datag_aprendizajesDataGrid1.getEmptySelection();
    var _emptyStudents= this.calif_alumnos_curso_datag_alumnosDataGrid1.getEmptySelection();
    try {
     if(_emptyLearning == true  ||  _emptyStudents == true){
         this.blink_message.show();
     }
      else if(_emptyLearning== false && _emptyStudents== false){
           this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.update();
           this.l_calif_contenedor_tablas_calificacion_final.update();
           this.blink_message.hide();
      }        
    } catch(e) {
      console.error('ERROR IN calif_alumnos_curso_datag_alumnosDataGrid1Selected: ' + e); 
    }},
 asignaturaSelected: function(inSender, inIndex) {
    try {
      this.aux13.setValue("dataValue", this.asignatura.selectedItem.getData().asignatura.idAsignatura);
      
    } catch(e) {
      console.error('ERROR IN asignaturaSelected: ' + e); 
    }},
  dataGrid4Selected: function(inSender, inIndex) {
    try {
    this.aux103.setValue("dataValue", this.dataGrid4.selectedItem.getData().codigo);
    this.aux104.setValue("dataValue", "1");
    
    } catch(e) {
      console.error('ERROR IN dataGrid4Selected: ' + e); 
    } 
  },
  
  button36Click: function(inSender, inEvent) {
    try {
      this.inscalumactividadLiveVariable1.clearData();
        this.ACTIVIDADESLV3.clearData();
          this.INSALUCUR.clearData();
            this.asignaturaLV1.clearData();
              this.selectEditor19.clear();
                this.selectEditor18.clear();
                  this.selectEditor17.clear();
      
    } catch(e) {
      console.error('ERROR IN button36Click: ' + e); 
    } 
  },
  
  
  picture7Click: function(inSender) {
    try {
       window.print();
      
    } catch(e) {
      console.error('ERROR IN picture7Click: ' + e); 
    } 
  },

  aux25Change: function(inSender, inDisplayValue, inDataValue) {
    try {
       if(this.aux25.dataValue=1){
            //formulario unidades
             main.operationPanel4.setShowing(false);
         }
         if (this.aux25.dataValue=2){
             //formulario unidades
             main.operationPanel4.setShowing(true);
         }
      
    } catch(e) {
      console.error('ERROR IN numberEditor2Change: ' + e); 
    } 
  },

  inscalumactividadLiveForm1BeginInsert: function(inSender) {
      var idactividad= this.activitiesDataGrid.selectedItem.getData().idActividad;
      var idpersona= this.activities_studentsDataGrid.selectedItem.getData().persona.idPersona;
      this.actividadLookup1.setDataValue(idactividad);
      this.personaLookup4.setDataValue(idpersona);
  },
  
  asistenciaShow: function(inSender) {
    try {
      app.listaSY.update();
      app.listaGrado.update();
      
    } catch(e) {
      console.error('ERROR IN layer43Show: ' + e); 
    } 
  },

  calificacionEditor2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      if(this.calificacionEditor2.dataValue=="En Progreso"){
            this.calificacionNumEditor2.setValue("dataValue", "0.3")
           }     
        if(this.calificacionEditor2.dataValue=="Competente"){
             this.calificacionNumEditor2.setValue("dataValue", "1")
            }     
            if(this.calificacionEditor2.dataValue=="Avanzado"){
                this.calificacionNumEditor2.setValue("dataValue", "1.3")
             }     
              if(this.calificacionEditor2.dataValue=="Magistral"){
                   this.calificacionNumEditor2.setValue("dataValue", "1.6")
               }     
      
    } catch(e) {
      console.error('ERROR IN calificacionEditor2Change: ' + e); 
    } 
  },
  
  calif_contenedor_img_limpiarClick: function(inSender) {
    try {
     this.calif_contenedor_sel_Genero.clear();
     this.l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso.update();
      
    } catch(e) {
      console.error('ERROR IN picture8Click: ' + e); 
    } 
  },
  
  GradoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
     this.l_inscrip_panel_lista_cursos.update();
     this.l_inscrip_panel_VistaAsignaturas.update();
     this.inscalumasigLiveVariable1.clearData();
     this.estudiantesInscAsig.clearData();
      
    } catch(e) {
      console.error('ERROR IN GradoChange: ' + e); 
    } 
  },
  
  inscalumasigLiveForm1BeginInsert: function(inSender) {
    try {
     this.inscripcion_asignatura.setDisabled(true);
     this.inscripcion_estudiante.setDisabled(true);
     this.calificacionEditor4.setDataValue(0);
     this.porcentajeEditor1.setDataValue(0);
     this.esperadosEditor1.setDataValue(0);
     this.logradosEditor1.setDataValue(0);
     this.califCharEditor1.setDataValue("-");
     this.periodoLookup1.setValue("displayValue", "2012-2013");
     this.asignaturaLookup5.setValue("dataValue", this.inscripcion_asignatura.selectedItem.getData().id.idAsignatura);
     this.personaLookup6.setValue("dataValue", this.inscripcion_estudiante.selectedItem.getData().id.idPersona);
       
    } catch(e) {
      console.error('ERROR IN inscalumasigLiveForm1BeginInsert: ' + e); 
    } 
  },
  
  button_activitiesClick: function(inSender, inEvent) {
    try {
      var json= main.a_cursy.getItem(0);
      var sy= json.data.sy;
      var idsy= json.data.idsy;
      var user= main.global_username.getData().dataValue;
      this.sy_activities.setDataValue(sy);
      this.activitiesGetSubjectsByUser.input.setValue("sy",idsy);
      this.activitiesGetSubjectsByUser.input.setValue("usuario",user);
      this.activitiesGetSubjectsByUser.update();
      
      this.calf_panel_encabezado_opciones.hide();
      this.calif_panel_contenedor_aprendizaje.hide();
      this.calif_panel_contenedor_alumnos.hide();
      this.calif_panel_contenedor_promocion.hide();
      this.actividades.show(); 
    } catch(e) {
      console.error('ERROR IN button_activitiesClick: ' + e); 
    } 
  },
 
  informes_fuckersShow: function(inSender) {
     try {
      this.RLVGrados.update(); 
      
    } catch(e) {
      console.error('ERROR IN layer16Show: ' + e); 
    }}, 
    
  calificaTodosClick: function(inSender, inEvent) {  
      var fecha= this.fechaEditor3.getDataValue();
      var comentario= this.comentarioEditor4.getDataValue();
      var idactividad= this.activitiesDataGrid.selectedItem.getData().idActividad;
      var idcurso= this.subjects_activities.getDataValue();
      var logrado= this.logradoEditor2.getDataValue();
      this.sp_insertar_actividades.input.setValue("P_Fecha", fecha);
      this.sp_insertar_actividades.input.setValue("Pr_Comentario", comentario);           
      this.sp_insertar_actividades.input.setValue("Pr_Id_Actividad", idactividad);
      this.sp_insertar_actividades.input.setValue("Pr_Id_Curso", idcurso);
      this.sp_insertar_actividades.input.setValue("Pr_Logrado", logrado);
      this.sp_insertar_actividades.update();
      this.editPanel12.cancelEdit();
  },
  
  picture9Click: function(inSender) {
     try {
      this.actAlumnos.clearSelection();
      this.inscalumactividadLiveVariable1.update();
      
    } catch(e) {
      console.error('ERROR IN picture9Click: ' + e); 
    } 
  },
 
  asignaturasShow: function(inSender) {
     try {
      this.ls_Area1.update();
      this.ls_Area2.update();
      this.ls_Area3.update();
      this.lv_subarea1.update();
      
    } catch(e) {
      console.error('ERROR IN layer29Show: ' + e); 
    } 
  },
  asignaturaDataGrid2RowDblClick: function(inSender, inEvent) {
     try {
      this.editPanel11.beginDataUpdate();
      
    } catch(e) {
      console.error('ERROR IN asignaturaDataGrid2RowDblClick: ' + e); 
    } 
  },
  inscalumaprendizajeLiveForm1Success: function(inSender, inData) {
    try {
     this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.update();
     this.l_calif_contenedor_tablas_calificacion_final.update();
     this.calif_asig_datag_aprendizajesDataGrid1.setDisabled(false);
     this.calif_alumnos_curso_datag_alumnosDataGrid1.setDisabled(false);

    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm1Success: ' + e); 
    } 
  },
  
  inscalumaprendizajeLiveForm1DeleteData: function(inSender) {
    try {
    //  this.actualizacalifestuapren.update();
      
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm1DeleteData: ' + e); 
    } 
  },
 
  calif_encabezado_opciones_butt_reporteClick: function(inSender, inEvent) {
    try {
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var idc = this.calif_encabezado_opciones_sel_curso.getDataValue();
      var ida = this.calif_asig_datag_asignaturasDataGrid1.selectedItem.getData().id.asignaturaIdAsignatura;
      var formatType= "PDF";
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/DOC002",
               format: formatType,
               params: { curso: idc, asignatura: ida }
         }
       });
       inEvent.preventDefault();
   
    } catch(e) {
      console.error('ERROR IN botonReporte3Click: ' + e); 
    } 
  },
  
  calificacionEditor3Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      if(this.calificacionEditor3.dataValue=="En Progreso"){
            this.calificacionNumEditor23.setValue("dataValue", "0.3");
           }     
        if(this.calificacionEditor3.dataValue=="Competente"){
             this.calificacionNumEditor23.setValue("dataValue", "1");
            }     
            if(this.calificacionEditor3.dataValue=="Avanzado"){
                this.calificacionNumEditor23.setValue("dataValue", "1.3");
             }     
              if(this.calificacionEditor3.dataValue=="Magistral"){
                   this.calificacionNumEditor23.setValue("dataValue", "1.6");
               }     
      
    } catch(e) {
      console.error('ERROR IN calificacionEditor3Change: ' + e); 
    } 
  },
  
  liveForm4BeginInsert: function(inSender) {
    try {
       this.unidadLookup2.setValue("dataValue",this.unidadDataGrid2.selectedItem.getData().idUnidad);
      
    } catch(e) {
      console.error('ERROR IN liveForm4BeginInsert: ' + e); 
    } 
  },
      
  nivel_encabezado_butt_reporte_asignaturaClick: function(inSender, inEvent) {
    try {
       url= "services/catalogoAsignaturas.download?method=getReport&ida="+this.asignaturaDataGrid4.selectedItem.getData().idAsignatura;  
       window.open(url,"_BLANK");   
       
    } catch(e) {
      console.error('ERROR IN botonRepClick: ' + e); 
    } 
  },
  
  dataGridAlumnosSelected: function(inSender, inIndex) {
    try {
      this.rep_box1.setValue("dataValue",this.dataGridAlumnos.selectedItem.getData().persona.idPersona);
      this.rep_box2.setValue("dataValue",this.dataGridAlumnos.selectedItem.getData().sy.idSy);
      
    } catch(e) {
      console.error('ERROR IN dataGridAlumnosSelected: ' + e); 
    }},
  
  dataGridAlumnos1Selected: function(inSender, inIndex) {
    try {
     this.rep_box3.setValue("dataValue", this.dataGridAlumnos1.selectedItem.getData().persona.idPersona);
      
    } catch(e) {
      console.error('ERROR IN dataGridAlumnos1Selected: ' + e); 
    }},
        
  calif_asig_datag_asignaturasDataGrid1Selected: function(inSender, inIndex) {
    try {    
       this.l_calif_contenedor_tablas_aprendizajes.update();
        this.l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso.update();
         
        if(this.calif_asig_datag_asignaturasDataGrid1.getEmptySelection()== false && this.calif_encabezado_opciones_sel_curso.getDataValue()!== null){
            this.calif_encabezado_opciones_butt_reporte.enable();

          } 
                          
    } catch(e) {
      console.error('ERROR IN tablaAsignaturasSelected: ' + e); 
    } 
  },

  ausencias_select2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      if(this.ausencias_select2.dataValue=="1"){
           this.layerGrado.hide();
           this.layerCursos.show();
            
        }
          if(this.ausencias_select2.dataValue=="2"){
            this.layerCursos.hide();
            this.layerGrado.show();
            }
            if(this.ausencias_select2.dataValue=="3"){
             
              }
                if(this.ausencias_select2.dataValue=="4"){
                     
                  }
      
    } catch(e) {
      console.error('ERROR IN ausencias_select2Change: ' + e); 
    } 
  },
  
  inscalumaprendizajeLiveForm1CancelEdit: function(inSender) {
    try {
       this.calif_alumnos_curso_datag_alumnosDataGrid1.setDisabled(false);
       this.calif_asig_datag_aprendizajesDataGrid1.setDisabled(false);
        
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm1CancelEdit: ' + e); 
    }},
  
  calif_alumnos_curso_datag_alumnosDataGrid1SelectionChanged: function(inSender) {
    try {
      this.editPanel9.cancelEdit();
 
    } catch(e) {
      console.error('ERROR IN personasSelectionChanged: ' + e); 
    } 
  },
  
  calif_asig_datag_aprendizajesDataGrid1SelectionChanged: function(inSender) {
    try {
      this.editPanel9.cancelEdit();
      
    } catch(e) {
      console.error('ERROR IN calif_asig_datag_aprendizajesDataGrid1SelectionChanged ' + e); 
    }},
  liveForm3BeginInsert: function(inSender) {
    try {
      this.subtopicoLookup8.setValue("dataValue", this.subtopicoDataGrid2.selectedItem.getData().idSubtopico);
      
    } catch(e) {
      console.error('ERROR IN liveForm3BeginInsert: ' + e); 
    } 
  },
  inscalumaprendizajeLiveForm2CancelEdit: function(inSender) {
    try {
        this.calif_alumnos_datagrids_datag_alumnos_cursos.setDisabled(false);
        this.calif_alumnos_datagrids_datag_alumnos_asignaturas.setDisabled(false);
        this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm2CancelEdit: ' + e); 
    } 
  },
  calif_alumnos_datagrids_datag_alumnos_asignaturasSelectionChanged: function(inSender) {
    try {
      this.editPanel10.cancelEdit();
      
      
    } catch(e) {
      console.error('ERROR IN calif_alumnos_datagrids_datag_alumnos_asignaturasSelectionChanged: ' + e); 
    } 
  },
  calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelectionChanged: function(inSender) {
    try {
      this.l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1.clearData();
      this.l_calif_alumnos_calificaciones_finales.clearData();
      this.editPanel10.cancelEdit();
      
    } catch(e) {
      console.error('ERROR IN calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelectionChanged: ' + e); 
    } 
  },
  inscalumaprendizajeLiveForm2Success: function(inSender, inData) {
    try {
     this.l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1.update();
     this.l_calif_alumnos_calificaciones_finales.update();
     this.l_calif_alumnos_alumnos_asignaturas.update();
     this.calif_alumnos_datagrids_datag_alumnos_cursos.setDisabled(false);
     this.calif_alumnos_datagrids_datag_alumnos_asignaturas.setDisabled(false);
     this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.setDisabled(false);    
      
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm2Success: ' + e); 
    } 
  },
  
 liveForm2BeginInsert: function(inSender) {
    try {
      this.asignaturaLookup4.setValue("dataValue", this.asignaturaDataGrid4.selectedItem.getData().idAsignatura);
      
    } catch(e) {
      console.error('ERROR IN liveForm2BeginInsert: ' + e); 
    } 
  },
 
  calif_alumnos_datagrids_datag_alumnos_cursosSelectionChanged: function(inSender) {   
      this.l_calif_alumnos_aprendizajes.clearData();
      this.l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1.clearData();
      this.l_calif_alumnos_calificaciones_finales.clearData();
      this.editPanel10.cancelEdit();
  },
  
  inscalumaprendizajeLiveForm2BeginUpdate: function(inSender) {
    try {
      
       this.calif_alumnos_datagrids_datag_alumnos_cursos.setDisabled(true);
        this.calif_alumnos_datagrids_datag_alumnos_asignaturas.setDisabled(true);
         this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.setDisabled(true);
            
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm2BeginUpdate: ' + e); 
    } 
  },
  apredizajesSelected: function(inSender, inIndex) {
    try {
      this.inscalumaprendizajeLiveVariable1.update();
       this.calif_finales.update();
      
    } catch(e) {
      console.error('ERROR IN apredizajesSelected: ' + e); 
    } 
  },
 
 calificacionesShow: function(inSender) {
    try {
     this.l_calif_encabezado_opciones_listaCursos.update();
      
    } catch(e) {
      console.error('ERROR IN layer9Show: ' + e); 
    } 
  },

  calif_alumnos_panel1_sel_cursoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.l_calif_alumnos_alumnosCursos.update();
      
    } catch(e) {
      console.error('ERROR IN calif_alumnos_panel1_sel_cursoChange: ' + e); 
    } 
  },
  calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelected: function(inSender, inIndex) {
    try {
      this.l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1.update();
      this.l_calif_alumnos_calificaciones_finales.update();
      
    } catch(e) {
      console.error('ERROR IN calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelected: ' + e); 
    } 
  },
  calif_alumnos_panel1_butt_showClick: function(inSender, inEvent) {
    try {
      this.calif_alumnos_datagrids_datag_alumnos_cursos.hide();
      
    } catch(e) {
      console.error('ERROR IN calif_alumnos_panel1_butt_showClick: ' + e); 
    } 
  },
  calif_alumnos_panel1_butt_hideClick: function(inSender, inEvent) {
    try {
      this.calif_alumnos_datagrids_datag_alumnos_cursos.show();
      
    } catch(e) {
      console.error('ERROR IN calif_alumnos_panel1_butt_hideClick: ' + e); 
    } 
  },
  calif_encabezado_opciones_sel_cursoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.calif_asig_datag_asignaturasDataGrid1.clearSelection();
      this.l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso.clearData();
      this.l_calif_contenedor_tablas_aprendizajes.clearData();
          this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.clearData();
          this.l_calif_contenedor_tablas_calificacion_final.clearData(); 
                    
    } catch(e) {
      console.error('ERROR IN calif_encabezado_opciones_sel_cursoChange: ' + e); 
    } 
  },
  l_calif_alumnos_butt_ocultarClick: function(inSender, inEvent) {
    try {
      this.calif_asig_datag_asignaturasDataGrid1.hide();
        
    } catch(e) {
      console.error('ERROR IN l_calif_alumnos_panel1Click: ' + e); 
    } 
  },
  l_calif_alumnos_butt_mostrarClick: function(inSender, inEvent) {
    try {
      this.calif_asig_datag_asignaturasDataGrid1.show();
      
    } catch(e) {
      console.error('ERROR IN l_calif_alumnos_butt_ocultar1Click: ' + e); 
    } 
  },

  calif_asig_datag_asignaturasDataGrid1Deselected: function(inSender, inIndex) {
    try {
  if(this.calif_asig_datag_asignaturasDataGrid1.getEmptySelection()== true || this.calif_encabezado_opciones_sel_curso.getDataValue()== null){
             this.calif_encabezado_opciones_butt_reporte.disable();
             
           }
      
    } catch(e) {
      console.error('ERROR IN calif_asig_datag_asignaturasDataGrid1Deselected: ' + e); 
    } 
  },
  
  promocionLiveForm1BeginInsert: function(inSender) {
    try {
      this.personaLookup2.setValue("dataValue", this.promocion_container_datag_personas_x_curso.selectedItem.getData().id.idPersona);
      this.syLookup1.enable();
      this.calificacionEditor5.enable();
      this.calificacionCharEditor1.enable();
      this.promocion_container_datag_personas_x_curso.setDisabled(true);
      this.promocionDataGrid1.setDisabled(true);
      
    } catch(e) {
      console.error('ERROR IN promocionLiveForm1BeginInsert: ' + e); 
    } 
  },
  /*
  *
  *inicio detalles acciones promociones
  */
  aprobadoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
      if(this.aprobadoEditor1.dataValue== true){
        this.promovidoEditor1.enable();
        this.commentpromovidoEditor1.enable();
      }
      else{
        this.promovidoEditor1.disable();
        this.commentpromovidoEditor1.disable();
      }
  },
  promocion_butt_limpiarClick: function(inSender, inEvent) {
      this.promocion_sel_ao_escolar.setDataValue(2);
      this.promocion_sel_grado.clear();
      this.promocion_sel_curso.clear();
      this.l_promocion_insc_alum_curso.clearData();
      this.l_promocion_promocionLiveVariable1.clearData();
  },
  global_usernameSuccess: function(inSender, inDeprecated) {
      var _usuario= main.global_username.data.dataValue;      
      this.a_informacionUsuario.input.setValue("user", _usuario);     
     // this.a_getLastAccess.input.setValue("user", _usuario);
      this.global_cursy.update();
      this.a_informacionUsuario.update();    
     // this.a_getLastAccess.update();
  },
  // onSuccess global sy
  global_cursySuccess: function(inSender, inDeprecated) {
      var _usuario= main.global_username.getData().dataValue;
      var syJson= main.global_cursy.getItem(0);
      var fechaInicio= syJson.data.fechaDesde;
      var fechaFinal= syJson.data.fechaHasta; 
      this.dash_dash_lv1.input.setValue("usuario", _usuario);  
      this.dash_dash_lv1.input.setValue("f1", fechaInicio);
      this.dash_dash_lv1.input.setValue("f2", fechaFinal);
      this.dash_dash_lv1.update();
  },
  //  on-a_informacionUsuario 
  a_informacionUsuarioSuccess: function(inSender, inDeprecated) {      
       var json=  main.a_informacionUsuario.getItem(0);
       var codigo= json.data.codigo;
       var usuario= json.data.usuario;
       var tipo= json.data.tipoPersona;
       var nombre1= json.data.nombre1;
       var nombre2= json.data.nombre2;
       var apellido1= json.data.apellido1;
       var apellido2= json.data.apellido2;
       var nodoc= json.data.numeroDocumento;
       var sexo= json.data.sexo;       
       var fullname= nombre1+" "+nombre2+" "+apellido1+" "+apellido2; 
       this.profile_button.setCaption(usuario);
       this.menu_rol.setCaption(tipo);
       this.menu_profile_img.setSource("http://www.rochester.edu.co/fotosempleados/"+codigo+".Jpeg");
       this.configuracion_profile_image.setSource("http://www.rochester.edu.co/fotosempleados/"+codigo+".Jpeg");
       this.menu_bienvenida.setCaption("Bienvenid@, "+usuario);
       this.configuracion_detalles.setCaption(fullname+"<br>Sexo: "+sexo+"<br>No. documento: "+nodoc+"<br>"+tipo);

       var idp = main.a_informacionUsuario.getItem(0).data.idpersona;   
       var today= new Date().getTime();
       var clave= main.a_informacionUsuario.getItem(0).data.clave; 
       this.inicio_box_usuario.setDataValue(usuario);
       this.inicio_box_clave.setDataValue(clave);
       this.inicio_box_reclave.setDataValue(clave);
 
       //if( main.a_isAuthenticated.getData().dataValue == true){
         this.a_logInsertRecords.setValue("persona.idPersona", idp);
         this.a_logInsertRecords.setValue("fechaIngreso", today);
         this.a_logInsertRecords.setValue("horaIngreso", today);
         this.logForm.setDataSet(this.a_logInsertRecords); 
         this.logForm.insertData(); 
      // }   
  },
  promocionDataGrid1Selected: function(inSender, inIndex) {
    try {
       if(this.aprobadoEditor1.dataValue== true){
        this.promovidoEditor1.enable();
        this.commentpromovidoEditor1.enable();
      }
      else{
        this.promovidoEditor1.disable();
        this.commentpromovidoEditor1.disable();
      }
      
    } catch(e) {
      console.error('ERROR IN promocionDataGrid1Selected: ' + e); 
    } 
  },
  promocionLiveForm1BeginUpdate: function(inSender) {
    try {
      this.promocion_container_datag_personas_x_curso.setDisabled(true);
      this.promocionDataGrid1.setDisabled(true);
      
    } catch(e) {
      console.error('ERROR IN promocionLiveForm1BeginUpdate: ' + e); 
    } 
  },
  promocionLiveForm1UpdateData: function(inSender) {
    try {
      this.promocion_container_datag_personas_x_curso.setDisabled(false);
      this.promocionDataGrid1.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN promocionLiveForm1UpdateData: ' + e); 
    } 
  },
  promocionLiveForm1CancelEdit: function(inSender) {
    try {
      this.promocion_container_datag_personas_x_curso.setDisabled(false);
      this.promocionDataGrid1.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN promocionLiveForm1CancelEdit: ' + e); 
    } 
  },
  promocionLiveForm1InsertData: function(inSender) {
    try {
       this.promocion_container_datag_personas_x_curso.setDisabled(false);
      this.promocionDataGrid1.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN promocionLiveForm1InsertData: ' + e); 
    } 
  },
  promocion_container_datag_personas_x_cursoSelectionChanged: function(inSender) {
    try {
      this.editPanel3.cancelEdit();
      
    } catch(e) {
      console.error('ERROR IN promocion_container_datag_personas_x_cursoSelectionChanged: ' + e); 
    } 
  },
  promocionDataGrid1SelectionChanged: function(inSender) {
    try {
      this.editPanel3.cancelEdit();
      
    } catch(e) {
      console.error('ERROR IN promocionDataGrid1SelectionChanged: ' + e); 
    } 
  },
  promocion_sel_gradoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
      this.l_promocion_curso.update();
      this.l_promocion_insc_alum_curso.clearData();
      this.l_promocion_promocionLiveVariable1.clearData();
      
    } catch(e) {
      console.error('ERROR IN promocion_sel_gradoChange: ' + e); 
    }},
  a_obtenerNombreSuccess: function(inSender, inDeprecated) {
    try {
      var nombre1 = main.a_obtenerNombre.getData().n1;
      var nombre2 = main.a_obtenerNombre.getData().n2;
      var apellido1 = main.a_obtenerNombre.getData().a1;
      var apellido2 = main.a_obtenerNombre.getData().a2;
      this.label_nombreCompleto.setCaption("BIENVENIDO, "+nombre1+" "+nombre2+" "+apellido1+" "+apellido2);
      
    } catch(e) {
      console.error('ERROR IN a_obtenerNombreSuccess: ' + e); 
    } 
  },
  inicio_abrir_preferenciasClick: function(inSender, inEvent) {
    try {
      this.inicio_panel_opciones.show();     
      
    } catch(e) {
      console.error('ERROR IN inicio_abrir_preferenciasClick: ' + e); 
  }},
    
  inicio_cerrar_preferenciasClick: function(inSender, inEvent) {
      this.inicio_panel_opciones.hide();
      this.inicio_filtros_claves.hide();   
  },
  
  
  //   
  inscalumasigLiveForm1CancelEdit: function(inSender) {
      this.inscripcion_asignatura.setDisabled(false);
      this.inscripcion_estudiante.setDisabled(false);
  },
  inscripcion_asignaturaSelectionChanged: function(inSender) {
      this.editPanel7.cancelEdit();
  },
  inscripcion_estudianteSelectionChanged: function(inSender) {
    try {
     this.editPanel7.cancelEdit(); 
      
    } catch(e) {
      console.error('ERROR IN inscripciones_estudianteSelectionChanged: ' + e); 
    } 
  },
  inicio_boton_cancelarClick: function(inSender, inEvent) {
    try {
      this.inicio_box_clave.setReadonly(true);
      this.inicio_box_reclave.setReadonly(true);
      this.inicio_panel_boton_actualizar.hide();
    } catch(e) {
      console.error('ERROR IN inicio_boton_cancelarClick: ' + e); 
    } 
  },
  

  inicio_abrir_preferencias1Click: function(inSender, inEvent) {
    try {
      this.inicio_filtros_claves.show();
      
    } catch(e) {
      console.error('ERROR IN inicio_abrir_preferencias1Click: ' + e); 
    } 
  },
  
  pestana_reportes_seguimientoShow: function(inSender) {
    try {
      var jsonobject= main.a_informacionUsuario2.getItem(0);
      var rol = jsonobject.data.idtipo;
      var idpersona = jsonobject.data.idpersona;
      var valueToFilter = rol;
      var valuePersona = idpersona;
      this.l_reportes_graficos_listado_reportes.filter.setValue("id.idTipoPersona", valueToFilter);
      this.l_reportes_graficos_listado_reportes.filter.setValue("id.idPersona", valuePersona);
      this.l_reportes_graficos_listado_reportes.update();
        
    } catch(e) {
      console.error('ERROR IN pestana_reportes_seguimientoShow: ' + e); 
    } 
  },

  reports_open_report_windowClick: function(inSender, inEvent) {
    try {
     app.pageDialog.showPage("Reportes", false, 790, 600);
      var descripcion= main.reportes_graficos_listado_reportes.selectedItem.getData().id.reporte;
      var codigoRep = main.reportes_graficos_listado_reportes.selectedItem.getData().id.codigo;
      app.pageDialog.page.reporte_descrip_general.setCaption("<b>DETALLES DEL REPORTE SELECCIONADO</b>"+"<br/>CODIGO REPORTE: "+codigoRep+"<br/>"+descripcion);
      
      if(codigoRep=="REC001"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);  
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.p2.show();
      app.pageDialog.page.p1.show();
      app.pageDialog.page.f1_label.setCaption("Fecha inicial");
      app.pageDialog.page.f2_label.setCaption("Fecha final");
      app.pageDialog.page.fecha1_dt.show();
      app.pageDialog.page.fecha2_dt.show();

      }
      if(codigoRep=="REC002"){
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide(); 
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);  
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.sy_box.show();
      }
      
      if(codigoRep=="REC003"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);  
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.sy_box.show();
      }
      
      if(codigoRep=="REC004"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.semana_box.hide();  
      app.pageDialog.page.search_user_complex_box.show();
      app.pageDialog.page.alumnosDataGrid.setShowing(true);  
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.idp_box.show();
      app.pageDialog.page.fecha1_dt.show();
      app.pageDialog.page.fecha2_dt.show();
      app.pageDialog.page.alumnosDataGrid.setShowing(true);  
      }
      
      if(codigoRep=="REC005"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);  
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.nivel_box.show();
      }
      
      if(codigoRep=="REC006"){
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(true);  
      app.pageDialog.page.idp_box.show();
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.search_user_complex_box.show();
      app.pageDialog.page.alumnosDataGrid.setShowing(true);  
      }

      if(codigoRep=="REC007"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);  
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.periodo_box.show();
      app.pageDialog.page.num_asig_bajo.show();
      app.pageDialog.page.nivel_box.show();
      }
      
      if(codigoRep=="REC008"){ 
      app.pageDialog.page.fechaBimestre.hide();  
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.nivel_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);     
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.periodo_box.show();
      app.pageDialog.page.desde_curso_box.show();
      app.pageDialog.page.hasta_curso_box.show();
     
      }

      if(codigoRep=="REC009"){
      app.pageDialog.page.fechaBimestre.hide();  
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);     
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.periodo_box.show();
      app.pageDialog.page.grado_box.show();
      
     
      }
      
      if(codigoRep=="REC010"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.numero_mes.hide();  
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);      
      app.pageDialog.page.num_asig_bajo.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.periodo_box.show();
      app.pageDialog.page.nivel_box.show(); 
     
      }
      
      if(codigoRep=="REC012"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.idp_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();      
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);     
      app.pageDialog.page.num_asig_bajo.hide();   
      app.pageDialog.page.numero_mes.hide();    
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.grado_box.show();
     
      }
      
      if(codigoRep=="REC013"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.idp_box.hide();      
       app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);      
      app.pageDialog.page.num_asig_bajo.hide(); 
      app.pageDialog.page.numero_mes.hide();      
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.show();
      
      } 
      
      if(codigoRep=="REC014"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);      
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.show();
      
      } 
      
      if(codigoRep=="REC015"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.show();
      
      } 
      
      if(codigoRep=="REC024"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.numero_mes.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.desde_curso_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.show();
      app.pageDialog.page.f1_label.setCaption("Aprendizajes con fecha esperada antes o igual a");
      app.pageDialog.page.f1_label.show();
      app.pageDialog.page.nivel_esperado.show(); 
      app.pageDialog.page.fecha1_dt.show();           
      app.pageDialog.page.peso_aprendizaje.show(); 
      app.pageDialog.page.a_grado.update();    
      } 
      
      if(codigoRep=="REC025"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.numero_mes.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.fecha1_dt.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      } 
      
      if(codigoRep=="REC026"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide(); 
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.alumnosDataGrid.setShowing(false);    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.numero_mes.hide(); 
      app.pageDialog.page.fecha1_dt.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.grado_box.show();
      } 

      if(codigoRep=="REC027"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();     
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.hide();      
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.fecha1_dt.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.alumnosDataGrid.setShowing(false); 
      app.pageDialog.page.idp_box.hide(); 
      app.pageDialog.page.numero_mes.hide(); 
      app.pageDialog.page.search_user_complex_box.hide();
      app.pageDialog.page.puntaje.show();
      app.pageDialog.page.num_asig_bajo.show();  
      app.pageDialog.page.nivel_box.show(); 
      app.pageDialog.page.periodo_box.show(); 
      } 

      if(codigoRep=="REC028"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();   
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.nivel_esperado.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.fecha1_dt.hide();      
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.numero_mes.show(); 
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.alumnosDataGrid.setShowing(true); 
      app.pageDialog.page.idp_box.show();
      app.pageDialog.page.search_user_complex_box.show();
      } 
      
      if(codigoRep=="DOC001"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();    
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.search_user_complex_box.hide();      
      app.pageDialog.page.alumnosDataGrid.hide();    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_esperado.hide();     
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.sy_box.show();
      app.pageDialog.page.semana_box.show();
      app.pageDialog.page.desde_curso_box.show();
      app.pageDialog.page.hasta_curso_box.show();
      app.pageDialog.page.fechaBimestre.hide();
      
      }

      if(codigoRep=="EVE002"){ 
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();   
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();     
      app.pageDialog.page.numero_mes.hide();    
      app.pageDialog.page.search_user_complex_box.hide();         
      app.pageDialog.page.alumnosDataGrid.hide();      
      app.pageDialog.page.num_asig_bajo.hide();         
      app.pageDialog.page.periodo_box.hide();   
      app.pageDialog.page.nivel_esperado.hide();     
      app.pageDialog.page.nivel_box.hide();       
      app.pageDialog.page.p2.hide();    
      app.pageDialog.page.p1.hide();      
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.show();
      
      }
      if(codigoRep=="EVE003"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();   
      app.pageDialog.page.numero_mes.hide();        
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_esperado.hide();     
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.search_user_complex_box.show();      
      app.pageDialog.page.alumnosDataGrid.show();
      app.pageDialog.page.idp_box.show();   
      
      }
      if(codigoRep=="EVE004"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.search_user_complex_box.hide();      
      app.pageDialog.page.alumnosDataGrid.hide();    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_esperado.hide();     
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.tipoeventualidad.show();
      app.pageDialog.page.numero_eventualidades.show();
      app.pageDialog.page.idp_box.hide();  
      
      }
      if(codigoRep=="EVE005"){ 
      app.pageDialog.page.tipoeventualidad.hide();
      app.pageDialog.page.numero_eventualidades.hide();
      app.pageDialog.page.fecha1_dt.hide();
      app.pageDialog.page.fecha2_dt.hide();    
      app.pageDialog.page.curso_box.hide();
      app.pageDialog.page.idp_box.hide();    
      app.pageDialog.page.numero_mes.hide();   
      app.pageDialog.page.search_user_complex_box.hide();      
      app.pageDialog.page.alumnosDataGrid.hide();    
      app.pageDialog.page.num_asig_bajo.hide();    
      app.pageDialog.page.periodo_box.hide();
      app.pageDialog.page.nivel_esperado.hide();     
      app.pageDialog.page.nivel_box.hide(); 
      app.pageDialog.page.p2.hide();
      app.pageDialog.page.p1.hide();
      app.pageDialog.page.grado_box.hide();
      app.pageDialog.page.peso_aprendizaje.hide(); 
      app.pageDialog.page.puntaje.hide(); 
      app.pageDialog.page.sy_box.hide();
      app.pageDialog.page.semana_box.hide();
      app.pageDialog.page.fechaBimestre.hide();
      app.pageDialog.page.desde_curso_box.hide();
      app.pageDialog.page.hasta_curso_box.hide();
      
      }
      
    } catch(e) {
      console.error('ERROR IN reports_open_report_windowClick: ' + e); 
    }},
  
  reportes_graficos_listado_reportesSelected: function(inSender, inIndex) {
    try {
     this.reports_open_report_window.enable();
      
    } catch(e) {
      console.error('ERROR IN reportes_graficos_listado_reportesSelected: ' + e); 
    } 
  },
  
  reportes_graficos_listado_reportesDeselected: function(inSender, inIndex) {
    try {
     this.reports_open_report_window.disable();  
      
    } catch(e) {
      console.error('ERROR IN reportes_graficos_listado_reportesDeselected: ' + e); 
    } 
  },

  a_getLastAccessSuccess: function(inSender, inDeprecated) {
      var json= main.a_getLastAccess.getItem(0);
      var fechaUltimoAcceso= json.data.date;
      var horaUltimoAcceso= json.data.timeLoged;
      this.lastAccess_Label.setCaption("Último acceso: <br/>"+fechaUltimoAcceso);
  },
  
  /*
   *Inicio
   *Graficos
   */
   
  dash_dash_lv1Success: function(inSender, inDeprecated) {
     this.renderChart_dash1();
  },
  
  renderChart_dash1: function() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'Trayectoria de ingresos del docente');
        var rows = this.dash_dash_lv1.getData(function(inItem) {
            return [inItem.getValue("name"), inItem.getValue("dataValue")];
        });
        var _json= main.dash_dash_lv1.getData();       
        var _json= main.dash_dash_lv1.json;
        var _count= main.dash_dash_lv1.getCount();
        for (var i = 0; i < _count; i++) {
          var _item= main.dash_dash_lv1.getItem(i).data;
          var _name= _item.mes;
          var _value= _item.totalingresos;
          data.addRows
           ([
            [_name, _value]
            ]);
        } 
        var options = {'title':'GRÁFICO DE INGRESOS POR DOCENTE',
                       'titlePosition': 'out', 
                        hAxis: {title: 'Meses del año escolar',  titleTextStyle: {color: '#000000'}},
                        vAxis: {title: 'Total ingresos' , titleTextStyle: {color: '#000000'}},
                        legend : {position: 'in', alignment: 'end'}
                      };                  
        var chart = this._chart = new google.visualization.AreaChart(this.dash_chart1.domNode);
        chart.draw(data, options);
    },   
    
  codigoReporteChange: function(inSender, inDisplayValue, inDataValue) {
    try {
     var _codigo= this.codigoReporte.getDataValue();
     this.l_reportes_graficos_listado_reportes.filter.setValue("id.codigo", _codigo);
     this.l_reportes_graficos_listado_reportes.update(); 
      
    } catch(e) {
      console.error('ERROR IN codigoChange: ' + e); 
    } 
  },
  
  reporteChange: function(inSender, inDisplayValue, inDataValue) {
    try {
     var _reporte= this.reporte.getDataValue();
     this.l_reportes_graficos_listado_reportes.filter.setValue("id.reporte", _reporte);
     this.l_reportes_graficos_listado_reportes.update(); 
      
    } catch(e) {
      console.error('ERROR IN reporteChange: ' + e); 
    } 
  },
  calif_alumnos_datagrids_datag_alumnos_asignaturasSelected: function(inSender, inIndex) {
    try {
     var idasignatura= this.calif_alumnos_datagrids_datag_alumnos_asignaturas.selectedItem.getData().idasignatura;
     this.l_calif_alumnos_aprendizajes.filter.setValue("id.asignaturaIdAsignatura", idasignatura); 
     this.l_calif_alumnos_aprendizajes.update(); 
    } catch(e) {
      console.error('ERROR IN calif_alumnos_datagrids_datag_alumnos_asignaturasSelected: ' + e); 
    } 
  },

  subjects_activitiesChange: function(inSender, inDisplayValue, inDataValue) {
     var idcurso= this.subjects_activities.getDataValue();
     var cadena=  this.subjects_activities.getDisplayValue();
     var idasignatura= cadena.substring(0,6);
     var x = parseInt(idasignatura);
     var json= main.a_cursy.getItem(0);
     var sy= json.data.sy;
     var idsy= json.data.idsy;    
     this.actividad_lv.filter.setValue("subtopico.unidad.asignatura.idAsignatura", x);
     this.actividad_estudiantes.filter.setValue("curso.idCurso", idcurso);
     this.actividad_estudiantes.filter.setValue("sy.idSy", idsy);
     this.actividad_lv.update(); 
     this.actividad_estudiantes.update();
  },
  
  activitiesDataGridSelected: function(inSender, inIndex) {
     var id=  this.activitiesDataGrid.selectedItem.getData().idActividad;
     this.inscalumactividadLiveVariable1.filter.setValue("actividad.idActividad",id);
     this.inscalumactividadLiveVariable1.update();
  },
  
  /*
   * Js new version
   */
   menu_inicio_buttClick: function(inSender) {
       $('#main_menu_inicio_butt')
            .css('background-color', '#1125b2');             
        $('#main_menu_curriculo_butt')
            .css('background-color', '#a3a3a3');
   },
   menu_curriculo_buttClick3: function(inSender) {
		$('#main_menu_curriculo_butt')
            .css('background-color', '#1125b2');
        $('#main_menu_inicio_butt')
            .css('background-color', '#a3a3a3');    
   },
   menu_curriculo_buttClick: function(inSender) {
        var json= main.global_cursy.getItem(0);
        var nick= main.global_username.getData().dataValue;
        var idsy= json.data.idsy;
        this.global_docentes_asignaturas.input.setValue("nickname",nick);
        this.global_docentes_asignaturas.input.setValue("idsyr",idsy);
        this.global_docentes_asignaturas.update();	
   },
   // loading learnings relation data, if the count is ==0 the var will be dirty is !=0 nothing happens
   menu_curriculo_buttClick1: function(inSender) {
        var count1= this.curriculo_lista_dimension_comprension.getCount();
        var count2= this.curriculo_lista_dimension_curricular.getCount();
        var count3= this.curriculo_lista_inteligencia.getCount();
        var count4= this.curriculo_lista_nivel_esperado.getCount();
        if(count1==0 && count2==0  &&  count3==0  && count4==0){
            this.curriculo_lista_dimension_comprension.update();
            this.curriculo_lista_dimension_curricular.update();
            this.curriculo_lista_inteligencia.update();
            this.curriculo_lista_nivel_esperado.update();
        }else{}   	
   },
   // filtering eje1 // eje2 // eje3
   curriculo_grid_docentes_asignaturasSelect1: function(inSender) {
    	var ejecount= this.curriculo_aprendizaje_eje1.getCount();
        console.log(ejecount);
        var eje1= this.curriculo_grid_docentes_asignaturas.selectedItem.data.subarea1; 
        var eje2= this.curriculo_grid_docentes_asignaturas.selectedItem.data.subarea2;
        var eje3= this.curriculo_grid_docentes_asignaturas.selectedItem.data.subarea3; 
        this.curriculo_aprendizaje_eje1.filter.setValue("subarea.idSubarea", eje1);
        this.curriculo_aprendizaje_eje2.filter.setValue("subarea.idSubarea", eje2);
        this.curriculo_aprendizaje_eje3.filter.setValue("subarea.idSubarea", eje3);
        this.curriculo_aprendizaje_eje1.update();
        this.curriculo_aprendizaje_eje2.update();
        this.curriculo_aprendizaje_eje3.update();
   },
 
   pestana_curriculoShow1: function(inSender) {
     this.curriculo_grid_docentes_asignaturas.setSortIndex(0);
   },
    
   activitiesDataGridCellClick: function(inSender, inEvent) {
         var idcurso= this.subjects_activities.getDataValue();
         var cadena=  this.subjects_activities.getDisplayValue();
         var idasignatura= cadena.substring(0,6);
         var x = parseInt(idasignatura);
         var json= main.a_cursy.getItem(0);
         var sy= json.data.sy;
         var idsy= json.data.idsy;    
         this.actividad_estudiantes.filter.setValue("curso.idCurso", idcurso);
         this.actividad_estudiantes.filter.setValue("sy.idSy", idsy);
         this.actividad_estudiantes.update(); 
    },
    // filtering unidades by subject selected
    curriculo_grid_docentes_asignaturasSelect: function(inSender) {
    	var idasignatura= main.curriculo_grid_docentes_asignaturas.selectedItem.data.idasignatura;
        this.unidadLiveVariable1.filter.setValue("asignatura.idAsignatura", idasignatura);
        this.unidadLiveVariable1.update();
    },
    // filterin subtopics by unit selected
	unidadDojoGridSelect: function(inSender) {
		var idunidad= main.unidadDojoGrid.selectedItem.data.idUnidad;
        this.subtopicoLiveVariable1.filter.setValue("unidad.idUnidad", idunidad);
        this.subtopicoLiveVariable1.update();
	},
    // filterin learning by subtopic selected.
	subtopicoDojoGridSelect: function(inSender) {
		var idsubtopico= this.subtopicoDojoGrid.selectedItem.data.idSubtopico;
        this.aprendizajeLiveVariable1.filter.setValue("subtopico.idSubtopico",idsubtopico);
        this.aprendizajeLiveVariable1.update();
	},
    // filterin activities by subtopic selected.
	subtopicoDojoGridSelect1: function(inSender) {
		var idsubtopico= main.subtopicoDojoGrid.selectedItem.data.idSubtopico;
        this.otrasmetasLiveVariable1.filter.setValue("subtopico.idSubtopico",idsubtopico);
        this.otrasmetasLiveVariable1.update();
	},
    // filterin resources by subtopic selected.
	subtopicoDojoGridSelect2: function(inSender) {
		var idsubtopico= main.subtopicoDojoGrid.selectedItem.data.idSubtopico;
        this.recursoLiveVariable1.filter.setValue("subtopico.idSubtopico",idsubtopico);
        this.recursoLiveVariable1.update();
	},
    // filterin goals by subtopic selected.
	subtopicoDojoGridSelect3: function(inSender) {
		var idsubtopico= main.subtopicoDojoGrid.selectedItem.data.idSubtopico;
        this.actividadLiveVariable2.filter.setValue("subtopico.idSubtopico",idsubtopico);
        this.actividadLiveVariable2.update();
	},
    // renderin' grid styles
	global_docentes_asignaturasResult: function(inSender, inDeprecated) {
		this.curriculo_grid_docentes_asignaturas.setSortIndex(0);
	},
    // renderin' grid style
	unidadLiveVariable1Result: function(inSender, inDeprecated) {
		this.unidadDojoGrid.setSortIndex(0);
	},
    // renderin' grid style
	subtopicoLiveVariable1Result: function(inSender, inDeprecated) {
		this.subtopicoDojoGrid.setSortIndex(0);
	},
    // renderin' grid style
	aprendizajeLiveVariable1Result: function(inSender, inDeprecated) {
		this.aprendizajeDojoGrid.setSortIndex(0);
	},
    // renderin' grid style
	otrasmetasLiveVariable1Result: function(inSender, inDeprecated) {
		this.otrasmetasDojoGrid.setSortIndex(0);
	},
    // renderin' grid style
	recursoLiveVariable1Result: function(inSender, inDeprecated) {
		this.recursoDojoGrid.setSortIndex(0);
	},
    // renderin' grid style
	actividadLiveVariable2Result: function(inSender, inDeprecated) {
		this.actividadDojoGrid1.setSortIndex(0);
	},
    // readonly widgets & getttin' idasignatura
	unidadLiveForm2BeginUpdate: function(inSender) {
        var idasignatura= main.curriculo_grid_docentes_asignaturas.selectedItem.data.idasignatura;
        this.idAsignaturaEditor1.setReadonly(true);
        this.asignaturaEditor1.setReadonly(true);        
	},
    // readonly widgets & getttin' idasignatura
	unidadLiveForm2BeginInsert: function(inSender) {
		var idasignatura= main.curriculo_grid_docentes_asignaturas.selectedItem.data.idasignatura;
        this.idAsignaturaEditor1.setReadonly(true);
        this.asignaturaEditor1.setReadonly(true);
        this.idAsignaturaEditor1.setDataValue(idasignatura);   
	},
    // updatin' subtopicos events
	subtopicoLiveForm2BeginInsert: function(inSender) {
		var idunidad= main.unidadDojoGrid.selectedItem.data.idUnidad;
        this.idUnidadEditor1.setReadonly(true);
        this.unidadEditor1.setReadonly(true);
        this.idUnidadEditor1.setDataValue(idunidad);
	},
    // insertin' subtopicos events
	subtopicoLiveForm2BeginUpdate: function(inSender) {
		this.idUnidadEditor1.setReadonly(true);
        this.unidadEditor1.setReadonly(true);
	},
    // insertin' aprendizajes events
	aprendizajeLiveForm2BeginInsert: function(inSender) {
        var idsubtopico= this.subtopicoDojoGrid.selectedItem.data.idSubtopico;
		this.idSubtopicoEditor1.setReadonly(true);
        this.subtopicoEditor1.setReadonly(true);
        this.idSubtopicoEditor1.setDataValue(idsubtopico);  
	},
	// insert otras metas
	otrasmetasLiveForm2BeginInsert: function(inSender) {
		var idsubtopico= this.subtopicoDojoGrid.selectedItem.data.idSubtopico;
        this.idSubtopicoEditor3.setReadonly(true);
        this.subtopicoEditor3.setReadonly(true);
        this.idSubtopicoEditor3.setDataValue(idsubtopico);
	},
    // update otras metas
	otrasmetasLiveForm2BeginUpdate: function(inSender) {
		this.idSubtopicoEditor3.setReadonly(true);
        this.subtopicoEditor3.setReadonly(true);
	},
    // insert recurso
	recursoLiveForm1BeginInsert: function(inSender) {
        var idsubtopico= this.subtopicoDojoGrid.selectedItem.data.idSubtopico;
		this.idSubtopicoEditor4.setReadonly(true);
        this.subtopicoEditor4.setReadonly(true);              
        this.idSubtopicoEditor4.setDataValue(idsubtopico);
	},
    // update recurso
	recursoLiveForm1BeginUpdate: function(inSender) {
		this.idSubtopicoEditor4.setReadonly(true);
        main.subtopicoEditor4.setReadonly(true);
	},
    // onUpload success
	dojoFileUpload1Success: function(inSender, fileList) {
		var objectFileUploaded = this.dojoFileUpload1.variable.getItemData(0);
        var name= objectFileUploaded.name;
        this.fileNameEditor2.setDataValue(name);
        this.ubicacionEditor1.setDataValue("http://rochester.edu.co/resources/"+name);
	},
    // update actividad
	actividadLiveForm3BeginInsert: function(inSender) {
        var idsubtopico= this.subtopicoDojoGrid.selectedItem.data.idSubtopico;
        this.idSubtopicoEditor5.setReadonly(true);
        this.subtopicoEditor5.setReadonly(true);
        this.idSubtopicoEditor5.setDataValue(idsubtopico);		
	},
    // insert actividad
	actividadLiveForm3BeginUpdate: function(inSender) {
	    this.idSubtopicoEditor5.setReadonly(true);
        this.subtopicoEditor5.setReadonly(true);	
	},
    // clear data when select asignatura
    curriculo_grid_docentes_asignaturasSelectionChange: function(inSender) {
		this.subtopicoLiveVariable1.clearData();
        this.aprendizajeLiveVariable1.clearData();
        this.otrasmetasLiveVariable1.clearData();
        this.recursoLiveVariable1.clearData();
        this.actividadLiveVariable2.clearData();
	},
    // clear data when select unidad
	unidadDojoGridSelectionChange: function(inSender) {
        this.aprendizajeLiveVariable1.clearData();
        this.otrasmetasLiveVariable1.clearData();
        this.recursoLiveVariable1.clearData();
        this.actividadLiveVariable2.clearData();
	},
    // tipo recurso 
	tipoRecursoLookup1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		var tiporecurso= main.tipoRecursoLookup1.getDataValue().idTipoRecurso;
        if(tiporecurso===7){
          this.dojoFileUpload1.show();
          this.ubicacionEditor1.setReadonly(true);
          this.ubicacionEditor1.setDataValue("Http://");
        }else{
          this.dojoFileUpload1.hide();    
          this.ubicacionEditor1.setReadonly(false);  
        }
	},
	// hide curriculo panel and show home
	menu_inicio_buttClick1: function(inSender) {
		this.curriculo_big_panel.hide();
        this.inicio_big_panel.show();
	},
    // hide home panel and show curriculo
	menu_curriculo_buttClick4: function(inSender) {		
        this.inicio_big_panel.hide();
        this.curriculo_big_panel.show();
	},
    //
    inicio_forgot_passwordClick: function(inSender, inEvent) {
        this.inicio_panel_boton_actualizar.show();
        this.inicio_box_clave.setReadonly(false);
        this.inicio_box_reclave.setReadonly(false);
        this.inicio_boton_actualiza.disable();
    },
    inicio_box_claveChange: function(inSender, inDisplayValue, inDataValue) {
        if(this.inicio_box_clave.dataValue == this.inicio_box_reclave.dataValue){
          //alert("si son iguales");
          this.inicio_bad_label.hide();
          this.inicio_ok_label.show();
          this.inicio_boton_actualiza.enable();
        }
        else if(this.inicio_box_clave.dataValue != this.inicio_box_reclave.dataValue){  
          this.inicio_ok_label.hide();
          this.inicio_bad_label.show();
          this.inicio_boton_actualiza.disable();
        }
    },
  
    inicio_box_reclaveChange: function(inSender, inDisplayValue, inDataValue) {
       if(this.inicio_box_clave.dataValue == this.inicio_box_reclave.dataValue){
          this.inicio_bad_label.hide();
          this.inicio_ok_label.show();
          this.inicio_boton_actualiza.enable();
       }
       else if(this.inicio_box_clave.dataValue != this.inicio_box_reclave.dataValue){  
          this.inicio_ok_label.hide();
          this.inicio_bad_label.show();
          this.inicio_boton_actualiza.disable();
       }
    },
    // onActualizaClave success
    a_actualizaClaveSuccess: function(inSender, inDeprecated) {
          alert("Su contraseña ha sido actualizada exitosamente.");
          this.inicio_box_clave.setReadonly(true);
          this.inicio_box_reclave.setReadonly(true);
          this.inicio_panel_boton_actualizar.hide();
          this.inicio_ok_label.hide();
    },   
    // onActualizaClave error
    a_actualizaClaveError: function(inSender, inError) {
          alert("No ha sido posible realizar la operación.");
    },
    // reRender lineChart
	menu_inicio_buttClick2: function(inSender) {
		this.renderChart_dash1();
	},
	unidadDojoGridSelect1: function(inSender) {
		this.subtopicoNewButton.enable();
        this.aprendizajeNewButton.disable();
        this.otrasmetasNewButton.disable();
        this.recursoNewButton.disable();
        this.actividadNewButton1.disable();
	},
	subtopicoDojoGridSelect5: function(inSender) {
		this.aprendizajeNewButton.enable();
        this.otrasmetasNewButton.enable();
        this.recursoNewButton.enable();
        this.actividadNewButton1.enable();
	},
	curriculo_grid_docentes_asignaturasSelect2: function(inSender) {
		this.unidadNewButton.enable();
        this.subtopicoNewButton.disable();
	},
	menu_curriculo_buttClick5: function(inSender) {
		var count= this.curriculo_tipo_desempeno.getCount();
        if(count===0){
           this.curriculo_tipo_desempeno.update(); 
        }else{/*nothing happens*/}
	},
	menu_curriculo_buttClick6: function(inSender) {
		var count= this.curriculo_tipo_valoracion.getCount();
        if(count===0){
           this.curriculo_tipo_valoracion.update(); 
        }else{/*nothing happens*/}
	},
	menu_curriculo_buttClick7: function(inSender) {
		var count= this.curriculo_tipo_actividad.getCount();
        if(count===0){
           this.curriculo_tipo_actividad.update(); 
        }else{/*nothing happens*/}
	},
	lookup3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		var tipo= main.lookup3.getDataValue().idTipoActividad;
        if(tipo===1){
            this.lookup2.enable();
            this.lookup1.disable();
            this.lookup1.setDisplayValue("No aplica");
        }else{
            this.lookup1.enable();
            this.lookup2.disable();
            this.lookup2.setDisplayValue("No aplica");
        }
	},
	actividadLiveForm3Success1: function(inSender, inData) {
		main.actividadDojoGrid1.setSelectedItem(false);
	},
	recursoLiveForm1Success1: function(inSender, inData) {
        main.recursoDojoGrid.setSelectedItem(false);		
	},
	otrasmetasLiveForm2Success1: function(inSender, inData) {
        main.otrasmetasDojoGrid.setSelectedItem(false);		
	},
	aprendizajeLiveForm2Success1: function(inSender, inData) {
        main.aprendizajesAsignaturasGrid1.hide();
        main.aprendizajes_grupo2.show();
		main.aprendizajeDojoGrid.setSelectedItem(false);         
	},
	subtopicoLiveForm2Success1: function(inSender, inData) {
		main.subtopicoDojoGrid.setSelectedItem(false); 
	},
	unidadLiveForm2Success1: function(inSender, inData) {
		main.unidadDojoGrid.setSelectedItem(false); 
	},
	curriculo_grid_docentes_asignaturasSelect3: function(inSender) {
		var idasignatura= this.curriculo_grid_docentes_asignaturas.selectedItem.getData().idasignatura;
        main.curriculo_aprendizajes_asignaturasLiveVariable.filter.setValue("asignatura.idAsignatura", idasignatura);
        main.curriculo_aprendizajes_asignaturasLiveVariable.update();
	},	
	aprendizajesAsignaturasGrid1Select: function(inSender) {
		var aprendizaje= main.aprendizajesAsignaturasGrid1.selectedItem.getData().aprendizaje;
        var learning= main.aprendizajesAsignaturasGrid1.selectedItem.getData().learning;
        var peso= main.aprendizajesAsignaturasGrid1.selectedItem.getData().peso;
        var eje1= main.aprendizajesAsignaturasGrid1.selectedItem.getData().ejeIdEje;
        var eje2= main.aprendizajesAsignaturasGrid1.selectedItem.getData().eje2IdEje;
        var eje3= main.aprendizajesAsignaturasGrid1.selectedItem.getData().eje3IdEje;
        var inteligencia= main.aprendizajesAsignaturasGrid1.selectedItem.getData().inteligencia.inteligencia;
        var dcomprension= main.aprendizajesAsignaturasGrid1.selectedItem.getData().dimensionComprension.dimensionComprension;
        var dcurricular= main.aprendizajesAsignaturasGrid1.selectedItem.getData().dimensionCurricular.dimensionCurricular;
        var nivel= main.aprendizajesAsignaturasGrid1.selectedItem.getData().nivelEsperado.nivelEsperado;
        
        this.aprendizajeEditor2.setDataValue(aprendizaje);
        this.learningEditor2.setDataValue(learning);
        this.numeroAprendizajeSelectMenu1.setDataValue(peso);
        this.ejeSelect1.setDataValue(eje1);
        this.ejeSelect2.setDataValue(eje2);
        this.ejeSelect3.setDataValue(eje3);
        this.dimensionComprensionLookup2.setDisplayValue(dcomprension);
        this.dimensionCurricularLookup2.setDisplayValue(dcurricular);
        this.inteligenciaLookup2.setDisplayValue(inteligencia);
        this.nivelEsperadoLookup2.setDisplayValue(nivel);
	},
	aprendizajeLiveForm2BeginInsert1: function(inSender) {
		this.aprendizajes_grupo2.hide();
        main.aprendizajesAsignaturasGrid1.show();
	},
	_end: 0
});