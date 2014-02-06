/*js aprendoz docentes*/

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
  
  cur_subt_datag_subtopicoDataGrid1Selected: function(inSender, inIndex) {
    try {
      this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.update();
       this.l_cur_metas_metas_otrasmetasLiveVariable1.update();
       this.l_cur_act_actividades_actividadLiveVariable1.update();
       this.l_cur_rec_recursos_recursoLiveVariable1.update();
 
    } catch(e) {
      console.error('ERROR IN subtopicoDataGrid1Selected: ' + e); 
    } 
  },
  
   cur_encabezado_sel_syChange: function(inSender, inDisplayValue, inDataValue) {
    try {
   if(this.cur_encabezado_sel_sy.dataValue==1 || this.cur_encabezado_sel_sy.dataValue==2 ){
        //formulario unidades
        this.newButton4.hide();
        this.updateButton4.hide();
        this.deleteButton4.hide();                 
        //subtopicos
        this.newButton5.hide();
        this.updateButton5.hide();
        this.deleteButton5.hide();  
        //aprendizajes
        this.newButton1.hide();
        this.updateButton1.hide();
        this.deleteButton1.hide();  
        //otras metas
        this.newButton2.hide();
        this.updateButton2.hide();
        this.deleteButton2.hide(); 
        //Actividades 
        this.newButton6.hide();
        this.updateButton6.hide();
        this.deleteButton6.hide(); 
        //Recursos
        this.newButton7.hide();
        this.updateButton7.hide();
        this.deleteButton7.hide();    
     }     
     else if(this.cur_encabezado_sel_sy!=1 || this.cur_encabezado_sel_sy!=2) {
        //formulario unidades
        this.newButton4.show();
        this.updateButton4.show();
        this.deleteButton4.show();  
        //subtopicos 
        this.newButton5.show();
        this.updateButton5.show();
        this.deleteButton5.show(); 
        //aprendizajes
        this.newButton1.show();
        this.updateButton1.show();
        this.deleteButton1.show();  
        // otras metas
        this.newButton2.show();
        this.updateButton2.show();
        this.deleteButton2.show(); 
        //actividades  
        this.newButton6.show();
        this.updateButton6.show();
        this.deleteButton6.show();
        //recursos
        this.newButton7.show();
        this.updateButton7.show();
        this.deleteButton7.show();
     }
        this.l_cur_asig_asignaturas_vista_docentes_asignaturas.update();
        this.l_cur_unid_unidades_unidadLiveVariable1.clearData();
        this.l_cur_subt_subtopicos_subtopicoLiveVariable1.clearData();
        this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.clearData();
        this.l_cur_metas_metas_otrasmetasLiveVariable1.clearData();
        this.l_cur_act_actividades_actividadLiveVariable1.clearData();
        this.l_cur_act_actividades_actividadLiveVariable1.clearData();
               
    } catch(e) {
      console.error('ERROR IN selectEditor14Change: ' + e); 
    } 
  },
  
  cur_encabezado_sel_gradoChange: function(inSender, inDisplayValue, inDataValue) {
    try {
     this.l_cur_asig_asignaturas_vista_docentes_asignaturas.update();
     this.l_cur_unid_unidades_unidadLiveVariable1.clearData();
     this.l_cur_subt_subtopicos_subtopicoLiveVariable1.clearData();
     this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.clearData();
     this.l_cur_metas_metas_otrasmetasLiveVariable1.clearData();
     this.l_cur_act_actividades_actividadLiveVariable1.clearData();
     this.l_cur_rec_recursos_recursoLiveVariable1.clearData();
      
    } catch(e) {
      console.error('ERROR IN cur_encabezado_sel_gradoChange: ' + e); 
    } 
  },

  cur_encabezado_butt_restaurarClick: function(inSender, inEvent) {
    try {
     this.cur_encabezado_sel_grado.clear();
     this.cur_encabezado_sel_sy.clear();
     this.l_cur_asig_asignaturas_vista_docentes_asignaturas.clearData();
     this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.clearData();
     this.l_cur_metas_metas_otrasmetasLiveVariable1.clearData();
     this.l_cur_unid_unidades_unidadLiveVariable1.clearData();
     this.l_cur_subt_subtopicos_subtopicoLiveVariable1.clearData();
     this.l_cur_act_actividades_actividadLiveVariable1.clearData();
     this.l_cur_rec_recursos_recursoLiveVariable1.clearData();
      
    } catch(e) {
      console.error('ERROR IN cur_encabezado_butt_restaurarClick: ' + e); 
    } 
  },
  
  cur_asig_datag_asignaturasDataGrid1Selected: function(inSender, inIndex) {
    try {
     this.l_cur_unid_unidades_unidadLiveVariable1.update();  
     this.l_cur_subt_subtopicos_subtopicoLiveVariable1.clearData();
     this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.clearData();
     this.l_cur_metas_metas_otrasmetasLiveVariable1.clearData();
     this.l_cur_act_actividades_actividadLiveVariable1.clearData();
     this.l_cur_rec_recursos_recursoLiveVariable1.clearData();
     
     this.cur_encabezado2_butt_crea_unidad.enable(); 
     this.cur_encabezado3_butt_crear_subtopico.disable();
     this.cur_apr_encabezado_butt_crear_aprendizaje.disable();
     this.cur_metas_encabezado_butt_crear_meta.disable();
     this.cur_act_encabezado_butt_crear_actividad.disable();
     this.cur_rec_encabezado_butt_crear_recurso.disable();
                     
    } catch(e) {
      console.error('ERROR IN cur_asig_datag_asignaturasDataGrid1Selected: ' + e); 
    } 
  },

  asignaturaDataGrid1RowDblClick: function(inSender, inEvent) {
    try {
     this.iraformularios.update();
     this.cur_formularios_panel_unidad.hide();
     this.cur_formularios_panel_subtopico.hide();
     this.cur_formularios_panel_aprendizaje.hide();
     this.cur_formularios_panel_otrasmetas.hide();
     this.cur_formularios_panel_actividad.hide();
     this.cur_formularios_panel_recurso.hide();
     this.asignaturaDetailsPanel.show();
      
    } catch(e) {
      console.error('ERROR IN asignaturaDataGrid1RowDblClick: ' + e); 
    } 
  },
 
  cur_unid_datag_unidadesDataGrid1RowDblClick: function(inSender, inEvent) {
    try {
     this.iraformularios.update();
     this.cur_formularios_panel_subtopico.hide();
     this.cur_formularios_panel_aprendizaje.hide();
     this.cur_formularios_panel_otrasmetas.hide();
     this.cur_formularios_panel_actividad.hide();
     this.cur_formularios_panel_recurso.hide();  
     this.cur_formularios_panel_unidad.show();
      
    } catch(e) {
      console.error('ERROR IN cur_unid_datag_unidadesDataGrid1RowDblClick ' + e); 
    } 
  },

  cur_subt_datag_subtopicoDataGrid1RowDblClick: function(inSender, inEvent) {
    try {
     this.iraformularios.update();
     this.cur_formularios_panel_aprendizaje.hide();
     this.cur_formularios_panel_otrasmetas.hide();
     this.cur_formularios_panel_actividad.hide();
     this.cur_formularios_panel_recurso.hide();
     this.cur_formularios_panel_unidad.hide();
     this.cur_formularios_panel_subtopico.show();
      
    } catch(e) {
      console.error('ERROR IN subtopicoDataGrid1RowDblClick: ' + e); 
    } 
  },

  cur_apr_datag_aprendizajeDataGrid1RowDblClick: function(inSender, inEvent) {
    try {
     this.iraformularios.update();     
     this.cur_formularios_panel_otrasmetas.hide();
     this.cur_formularios_panel_actividad.hide();
     this.cur_formularios_panel_recurso.hide();
     this.cur_formularios_panel_unidad.hide();
     this.cur_formularios_panel_subtopico.hide();
     this.cur_formularios_panel_aprendizaje.show();
      
    } catch(e) {
      console.error('ERROR IN aprendizajeDataGrid1RowDblClick: ' + e); 
    } 
  },
  //ok
  cur_metas_datag_otrasmetasDataGrid1RowDblClick: function(inSender, inEvent) {
    try {
     this.iraformularios.update();
     this.cur_formularios_panel_actividad.hide();
     this.cur_formularios_panel_recurso.hide();
     this.cur_formularios_panel_unidad.hide();
     this.cur_formularios_panel_subtopico.hide();
     this.cur_formularios_panel_aprendizaje.hide();
     this.cur_formularios_panel_otrasmetas.show();
      
    } catch(e) {
      console.error('ERROR IN otrasmetasDataGrid1RowDblClick: ' + e); 
    } 
  },
  //ok
  
  cur_act_datag_actividadDataGrid1RowDblClick: function(inSender, inEvent) {
    try {
     this.iraformularios.update();
     this.cur_formularios_panel_recurso.hide();
     this.cur_formularios_panel_unidad.hide();
     this.cur_formularios_panel_subtopico.hide();
     this.cur_formularios_panel_aprendizaje.hide();
     this.cur_formularios_panel_otrasmetas.hide();
     this.cur_formularios_panel_actividad.show();
      
    } catch(e) {
      console.error('ERROR IN actividadDataGrid1RowDblClick: ' + e); 
    }},
  cur_rec_datag_recursosDataGrid1RowDblClick: function(inSender, inEvent) {
    try {
     this.iraformularios.update();
     this.cur_formularios_panel_unidad.hide();
     this.cur_formularios_panel_subtopico.hide();
     this.cur_formularios_panel_aprendizaje.hide();
     this.cur_formularios_panel_otrasmetas.hide();
     this.cur_formularios_panel_actividad.hide();
     this.cur_formularios_panel_recurso.show();
      
    } catch(e) {
      console.error('ERROR IN recursoDataGrid1RowDblClick: ' + e); 
    }},
  cur_encabezado2_butt_crea_unidadClick: function(inSender, inEvent) {
    try {
     this.cur_unid_datag_unidadesDataGrid1RowDblClick(inSender, inEvent);
     this.editPanel4.beginDataInsert();
  
    } catch(e) {
      console.error('ERROR IN button1Click: ' + e); 
    }}, 
  cur_encabezado3_butt_crear_subtopicoClick: function(inSender, inEvent) {
    try {
     this.cur_subt_datag_subtopicoDataGrid1RowDblClick(inSender, inEvent);
     this.editPanel5.beginDataInsert();
      
    } catch(e) {
      console.error('ERROR IN cur_encabezado3_butt_crear_subtopicoClick: ' + e); 
    }},
  cur_apr_encabezado_butt_crear_aprendizajeClick: function(inSender, inEvent) {
    try {
     this.cur_apr_datag_aprendizajeDataGrid1RowDblClick(inSender, inEvent);
     this.editPanel1.beginDataInsert();
     this.l_cur_formularios_aprendizajes_listaEjes.update();
 
    } catch(e) {
      console.error('ERROR IN cur_apr_encabezado_butt_crear_aprendizajeClick: ' + e); 
    }},
  cur_act_encabezado_butt_crear_actividadClick: function(inSender, inEvent) {
    try {
     this.cur_act_datag_actividadDataGrid1RowDblClick(inSender, inEvent);
     this.l_cur_formularios_actividad_listaTipoActividades.update();
     this.editPanel6.beginDataInsert();
      
    } catch(e) {
      console.error('ERROR IN cur_act_encabezado_butt_crear_actividadClick: ' + e); 
    }}, 
  cur_rec_encabezado_butt_crear_recursoClick: function(inSender, inEvent) {
    try {
     this.cur_rec_datag_recursosDataGrid1RowDblClick(inSender, inEvent);
     this.editPanel13.beginDataInsert();
     this.l_cur_formularios_recursos_tipoRecurso.update();
    
    } catch(e) {
      console.error('ERROR IN cur_rec_encabezado_butt_crear_recursoClick: ' + e); 
    }},   
  unidadLiveForm1BeginInsert: function(inSender) {
    try {
     this.asignaturaLookup1.setValue("dataValue",this.cur_asig_datag_asignaturasDataGrid1.selectedItem.getData().id.asignaturaIdAsignatura);
     this.numeroUnidadEditor3.hide();
     this.numeroUnidadEditor1.show();
      
    } catch(e) {
      console.error('ERROR IN unidadLiveForm1BeginInsert: ' + e); 
    }},
  subtopicoLiveForm1BeginInsert: function(inSender) {
    try {
     this.unidadLookup1.setValue("dataValue",this.cur_unid_datag_unidadesDataGrid1.selectedItem.getData().idUnidad);
     this.numeroSubtopicoEditor3.hide();
     this.numeroSubtopicoEditor1.show();
    
    } catch(e) {
      console.error('ERROR IN subtopicoLiveForm1BeginInsert: ' + e); 
    }}, 
  aprendizajeLiveForm1BeginInsert: function(inSender) {
    try {
     var _subtopico = this.cur_subt_datag_subtopicoDataGrid1.selectedItem.getData().idSubtopico;
     this.a_nivel_esperado.update();
     this.cur_ls_inteligencias.update();
     //this.subtopicoLookup6.setValue("dataValue",_subtopico);
     this.subtopicoLookup6.setDataValue(_subtopico);
     this.pesoEditor2.setDataValue("1");    
     this.pesoEditor3.hide();
     this.pesoEditor2.show();
      
    } catch(e) {
      console.error('ERROR IN aprendizajeLiveForm1BeginInsert: ' + e); 
    }},
  
  otrasmetasLiveForm1BeginInsert: function(inSender) {
    try {
     this.subtopicoLookup1.setValue("dataValue",this.cur_subt_datag_subtopicoDataGrid1.selectedItem.getData().idSubtopico);
      
    } catch(e) {
      console.error('ERROR IN otrasmetasLiveForm1BeginInsert: ' + e); 
    } 
  },
 
  actividadLiveForm1BeginInsert: function(inSender) {
    try {
     this.subtopicoLookup3.setValue("dataValue",this.cur_subt_datag_subtopicoDataGrid1.selectedItem.getData().idSubtopico);
      
    } catch(e) {
      console.error('ERROR IN actividadLiveForm1BeginInsert: ' + e); 
    } 
  },
  
  recursoLiveForm2BeginInsert: function(inSender) {
    try {
     this.subtopicoLookup4.setValue("dataValue",this.cur_subt_datag_subtopicoDataGrid1.selectedItem.getData().idSubtopico);
      
    } catch(e) {
      console.error('ERROR IN recursoLiveForm2BeginInsert: ' + e); 
    } 
  },
  
  asignaturaDataGrid1CellClick: function(inSender, inEvent) {
    try {
     this.cur_encabezado2_butt_crea_unidad.enable();
      
    } catch(e) {
      console.error('ERROR IN asignaturaDataGrid1CellClick: ' + e); 
    } 
  },
  /*Tablas de Unidades*/
   cur_unid_datag_unidadesDataGrid1CellClick: function(inSender, inEvent) {
    try {
     this.cur_encabezado3_butt_crear_subtopico.enable();
     this.l_cur_apr_aprendizajes_aprendizajeLiveVariable1.clearData();
     this.l_cur_metas_metas_otrasmetasLiveVariable1.clearData();
     this.l_cur_act_actividades_actividadLiveVariable1.clearData();
     this.l_cur_rec_recursos_recursoLiveVariable1.clearData();
     
     //botones a desativar
     this.cur_apr_encabezado_butt_crear_aprendizaje.disable();
     this.cur_metas_encabezado_butt_crear_meta.disable();
     this.cur_act_encabezado_butt_crear_actividad.disable();
     this.cur_rec_encabezado_butt_crear_recurso.disable();
      
    } catch(e) {
      console.error('ERROR IN unidadDataGrid1CellClick: ' + e); 
    } 
  },
  
  /*Tablas Subtopicos*/
  cur_subt_datag_subtopicoDataGrid1CellClick: function(inSender, inEvent) {
    try {
     this.cur_apr_encabezado_butt_crear_aprendizaje.enable();
     this.cur_metas_encabezado_butt_crear_meta.enable();
     this.cur_act_encabezado_butt_crear_actividad.enable();
     this.cur_rec_encabezado_butt_crear_recurso.enable();
      
    } catch(e) {
      console.error('ERROR IN subtopicoDataGrid1CellClick: ' + e); 
    } 
  },
  
  recursosClick: function(inSender, inEvent) {
    window.open("http://aprendoz.rochester.edu.co/ckfinder/ckfinder.html","popup");
  },
  
  calif_encabezado_opciones_butt_limpiarClick: function(inSender, inEvent) {
    try {
     this.calif_encabezado_opciones_sel_sy.clear();
     this.calif_encabezado_opciones_sel_grado.clear();
     this.calif_encabezado_opciones_sel_curso.clear();
     this.l_calif_contenedor_tablas_asignaturas_docentes.clearData();
     this.l_calif_contenedor_tablas_aprendizajes.clearData();
     this.l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso.clearData();
     this.l_calif_contenedor_tablas_calificacion_final.clearData();
     this.l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2.clearData();

    } catch(e) {
      console.error('ERROR IN calif_encabezado_opciones_butt_limpiarClick: ' + e); 
    } 
  },
  
  dataGrid1Selected: function(inSender, inIndex) {
    try {
      this.aux2.setValue("dataValue",this.dataGrid1.selectedItem.getData().persona.idPersona);
      this.newButton8.enable();
      
    } catch(e) {
      console.error('ERROR IN dataGrid1Selected: ' + e); 
    } 
  },
  
  historialcalificacionesLiveForm1BeginInsert: function(inSender) {
    try {
      this.fechaIngresoEditor2.setDataValue(new Date());
      this.calificacionNumEditor2.setValue("dataValue","0");
      this.inscAlumAprendizajeLookup1.setValue("dataValue",this.inscalumaprendizajeDataGrid1.selectedItem.getData().idInscAlumAprendizaje);
      
    } catch(e) {
      console.error('ERROR IN historialcalificacionesLiveForm1BeginInsert: ' + e); 
    } 
  },
  
  inscalumaprendizajeDataGrid1Selected: function(inSender, inIndex) {
    try {

      
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeDataGrid1Selected: ' + e); 
    } 
  },
  
  layer11Show: function(inSender) {
    try {
      this.historialcalificacionesLiveVariable1.update();
      
    } catch(e) {
      console.error('ERROR IN layer11Show: ' + e); 
    } 
  },
  
  inscalumaprendizajeDataGrid1AfterRender: function(inSender) {
    try {
      
      this.inscalumaprendizajeDataGrid1.select(0);
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeDataGrid1AfterRender: ' + e); 
    } 
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
  
  tipoActividadLookup1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      if(this.tipoActividadLookup1.displayValue=="Retroalimentación"){
          this.tipoDesempenoLookup1.disable();
           this.tipoValoracionLookup1.enable();
            }
            else{
              this.tipoValoracionLookup1.disable();
              this.tipoDesempenoLookup1.enable();
            }
      
    } catch(e) {
      console.error('ERROR IN tipoActividadLookup1Change: ' + e); 
    } 
  },
  
  listaGRADOSChange: function(inSender, inDisplayValue, inDataValue) {
    try {
        this.asignaturaLV1.update();
        this.cursoslv1.update();      
      
    } catch(e) {
      console.error('ERROR IN listaGRADOSChange: ' + e); 
    } 
  },
  
  asignaturas1Selected: function(inSender, inIndex) {
    try {
        this.asig1.setValue("dataValue",this.asignaturas1.selectedItem.getData().asignatura);      
      
    } catch(e) {
      console.error('ERROR IN asignaturas1Selected: ' + e); 
    } 
  },
  
  curso1Selected: function(inSender, inIndex) {
    try {
        this.cursost1.setValue("dataValue",this.curso1.selectedItem.getData().curso);        
      
    } catch(e) {
      console.error('ERROR IN curso1Selected: ' + e); 
    } 
  },
  
  inscalumaprendizajeLiveForm2BeginInsert: function(inSender) {
    try {
    /*acciones sobre la tabla de Calificacion por estudiante*/  
      this.calif_alumnos_datagrids_datag_alumnos_asignaturas.setDisabled(true);
      this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.setDisabled(true);
      this.calif_alumnos_datagrids_datag_alumnos_cursos.setDisabled(true);
    
    /*fin de las acciones*/
      this.fechaIngresoEditor3.setDataValue(new Date());
      this.calificacionNumEditor3.setValue("dataValue","0");
      this.aprendizajeLookup3.setValue("dataValue",this.calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.getData().id.idAprendizaje);
      this.personaLookup3.setValue("dataValue",this.calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.getData().id.idPersona);
       
    } catch(e) {
      console.error('ERROR IN inscalumaprendizajeLiveForm2BeginInsert: ' + e); 
    } 
  },
  
  calif_alumnos_panel1_butt_limpiarClick: function(inSender, inEvent) {
    try {
     this.calif_alumnos_panel1_sel_sy.clear();
     this.calif_alumnos_panel1_sel_grado.clear();
      this.calif_alumnos_panel1_sel_curso.clear();
      this.l_calif_alumnos_alumnosCursos.clearData();
      this.l_calif_alumnos_alumnos_asignaturas.clearData();
      this.l_calif_alumnos_aprendizajes.clearData();
      this.l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1.clearData();
      this.l_calif_alumnos_calificaciones_finales.clearData();
      
    } catch(e) {
      console.error('ERROR IN calif_alumnos_panel1_butt_limpiarClick: ' + e); 
    } 
  },
  
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

  button15Click: function(inSender, inEvent) {
    try {
      url= "services/reporteGrado.download?method=getReport&idGrado="+this.grado1.getDataValue()+"&idGrado2="+this.grado2.getDataValue();
           window.open(url,"_BLANK");
       
    } catch(e) {
      console.error('ERROR IN button15Click: ' + e); 
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
  
  aprendizajeLiveForm1BeginUpdate: function(inSender) {
    try {
     var _peso= this.cur_apr_datag_aprendizajeDataGrid1.selectedItem.getData().peso;
     this.a_nivel_esperado.update();
     this.l_cur_formularios_aprendizajes_listaEjes.update();
     this.pesoEditor3.show();
     this.pesoEditor3.setDataValue(""+_peso+"");
     this.cur_ls_inteligencias.update();

    } catch(e) {
      console.error('ERROR IN aprendizajeLiveForm1BeginUpdate: ' + e); 
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
  cur_formularios_butt_cargar_recursoClick: function(inSender, inEvent) {
    try {
      url= "http://aprendoz.rochester.edu.co/ckfinder/ckfinder.html";
      window.open(url,"_BLANK"); 
      
    } catch(e) {
      console.error('ERROR IN button37Click: ' + e); 
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
  
  button10Click: function(inSender, inEvent) {
    try {
      this.asignaturaLV1.update();
      this.INSALUCUR.update();
    } catch(e) {
      console.error('ERROR IN button10Click: ' + e); 
    } 
  },
  
  selectEditor17Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     this.cursoslv1.update();
 
    } catch(e) {
      console.error('ERROR IN selectEditor17Change: ' + e); 
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
      var user= main.a_getUserName.getData().dataValue;
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
  button48Click: function(inSender, inEvent) {
    try {
        url= "services/dirNivel2.download?method=getReport&ida="+this.tablaAsignaturas.selectedItem.getData().idAsignatura+"&idc="+this.cursos.getDataValue();;  
       window.open(url,"_BLANK");   
      
    } catch(e) {
      console.error('ERROR IN button48Click: ' + e); 
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
  
  cur_encabezado_butt_reporte1Click: function(inSender, inEvent) {
    try {
       url= "services/catalogoAsignaturas.download?method=getReport&ida="+this.cur_asig_datag_asignaturasDataGrid1.selectedItem.getData().id.asignaturaIdAsignatura;  
       window.open(url,"_BLANK");   
    
    } catch(e) {
      console.error('ERROR IN cur_encabezado_butt_reporte1Click: ' + e); 
    } 
  },
  
  generar2Click: function(inSender, inEvent) {
    try {
      url= "services/s311.download?method=getReport";
        window.open(url,"_BLANK");    
      
    } catch(e) {
      console.error('ERROR IN generar2Click: ' + e); 
    } 
  },
  generar3Click: function(inSender, inEvent) {
    try {
       url= "services/s312.download?method=getReport";
        window.open(url,"_BLANK");    
      
    } catch(e) {
      console.error('ERROR IN generar3Click: ' + e); 
    } 
  },
  generar4Click: function(inSender, inEvent) {
    try {
       url= "services/s313.download?method=getReport";
        window.open(url,"_BLANK");   
      
    } catch(e) {
      console.error('ERROR IN generar4Click: ' + e); 
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
  
  generar5Click: function(inSender, inEvent) {
    try {
       url= "services/s316.download?method=getReport&idp="+this.rep_box3.getDataValue();
        window.open(url,"_BLANK");     
      
    } catch(e) {
      console.error('ERROR IN button55Click: ' + e); 
    }},
  
  generar6Click: function(inSender, inEvent) {
    try {
      url= "services/s318.download?method=getReport&c1="+this.rep_select_1.getDataValue()+"&c2="+this.rep_select_2.getDataValue()+"&idp="+this.rep_select_3.getDataValue();
          window.open(url,"_BLANK");  
      
    } catch(e) {
      console.error('ERROR IN generar6Click: ' + e); 
    }},
  
  generar7Click: function(inSender, inEvent) {
    try {
        url= "services/s319.download?method=getReport&c1="+this.rep_select_1.getDataValue()+"&c2="+this.rep_select_2.getDataValue()+"&idp="+this.rep_select_3.getDataValue();
          window.open(url,"_BLANK");  
      
    } catch(e) {
      console.error('ERROR IN generar7Click: ' + e); 
    }},
  
  generar8Click: function(inSender, inEvent) {
    try {
      url= "services/s317.download?method=getReport&idp="+this.rep_select_cantidad.getDataValue()+"&num_asig="+this.rep_select_periodo.getDataValue();
          window.open(url,"_BLANK");
      
    } catch(e) {
      console.error('ERROR IN generar8Click: ' + e); 
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
  bAusentesClick: function(inSender, inEvent) {
    try {
       if(this.ausencias_select2.dataValue=="1"){
          url= "services/s3119.download?method=getReport&idCurso="+this.selectEditor31.getDataValue()+"&fecha="+this.ausencias_select1.getDataValue()+"&Curso="+this.selectEditor31.getDisplayValue();
          window.open(url,"_BLANK");        
        }
          if(this.ausencias_select2.dataValue=="2"){
             url= "services/s3119b.download?method=getReport&idGrado="+this.selectEditor32.getDataValue()+"&fecha="+this.ausencias_select1.getDataValue()+"&Grado="+this.selectEditor32.getDisplayValue();
             window.open(url,"_BLANK");     
            }
            if(this.ausencias_select2.dataValue=="3"){
             
              }
                if(this.ausencias_select2.dataValue=="4"){
                     
                  }
      
    } catch(e) {
      console.error('ERROR IN button61Click: ' + e); 
    }},
   
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
  button61Click: function(inSender, inEvent) {
    try {
      url= "services/s317.download?method=getReport&num_asig="+this.textEditor1.getDataValue()+"&idp="+this.selectEditor2.getDataValue();
      window.open(url,"_BLANK");
      
    } catch(e) {
      console.error('ERROR IN button61Click: ' + e); 
    } 
  },
 
 
/***********
 * Empieza implementaciones para loading popup
 ***********/
 
  l_cur_formularios_aprendizajes_listaEjesBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaEjesBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaEjesSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
       this.l_cur_formularios_aprendizajes_listaDimension_comprension.update();
       var subarea2= this.cur_asig_datag_asignaturasDataGrid1.selectedItem.getData().id.idSubarea2;
       var subarea3= this.cur_asig_datag_asignaturasDataGrid1.selectedItem.getData().id.idSubarea3;
       if(subarea2 != 0){
         this.l_cur_formularios_aprendizajes_listaEjes2.update();
       }
       if(subarea3 != 0){
         this.l_cur_formularios_aprendizajes_listaEjes3.update();
       }
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaEjesSuccess: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaDimension_comprensionBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaDimension_comprensionBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaDimension_comprensionSuccess: function(inSender, inDeprecated) {
    try {
       app.pageDialog.dismiss("Loading_message");
       this.l_cur_formularios_aprendizajes_listaDimension_curricular.update();
        
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaDimension_comprensionSuccess: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaDimension_curricularBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
        
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaDimension_curricularBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaDimension_curricularSuccess: function(inSender, inDeprecated) {
    try {
       app.pageDialog.dismiss("Loading_message");
       this.l_cur_formularios_aprendizajes_listaInteligencias.update();  
           
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaDimension_curricularSuccess: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaInteligenciasBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaInteligenciasBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_aprendizajes_listaInteligenciasSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_aprendizajes_listaInteligenciasSuccess: ' + e); 
    } 
  },
  l_cur_formularios_actividad_listaTipoActividadesBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
         
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_actividad_listaTipoActividadesBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_actividad_listaTipoActividadesSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      this.l_cur_formularios_actividad_listaTipoValoracion.update();
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_actividad_listaTipoActividadesSuccess: ' + e); 
    } 
  },
  l_cur_formularios_actividad_listaTipoValoracionBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_actividad_listaTipoValoracionBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_actividad_listaTipoValoracionSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      this.l_cur_formularios_actividad_listaTipoDesempeno.update();
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_actividad_listaTipoValoracionSuccess: ' + e); 
    } 
  },
  
  l_cur_formularios_recursos_tipoRecursoBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_recursos_tipoRecursoBeforeUpdate: ' + e); 
    } 
  },
  l_cur_formularios_recursos_tipoRecursoSuccess: function(inSender, inDeprecated) {
    try {
       app.pageDialog.dismiss("Loading_message");
      
    } catch(e) {
      console.error('ERROR IN l_cur_formularios_recursos_tipoRecursoSuccess: ' + e); 
    } 
  },
/***********
 *FIN implementaciones para loading popup
 ***********/
  
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

  calif_encabezado_opciones_butt_limpiar1Click: function(inSender, inEvent) {
    try {
     this.cur_encabezado_tex_ldapUser.clear();
      
    } catch(e) {
      console.error('ERROR IN calif_encabezado_opciones_butt_limpiar1Click: ' + e); 
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
  
 /*
  *
  *Carga de listas DIRECTORES DE NIVEL
  *
  */
  
  l_dirNivel_formulario_aprendizaje_lista_EjesBeforeUpdate: function(inSender, ioInput) {
    try {
       app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_EjesBeforeUpdate: ' + e); 
    } 
  },
  l_dirNivel_formulario_aprendizaje_lista_EjesSuccess: function(inSender, inDeprecated) {
    try {
       app.pageDialog.dismiss("Loading_message");
       this.l_dirNivel_formulario_aprendizaje_lista_domension_comprension.update();
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_EjesSuccess: ' + e); 
    } 
  },
  l_dirNivel_formulario_aprendizaje_lista_domension_comprensionBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_domension_comprensionBeforeUpdate: ' + e); 
    } 
  },
  l_dirNivel_formulario_aprendizaje_lista_domension_comprensionSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
       this.l_dirNivel_formulario_aprendizaje_lista_domension_curricular.update();
       
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_domension_comprensionSuccess: ' + e); 
    } 
  },
  l_dirNivel_formulario_aprendizaje_lista_domension_curricularBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_domension_curricularBeforeUpdate: ' + e); 
    } 
  },
  l_dirNivel_formulario_aprendizaje_lista_domension_curricularSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      this.l_dirNivel_formulario_aprendizaje_lista_inteligencia.update();
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_domension_curricularSuccess: ' + e); 
    } 
  },
  
  
  l_dirNivel_formulario_aprendizaje_lista_inteligenciaBeforeUpdate: function(inSender, ioInput) {
    try {
       app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_inteligenciaBeforeUpdate: ' + e); 
    } 
  },
  l_dirNivel_formulario_aprendizaje_lista_inteligenciaSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      
    } catch(e) {
      console.error('ERROR IN l_dirNivel_formulario_aprendizaje_lista_inteligenciaSuccess: ' + e); 
    } 
  },
 /*
  *
  *fin procesos de carga
  *
  */
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
      console.error('ERROR IN aprobadoEditor1Change: ' + e); 
    } 
  },
  promocion_butt_limpiarClick: function(inSender, inEvent) {
    try {
      this.promocion_sel_ao_escolar.setDataValue(2);
      this.promocion_sel_grado.clear();
      this.promocion_sel_curso.clear();
      this.l_promocion_insc_alum_curso.clearData();
      this.l_promocion_promocionLiveVariable1.clearData();
      
    } catch(e) {
      console.error('ERROR IN promocion_butt_limpiarClick: ' + e); 
    } 
  },
  a_lista_sySuccess: function(inSender, inDeprecated) {
    try {
      this.promocion_sel_ao_escolar.setDataValue(2);
      
    } catch(e) {
      console.error('ERROR IN a_lista_sySuccess: ' + e); 
    } 
  },
  getUserNameSuccess: function(inSender, inDeprecated) {
    try {  
      //anotaciones username
      var _usuario= main.getUserName.getData().dataValue;
      this.a_obtenerNombre.update();
      this.a_informacionUsuario.update();
      //this.a_getTipoPersona.update();
      this.a_informacionUsuario2.update();    
      this.a_getLastAccess.update();
      this.dash_dash_lv1.input.setValue("usuario", _usuario);
      this.dash_asig_doc.input.setValue("usuario", _usuario);
      this.dash_dash_lv1.update();
      this.dash_asig_doc.update();
      
    } catch(e) {
      console.error('ERROR IN getUserNameSuccess: ' + e); 
    } 
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
    try {
      this.inicio_panel_opciones.hide();
      this.inicio_filtros_claves.hide();  
    } catch(e) {
      console.error('ERROR IN inicio_cerrar_preferenciasClick: ' + e); 
    }},
  a_informacionUsuarioSuccess: function(inSender, inDeprecated) {
    try {
       var tipoPersona= this.a_informacionUsuario.getData().tipoPersona;       
       var nombres= this.a_informacionUsuario.getData().nombre1+" "+this.a_informacionUsuario.getData().nombre2;
       var apellidos= this.a_informacionUsuario.getData().apellido1+" "+this.a_informacionUsuario.getData().apellido2;
       var usuario= this.a_informacionUsuario.getData().usuario;
       var clave= this.a_informacionUsuario.getData().clave;
       var idp = this.a_informacionUsuario.getData().idpersona;
       this.inicio_box_tipo_persona.setDataValue(tipoPersona);
       this.inicio_box_nombre.setDataValue(nombres);
       this.inicio_box_apellido.setDataValue(apellidos);
       this.inicio_box_usuario.setDataValue(usuario);
       this.inicio_box_clave.setDataValue(clave);
       this.inicio_box_reclave.setDataValue(clave);
       this.inicio_box_id_persona.setDataValue(idp);
       
       if( main.a_isAuthenticated.getData().dataValue == true){
         this.a_logInsertRecords.setValue("persona.idPersona", this.inicio_box_id_persona.getDataValue());
         this.a_logInsertRecords.setValue("fechaIngreso", this.inicio_box_fecha.getDataValue());
         this.a_logInsertRecords.setValue("horaIngreso", this.inicio_box_hora.getDataValue());
         this.logForm.setDataSet(this.a_logInsertRecords); 
         this.logForm.insertData();
         
       }  
    } catch(e) {
      console.error('ERROR IN a_informacionUsuarioSuccess: ' + e); 
    } 
  },
  inicio_forgot_passwordClick: function(inSender, inEvent) {
    try {
      this.inicio_panel_boton_actualizar.show();
      this.inicio_box_clave.setReadonly(false);
      this.inicio_box_reclave.setReadonly(false);
      this.inicio_boton_actualiza.disable();
       
    } catch(e) {
      console.error('ERROR IN label1Click: ' + e); 
    } 
  },
  
  inicio_box_claveChange: function(inSender, inDisplayValue, inDataValue) {
    try {
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
      
    } catch(e) {
      console.error('ERROR IN inicio_box_claveChange: ' + e); 
    } 
  },
  
  inicio_box_reclaveChange: function(inSender, inDisplayValue, inDataValue) {
    try {
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

    } catch(e) {
      console.error('ERROR IN inicio_box_reclaveChange: ' + e); 
    } 
  },
  
  a_actualizaClaveSuccess: function(inSender, inDeprecated) {
    try {
      alert("Su contraseña ha sido actualizada exitosamente.");
      this.inicio_box_clave.setReadonly(true);
      this.inicio_box_reclave.setReadonly(true);
      
    } catch(e) {
      console.error('ERROR IN a_actualizaClaveSuccess: ' + e); 
    } 
  },
  a_actualizaClaveError: function(inSender, inError) {
    try {
      alert("No ha sido posible realizar la operación.");
      
    } catch(e) {
      console.error('ERROR IN a_actualizaClaveError: ' + e); 
    } 
  },
  cur_metas_encabezado_butt_crear_metaClick: function(inSender, inEvent) {
    try {
      this.cur_metas_datag_otrasmetasDataGrid1RowDblClick(inSender, inEvent);
      this.editPanel2.beginDataInsert();
      
    } catch(e) {
      console.error('ERROR IN cur_metas_encabezado_butt_crear_metaClick: ' + e); 
    } 
  },
  inscalumasigLiveForm1CancelEdit: function(inSender) {
    try {
      this.inscripcion_asignatura.setDisabled(false);
      this.inscripcion_estudiante.setDisabled(false);
      
    } catch(e) {
      console.error('ERROR IN inscalumasigLiveForm1CancelEdit: ' + e); 
    } 
  },
  inscripcion_asignaturaSelectionChanged: function(inSender) {
    try {
      this.editPanel7.cancelEdit();
      
    } catch(e) {
      console.error('ERROR IN inscripcion_asignaturaSelectionChanged: ' + e); 
    } 
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
  
  unidadLiveForm1InsertData: function(inSender) {
    try {
      this.numeroUnidadEditor1.hide();
      this.numeroUnidadEditor3.show();
      
    } catch(e) {
      console.error('ERROR IN unidadLiveForm1InsertData: ' + e); 
    } 
  },
  
  unidadLiveForm1UpdateData: function(inSender) {
    try {
      this.numeroUnidadEditor1.hide();
      this.numeroUnidadEditor3.show();
      
    } catch(e) {
      console.error('ERROR IN unidadLiveForm1UpdateData: ' + e); 
    } 
  },
  unidadLiveForm1CancelEdit: function(inSender) {
    try {
      this.numeroUnidadEditor1.hide();
      this.numeroUnidadEditor3.show();
      
    } catch(e) {
      console.error('ERROR IN unidadLiveForm1CancelEdit: ' + e); 
    } 
  },
  
  unidadLiveForm1BeginUpdate: function(inSender) {
    try {
      this.numeroUnidadEditor3.hide();
      this.numeroUnidadEditor1.show();
      
    } catch(e) {
      console.error('ERROR IN unidadLiveForm1BeginUpdate: ' + e); 
    } 
  },
  numeroUnidadEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var numero = this.numeroUnidadEditor1.getDataValue();     
      this.numeroUnidadEditor3.setDataValue(numero);
      
    } catch(e) {
      console.error('ERROR IN numeroUnidadEditor1Change: ' + e); 
    } 
  },
  numeroSubtopicoEditor1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var numero= this.numeroSubtopicoEditor1.getDataValue();
      this.numeroSubtopicoEditor3.setDataValue(numero);
      
    } catch(e) {
      console.error('ERROR IN numeroSubtopicoEditor1Change: ' + e); 
    } 
  },
  subtopicoLiveForm1InsertData: function(inSender) {
    try {
      this.numeroSubtopicoEditor1.hide();
      this.numeroSubtopicoEditor3.show();
      
    } catch(e) {
      console.error('ERROR IN subtopicoLiveForm1InsertData: ' + e); 
    } 
  },
  subtopicoLiveForm1BeginUpdate: function(inSender) {
    try {
      this.numeroSubtopicoEditor3.hide();
      this.numeroSubtopicoEditor1.show();
      
    } catch(e) {
      console.error('ERROR IN subtopicoLiveForm1BeginUpdate: ' + e); 
    } 
  },
  subtopicoLiveForm1UpdateData: function(inSender) {
    try {
      this.numeroSubtopicoEditor1.hide();
      this.numeroSubtopicoEditor3.show();
      
    } catch(e) {
      console.error('ERROR IN subtopicoLiveForm1UpdateData: ' + e); 
    } 
  },
  subtopicoLiveForm1CancelEdit: function(inSender) {
    try {
      this.numeroSubtopicoEditor1.hide();
      this.numeroSubtopicoEditor3.show();
      
    } catch(e) {
      console.error('ERROR IN subtopicoLiveForm1CancelEdit: ' + e); 
    } 
  },
  pesoEditor2Change: function(inSender, inDisplayValue, inDataValue) {
    try {
      var peso = this.pesoEditor2.getDataValue();
      this.pesoEditor3.setDataValue(peso);
      
    } catch(e) {
      console.error('ERROR IN pesoEditor2Change: ' + e); 
    } 
  },
  aprendizajeLiveForm1InsertData: function(inSender) {
    try {
      this.pesoEditor2.hide();
      this.pesoEditor3.show();
      
    } catch(e) {
      console.error('ERROR IN aprendizajeLiveForm1InsertData: ' + e); 
    } 
  },
  aprendizajeLiveForm1UpdateData: function(inSender) {
    try {
      this.pesoEditor3.hide();
      this.pesoEditor2.show();
      
    } catch(e) {
      console.error('ERROR IN aprendizajeLiveForm1UpdateData: ' + e); 
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
    try {
      var json= main.a_getLastAccess.getItem(0);
      var fechaUltimoAcceso= json.data.lastdate;
      this.lastAccess_Label.setCaption("Último acceso: <br/>"+fechaUltimoAcceso);
      
    } catch(e) {
      console.error('ERROR IN a_getLastAccessSuccess: ' + e); 
    } 
  },
  
  /*
   *Inicio
   *Graficos
   */
   dash_asig_selectChange: function(inSender, inDisplayValue, inDataValue) {
    try {
     var _asig = this.dash_asig_select.getDataValue(); 
     this.dash_chart2_lv2.input.setValue("idasignatura", _asig);
     this.dash_chart3_lv3.input.setValue("idasignatura", _asig);
     this.dash_chart2_lv2.update();
     this.dash_chart3_lv3.update();
      
    } catch(e) {
      console.error('ERROR IN dash_asig_selectChange: ' + e); 
    }},
  dash_dash_lv1Success: function(inSender, inDeprecated) {
    try {
     this.renderChart_dash1();
      
    } catch(e) {
      console.error('ERROR IN dash_dash_lv1Success: ' + e); 
    }},
  dash_chart2_lv2Success: function(inSender, inDeprecated) {
    try {
     this.renderChart_dash2();  
     this.renderChart_dash3();  
      
    } catch(e) {
      console.error('ERROR IN dash_chart2_lv2Success: ' + e); 
    }},
  dash_chart3_lv3Success: function(inSender, inDeprecated) {
    try {
     this.renderChart_dash4(); 
      
    } catch(e) {
      console.error('ERROR IN dash_chart3_lv3Success: ' + e); 
    }},
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
  renderChart_dash2: function() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'NO CALIFADOS');
        var rows = this.dash_chart2_lv2.getData(function(inItem) {
            return [inItem.getValue("name"), inItem.getValue("dataValue")];
        });
        var _json= main.dash_chart2_lv2.getData();       
        var _json= main.dash_chart2_lv2.json;
        var _count= main.dash_chart2_lv2.getCount();
        for (var i = 0; i < _count; i++) {
          var _item= main.dash_chart2_lv2.getItem(i).data;
          var _value= _item.sinCalificar;
          var _total= _item.total;
          var _totalPorcentaje= _item.totalporcentaje;
          var _califPorcentaje= _item.califPorcentaje;
          var _califPorcentaje2= _califPorcentaje.toFixed(2);
          this.dash_chart1_label.setCaption("Medidor Aprendizajes"+"<br>"+
                                            "% No calificados: "+_califPorcentaje2+"%"+"<br>"+"No calificados: "+_value+" de "+_total);
          //var numb= _califPorcentaje.toFixed(2);
          data.addRows
           ([
            ['No Calif', _califPorcentaje]
            ]);
        } 
        var options = {width: 450, height: 150,
                       greenFrom: 0, greenTo: 10,
                       yellowFrom:10, yellowTo: 20,
                       redFrom: 20, redTo: _totalPorcentaje,
                       minorTicks: 5,
                       max: _totalPorcentaje
                      };              
         var chart= this._chart = new google.visualization.Gauge(this.dash_chart2.domNode);
         chart.draw(data, options);
    },  
  renderChart_dash3: function() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'NO CALIFADOS');
        var rows = this.dash_chart2_lv2.getData(function(inItem) {
            return [inItem.getValue("name"), inItem.getValue("dataValue")];
        });
        var _json= main.dash_chart2_lv2.getData();       
        var _json= main.dash_chart2_lv2.json;
        var _count= main.dash_chart2_lv2.getCount();
        for (var i = 0; i < _count; i++) {
          var _item= main.dash_chart2_lv2.getItem(i).data;
          var _value= _item.aprProgreso;
          this.dash_chart2_label.setCaption("Aprendizajes en Progreso"+"<br>"+_value);
          data.addRows
           ([
            ['Progreso', _value]
            ]);
        } 
        var options = {width: 450, height: 150,
                       greenFrom: 0, greenTo: 10,
                       yellowFrom:10, yellowTo: 20,
                       redFrom: 20, redTo: 30,
                       minorTicks: 5,
                       max: 30
                      };              
         var chart= this._chart = new google.visualization.Gauge(this.dash_chart3.domNode);
         chart.draw(data, options);
    },  
  renderChart_dash4: function() {
        var rows = this.dash_chart2_lv2.getData(function(inItem) {
            return [inItem.getValue("name"), inItem.getValue("dataValue")];
        });
        var _json= main.dash_chart3_lv3.getData();       
        var _json= main.dash_chart3_lv3.json;
        var _count= main.dash_chart3_lv3.getCount();
          var _item= main.dash_chart3_lv3.getItem(0).data;
          var _avanzado= _item.aprAvanzado;
          var _magistral= _item.aprMagistral;
          var _competente= _item.aprCompetente;
          var _progreso= _item.aprProgreso;
          var _total= _progreso+_competente+_avanzado+_magistral;
          var _rojo= _total/3;
          var _amarillo= _total/2;

          var  data= google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Avanzado', _avanzado],
            ['Magistral', _magistral]
            ]);
      //  } 
        var options = {width: 450, height: 150,
                       greenFrom: _amarillo, greenTo: _total,
                       yellowFrom: _rojo, yellowTo: _amarillo,
                       redFrom: 0, redTo: _rojo,
                       minorTicks: 5,
                       max: _total
                      };              
         var chart= this._chart = new google.visualization.Gauge(this.dash_chart4.domNode);
         chart.draw(data, options);
         this.dash_chart3_label.setCaption("Aprendizajes en Avanzado"+"<br>"+_avanzado);
         this.dash_chart4_label.setCaption("Aprendizajes en Magistral"+"<br>"+_magistral);
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
  cur_act_datag_actividadDataGrid1Selected: function(inSender, inIndex) {
     this.l_cur_formularios_actividad_listaTipoActividades.update(); 
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
  pestana_curriculoShow: function(inSender) {
     var json= main.global_cursy.getItem(0);
     var nick= main.global_username.getData().dataValue;
     var idsy= json.data.idsy;
     this.global_docentes_asignaturas.input.setValue("nickname",nick);
     this.global_docentes_asignaturas.input.setValue("idsyr",idsy);
     this.global_docentes_asignaturas.update();
  },
  
  pestana_curriculoShow1: function(inSender) {
     this.curriculo_grid_docentes_asignaturas.setSortIndex(0);
  },
  
  activitiesDataGridSelectionChanged: function(inSender) {
     
  },
  
    activitiesDataGridRowDblClick: function(inSender, inEvent) {
      try {
         
          
      } catch(e) {
        console.error('ERROR IN activitiesDataGridRowDblClick: ' + e); 
      } 
    },
  
    activitiesDataGridCellClick: function(inSender, inEvent) {
        try {
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
          
         } catch(e) {
           console.error('ERROR IN activitiesDataGridCellClick: ' + e); 
         } 
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
	_end: 0
});