Date.prototype.getWeek = function() {

    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}, /*****************************/
dojo.declare("Main", wm.Page, {
    start: function() {
        /*cuando se inicia la aplicación se captura la fecha actual
        * y se obtiene el año escolar actual
        */
        this.curdate = new Date().getTime();
        main.global_cursy.input.setValue("f1", this.curdate);
        main.global_cursy.update();
        
        //metodo de dojo para detectar una sesion expirada y realizar acciones como logout
        dojo.subscribe("session-expiration", this, "mySessionExpiredMethod");

        wm.DataGrid.extend({
            setDisabled: function(inDisabled) {
                dojo[inDisabled ? "addClass" : "removeClass"](this.domNode, "wmgrid-disabled");
            }
        });
    },

    "preferredDevice": "desktop",
    
    // funcion reutilizable en cualquier parte
    // del codigo para obtener el id del año escolar
    myCurSy: function() {
        var sy = main.global_cursy.getItem(0).data.idsy;
        return sy;
    },
    
    // cuando espira la sesion dojo usa session-expiration para redireccion al usuario
    // a la ventana de login
    mySessionExpiredMethod: function() {
        window.location.reload();
    },
    
    
    inscalumaprendizajeDataGrid1RowDblClick: function(inSender, inEvent) {
        try {
            this.editPanel9.beginDataUpdate();

        } catch (e) {
            console.error('ERROR IN inscalumaprendizajeDataGrid1RowDblClick: ' + e);
        }
    },
    inscalumaprendizajeLiveForm1BeginUpdate: function(inSender) {
        try {
            this.personas.setDisabled(true);
            this.tablaAprendizajes.setDisabled(true);
            this.fechaIngresoEditor2.disable();
            this.fechaIngresoEditor2.setDataValue(new Date());

        } catch (e) {
            console.error('ERROR IN inscalumaprendizajeLiveForm1BeginUpdate: ' + e);
        }
    },



    asistenciaShow: function(inSender) {
        try {
            app.listaSY.update();
            app.listaGrado.update();

        } catch (e) {
            console.error('ERROR IN layer43Show: ' + e);
        }
    },
    
    // cada vez que el docente cambie del tipo de calificacion,
    // el sistema asignara un puntaje equivalente
    // se usa estrcutura de control 'if'
    calificacionEditor2Change: function(inSender, inDisplayValue, inDataValue) {
        try {
            if (this.calificacionEditor2.dataValue == "En Progreso") {
                this.calificacionNumEditor2.setValue("dataValue", "0.3")
            }
            if (this.calificacionEditor2.dataValue == "Competente") {
                this.calificacionNumEditor2.setValue("dataValue", "1")
            }
            if (this.calificacionEditor2.dataValue == "Avanzado") {
                this.calificacionNumEditor2.setValue("dataValue", "1.3")
            }
            if (this.calificacionEditor2.dataValue == "Magistral") {
                this.calificacionNumEditor2.setValue("dataValue", "1.6")
            }

        } catch (e) {
            console.error('ERROR IN calificacionEditor2Change: ' + e);
        }
    },
    
    calif_encabezado_opciones_butt_reporteClick: function(inSender, inEvent) {
        try {
            main.a_informacionUsuario.update();
            var getter = main.a_informacionUsuario2.getItem(0);
            var id = getter.data.idpersona;
            var clave = getter.data.clave;
            var idc = this.calif_encabezado_opciones_sel_curso.getDataValue();
            var ida = this.calif_asig_datag_asignaturasDataGrid1.selectedItem.getData().id.asignaturaIdAsignatura;
            var formatType = "PDF";
            $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
                failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
                httpMethod: "POST",
                data: {
                    idp: id,
                    pass: clave,
                    uri: "/aprendozreports/DOC002",
                    format: formatType,
                    params: {
                        curso: idc,
                        asignatura: ida
                    }
                }
            });
            inEvent.preventDefault();

        } catch (e) {
            console.error('ERROR IN botonReporte3Click: ' + e);
        }
    },

    calificacionEditor3Change: function(inSender, inDisplayValue, inDataValue) {
        if (this.calificacionEditor3.dataValue == "En Progreso") {
            this.calificacionNumEditor23.setValue("dataValue", "0.3");
        }
        if (this.calificacionEditor3.dataValue == "Competente") {
            this.calificacionNumEditor23.setValue("dataValue", "1");
        }
        if (this.calificacionEditor3.dataValue == "Avanzado") {
            this.calificacionNumEditor23.setValue("dataValue", "1.3");
        }
        if (this.calificacionEditor3.dataValue == "Magistral") {
            this.calificacionNumEditor23.setValue("dataValue", "1.6");
        }
    },

    //se obtiene el nombre de usuario del serviceVariable global_username
    global_usernameSuccess: function(inSender, inDeprecated) {
        var _usuario = main.global_username.data.dataValue;
        this.a_informacionUsuario.input.setValue("user", _usuario);
        this.global_cursy.update();
        this.a_informacionUsuario.update();
    },

    global_cursySuccess: function(inSender, inDeprecated) {
        //var _usuario      = main.global_username.getData().dataValue;
        var _usuario = main.global_username.getItem(0).data.dataValue;
        var syJson = main.global_cursy.getItem(0);
        var fechaInicio = syJson.data.fechaDesde;
        var fechaFinal = syJson.data.fechaHasta;
        this.dash_dash_lv1.input.setValue("usuario", _usuario);
        this.dash_dash_lv1.input.setValue("f1", fechaInicio);
        this.dash_dash_lv1.input.setValue("f2", fechaFinal);
        this.dash_dash_lv1.update();
    },
    //esta funciona captura los datos del usuario. ej. nombres, apellidos, idpersona, user  
    a_informacionUsuarioSuccess: function() {
        var json = main.a_informacionUsuario.getItem(0);
        var codigo = json.data.codigo;
        var usuario = json.data.usuario;
        var tipo = json.data.tipoPersona;
        var nombre1 = json.data.nombre1;
        var nombre2 = json.data.nombre2;
        var apellido1 = json.data.apellido1;
        var apellido2 = json.data.apellido2;
        var nodoc = json.data.numeroDocumento;
        var sexo = json.data.sexo;
        var fullname = nombre1 + " " + nombre2 + " " + apellido1 + " " + apellido2;

        this.profile_button.setCaption(usuario);
        this.menu_rol.setCaption(tipo);
        this.menu_profile_img.setSource("http://www.rochester.edu.co/fotosempleados/" + codigo + ".Jpeg");
        this.configuracion_profile_image.setSource("http://www.rochester.edu.co/fotosempleados/" + codigo + ".Jpeg");
        this.menu_bienvenida.setCaption("Bienvenid@, " + usuario);
        this.configuracion_detalles.setCaption(fullname + "<br>Sexo: " + sexo + "<br>No. documento: " + nodoc + "<br><br>" + tipo);

        var idp = main.a_informacionUsuario.getItem(0).data.idpersona;
        var today = new Date().getTime();
        var clave = main.a_informacionUsuario.getItem(0).data.clave;

        var json = main.global_cursy.getItem(0);
        //var idsy     = this.myCurSy();
        var idsy = main.global_cursy.getItem(0).data.idsy;
        console.log(idsy);

        this.inicio_box_usuario.setDataValue(usuario);
        this.inicio_box_clave.setDataValue(clave);
        this.inicio_box_reclave.setDataValue(clave);

        this.muestraCoordinadorCurso.input.setValue("pidpersona", idp);
        this.muestraCoordinadorCurso.input.setValue("pidsy", idsy);

        this.muestraCoordinadorSubArea.input.setValue("ppersona", idp);
        this.muestraCoordinadorSubArea.input.setValue("pidy", idsy);

        this.dashboard_faltas_graves.filter.setValue("id.idPersona", idp);
        this.dashboard_calificacion_estudiantes.filter.setValue("id.directorId", idp);

        this.asignaturasPorDocente.input.setValue("usuario", usuario);
        this.asignaturasPorDocente.input.setValue("sy", idsy);

        this.logIngresoUsuario(idp, today);
        this.renderDashBoard();
    },

    logIngresoUsuario: function(persona, fecha) {
        var idp = persona;
        var today = fecha;
        this.a_logInsertRecords.setValue("persona.idPersona", idp);
        this.a_logInsertRecords.setValue("fechaIngreso", today);
        this.a_logInsertRecords.setValue("horaIngreso", today);
        this.logForm.setDataSet(this.a_logInsertRecords);
        this.logForm.insertData();
    },

    renderDashBoard: function() {
        this.dashboard_faltas_graves.update();
        this.dashboard_calificacion_estudiantes.update();
        this.asignaturasPorDocente.update();
        this.muestraCoordinadorCurso.update();
        this.muestraCoordinadorSubArea.update();
    },

    promocionDataGrid1Selected: function(inSender, inIndex) {
        if (this.aprobadoEditor1.dataValue == true) {
            this.promovidoEditor1.enable();
            this.commentpromovidoEditor1.enable();
        }
        else {
            this.promovidoEditor1.disable();
            this.commentpromovidoEditor1.disable();
        }
    },
    promocionLiveForm1BeginUpdate: function(inSender) {
        try {
            this.promocion_container_datag_personas_x_curso.setDisabled(true);
            this.promocionDataGrid1.setDisabled(true);

        } catch (e) {
            console.error('ERROR IN promocionLiveForm1BeginUpdate: ' + e);
        }
    },
    promocionLiveForm1UpdateData: function(inSender) {
        this.promocion_container_datag_personas_x_curso.setDisabled(false);
        this.promocionDataGrid1.setDisabled(false);
    },
    promocionLiveForm1CancelEdit: function(inSender) {
        try {
            this.promocion_container_datag_personas_x_curso.setDisabled(false);
            this.promocionDataGrid1.setDisabled(false);

        } catch (e) {
            console.error('ERROR IN promocionLiveForm1CancelEdit: ' + e);
        }
    },
    promocionLiveForm1InsertData: function(inSender) {
        try {
            this.promocion_container_datag_personas_x_curso.setDisabled(false);
            this.promocionDataGrid1.setDisabled(false);

        } catch (e) {
            console.error('ERROR IN promocionLiveForm1InsertData: ' + e);
        }
    },
    promocion_container_datag_personas_x_cursoSelectionChanged: function(inSender) {
        try {
            this.editPanel3.cancelEdit();

        } catch (e) {
            console.error('ERROR IN promocion_container_datag_personas_x_cursoSelectionChanged: ' + e);
        }
    },
    promocionDataGrid1SelectionChanged: function(inSender) {
        try {
            this.editPanel3.cancelEdit();

        } catch (e) {
            console.error('ERROR IN promocionDataGrid1SelectionChanged: ' + e);
        }
    },
    promocion_sel_gradoChange: function(inSender, inDisplayValue, inDataValue) {
        try {
            this.l_promocion_curso.update();
            this.l_promocion_insc_alum_curso.clearData();
            this.l_promocion_promocionLiveVariable1.clearData();

        } catch (e) {
            console.error('ERROR IN promocion_sel_gradoChange: ' + e);
        }
    },
    a_obtenerNombreSuccess: function(inSender, inDeprecated) {
        try {
            var nombre1 = main.a_obtenerNombre.getData().n1;
            var nombre2 = main.a_obtenerNombre.getData().n2;
            var apellido1 = main.a_obtenerNombre.getData().a1;
            var apellido2 = main.a_obtenerNombre.getData().a2;
            this.label_nombreCompleto.setCaption("BIENVENIDO, " + nombre1 + " " + nombre2 + " " + apellido1 + " " + apellido2);

        } catch (e) {
            console.error('ERROR IN a_obtenerNombreSuccess: ' + e);
        }
    },
    inicio_abrir_preferenciasClick: function(inSender, inEvent) {
        try {
            this.inicio_panel_opciones.show();

        } catch (e) {
            console.error('ERROR IN inicio_abrir_preferenciasClick: ' + e);
        }
    },

    inicio_cerrar_preferenciasClick: function(inSender, inEvent) {
        this.inicio_panel_opciones.hide();
        this.inicio_filtros_claves.hide();
    },

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

        } catch (e) {
            console.error('ERROR IN inscripciones_estudianteSelectionChanged: ' + e);
        }
    },
    inicio_boton_cancelarClick: function(inSender, inEvent) {
        try {
            this.inicio_box_clave.setReadonly(true);
            this.inicio_box_reclave.setReadonly(true);
            this.inicio_panel_boton_actualizar.hide();
        } catch (e) {
            console.error('ERROR IN inicio_boton_cancelarClick: ' + e);
        }
    },


    inicio_abrir_preferencias1Click: function(inSender, inEvent) {
        try {
            this.inicio_filtros_claves.show();

        } catch (e) {
            console.error('ERROR IN inicio_abrir_preferencias1Click: ' + e);
        }
    },

    pestana_reportes_seguimientoShow: function(inSender) {
        var jsonobject = main.a_informacionUsuario2.getItem(0);
        var rol = jsonobject.data.idtipo;
        var idpersona = jsonobject.data.idpersona;
        var valueToFilter = rol;
        var valuePersona = idpersona;
        this.l_reportes_graficos_listado_reportes.filter.setValue("id.idTipoPersona", valueToFilter);
        this.l_reportes_graficos_listado_reportes.filter.setValue("id.idPersona", valuePersona);
        this.l_reportes_graficos_listado_reportes.update();
    },

    reportes_graficos_listado_reportesSelected: function(inSender, inIndex) {
        this.reports_open_report_window.enable();
    },

    reportes_graficos_listado_reportesDeselected: function(inSender, inIndex) {
        this.reports_open_report_window.disable();
    },

    a_getLastAccessSuccess: function(inSender, inDeprecated) {
        var json = main.a_getLastAccess.getItem(0);
        var fechaUltimoAcceso = json.data.date;
        var horaUltimoAcceso = json.data.timeLoged;
        this.lastAccess_Label.setCaption("Último acceso: <br/>" + fechaUltimoAcceso);
    },



    codigoReporteChange: function(inSender, inDisplayValue, inDataValue) {
        try {
            var _codigo = this.codigoReporte.getDataValue();
            this.l_reportes_graficos_listado_reportes.filter.setValue("id.codigo", _codigo);
            this.l_reportes_graficos_listado_reportes.update();

        } catch (e) {
            console.error('ERROR IN codigoChange: ' + e);
        }
    },

    reporteChange: function(inSender, inDisplayValue, inDataValue) {
        try {
            var _reporte = this.reporte.getDataValue();
            this.l_reportes_graficos_listado_reportes.filter.setValue("id.reporte", _reporte);
            this.l_reportes_graficos_listado_reportes.update();

        } catch (e) {
            console.error('ERROR IN reporteChange: ' + e);
        }
    },
    calif_alumnos_datagrids_datag_alumnos_asignaturasSelected: function(inSender, inIndex) {
        try {
            var idasignatura = this.calif_alumnos_datagrids_datag_alumnos_asignaturas.selectedItem.getData().idasignatura;
            this.l_calif_alumnos_aprendizajes.filter.setValue("id.asignaturaIdAsignatura", idasignatura);
            this.l_calif_alumnos_aprendizajes.update();
        } catch (e) {
            console.error('ERROR IN calif_alumnos_datagrids_datag_alumnos_asignaturasSelected: ' + e);
        }
    },

    subjects_activitiesChange: function(inSender, inDisplayValue, inDataValue) {
        var idcurso = this.subjects_activities.getDataValue();
        var cadena = this.subjects_activities.getDisplayValue();
        var idasignatura = cadena.substring(0, 6);
        var x = parseInt(idasignatura);
        var json = main.a_cursy.getItem(0);
        var sy = json.data.sy;
        var idsy = json.data.idsy;
        this.actividad_lv.filter.setValue("subtopico.unidad.asignatura.idAsignatura", x);
        this.actividad_estudiantes.filter.setValue("curso.idCurso", idcurso);
        this.actividad_estudiantes.filter.setValue("sy.idSy", idsy);
        this.actividad_lv.update();
        this.actividad_estudiantes.update();
    },

    activitiesDataGridSelected: function(inSender, inIndex) {
        var id = this.activitiesDataGrid.selectedItem.getData().idActividad;
        this.inscalumactividadLiveVariable1.filter.setValue("actividad.idActividad", id);
        this.inscalumactividadLiveVariable1.update();
    },

/*
   * Js new version
   */
    menu_inicio_buttClick: function(inSender) {
        $('#main_menu_inicio_butt').css('background-color', '#1125b2');
        $('#main_menu_curriculo_butt').css('background-color', '#a3a3a3');
        $('#main_menu_asignatura_butt').css('background-color', '#a3a3a3');
        $('#main_menu_estudiante_butt').css('background-color', '#a3a3a3');
    },
    menu_curriculo_buttClick3: function(inSender) {
        $('#main_menu_curriculo_butt').css('background-color', '#1125b2');
        $('#main_menu_inicio_butt').css('background-color', '#a3a3a3');
        $('#main_menu_asignatura_butt').css('background-color', '#a3a3a3');
        $('#main_menu_estudiante_butt').css('background-color', '#a3a3a3');
    },
    menu_asignatura_buttClick: function(inSender) {
        $('#main_menu_asignatura_butt').css('background-color', '#1125b2');
        $('#main_menu_curriculo_butt').css('background-color', '#a3a3a3');
        $('#main_menu_inicio_butt').css('background-color', '#a3a3a3');
        $('#main_menu_estudiante_butt').css('background-color', '#a3a3a3');
    },
    menu_estudiante_buttClick: function(inSender) {
        $('#main_menu_estudiante_butt').css('background-color', '#1125b2');
        $('#main_menu_asignatura_butt').css('background-color', '#a3a3a3');
        $('#main_menu_curriculo_butt').css('background-color', '#a3a3a3');
        $('#main_menu_inicio_butt').css('background-color', '#a3a3a3');
    },
    menu_curriculo_buttClick: function(inSender) {
        var json = main.global_cursy.getItem(0);
        var nick = main.global_username.getData().dataValue;
        var idsy = json.data.idsy;
        this.global_docentes_asignaturas.input.setValue("nickname", nick);
        this.global_docentes_asignaturas.input.setValue("idsyr", idsy);
        this.global_docentes_asignaturas.update();
    },
    // loading learnings relation data, if the count is ==0 the var will be dirty is !=0 nothing happens
    menu_curriculo_buttClick1: function(inSender) {
        var count1 = this.curriculo_lista_dimension_comprension.getCount();
        var count2 = this.curriculo_lista_dimension_curricular.getCount();
        var count3 = this.curriculo_lista_inteligencia.getCount();
        var count4 = this.curriculo_lista_nivel_esperado.getCount();
        if (count1 == 0 && count2 == 0 && count3 == 0 && count4 == 0) {
            this.curriculo_lista_dimension_comprension.update();
            this.curriculo_lista_dimension_curricular.update();
            this.curriculo_lista_inteligencia.update();
            this.curriculo_lista_nivel_esperado.update();
        } else {}
    },
    // filtering eje1 // eje2 // eje3
    curriculo_grid_docentes_asignaturasSelect1: function(inSender) {
        var ejecount = this.curriculo_aprendizaje_eje1.getCount();
        console.log(ejecount);
        var eje1 = this.curriculo_grid_docentes_asignaturas.selectedItem.data.subarea1;
        var eje2 = this.curriculo_grid_docentes_asignaturas.selectedItem.data.subarea2;
        var eje3 = this.curriculo_grid_docentes_asignaturas.selectedItem.data.subarea3;
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
        var idcurso = this.subjects_activities.getDataValue();
        var cadena = this.subjects_activities.getDisplayValue();
        var idasignatura = cadena.substring(0, 6);
        var x = parseInt(idasignatura);
        var json = main.a_cursy.getItem(0);
        var sy = json.data.sy;
        var idsy = json.data.idsy;
        this.actividad_estudiantes.filter.setValue("curso.idCurso", idcurso);
        this.actividad_estudiantes.filter.setValue("sy.idSy", idsy);
        this.actividad_estudiantes.update();
    },
    // filtering unidades by subject selected
    // deprecated this function
    curriculo_grid_docentes_asignaturasSelect: function(inSender) {
        var idasignatura = main.curriculo_grid_docentes_asignaturas.selectedItem.data.idasignatura;
        this.unidadLiveVariable1.filter.setValue("asignatura.idAsignatura", idasignatura);
        this.unidadLiveVariable1.update();
    },
    // filterin subtopics by unit selected
    unidadDojoGridSelect: function(inSender) {
        var idunidad = main.unidadDojoGrid.selectedItem.data.idUnidad;
        this.subtopicoLiveVariable1.filter.setValue("unidad.idUnidad", idunidad);
        this.subtopicoLiveVariable1.update();
    },
    // filterin learning by subtopic selected.
    subtopicoDojoGridSelect: function(inSender) {
        var idsubtopico = this.subtopicoDojoGrid.selectedItem.data.idSubtopico;
        this.aprendizajeLiveVariable1.filter.setValue("subtopico.idSubtopico", idsubtopico);
        this.aprendizajeLiveVariable1.update();
    },
    // filterin activities by subtopic selected.
    subtopicoDojoGridSelect1: function(inSender) {
        var idsubtopico = main.subtopicoDojoGrid.selectedItem.data.idSubtopico;
        this.otrasmetasLiveVariable1.filter.setValue("subtopico.idSubtopico", idsubtopico);
        this.otrasmetasLiveVariable1.update();
    },
    // filterin resources by subtopic selected.
    subtopicoDojoGridSelect2: function(inSender) {
        var idsubtopico = main.subtopicoDojoGrid.selectedItem.data.idSubtopico;
        this.recursoLiveVariable1.filter.setValue("subtopico.idSubtopico", idsubtopico);
        this.recursoLiveVariable1.update();
    },
    // filterin goals by subtopic selected.
    subtopicoDojoGridSelect3: function(inSender) {
        var idsubtopico = main.subtopicoDojoGrid.selectedItem.data.idSubtopico;
        this.actividadLiveVariable2.filter.setValue("subtopico.idSubtopico", idsubtopico);
        this.actividadLiveVariable2.update();
    },
    // renderin' grid styles
    global_docentes_asignaturasResult: function(inSender, inDeprecated) {
        //this.curriculo_grid_docentes_asignaturas.setSortIndex(0);
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
        var idasignatura = main.curriculo_grid_docentes_asignaturas.selectedItem.data.idasignatura;
        this.idAsignaturaEditor1.setReadonly(true);
        this.asignaturaEditor1.setReadonly(true);
    },
    // readonly widgets & getttin' idasignatura
    unidadLiveForm2BeginInsert: function(inSender) {
        var idasignatura = main.curriculo_grid_docentes_asignaturas.selectedItem.data.idasignatura;
        this.idAsignaturaEditor1.setReadonly(true);
        this.asignaturaEditor1.setReadonly(true);
        this.idAsignaturaEditor1.setDataValue(idasignatura);
    },
    // updatin' subtopicos events
    subtopicoLiveForm2BeginInsert: function(inSender) {
        var idunidad = main.unidadDojoGrid.selectedItem.data.idUnidad;
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
        var idsubtopico = this.subtopicoDojoGrid.selectedItem.data.idSubtopico;
        this.idSubtopicoEditor1.setReadonly(true);
        this.subtopicoEditor1.setReadonly(true);
        this.idSubtopicoEditor1.setDataValue(idsubtopico);
    },
    // insert otras metas
    otrasmetasLiveForm2BeginInsert: function(inSender) {
        var idsubtopico = this.subtopicoDojoGrid.selectedItem.data.idSubtopico;
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
        var idsubtopico = this.subtopicoDojoGrid.selectedItem.data.idSubtopico;
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
        var name = objectFileUploaded.name;
        this.fileNameEditor2.setDataValue(name);
        this.ubicacionEditor1.setDataValue("http://aprendoz.rochester.edu.co/resources/data/" + name);
    },
    // update actividad
    actividadLiveForm3BeginInsert: function(inSender) {
        var idsubtopico = this.subtopicoDojoGrid.selectedItem.data.idSubtopico;
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
        var tiporecurso = main.tipoRecursoLookup1.getDataValue().idTipoRecurso;
        if (tiporecurso === 7) {
            this.dojoFileUpload1.show();
            this.ubicacionEditor1.setReadonly(true);
            this.ubicacionEditor1.setDataValue("Http://");
        } else {
            this.dojoFileUpload1.hide();
            this.ubicacionEditor1.setReadonly(false);
        }
    },
    // hide curriculo panel and show home
    menu_inicio_buttClick1: function(inSender) {
        this.curriculo_big_panel.hide();
        this.how_to_start.hide();
        this.asignatura_big_panel.hide();
        this.estudiante_big_panel.hide();
        this.inicio_big_panel.show();
    },
    // hide home panel and show curriculo
    menu_curriculo_buttClick4: function(inSender) {
        this.inicio_big_panel.hide();
        this.how_to_start.hide();
        this.asignatura_big_panel.hide();
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
        if (this.inicio_box_clave.dataValue == this.inicio_box_reclave.dataValue) {
            //alert("si son iguales");
            this.inicio_bad_label.hide();
            this.inicio_ok_label.show();
            this.inicio_boton_actualiza.enable();
        }
        else if (this.inicio_box_clave.dataValue != this.inicio_box_reclave.dataValue) {
            this.inicio_ok_label.hide();
            this.inicio_bad_label.show();
            this.inicio_boton_actualiza.disable();
        }
    },

    inicio_box_reclaveChange: function(inSender, inDisplayValue, inDataValue) {
        if (this.inicio_box_clave.dataValue == this.inicio_box_reclave.dataValue) {
            this.inicio_bad_label.hide();
            this.inicio_ok_label.show();
            this.inicio_boton_actualiza.enable();
        }
        else if (this.inicio_box_clave.dataValue != this.inicio_box_reclave.dataValue) {
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
        var count = this.curriculo_tipo_desempeno.getCount();
        if (count === 0) {
            this.curriculo_tipo_desempeno.update();
        } else { /*nothing happens*/
        }
    },
    menu_curriculo_buttClick6: function(inSender) {
        var count = this.curriculo_tipo_valoracion.getCount();
        if (count === 0) {
            this.curriculo_tipo_valoracion.update();
        } else { /*nothing happens*/
        }
    },
    menu_curriculo_buttClick7: function(inSender) {
        var count = this.curriculo_tipo_actividad.getCount();
        if (count === 0) {
            this.curriculo_tipo_actividad.update();
        } else { /*nothing happens*/
        }
    },
    lookup3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var tipo = main.lookup3.getDataValue().idTipoActividad;
        if (tipo === 1) {
            this.lookup2.enable();
            this.lookup1.disable();
            this.lookup1.setDisplayValue("No aplica");
        } else {
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
        var idasignatura = this.curriculo_grid_docentes_asignaturas.selectedItem.getData().idasignatura;
        main.curriculo_aprendizajes_asignaturasLiveVariable.filter.setValue("asignatura.idAsignatura", idasignatura);
        main.curriculo_aprendizajes_asignaturasLiveVariable.update();
    },
    aprendizajesAsignaturasGrid1Select: function(inSender) {
        var aprendizaje = main.aprendizajesAsignaturasGrid1.selectedItem.getData().aprendizaje;
        var learning = main.aprendizajesAsignaturasGrid1.selectedItem.getData().learning;
        var peso = main.aprendizajesAsignaturasGrid1.selectedItem.getData().peso;
        var eje1 = main.aprendizajesAsignaturasGrid1.selectedItem.getData().ejeIdEje;
        var eje2 = main.aprendizajesAsignaturasGrid1.selectedItem.getData().eje2IdEje;
        var eje3 = main.aprendizajesAsignaturasGrid1.selectedItem.getData().eje3IdEje;
        var inteligencia = main.aprendizajesAsignaturasGrid1.selectedItem.getData().inteligencia.inteligencia;
        var dcomprension = main.aprendizajesAsignaturasGrid1.selectedItem.getData().dimensionComprension.dimensionComprension;
        var dcurricular = main.aprendizajesAsignaturasGrid1.selectedItem.getData().dimensionCurricular.dimensionCurricular;
        var nivel = main.aprendizajesAsignaturasGrid1.selectedItem.getData().nivelEsperado.nivelEsperado;

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
    top_select_syChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var idsy = this.myCurSy();
        //var user =  main.global_username.getData().dataValue;
        var user = main.global_username.getItem(0).data.dataValue;
        this.global_docentes_asignaturas.input.setValue("idsyr", idsy);
        this.global_docentes_asignaturas.input.setValue("nickname", user);
        this.global_docentes_asignaturas.update();
    },
    unidadLiveForm2InsertData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idunidad = main.idUnidadEditor2.getDataValue();
        var idasignatura = main.idAsignaturaEditor1.getDataValue();
        var unidad = main.unidadEditor2.getDataValue();
        var unit = main.unitEditor2.getDataValue();
        var finicio = main.fechaInicioEditor3.getDisplayValue();
        var ffinal = main.fechaFinEditor3.getDisplayValue();
        var nounidad = main.numeroUnidadselect1.getDataValue();
        var accion = "v2-docentes-unidad -> accion: crear " + " ->idUnidad: " + idunidad + " ->idAsignatura: " + idasignatura + " ->detalles: " + unidad + "-" + unit + " ->finicio: " + finicio + " ->ffinal: " + ffinal + " >no_unidad: " + nounidad;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Unidad");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    unidadLiveForm2UpdateData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idunidad = main.idUnidadEditor2.getDataValue();
        var idasignatura = main.idAsignaturaEditor1.getDataValue();
        var unidad = main.unidadEditor2.getDataValue();
        var unit = main.unitEditor2.getDataValue();
        var finicio = main.fechaInicioEditor3.getDisplayValue();
        var ffinal = main.fechaFinEditor3.getDisplayValue();
        var nounidad = main.numeroUnidadselect1.getDataValue();
        var accion = "v2-docentes-unidad -> accion: actualizar " + " ->idUnidad: " + idunidad + " ->idAsignatura: " + idasignatura + " ->detalles: " + unidad + "-" + unit + " ->finicio: " + finicio + " ->ffinal: " + ffinal + " >no_unidad: " + nounidad;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Unidad");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    unidadLiveForm2DeleteData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idunidad = main.idUnidadEditor2.getDataValue();
        var idasignatura = main.idAsignaturaEditor1.getDataValue();
        var unidad = main.unidadEditor2.getDataValue();
        var unit = main.unitEditor2.getDataValue();
        var finicio = main.fechaInicioEditor3.getDisplayValue();
        var ffinal = main.fechaFinEditor3.getDisplayValue();
        var nounidad = main.numeroUnidadselect1.getDataValue();
        var accion = "v2-docentes-unidad -> accion: borrar " + " ->idUnidad: " + idunidad + " ->idAsignatura: " + idasignatura + " ->detalles: " + unidad + "-" + unit + " ->finicio: " + finicio + " ->ffinal: " + ffinal + " >no_unidad: " + nounidad;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Unidad");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    subtopicoLiveForm2InsertData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idsubtopico = main.idSubtopicoEditor2.getDataValue();
        var idunidad = main.idUnidadEditor1.getDataValue();
        var subtopico = main.subtopicoEditor2.getDataValue();
        var subtopic = main.subtopicEditor2.getDataValue();
        var finicio = main.date1.getDisplayValue();
        var ffin = main.date2.getDisplayValue();
        var no_subtopico = main.numeroSubtopicoSelect1.getDataValue();
        var accion = "v2-docentes-subtopico -> accion: crear " + " ->idsubtopico: " + idsubtopico + " ->idUnidad: " + idunidad + " ->detalles: " + subtopico + "-" + subtopic + " ->finicio: " + finicio + " ->ffinal: " + ffin + " >no_unidad: " + no_subtopico;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Subtopico");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    subtopicoLiveForm2UpdateData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idsubtopico = main.idSubtopicoEditor2.getDataValue();
        var idunidad = main.idUnidadEditor1.getDataValue();
        var subtopico = main.subtopicoEditor2.getDataValue();
        var subtopic = main.subtopicEditor2.getDataValue();
        var finicio = main.date1.getDisplayValue();
        var ffin = main.date2.getDisplayValue();
        var no_subtopico = main.numeroSubtopicoSelect1.getDataValue();
        var accion = "v2-docentes-subtopico -> accion: actualizar " + " ->idsubtopico: " + idsubtopico + " ->idUnidad: " + idunidad + " ->detalles: " + subtopico + "-" + subtopic + " ->finicio: " + finicio + " ->ffinal: " + ffin + " >no_unidad: " + no_subtopico;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Subtopico");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    subtopicoLiveForm2DeleteData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idsubtopico = main.idSubtopicoEditor2.getDataValue();
        var idunidad = main.idUnidadEditor1.getDataValue();
        var subtopico = main.subtopicoEditor2.getDataValue();
        var subtopic = main.subtopicEditor2.getDataValue();
        var finicio = main.date1.getDisplayValue();
        var ffin = main.date2.getDisplayValue();
        var no_subtopico = main.numeroSubtopicoSelect1.getDataValue();
        var accion = "v2-docentes-subtopico -> accion: borrar " + " ->idsubtopico: " + idsubtopico + " ->idUnidad: " + idunidad + " ->detalles: " + subtopico + "-" + subtopic + " ->finicio: " + finicio + " ->ffinal: " + ffin + " >no_unidad: " + no_subtopico;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Subtopico");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    aprendizajeLiveForm2InsertData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idaprendizaje = main.idAprendizajeEditor2.getDataValue();
        var idsubtopico = main.idSubtopicoEditor1.getDataValue();
        var fesperada = main.fechaEsperadaEditor2.getDisplayValue();
        var aprendizaje = main.aprendizajeEditor2.getDataValue();
        var learning = main.learningEditor2.getDataValue();
        var peso = main.numeroAprendizajeSelectMenu1.getDataValue();
        var eje1 = main.ejeSelect1.getDisplayValue();
        var eje2 = main.ejeSelect2.getDisplayValue();
        var eje3 = main.ejeSelect3.getDisplayValue();
        var nivel = main.nivelEsperadoLookup2.getDisplayValue();
        var dcomprension = main.dimensionComprensionLookup2.getDisplayValue();
        var dcurricular = main.dimensionCurricularLookup2.getDisplayValue();
        var inteligencia = main.inteligenciaLookup2.getDisplayValue();
        var accion = "v2-docentes-aprendizaje -> accion: crear " + " ->idAprendizaje: " + idaprendizaje + " ->idSubtopico: " + idsubtopico + " ->detalles: " + aprendizaje + " - " + learning + " ->fesperada: " + fesperada + " ->peso: " + peso + " ->eje1: " + eje1 + " ->eje2: " + eje2 + " ->eje3: " + eje3 + " ->nivel: " + nivel + " ->dcomprension: " + dcomprension + " ->dcurricular: " + dcurricular + " ->inteligencia: " + inteligencia;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Aprendizaje");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    aprendizajeLiveForm2UpdateData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idaprendizaje = main.idAprendizajeEditor2.getDataValue();
        var idsubtopico = main.idSubtopicoEditor1.getDataValue();
        var fesperada = main.fechaEsperadaEditor2.getDisplayValue();
        var aprendizaje = main.aprendizajeEditor2.getDataValue();
        var learning = main.learningEditor2.getDataValue();
        var peso = main.numeroAprendizajeSelectMenu1.getDataValue();
        var eje1 = main.ejeSelect1.getDisplayValue();
        var eje2 = main.ejeSelect2.getDisplayValue();
        var eje3 = main.ejeSelect3.getDisplayValue();
        var nivel = main.nivelEsperadoLookup2.getDisplayValue();
        var dcomprension = main.dimensionComprensionLookup2.getDisplayValue();
        var dcurricular = main.dimensionCurricularLookup2.getDisplayValue();
        var inteligencia = main.inteligenciaLookup2.getDisplayValue();
        var accion = "v2-docentes-aprendizaje -> accion: actualizar " + " ->idAprendizaje: " + idaprendizaje + " ->idSubtopico: " + idsubtopico + " ->detalles: " + aprendizaje + " - " + learning + " ->fesperada: " + fesperada + " ->peso: " + peso + " ->eje1: " + eje1 + " ->eje2: " + eje2 + " ->eje3: " + eje3 + " ->nivel: " + nivel + " ->dcomprension: " + dcomprension + " ->dcurricular: " + dcurricular + " ->inteligencia: " + inteligencia;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Aprendizaje");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    aprendizajeLiveForm2DeleteData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idaprendizaje = main.idAprendizajeEditor2.getDataValue();
        var idsubtopico = main.idSubtopicoEditor1.getDataValue();
        var fesperada = main.fechaEsperadaEditor2.getDisplayValue();
        var aprendizaje = main.aprendizajeEditor2.getDataValue();
        var learning = main.learningEditor2.getDataValue();
        var peso = main.numeroAprendizajeSelectMenu1.getDataValue();
        var eje1 = main.ejeSelect1.getDisplayValue();
        var eje2 = main.ejeSelect2.getDisplayValue();
        var eje3 = main.ejeSelect3.getDisplayValue();
        var nivel = main.nivelEsperadoLookup2.getDisplayValue();
        var dcomprension = main.dimensionComprensionLookup2.getDisplayValue();
        var dcurricular = main.dimensionCurricularLookup2.getDisplayValue();
        var inteligencia = main.inteligenciaLookup2.getDisplayValue();
        var accion = "v2-docentes-aprendizaje -> accion: borrar " + " ->idAprendizaje: " + idaprendizaje + " ->idSubtopico: " + idsubtopico + " ->detalles: " + aprendizaje + " - " + learning + " ->fesperada: " + fesperada + " ->peso: " + peso + " ->eje1: " + eje1 + " ->eje2: " + eje2 + " ->eje3: " + eje3 + " ->nivel: " + nivel + " ->dcomprension: " + dcomprension + " ->dcurricular: " + dcurricular + " ->inteligencia: " + inteligencia;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Aprendizaje");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    otrasmetasLiveForm2InsertData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idmeta = main.idOtraMetaEditor2.getDataValue();
        var idsubtopico = main.idSubtopicoEditor3.getDataValue();
        var meta = main.metaEditor2.getDataValue();
        var fecha = main.fechaEditorDate1.getDisplayValue();
        var logrado = main.logradoEditor3.getDataValue();
        var accion = "v2-docentes-metas -> accion: crear " + " ->idmeta: " + idmeta + " ->idSubtopico: " + idsubtopico + " ->detalles: " + meta + " ->fecha: " + fecha + " ->logrado: " + logrado;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "OtrasMetas");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    otrasmetasLiveForm2UpdateData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idmeta = main.idOtraMetaEditor2.getDataValue();
        var idsubtopico = main.idSubtopicoEditor3.getDataValue();
        var meta = main.metaEditor2.getDataValue();
        var fecha = main.fechaEditorDate1.getDisplayValue();
        var logrado = main.logradoEditor3.getDataValue();
        var accion = "v2-docentes-metas -> accion: actualizar " + " ->idmeta: " + idmeta + " ->idSubtopico: " + idsubtopico + " ->detalles: " + meta + " ->fecha: " + fecha + " ->logrado: " + logrado;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "OtrasMetas");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    otrasmetasLiveForm2DeleteData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idmeta = main.idOtraMetaEditor2.getDataValue();
        var idsubtopico = main.idSubtopicoEditor3.getDataValue();
        var meta = main.metaEditor2.getDataValue();
        var fecha = main.fechaEditorDate1.getDisplayValue();
        var logrado = main.logradoEditor3.getDataValue();
        var accion = "v2-docentes-metas -> accion: borrar " + " ->idmeta: " + idmeta + " ->idSubtopico: " + idsubtopico + " ->detalles: " + meta + " ->fecha: " + fecha + " ->logrado: " + logrado;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "OtrasMetas");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    recursoLiveForm1InsertData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idrecurso = main.idRecursoEditor1.getDataValue();
        var idsubtopico = main.idSubtopicoEditor4.getDataValue();
        var recurso = main.recursoTextEditor1.getDataValue();
        var direccion = main.ubicacionEditor1.getDataValue();
        var tipo = main.tipoRecursoLookup1.getDisplayValue();
        var accion = "v2-docentes-recurso -> accion: crear " + " ->idrecurso: " + idrecurso + " ->idSubtopico: " + idsubtopico + " ->detalles: " + recurso + " ->direccion: " + direccion + "->tipo: " + tipo;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Recurso");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    recursoLiveForm1UpdateData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idrecurso = main.idRecursoEditor1.getDataValue();
        var idsubtopico = main.idSubtopicoEditor4.getDataValue();
        var recurso = main.recursoTextEditor1.getDataValue();
        var direccion = main.ubicacionEditor1.getDataValue();
        var tipo = main.tipoRecursoLookup1.getDisplayValue();
        var accion = "v2-docentes-recurso -> accion: actualizar " + " ->idrecurso: " + idrecurso + " ->idSubtopico: " + idsubtopico + " ->detalles: " + recurso + " ->direccion: " + direccion + "->tipo: " + tipo;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Recurso");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    recursoLiveForm1DeleteData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idrecurso = main.idRecursoEditor1.getDataValue();
        var idsubtopico = main.idSubtopicoEditor4.getDataValue();
        var recurso = main.recursoTextEditor1.getDataValue();
        var direccion = main.ubicacionEditor1.getDataValue();
        var tipo = main.tipoRecursoLookup1.getDisplayValue();
        var accion = "v2-docentes-recurso -> accion: borrar " + " ->idrecurso: " + idrecurso + " ->idSubtopico: " + idsubtopico + " ->detalles: " + recurso + " ->direccion: " + direccion + "->tipo: " + tipo;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Recurso");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    actividadLiveForm3InsertData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idactividad = main.idActividadEditor3.getDataValue();
        var idsubtopico = main.idSubtopicoEditor5.getDataValue();
        var fecha = main.fechaEditor6.getDisplayValue();
        var actividad = main.actividadEditor3.getDataValue();
        var requerido = main.requeridoAlternativoEditor3.getDataValue();
        var tipo_actividad = main.lookup3.getDisplayValue();
        var retro = main.lookup1.getDisplayValue();
        var desempeno = main.lookup2.getDisplayValue();
        var accion = "v2-docentes-actividad -> accion: crear " + " ->idactividad: " + idactividad + " ->idSubtopico: " + idsubtopico + " ->detalles: " + actividad + " ->fecha: " + fecha + " ->requerido: " + requerido + " ->tipo_actividad: " + tipo_actividad + " ->retroalimentacio: " + retro + " ->desempeno: " + desempeno;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Actividad");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    actividadLiveForm3UpdateData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idactividad = main.idActividadEditor3.getDataValue();
        var idsubtopico = main.idSubtopicoEditor5.getDataValue();
        var fecha = main.fechaEditor6.getDisplayValue();
        var actividad = main.actividadEditor3.getDataValue();
        var requerido = main.requeridoAlternativoEditor3.getDataValue();
        var tipo_actividad = main.lookup3.getDisplayValue();
        var retro = main.lookup1.getDisplayValue();
        var desempeno = main.lookup2.getDisplayValue();
        var accion = "v2-docentes-actividad -> accion: actualizar " + " ->idactividad: " + idactividad + " ->idSubtopico: " + idsubtopico + " ->detalles: " + actividad + " ->fecha: " + fecha + " ->requerido: " + requerido + " ->tipo_actividad: " + tipo_actividad + " ->retroalimentacio: " + retro + " ->desempeno: " + desempeno;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Actividad");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    actividadLiveForm3DeleteData: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var idactividad = main.idActividadEditor3.getDataValue();
        var idsubtopico = main.idSubtopicoEditor5.getDataValue();
        var fecha = main.fechaEditor6.getDisplayValue();
        var actividad = main.actividadEditor3.getDataValue();
        var requerido = main.requeridoAlternativoEditor3.getDataValue();
        var tipo_actividad = main.lookup3.getDisplayValue();
        var retro = main.lookup1.getDisplayValue();
        var desempeno = main.lookup2.getDisplayValue();
        var accion = "v2-docentes-actividad -> accion: borrar " + " ->idactividad: " + idactividad + " ->idSubtopico: " + idsubtopico + " ->detalles: " + actividad + " ->fecha: " + fecha + " ->requerido: " + requerido + " ->tipo_actividad: " + tipo_actividad + " ->retroalimentacio: " + retro + " ->desempeno: " + desempeno;
        var now = new Date().getTime();
        this.logCurriculoDocentes.setValue("accionRealizada", accion);
        this.logCurriculoDocentes.setValue("fechaCreacion", now);
        this.logCurriculoDocentes.setValue("tablaAfectada", "Actividad");
        this.logCurriculoDocentes.setValue("usuario", user);
        this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
        this.logDocentesliveForm.insertData();
    },
    top_select_syChange1: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        main.unidadLiveVariable1.clearData();
        main.subtopicoLiveVariable1.clearData();
        main.aprendizajeLiveVariable1.clearData();
        main.otrasmetasLiveVariable1.clearData();
        main.recursoLiveVariable1.clearData();
        main.actividadLiveVariable2.clearData();
    },
    curriculo_grid_docentes_asignaturasSelectionChange1: function(inSender) {
        this.top_select_syChange1();
    },
    a_lista_sySuccess: function(inSender, inDeprecated) {
        var sy = main.global_cursy.getItem(0).data.sy;
        main.top_select_sy.setDisplayValue(sy)
    },
    asignaturas_vista_asignaturas_estudiantes_svSuccess: function(inSender, inDeprecated) {
        var count = main.asignaturas_vista_asignaturas_estudiantes_sv.getCount();
        this.asignatura_footer_counter_label.setCaption("  Total alumnos en la asignatura: " + count);
    },
    curriculo_detalles_estudiantes_buttClick: function(inSender) {
        var idasignatura = main.curriculo_grid_docentes_asignaturas.selectedItem.getData().idasignatura;
        var asignatura = main.curriculo_grid_docentes_asignaturas.selectedItem.getData().asignatura;
        main.asignaturas_vista_asignaturas_estudiantes_sv.input.setValue("pasig", idasignatura)
        this.asignaturas_vista_asignaturas_estudiantes_sv.update();
        this.asignatura_titulo.setCaption("   &NestedGreaterGreater; " + asignatura);
        this.curriculo_big_panel.hide();
        this.how_to_start.hide();
        this.inicio_big_panel.hide();
        this.asignatura_big_panel.show();
    },

    curriculo_grid_docentes_asignaturasSelect4: function(inSender) {
        this.curriculo_detalles_estudiantes_butt.enable();
    },

    asignatura_detalles_alumnoClick: function(inSender) {
        this.curriculo_big_panel.hide();
        this.how_to_start.hide();
        this.inicio_big_panel.hide();
        this.asignatura_big_panel.hide();
        this.estudiante_big_panel.show();
    },

    menu_asignatura_buttClick1: function(inSender) {
        this.curriculo_big_panel.hide();
        this.how_to_start.hide();
        this.inicio_big_panel.hide();
        this.estudiante_big_panel.hide();
        this.asignatura_big_panel.show();
    },

    curriculo_detalles_estudiantes_buttClick1: function(inSender) {
        $('#main_menu_asignatura_butt').css('background-color', '#1125b2');
        $('#main_menu_curriculo_butt').css('background-color', '#a3a3a3');
        $('#main_menu_inicio_butt').css('background-color', '#a3a3a3');
    },

    asignatura_detalles_alumnoClick1: function(inSender) {
        var idpersona = main.dojoGrid1.selectedItem.getData().idPersona;
        var idasignatura = main.dojoGrid1.selectedItem.getData().idasignatura;
        var codigo = main.dojoGrid1.selectedItem.getData().codigo;
        var nombre = main.dojoGrid1.selectedItem.getData().nombres;
        var asig = main.dojoGrid1.selectedItem.getData().asignatura;
        var std_nombre = main.dojoGrid1.selectedItem.getData().nombres;
        var std_apellido = main.dojoGrid1.selectedItem.getData().apellidos;
        var curso = main.dojoGrid1.selectedItem.getData().curso;
        this.estudiante_foto_perfil.setSource("http://www.rochester.edu.co/fotosestudiantes/" + codigo + ".Jpeg");
        this.estudiante_demografica_butt.setCaption("&NestedGreaterGreater; " + nombre);
        this.estudiante_asignatura_butt.setCaption("&NestedGreaterGreater; " + asig);
        this.estudiante_nombre_perfil.setCaption(std_nombre + "<br>" + std_apellido + "<br><br>" + curso);
        main.estudiantes_detalles_curriculo.input.setValue("pidasignatura", idasignatura);
        main.estudiantes_detalles_curriculo.input.setValue("pidpersona", idpersona);
        main.estudiantes_detalles_curriculo.update();
    },
    // hightlight the button when detalles_alumnos pressed!
    asignatura_detalles_alumnoClick2: function(inSender) {
        $('#main_menu_estudiante_butt').css('background-color', '#1125b2');
        $('#main_menu_asignatura_butt').css('background-color', '#a3a3a3');
        $('#main_menu_curriculo_butt').css('background-color', '#a3a3a3');
        $('#main_menu_inicio_butt').css('background-color', '#a3a3a3');
    },
    menu_estudiante_buttClick1: function(inSender) {
        this.curriculo_big_panel.hide();
        this.how_to_start.hide();
        this.inicio_big_panel.hide();
        this.asignatura_big_panel.hide();
        this.estudiante_big_panel.show();
    },
    estudiante_asignatura_buttClick: function(inSender) {
        $('#main_menu_asignatura_butt').css('background-color', '#1125b2');
        $('#main_menu_curriculo_butt').css('background-color', '#a3a3a3');
        $('#main_menu_inicio_butt').css('background-color', '#a3a3a3');
        $('#main_menu_estudiante_butt').css('background-color', '#a3a3a3');
    },
    estudiante_asignatura_buttClick1: function(inSender) {
        this.curriculo_big_panel.hide();
        this.how_to_start.hide();
        this.inicio_big_panel.hide();
        this.estudiante_big_panel.hide();
        this.asignatura_big_panel.show();
    },
    curriculo_grid_docentes_asignaturasCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        this.curriculo_detalles_estudiantes_buttClick(); //makes the same button ver estudiantes
        this.curriculo_detalles_estudiantes_buttClick1();
    },
    aprendizajeLiveForm2BeginInsert2: function(inSender) {
/*var idasignatura= this.curriculo_grid_docentes_asignaturas.selectedItem.getData().idasignatura;
        main.curriculo_aprendizajes_asignaturasLiveVariable.filter.setValue("asignatura.idAsignatura", idasignatura);
        main.curriculo_aprendizajes_asignaturasLiveVariable.update();*/
    },
    feedback_enviarClick: function(inSender) {
        var user = main.global_username.getData().dataValue;
        var now = new Date().getTime();
        var tipo = this.feedback_tipo_feedback.getDataValue();
        var titulo = this.feedback_titulo.getDataValue();
        var comentario = this.feedback_comentario.getDataValue();
        this.feedback_sendFeedBack.setValue("usuario", user);
        this.feedback_sendFeedBack.setValue("titulo", titulo);
        this.feedback_sendFeedBack.setValue("comentario", comentario);
        this.feedback_sendFeedBack.setValue("fechaCreacion", now);
        this.feedback_sendFeedBack.setValue("fechaActualizacion", now);
        this.feedback_sendFeedBack.setValue("tipoFeedback", tipo);
        this.feedback_liveForm.setDataSet(this.feedback_sendFeedBack);
        this.feedback_liveForm.insertData();
    },
    feedback_liveFormSuccess: function(inSender, inData) {
        this.feedback_tipo_feedback.clear();
        this.feedback_titulo.clear();
        this.feedback_comentario.clear();
    },
    feedback_cancelarClick: function(inSender) {
        this.feedback_tipo_feedback.clear();
        this.feedback_titulo.clear();
        this.feedback_comentario.clear();
    },
    dojoGrid1CellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        this.asignatura_detalles_alumnoClick();
        this.asignatura_detalles_alumnoClick1();
        this.asignatura_detalles_alumnoClick2();
    },
    dojoGrid1Select: function(inSender) {
        this.asignatura_detalles_alumno.enable();
    },
    // reRender lineChart
    menu_inicio_buttClick2: function(inSender) {
        this.renderChart_dash1();
        this.dashboard_chart4();
        this.dashboard_chart5();
        this.dashboard_chart6();
        this.dashboard_malla_dimension_curricularSuccess();
        this.dashboard_malla_dimension_comprensionSuccess();
    },
    /**Inicio*Graficos**
     *******************/
    muestraCoordinadorCursoSuccess: function(inSender, inDeprecated) {
        try {
            var count = main.muestraCoordinadorCurso.getCount();
            if (count > 0) {
                //this.panelCoordinadorCurso.show();
                this.dashboard_chart4();
                console.log("render 4 >>>>");
            } else {
                //this.panelCoordinadorCurso.hide();
            }
        } catch (e) {
            console.log("for exception >>>>");
            main.muestraCoordinadorCurso.update();
            console.error('ERROR IN muestraCoordinadorCursoSuccess: ' + e);
        }
    },
    muestraCoordinadorSubAreaSuccess: function(inSender, inDeprecated) {
        var count = main.muestraCoordinadorSubArea.getCount();
        if (count > 0) {
            this.panelCoordinadorCurricular.show();
        } else {
            this.panelCoordinadorCurricular.hide();
        }
    },

    dash_dash_lv1Success: function(inSender, inDeprecated) {
        this.renderChart_dash1();
    },

    renderChart_dash1: function() {
        var _json = main.dash_dash_lv1.getData();
        var _json = main.dash_dash_lv1.json;
        var _count = main.dash_dash_lv1.getCount();
        var mesArray = [];
        var ingresosArray = [];
        for (var i = 0; i < _count; i++) {
            var _item = main.dash_dash_lv1.getItem(i).data;
            var _name = _item.mes;
            var _value = _item.totalingresos;
            mesArray.push([_name]);
            ingresosArray.push([_value]);
        }

        $(function() {
            $('#main_dash_chart1').highcharts({
                title: {
                    text: 'INGRESOS POR DOCENTE',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Número de ingresos por mes',
                    x: -20
                },
                xAxis: {
                    categories: mesArray,
                    title: {
                        text: 'Mes - Año escolar'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Total ingresos'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    valueSuffix: ' ingresos'
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: '2014-2015',
                    data: ingresosArray
                }]
            });
        });
    },

    //chart4
    dashboard_chart4: function() {
        var porc_faltas = main.dashboard_faltas_graves.getItem(0).data.id.data.porcentajeFaltasGraves;
        var curso = main.dashboard_faltas_graves.getItem(0).data.id.data.curso;
        $(function() {
            $('#main_chart4').highcharts({
                chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },

                title: {
                    text: curso
                },

                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    },
                    {
                        backgroundColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#333'],
                                [1, '#FFF']
                            ]
                        },
                        borderWidth: 1,
                        outerRadius: '107%'
                    },
                    {
                        // default background
                    },
                    {
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        outerRadius: '105%',
                        innerRadius: '103%'
                    }]
                },

                // the value axis
                yAxis: {
                    min: 0,
                    max: 100,

                    minorTickInterval: 'auto',
                    minorTickWidth: 1,
                    minorTickLength: 10,
                    minorTickPosition: 'inside',
                    minorTickColor: '#666',

                    tickPixelInterval: 30,
                    tickWidth: 2,
                    tickPosition: 'inside',
                    tickLength: 10,
                    tickColor: '#666',
                    labels: {
                        step: 2,
                        rotation: 'auto'
                    },
                    title: {
                        text: '%'
                    },
                    plotBands: [{
                        from: 95,
                        to: 100,
                        color: '#55BF3B' // green
                    },
                    {
                        from: 90,
                        to: 95,
                        color: '#DDDF0D' // yellow
                    },
                    {
                        from: 0,
                        to: 90,
                        color: '#DF5353' // red
                    }]
                },

                series: [{
                    name: 'Sin faltas graves',
                    data: [porc_faltas],
                    tooltip: {
                        valueSuffix: ' %'
                    }
                }]

            },
            // Add some life


            function(chart) {

            });
        });
    },

    //chart5
    dashboard_chart5: function() {
        var score = main.dashboard_puntaje_asig_global.getItem(0).data.id.data.avgPuntaje;
        var subject = main.dashboard_puntaje_asig_global.getItem(0).data.id.data.asignatura;
        $(function() {
            $('#main_chart5').highcharts({
                chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },

                title: {
                    text: subject,
                    style: {
                        "fontSize": "10px"
                    }
                },

                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    },
                    {
                        backgroundColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#333'],
                                [1, '#FFF']
                            ]
                        },
                        borderWidth: 1,
                        outerRadius: '107%'
                    },
                    {
                        // default background
                    },
                    {
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        outerRadius: '105%',
                        innerRadius: '103%'
                    }]
                },

                // the value axis
                yAxis: {
                    min: 0,
                    max: 160,

                    minorTickInterval: 'auto',
                    minorTickWidth: 1,
                    minorTickLength: 10,
                    minorTickPosition: 'inside',
                    minorTickColor: '#666',

                    tickPixelInterval: 30,
                    tickWidth: 2,
                    tickPosition: 'inside',
                    tickLength: 10,
                    tickColor: '#666',
                    labels: {
                        step: 2,
                        rotation: 'auto'
                    },
                    title: {
                        text: '%'
                    },
                    plotBands: [{
                        from: 137,
                        to: 160,
                        color: '#55BF3B' // green
                    },
                    {
                        from: 107,
                        to: 137,
                        color: '#754C78' // purple
                    },
                    {
                        from: 82,
                        to: 107,
                        color: '#DDDF0D' // yellow
                    },
                    {
                        from: 0,
                        to: 82,
                        color: '#DF5353' // red
                    }]
                },

                series: [{
                    name: 'Puntaje',
                    data: [score],
                    tooltip: {
                        valueSuffix: ' %'
                    }
                }]

            },
            // Add some life


            function(chart) {

            });
        });
    },
    dashboard_calificacion_estudiantesSuccess: function(inSender, inDeprecated) {
        this.dashboard_chart6();
    },

    //chart6
    dashboard_chart6: function() {
        var length = main.dashboard_calificacion_estudiantes.getCount();
        var result = [];
        var mydata = main.dashboard_calificacion_estudiantes.getData();
        var stdArray = [];
        var scoreArray = [];
        for (var i = 0; i < mydata.length; i++) {
            //console.log(i);
            var base = mydata[i];
            //console.log(base);
            var std = base.id.alumnoApellido1;
            var score = base.id.puntaje;
            result.push([std, score]);
            stdArray.push([std]);
            scoreArray.push([score]);
        }
        $(function() {
            $('#main_chart6').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Puntaje de Estudiantes por Curso'
                },
                subtitle: {
                    text: 'Puntaje general por estudiante'
                },
                xAxis: {
                    categories: stdArray,
                    labels: {
                        rotation: 90
                    }
                },
                yAxis: {
                    title: {
                        text: 'Puntaje'
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    }
                },
                series: [{
                    name: 'Puntajes',
                    data: scoreArray,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        x: 4,
                        y: 10,
                        style: {
                            fontSize: '10px',
                            fontFamily: 'Verdana, sans-serif',
                            textShadow: '0 0 3px black'
                        }
                    }
                }]
            });
        });
    },
    asignaturaCoordinadorSelectChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var idasignatura = main.asignaturaCoordinadorSelect.getDataValue();
        main.dashboard_puntaje_asig_global.filter.setValue("id.idAsignatura", idasignatura);
        main.dashboard_puntaje_asig_global.update();
    },
    dashboard_puntaje_asig_globalSuccess: function(inSender, inDeprecated) {
        this.dashboard_chart5();
    },
    asignaturaCoordinadorSelect2Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var idAsignatura = this.asignaturaCoordinadorSelect2.getDataValue();
        this.dashboard_malla_dimension_comprension.filter.setValue("id.idAsignatura", idAsignatura);
        this.dashboard_malla_dimension_curricular.filter.setValue("id.idAsignatura", idAsignatura);
        this.dashboard_malla_dimension_comprension.update();
        this.dashboard_malla_dimension_curricular.update();
    },
    dashboard_malla_dimension_comprensionSuccess: function(inSender, inDeprecated) {
        var mydata = this.dashboard_malla_dimension_comprension.getData();
        var dimensiones = [];
        var data = [];
        for (var i = 0; i < mydata.length; i++) {
            //console.log(i);
            var base = mydata[i];
            //console.log(base);
            var dims = base.id.dimensionComprension;
            var values = base.id.porcentaje;
            //console.log("Dimension: "+ dims + " Values: "+ values);
            dimensiones.push(dims);
            data.push(values);
            //console.log(dimensiones);
            //console.log(data);
        }

        $(function() {
            $('#main_spider_comprension').highcharts({
                chart: {
                    polar: true,
                    type: 'line'
                },

                title: {
                    text: 'Malla Dim. Comprensión',
                    align: 'center'
                },

                pane: {
                    size: '80%'
                },

                xAxis: {
                    categories: dimensiones,
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },

                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0
                },

                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
                },

                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'vertical'
                },

                series: [{
                    name: 'Balance de dimensión',
                    data: data,
                    pointPlacement: 'on'
                }]
            });
        });
    },

    dashboard_malla_dimension_curricularSuccess: function(inSender, inDeprecated) {
        var mydata = this.dashboard_malla_dimension_curricular.getData();
        var dimensiones = [];
        var data = [];
        for (var i = 0; i < mydata.length; i++) {
            //console.log(i);
            var base = mydata[i];
            //console.log(base);
            var dims = base.id.dimensionCurricular;
            var values = base.id.porcentaje;
            //console.log("Dimension: "+ dims + " Values: "+ values);
            dimensiones.push(dims);
            data.push(values);
            //console.log(dimensiones);
            //console.log(data);
        }

        $(function() {
            $('#main_spider_curricular').highcharts({
                chart: {
                    polar: true,
                    type: 'line'
                },

                title: {
                    text: 'Malla Dim. Curricular',
                    align: 'center'
                },

                pane: {
                    size: '80%'
                },

                xAxis: {
                    categories: dimensiones,
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },

                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0
                },

                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
                },

                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'vertical'
                },

                series: [{
                    name: 'Balance de dimensión',
                    data: data,
                    pointPlacement: 'on'
                }]
            });
        });
    },
    asignaturasPorDocenteSuccess: function(inSender, inDeprecated) {
        var subjectname = main.asignaturasPorDocente.getItem(0).data.asignatura;
        this.asignaturaCoordinadorSelect.setDisplayValue(subjectname);
        this.asignaturaCoordinadorSelect2.setDisplayValue(subjectname);
    },
    // seleccion de asignatura y cambio por evento OnChange
    sel_asignaturas_selectChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		//var idasignatura = main.curriculo_grid_docentes_asignaturas.selectedItem.data.idasignatura;
        var idasignatura = main.sel_asignaturas_select.getDataValue().idasignatura;
        this.unidadLiveVariable2.filter.setValue("asignatura.idAsignatura", idasignatura);
        this.unidadLiveVariable2.update();
	},
    //the end
	_end: 0
});