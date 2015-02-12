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
myCurSy: function(){
var sy= main.global_cursy.getItem(0).data.idsy;
return sy;
},
mySessionExpiredMethod: function() {
window.location.reload();
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
this.global_cursy.update();
this.a_informacionUsuario.update();
},
global_cursySuccess: function(inSender, inDeprecated) {
var _usuario      = main.global_username.getData().dataValue;
var syJson        = main.global_cursy.getItem(0);
var fechaInicio   = syJson.data.fechaDesde;
var fechaFinal    = syJson.data.fechaHasta;
this.dash_dash_lv1.input.setValue("usuario", _usuario);
this.dash_dash_lv1.input.setValue("f1", fechaInicio);
this.dash_dash_lv1.input.setValue("f2", fechaFinal);
//this.a_informacionUsuario.update();
this.dash_dash_lv1.update();
},
a_informacionUsuarioSuccess: function() {
var json     =  main.a_informacionUsuario.getItem(0);
var codigo   = json.data.codigo;
var usuario  = json.data.usuario;
var tipo     = json.data.tipoPersona;
var nombre1  = json.data.nombre1;
var nombre2  = json.data.nombre2;
var apellido1= json.data.apellido1;
var apellido2= json.data.apellido2;
var nodoc    = json.data.numeroDocumento;
var sexo     = json.data.sexo;
var fullname = nombre1+" "+nombre2+" "+apellido1+" "+apellido2;
this.profile_button.setCaption(usuario);
this.menu_rol.setCaption(tipo);
this.menu_profile_img.setSource("http://www.rochester.edu.co/fotosempleados/"+codigo+".Jpeg");
this.configuracion_profile_image.setSource("http://www.rochester.edu.co/fotosempleados/"+codigo+".Jpeg");
this.menu_bienvenida.setCaption("Bienvenid@, "+usuario);
this.configuracion_detalles.setCaption(fullname+"<br>Sexo: "+sexo+"<br>No. documento: "+nodoc+"<br><br>"+tipo);
var idp      = main.a_informacionUsuario.getItem(0).data.idpersona;
var today    = new Date().getTime();
var clave    = main.a_informacionUsuario.getItem(0).data.clave;
var json     = main.global_cursy.getItem(0);
var idsy     = json.data.idsy;
this.inicio_box_usuario.setDataValue(usuario);
this.inicio_box_clave.setDataValue(clave);
this.inicio_box_reclave.setDataValue(clave);
this.muestraCoordinadorCurso.input.setValue("pidpersona", idp);
this.muestraCoordinadorCurso.input.setValue("pidsy", idsy);
this.muestraCoordinadorSubArea.input.setValue("ppersona", idp);
this.muestraCoordinadorSubArea.input.setValue("pidy", idsy);
this.dashboard_faltas_graves.filter.setValue("id.idPersona", idp);
this.dashboard_calificacion_estudiantes.filter.setValue("id.directorId", idp);
this.asignaturasPorDocente.input.setValue("usuario",usuario);
this.asignaturasPorDocente.input.setValue("sy",idsy);
//this.dashboard_faltas_graves.update();
//this.dashboard_calificacion_estudiantes.update();
//this.asignaturasPorDocente.update();
//this.muestraCoordinadorCurso.update();
//this.muestraCoordinadorSubArea.update();
//debugger;
this.logIngresoUsuario(idp, today);
},
logIngresoUsuario: function(persona, fecha){
console.log("xxxxxxxxxxxxxxxx insertado");
var idp   = persona;
var today = fecha;
this.a_logInsertRecords.setValue("persona.idPersona", idp);
this.a_logInsertRecords.setValue("fechaIngreso", today);
this.a_logInsertRecords.setValue("horaIngreso", today);
this.logForm.setDataSet(this.a_logInsertRecords);
this.logForm.insertData();
},
promocionDataGrid1Selected: function(inSender, inIndex) {
if(this.aprobadoEditor1.dataValue == true){
this.promovidoEditor1.enable();
this.commentpromovidoEditor1.enable();
}
else{
this.promovidoEditor1.disable();
this.commentpromovidoEditor1.disable();
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
this.promocion_container_datag_personas_x_curso.setDisabled(false);
this.promocionDataGrid1.setDisabled(false);
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
var jsonobject= main.a_informacionUsuario2.getItem(0);
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
$('#main_menu_asignatura_butt')
.css('background-color', '#a3a3a3');
$('#main_menu_estudiante_butt')
.css('background-color', '#a3a3a3');
},
menu_curriculo_buttClick3: function(inSender) {
$('#main_menu_curriculo_butt')
.css('background-color', '#1125b2');
$('#main_menu_inicio_butt')
.css('background-color', '#a3a3a3');
$('#main_menu_asignatura_butt')
.css('background-color', '#a3a3a3');
$('#main_menu_estudiante_butt')
.css('background-color', '#a3a3a3');
},
menu_asignatura_buttClick: function(inSender) {
$('#main_menu_asignatura_butt')
.css('background-color', '#1125b2');
$('#main_menu_curriculo_butt')
.css('background-color', '#a3a3a3');
$('#main_menu_inicio_butt')
.css('background-color', '#a3a3a3');
$('#main_menu_estudiante_butt')
.css('background-color', '#a3a3a3');
},
menu_estudiante_buttClick: function(inSender) {
$('#main_menu_estudiante_butt')
.css('background-color', '#1125b2');
$('#main_menu_asignatura_butt')
.css('background-color', '#a3a3a3');
$('#main_menu_curriculo_butt')
.css('background-color', '#a3a3a3');
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
this.ubicacionEditor1.setDataValue("http://aprendoz.rochester.edu.co/resources/data/"+name);
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
top_select_syChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
var idsy =  this.myCurSy();
var user =  main.global_username.getData().dataValue;
this.global_docentes_asignaturas.input.setValue("idsyr", idsy);
this.global_docentes_asignaturas.input.setValue("nickname", user);
this.global_docentes_asignaturas.update();
},
unidadLiveForm2InsertData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idunidad= main.idUnidadEditor2.getDataValue();
var idasignatura= main.idAsignaturaEditor1.getDataValue();
var unidad= main.unidadEditor2.getDataValue();
var unit= main.unitEditor2.getDataValue();
var finicio= main.fechaInicioEditor3.getDisplayValue();
var ffinal= main.fechaFinEditor3.getDisplayValue();
var nounidad= main.numeroUnidadselect1.getDataValue();
var accion= "v2-docentes-unidad -> accion: crear "+" ->idUnidad: "+idunidad+" ->idAsignatura: "+idasignatura+" ->detalles: "+unidad+"-"+unit+" ->finicio: "+finicio+" ->ffinal: "+ffinal+" >no_unidad: "+nounidad;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Unidad");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
unidadLiveForm2UpdateData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idunidad= main.idUnidadEditor2.getDataValue();
var idasignatura= main.idAsignaturaEditor1.getDataValue();
var unidad= main.unidadEditor2.getDataValue();
var unit= main.unitEditor2.getDataValue();
var finicio= main.fechaInicioEditor3.getDisplayValue();
var ffinal= main.fechaFinEditor3.getDisplayValue();
var nounidad= main.numeroUnidadselect1.getDataValue();
var accion= "v2-docentes-unidad -> accion: actualizar "+" ->idUnidad: "+idunidad+" ->idAsignatura: "+idasignatura+" ->detalles: "+unidad+"-"+unit+" ->finicio: "+finicio+" ->ffinal: "+ffinal+" >no_unidad: "+nounidad;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Unidad");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
unidadLiveForm2DeleteData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idunidad= main.idUnidadEditor2.getDataValue();
var idasignatura= main.idAsignaturaEditor1.getDataValue();
var unidad= main.unidadEditor2.getDataValue();
var unit= main.unitEditor2.getDataValue();
var finicio= main.fechaInicioEditor3.getDisplayValue();
var ffinal= main.fechaFinEditor3.getDisplayValue();
var nounidad= main.numeroUnidadselect1.getDataValue();
var accion= "v2-docentes-unidad -> accion: borrar "+" ->idUnidad: "+idunidad+" ->idAsignatura: "+idasignatura+" ->detalles: "+unidad+"-"+unit+" ->finicio: "+finicio+" ->ffinal: "+ffinal+" >no_unidad: "+nounidad;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Unidad");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
subtopicoLiveForm2InsertData: function(inSender) {
var user= main.global_username.getData().dataValue;
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
var user= main.global_username.getData().dataValue;
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
var user= main.global_username.getData().dataValue;
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
var user= main.global_username.getData().dataValue;
var idaprendizaje = main.idAprendizajeEditor2.getDataValue();
var idsubtopico = main.idSubtopicoEditor1.getDataValue();
var fesperada= main.fechaEsperadaEditor2.getDisplayValue();
var aprendizaje= main.aprendizajeEditor2.getDataValue();
var learning= main.learningEditor2.getDataValue();
var peso= main.numeroAprendizajeSelectMenu1.getDataValue();
var eje1 = main.ejeSelect1.getDisplayValue();
var eje2 = main.ejeSelect2.getDisplayValue();
var eje3 = main.ejeSelect3.getDisplayValue();
var nivel= main.nivelEsperadoLookup2.getDisplayValue();
var dcomprension = main.dimensionComprensionLookup2.getDisplayValue();
var dcurricular = main.dimensionCurricularLookup2.getDisplayValue();
var inteligencia= main.inteligenciaLookup2.getDisplayValue();
var accion= "v2-docentes-aprendizaje -> accion: crear "+" ->idAprendizaje: "+idaprendizaje+" ->idSubtopico: "+idsubtopico+" ->detalles: "+aprendizaje+" - "+learning+" ->fesperada: "+fesperada+" ->peso: "+peso+" ->eje1: "+eje1+" ->eje2: "+eje2+" ->eje3: "+eje3+" ->nivel: "+nivel+" ->dcomprension: "+dcomprension+" ->dcurricular: "+dcurricular+" ->inteligencia: "+inteligencia;          var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Aprendizaje");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
aprendizajeLiveForm2UpdateData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idaprendizaje = main.idAprendizajeEditor2.getDataValue();
var idsubtopico = main.idSubtopicoEditor1.getDataValue();
var fesperada= main.fechaEsperadaEditor2.getDisplayValue();
var aprendizaje= main.aprendizajeEditor2.getDataValue();
var learning= main.learningEditor2.getDataValue();
var peso= main.numeroAprendizajeSelectMenu1.getDataValue();
var eje1 = main.ejeSelect1.getDisplayValue();
var eje2 = main.ejeSelect2.getDisplayValue();
var eje3 = main.ejeSelect3.getDisplayValue();
var nivel= main.nivelEsperadoLookup2.getDisplayValue();
var dcomprension = main.dimensionComprensionLookup2.getDisplayValue();
var dcurricular = main.dimensionCurricularLookup2.getDisplayValue();
var inteligencia= main.inteligenciaLookup2.getDisplayValue();
var accion= "v2-docentes-aprendizaje -> accion: actualizar "+" ->idAprendizaje: "+idaprendizaje+" ->idSubtopico: "+idsubtopico+" ->detalles: "+aprendizaje+" - "+learning+" ->fesperada: "+fesperada+" ->peso: "+peso+" ->eje1: "+eje1+" ->eje2: "+eje2+" ->eje3: "+eje3+" ->nivel: "+nivel+" ->dcomprension: "+dcomprension+" ->dcurricular: "+dcurricular+" ->inteligencia: "+inteligencia;          var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Aprendizaje");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
aprendizajeLiveForm2DeleteData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idaprendizaje = main.idAprendizajeEditor2.getDataValue();
var idsubtopico = main.idSubtopicoEditor1.getDataValue();
var fesperada= main.fechaEsperadaEditor2.getDisplayValue();
var aprendizaje= main.aprendizajeEditor2.getDataValue();
var learning= main.learningEditor2.getDataValue();
var peso= main.numeroAprendizajeSelectMenu1.getDataValue();
var eje1 = main.ejeSelect1.getDisplayValue();
var eje2 = main.ejeSelect2.getDisplayValue();
var eje3 = main.ejeSelect3.getDisplayValue();
var nivel= main.nivelEsperadoLookup2.getDisplayValue();
var dcomprension = main.dimensionComprensionLookup2.getDisplayValue();
var dcurricular = main.dimensionCurricularLookup2.getDisplayValue();
var inteligencia= main.inteligenciaLookup2.getDisplayValue();
var accion= "v2-docentes-aprendizaje -> accion: borrar "+" ->idAprendizaje: "+idaprendizaje+" ->idSubtopico: "+idsubtopico+" ->detalles: "+aprendizaje+" - "+learning+" ->fesperada: "+fesperada+" ->peso: "+peso+" ->eje1: "+eje1+" ->eje2: "+eje2+" ->eje3: "+eje3+" ->nivel: "+nivel+" ->dcomprension: "+dcomprension+" ->dcurricular: "+dcurricular+" ->inteligencia: "+inteligencia;          var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Aprendizaje");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
otrasmetasLiveForm2InsertData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idmeta= main.idOtraMetaEditor2.getDataValue();
var idsubtopico= main.idSubtopicoEditor3.getDataValue();
var meta= main.metaEditor2.getDataValue();
var fecha= main.fechaEditorDate1.getDisplayValue();
var logrado= main.logradoEditor3.getDataValue();
var accion= "v2-docentes-metas -> accion: crear "+" ->idmeta: "+idmeta+" ->idSubtopico: "+idsubtopico+" ->detalles: "+meta+" ->fecha: "+fecha+" ->logrado: "+logrado;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","OtrasMetas");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
otrasmetasLiveForm2UpdateData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idmeta= main.idOtraMetaEditor2.getDataValue();
var idsubtopico= main.idSubtopicoEditor3.getDataValue();
var meta= main.metaEditor2.getDataValue();
var fecha= main.fechaEditorDate1.getDisplayValue();
var logrado= main.logradoEditor3.getDataValue();
var accion= "v2-docentes-metas -> accion: actualizar "+" ->idmeta: "+idmeta+" ->idSubtopico: "+idsubtopico+" ->detalles: "+meta+" ->fecha: "+fecha+" ->logrado: "+logrado;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","OtrasMetas");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
otrasmetasLiveForm2DeleteData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idmeta= main.idOtraMetaEditor2.getDataValue();
var idsubtopico= main.idSubtopicoEditor3.getDataValue();
var meta= main.metaEditor2.getDataValue();
var fecha= main.fechaEditorDate1.getDisplayValue();
var logrado= main.logradoEditor3.getDataValue();
var accion= "v2-docentes-metas -> accion: borrar "+" ->idmeta: "+idmeta+" ->idSubtopico: "+idsubtopico+" ->detalles: "+meta+" ->fecha: "+fecha+" ->logrado: "+logrado;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","OtrasMetas");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
recursoLiveForm1InsertData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idrecurso= main.idRecursoEditor1.getDataValue();
var idsubtopico= main.idSubtopicoEditor4.getDataValue();
var recurso= main.recursoTextEditor1.getDataValue();
var direccion = main.ubicacionEditor1.getDataValue();
var tipo = main.tipoRecursoLookup1.getDisplayValue();
var accion= "v2-docentes-recurso -> accion: crear "+" ->idrecurso: "+idrecurso+" ->idSubtopico: "+idsubtopico+" ->detalles: "+recurso+" ->direccion: "+direccion+"->tipo: "+tipo;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Recurso");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
recursoLiveForm1UpdateData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idrecurso= main.idRecursoEditor1.getDataValue();
var idsubtopico= main.idSubtopicoEditor4.getDataValue();
var recurso= main.recursoTextEditor1.getDataValue();
var direccion = main.ubicacionEditor1.getDataValue();
var tipo = main.tipoRecursoLookup1.getDisplayValue();
var accion= "v2-docentes-recurso -> accion: actualizar "+" ->idrecurso: "+idrecurso+" ->idSubtopico: "+idsubtopico+" ->detalles: "+recurso+" ->direccion: "+direccion+"->tipo: "+tipo;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Recurso");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
recursoLiveForm1DeleteData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idrecurso= main.idRecursoEditor1.getDataValue();
var idsubtopico= main.idSubtopicoEditor4.getDataValue();
var recurso= main.recursoTextEditor1.getDataValue();
var direccion = main.ubicacionEditor1.getDataValue();
var tipo = main.tipoRecursoLookup1.getDisplayValue();
var accion= "v2-docentes-recurso -> accion: borrar "+" ->idrecurso: "+idrecurso+" ->idSubtopico: "+idsubtopico+" ->detalles: "+recurso+" ->direccion: "+direccion+"->tipo: "+tipo;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Recurso");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
actividadLiveForm3InsertData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idactividad= main.idActividadEditor3.getDataValue();
var idsubtopico = main.idSubtopicoEditor5.getDataValue();
var fecha= main.fechaEditor6.getDisplayValue();
var actividad = main.actividadEditor3.getDataValue();
var requerido= main.requeridoAlternativoEditor3.getDataValue();
var tipo_actividad= main.lookup3.getDisplayValue();
var retro = main.lookup1.getDisplayValue();
var desempeno = main.lookup2.getDisplayValue();
var accion= "v2-docentes-actividad -> accion: crear "+" ->idactividad: "+idactividad+" ->idSubtopico: "+idsubtopico+" ->detalles: "+actividad+" ->fecha: "+fecha+" ->requerido: "+requerido+" ->tipo_actividad: "+tipo_actividad+" ->retroalimentacio: "+retro+" ->desempeno: "+desempeno;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Actividad");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
actividadLiveForm3UpdateData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idactividad= main.idActividadEditor3.getDataValue();
var idsubtopico = main.idSubtopicoEditor5.getDataValue();
var fecha= main.fechaEditor6.getDisplayValue();
var actividad = main.actividadEditor3.getDataValue();
var requerido= main.requeridoAlternativoEditor3.getDataValue();
var tipo_actividad= main.lookup3.getDisplayValue();
var retro = main.lookup1.getDisplayValue();
var desempeno = main.lookup2.getDisplayValue();
var accion= "v2-docentes-actividad -> accion: actualizar "+" ->idactividad: "+idactividad+" ->idSubtopico: "+idsubtopico+" ->detalles: "+actividad+" ->fecha: "+fecha+" ->requerido: "+requerido+" ->tipo_actividad: "+tipo_actividad+" ->retroalimentacio: "+retro+" ->desempeno: "+desempeno;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Actividad");
this.logCurriculoDocentes.setValue("usuario",user);
this.logDocentesliveForm.setDataSet(this.logCurriculoDocentes);
this.logDocentesliveForm.insertData();
},
actividadLiveForm3DeleteData: function(inSender) {
var user= main.global_username.getData().dataValue;
var idactividad= main.idActividadEditor3.getDataValue();
var idsubtopico = main.idSubtopicoEditor5.getDataValue();
var fecha= main.fechaEditor6.getDisplayValue();
var actividad = main.actividadEditor3.getDataValue();
var requerido= main.requeridoAlternativoEditor3.getDataValue();
var tipo_actividad= main.lookup3.getDisplayValue();
var retro = main.lookup1.getDisplayValue();
var desempeno = main.lookup2.getDisplayValue();
var accion= "v2-docentes-actividad -> accion: borrar "+" ->idactividad: "+idactividad+" ->idSubtopico: "+idsubtopico+" ->detalles: "+actividad+" ->fecha: "+fecha+" ->requerido: "+requerido+" ->tipo_actividad: "+tipo_actividad+" ->retroalimentacio: "+retro+" ->desempeno: "+desempeno;
var now= new Date().getTime();
this.logCurriculoDocentes.setValue("accionRealizada",accion);
this.logCurriculoDocentes.setValue("fechaCreacion",now);
this.logCurriculoDocentes.setValue("tablaAfectada","Actividad");
this.logCurriculoDocentes.setValue("usuario",user);
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
var sy= main.global_cursy.getItem(0).data.sy;
main.top_select_sy.setDisplayValue(sy)
},
asignaturas_vista_asignaturas_estudiantes_svSuccess: function(inSender, inDeprecated) {
var count= main.asignaturas_vista_asignaturas_estudiantes_sv.getCount();
this.asignatura_footer_counter_label.setCaption("  Total alumnos en la asignatura: "+count);
},
curriculo_detalles_estudiantes_buttClick: function(inSender) {
var idasignatura= main.curriculo_grid_docentes_asignaturas.selectedItem.getData().idasignatura;
var asignatura= main.curriculo_grid_docentes_asignaturas.selectedItem.getData().asignatura;
main.asignaturas_vista_asignaturas_estudiantes_sv.input.setValue("pasig", idasignatura)
this.asignaturas_vista_asignaturas_estudiantes_sv.update();
this.asignatura_titulo.setCaption("   &NestedGreaterGreater; "+asignatura);
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
$('#main_menu_asignatura_butt')
.css('background-color', '#1125b2');
$('#main_menu_curriculo_butt')
.css('background-color', '#a3a3a3');
$('#main_menu_inicio_butt')
.css('background-color', '#a3a3a3');
},
asignatura_detalles_alumnoClick1: function(inSender) {
var idpersona = main.dojoGrid1.selectedItem.getData().idPersona;
var idasignatura = main.dojoGrid1.selectedItem.getData().idasignatura;
var codigo= main.dojoGrid1.selectedItem.getData().codigo;
var nombre= main.dojoGrid1.selectedItem.getData().nombres;
var asig= main.dojoGrid1.selectedItem.getData().asignatura;
var std_nombre= main.dojoGrid1.selectedItem.getData().nombres;
var std_apellido= main.dojoGrid1.selectedItem.getData().apellidos;
var curso= main.dojoGrid1.selectedItem.getData().curso;
this.estudiante_foto_perfil.setSource("http://www.rochester.edu.co/fotosestudiantes/"+codigo+".Jpeg");
this.estudiante_demografica_butt.setCaption("&NestedGreaterGreater; "+nombre);
this.estudiante_asignatura_butt.setCaption("&NestedGreaterGreater; "+asig);
this.estudiante_nombre_perfil.setCaption(std_nombre+"<br>"+std_apellido+"<br><br>"+curso);
main.estudiantes_detalles_curriculo.input.setValue("pidasignatura",idasignatura);
main.estudiantes_detalles_curriculo.input.setValue("pidpersona",idpersona);
main.estudiantes_detalles_curriculo.update();
},
// hightlight the button when detalles_alumnos pressed!
asignatura_detalles_alumnoClick2: function(inSender) {
$('#main_menu_estudiante_butt')
.css('background-color', '#1125b2');
$('#main_menu_asignatura_butt')
.css('background-color', '#a3a3a3');
$('#main_menu_curriculo_butt')
.css('background-color', '#a3a3a3');
$('#main_menu_inicio_butt')
.css('background-color', '#a3a3a3');
},
menu_estudiante_buttClick1: function(inSender) {
this.curriculo_big_panel.hide();
this.how_to_start.hide();
this.inicio_big_panel.hide();
this.asignatura_big_panel.hide();
this.estudiante_big_panel.show();
},
estudiante_asignatura_buttClick: function(inSender) {
$('#main_menu_asignatura_butt')
.css('background-color', '#1125b2');
$('#main_menu_curriculo_butt')
.css('background-color', '#a3a3a3');
$('#main_menu_inicio_butt')
.css('background-color', '#a3a3a3');
$('#main_menu_estudiante_butt')
.css('background-color', '#a3a3a3');
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
var user= main.global_username.getData().dataValue;
var now= new Date().getTime();
var tipo= this.feedback_tipo_feedback.getDataValue();
var titulo= this.feedback_titulo.getDataValue();
var comentario= this.feedback_comentario.getDataValue();
this.feedback_sendFeedBack.setValue("usuario",user);
this.feedback_sendFeedBack.setValue("titulo",titulo);
this.feedback_sendFeedBack.setValue("comentario",comentario);
this.feedback_sendFeedBack.setValue("fechaCreacion",now);
this.feedback_sendFeedBack.setValue("fechaActualizacion",now);
this.feedback_sendFeedBack.setValue("tipoFeedback",tipo);
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
muestraCoordinadorCursoSuccess: function(inSender, inDeprecated) {
var count = main.muestraCoordinadorCurso.getCount();
if(count > 0){
this.panelCoordinadorCurso.show();
this.dashboard_chart4();
this.dashboard_chart6();
}else{
this.panelCoordinadorCurso.hide();
}
},
muestraCoordinadorSubAreaSuccess: function(inSender, inDeprecated) {
var count = main.muestraCoordinadorSubArea.getCount();
if(count > 0){
this.panelCoordinadorCurricular.show();
}else{
this.panelCoordinadorCurricular.hide();
}
},
//chart4
dashboard_chart4: function() {
var porc_faltas = main.dashboard_faltas_graves.getItem(0).data.id.data.porcentajeFaltasGraves;
var curso       = main.dashboard_faltas_graves.getItem(0).data.id.data.curso;
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
dashboard_chart5: function(){
var score = main.dashboard_puntaje_asig_global.getItem(0).data.id.data.avgPuntaje;
var subject = main.dashboard_puntaje_asig_global.getItem(0).data.id.data.asignatura;
var data = google.visualization.arrayToDataTable([
['Label', 'Value'],
['Puntaje', score]
]);
var options = {
width: 230, height: 200,
redFrom: 0, redTo: 82,
yellowFrom:82, yellowTo: 107,
yellowColor: '#F27D1B',
yellowFrom:107, yellowTo: 137,
greenFrom:137, greenTo: 160,
minorTicks: 10,
max: 160
};
var chart = this._chart = new google.visualization.Gauge(this.chart5.domNode);
chart.draw(data, options);
},
//chart6
dashboard_chart6: function(){
var length = main.dashboard_calificacion_estudiantes.getCount();
var result = [];
var mydata = main.dashboard_calificacion_estudiantes.getData();
for(var i = 0 ;  i < mydata.length ; i++){
console.log(i);
var base   = mydata[i];
console.log(base);
var std    = base.id.alumnoApellido1;
var score  = base.id.puntaje;
result.push([std, score]);
}
var data = new google.visualization.DataTable();
data.addColumn('string', 'Estudiantes');
data.addColumn('number', 'Puntaje');
data.addRows(result);
var view = new google.visualization.DataView(data);
var options = {
title: "PUNTAJE DE ESTUDIANTES POR CURSO",
width: 800,
height: 400,
bar: {groupWidth: "95%"},
legend: { position: "none" },
};
var chart = new google.visualization.ColumnChart(this.chart6.domNode);
chart.draw(view, options);
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
var mydata      = this.dashboard_malla_dimension_comprension.getData();
var dimensiones = [];
var data        = [];
for(var i = 0 ;  i < mydata.length ; i++){
console.log(i);
var base   = mydata[i];
console.log(base);
var dims    = base.id.dimensionComprension;
var values  = base.id.porcentaje;
console.log("Dimension: "+ dims + " Values: "+ values);
dimensiones.push(dims);
data.push(values);
console.log(dimensiones);
console.log(data);
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
var mydata      = this.dashboard_malla_dimension_curricular.getData();
var dimensiones = [];
var data        = [];
for(var i = 0 ;  i < mydata.length ; i++){
console.log(i);
var base   = mydata[i];
console.log(base);
var dims    = base.id.dimensionCurricular;
var values  = base.id.porcentaje;
console.log("Dimension: "+ dims + " Values: "+ values);
dimensiones.push(dims);
data.push(values);
console.log(dimensiones);
console.log(data);
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
//the end
_end: 0
});

Main.widgets = {
listGrado: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Grado","startUpdate":false,"type":"com.aprendoz_test.data.Grado"}, {}],
iraformularios: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"cur_formularios","targetProperty":"layer"}, {}]
}]
}]
}],
iraSALIR: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Login\"","targetProperty":"pageName"}, {}]
}]
}]
}],
getUserName: ["wm.ServiceVariable", {"operation":"getUserName","service":"securityService"}, {}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
estudiantes: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","maxResults":50,"startUpdate":false,"type":"com.aprendoz_test.data.InscAlumCurso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_encabezado_opciones_sel_curso.dataValue","targetProperty":"filter.curso.idCurso"}, {}]
}]
}],
iraCalificaciones: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calificaciones","targetProperty":"layer"}, {}]
}]
}]
}],
alumnosCURSOS: ["wm.LiveVariable", {"autoUpdate":false,"designMaxResults":40,"liveSource":"com.aprendoz_test.data.InscAlumCurso","maxResults":40,"orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2","startUpdate":false,"type":"com.aprendoz_test.data.InscAlumCurso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_encabezado_opciones_sel_curso.dataValue","targetProperty":"filter.curso.idCurso"}, {}],
wire1: ["wm.Wire", {"source":"calif_encabezado_opciones_sel_sy.dataValue","targetProperty":"filter.sy.idSy"}, {}],
wire2: ["wm.Wire", {"source":"calif_contenedor_sel_Genero.dataValue","targetProperty":"filter.persona.sexo"}, {}]
}]
}],
alumnoslv: ["wm.LiveVariable", {"autoUpdate":false,"designMaxResults":30,"liveSource":"com.aprendoz_test.data.InscAlumCurso","maxResults":30,"orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2","startUpdate":false,"type":"com.aprendoz_test.data.InscAlumCurso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_alumnos_panel1_sel_curso.dataValue","targetProperty":"filter.curso.idCurso"}, {}],
wire1: ["wm.Wire", {"source":"calif_alumnos_panel1_sel_sy.dataValue","targetProperty":"filter.sy.idSy"}, {}]
}]
}],
unidadlv: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Unidad","maxResults":50,"orderBy":"asc: numeroUnidad","startUpdate":false,"type":"com.aprendoz_test.data.Unidad"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_alumnos_datagrids_datag_alumnos_asignaturas.selectedItem.asignatura.idAsignatura","targetProperty":"filter.asignatura.idAsignatura"}, {}]
}]
}],
subtopicolv: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Subtopico","startUpdate":false,"type":"com.aprendoz_test.data.Subtopico"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"unidad.selectedItem.idUnidad","targetProperty":"filter.unidad.idUnidad"}, {}]
}]
}],
personaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.personaLiveView1","maxResults":50,"startUpdate":false,"type":"com.aprendoz_test.data.Persona"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"inscripcion_estudiante.selectedItem.persona.codigo","targetProperty":"filter.codigo"}, {}]
}]
}],
listapersonas: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","maxResults":50,"startUpdate":false,"type":"com.aprendoz_test.data.InscAlumCurso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"grado2.dataValue","targetProperty":"filter.curso.idCurso"}, {}]
}]
}],
listaPeriodo: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Sy","startUpdate":false,"type":"com.aprendoz_test.data.Sy"}, {}],
inscalumactividadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"ignoreCase":true,"liveSource":"app.inscalumactividadLiveView1","maxResults":100,"orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2","startUpdate":false,"type":"com.aprendoz_test.data.InscAlumActividad"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"source":"activities_studentsDataGrid.selectedItem.persona.idPersona","targetProperty":"filter.persona.idPersona"}, {}]
}]
}],
asignaturaslv1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Asignatura","startUpdate":false,"type":"com.aprendoz_test.data.Asignatura"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"selectEditor17.dataValue","targetProperty":"filter.grado.idGrado"}, {}]
}]
}],
inscalumasigLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.inscalumasigLiveView3","orderBy":"asc: persona.apellido1, asc: persona.apellido2,  asc: persona.nombre1, asc: persona.nombre2","startUpdate":false,"type":"com.aprendoz_test.data.InscAlumAsig"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"source":"Schoolar_Year.dataValue","targetProperty":"filter.asignatura.sy.idSy"}, {}],
wire: ["wm.Wire", {"source":"inscripcion_asignatura.selectedItem.id.idAsignatura","targetProperty":"filter.asignatura.idAsignatura"}, {}],
wire2: ["wm.Wire", {"source":"inscripcion_estudiante.selectedItem.id.idPersona","targetProperty":"filter.persona.idPersona"}, {}]
}]
}],
vistaEstudiantes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false}, {}, {
liveView: ["wm.LiveView", {}, {}]
}],
vistaALUMNOS: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumAsigCurso","startUpdate":false,"type":"com.aprendoz_test.data.InscAlumAsigCurso"}, {}],
insccursoasigLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"designMaxResults":30,"liveSource":"app.insccursoasigLiveView2","maxResults":40,"startUpdate":false,"type":"com.aprendoz_test.data.InscCursoAsig"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"cur_encabezado_tex_ldapUser.dataValue","targetProperty":"filter.persona.nombreLdap"}, {}],
wire1: ["wm.Wire", {"source":"cur_encabezado_sel_sy.dataValue","targetProperty":"filter.periodo.sy.idSy"}, {}],
wire2: ["wm.Wire", {"source":"cur_encabezado_sel_grado.dataValue","targetProperty":"filter.asignatura.grado.idGrado"}, {}]
}]
}],
sp_insertar_actividades: ["wm.ServiceVariable", {"operation":"corre_proc_act_cur","service":"sp_actividad_curso"}, {"onSuccess":"inscalumactividadLiveVariable1"}, {
input: ["wm.ServiceInput", {"type":"corre_proc_act_curInputs"}, {}]
}],
ls_Area1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Area","startUpdate":false,"type":"com.aprendoz_test.data.Area"}, {}],
ls_Area2: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Area","startUpdate":false,"type":"com.aprendoz_test.data.Area"}, {}],
ls_Area3: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Area","startUpdate":false,"type":"com.aprendoz_test.data.Area"}, {}],
lv_subarea1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Subarea","startUpdate":false,"type":"com.aprendoz_test.data.Subarea"}, {}],
actualizacalifestuapren: ["wm.ServiceVariable", {"operation":"corre_proc_calcula_calif_est","service":"actualiza_calif"}, {"onResult":"actualizacalifestuaprenResult","onSuccess":"aux200"}, {
input: ["wm.ServiceInput", {"type":"corre_proc_calcula_calif_estInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"source":"personaaux.dataValue","targetProperty":"Pr_Id_Persona"}, {}],
wire: ["wm.Wire", {"source":"aprendizajeaux.dataValue","targetProperty":"Pr_Id_Aprendizaje"}, {}]
}]
}]
}],
iraFormulario2: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"layer47","targetProperty":"layer"}, {}]
}]
}]
}],
actualizacalifestudiante: ["wm.ServiceVariable", {"operation":"corre_proc_calcula_calif_est","service":"actualiza_calif"}, {"onResult":"actualizacalifestudianteResult"}, {
input: ["wm.ServiceInput", {"type":"corre_proc_calcula_calif_estInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"aux200.dataValue","targetProperty":"Pr_Id_Aprendizaje"}, {}],
wire1: ["wm.Wire", {"source":"aux199.dataValue","targetProperty":"Pr_Id_Persona"}, {}]
}]
}]
}],
a_lista_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy","type":"com.aprendoz_test.data.Sy"}, {"onSuccess":"a_lista_sySuccess"}],
a_grado: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Grado","startUpdate":false,"type":"com.aprendoz_test.data.Grado"}, {}],
l_cur_formularios_recursos_tipoRecurso: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.TipoRecurso","startUpdate":false,"type":"com.aprendoz_test.data.TipoRecurso"}, {"onBeforeUpdate":"l_cur_formularios_recursos_tipoRecursoBeforeUpdate","onSuccess":"l_cur_formularios_recursos_tipoRecursoSuccess"}],
l_calif_encabezado_opciones_listaCursos: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Curso","startUpdate":false,"type":"com.aprendoz_test.data.Curso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_encabezado_opciones_sel_grado.dataValue","targetProperty":"filter.grado.idGrado"}, {}]
}]
}],
l_calif_contenedor_tablas_asignaturas_docentes: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.VProfesorAsignatura","startUpdate":false,"type":"com.aprendoz_test.data.VProfesorAsignatura"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"cur_encabezado_tex_ldapUser.dataValue","targetProperty":"filter.id.nombreLdap"}, {}],
wire1: ["wm.Wire", {"source":"calif_encabezado_opciones_sel_grado.dataValue","targetProperty":"filter.id.gradoIdGrado"}, {}],
wire2: ["wm.Wire", {"source":"calif_encabezado_opciones_sel_sy.dataValue","targetProperty":"filter.id.syIdSy"}, {}]
}]
}],
l_calif_contenedor_tablas_aprendizajes: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaAprendizajesAsignatura","orderBy":"asc: id.fechaEsperada","startUpdate":false,"type":"com.aprendoz_test.data.DocentesVistaAprendizajesAsignatura"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_asig_datag_asignaturasDataGrid1.selectedItem.id.asignaturaIdAsignatura","targetProperty":"filter.id.asignaturaIdAsignatura"}, {}]
}]
}],
l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso: ["wm.LiveVariable", {"autoUpdate":false,"designMaxResults":40,"liveSource":"com.aprendoz_test.data.InscAlumAsigCurso","maxResults":100,"orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2","startUpdate":false,"type":"com.aprendoz_test.data.InscAlumAsigCurso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_encabezado_opciones_sel_sy.dataValue","targetProperty":"filter.id.syIdSy"}, {}],
wire1: ["wm.Wire", {"source":"calif_encabezado_opciones_sel_curso.dataValue","targetProperty":"filter.id.idCurso"}, {}],
wire3: ["wm.Wire", {"source":"calif_contenedor_sel_Genero.dataValue","targetProperty":"filter.id.sexo"}, {}],
wire2: ["wm.Wire", {"source":"calif_asig_datag_asignaturasDataGrid1.selectedItem.id.asignaturaIdAsignatura","targetProperty":"filter.id.asignaturaIdAsignatura"}, {}]
}]
}],
l_calif_contenedor_tablas_calificacion_final: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaCalificacionFinal","startUpdate":false,"type":"com.aprendoz_test.data.DocentesVistaCalificacionFinal"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_asig_datag_aprendizajesDataGrid1.selectedItem.id.idAprendizaje","targetProperty":"filter.id.aprendizajeIdAprendizaje"}, {}],
wire1: ["wm.Wire", {"source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.id.personaIdPersona","targetProperty":"filter.id.personaIdPersona"}, {}]
}]
}],
l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"designMaxResults":10,"liveSource":"app.inscalumaprendizajeLiveView3","maxResults":50,"orderBy":"desc: idInscAlumAprendizaje","startUpdate":false,"type":"com.aprendoz_test.data.InscAlumAprendizaje"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.persona.idPersona","targetProperty":"filter.inscAlumCurso.persona.idPersona"}, {}],
wire: ["wm.Wire", {"source":"calif_asig_datag_aprendizajesDataGrid1.selectedItem.id.idAprendizaje","targetProperty":"filter.aprendizaje.idAprendizaje"}, {}],
wire2: ["wm.Wire", {"source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.id.personaIdPersona","targetProperty":"filter.persona.idPersona"}, {}]
}]
}],
l_calif_alumnos_listaCursos: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Curso","startUpdate":false,"type":"com.aprendoz_test.data.Curso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_alumnos_panel1_sel_grado.dataValue","targetProperty":"filter.grado.idGrado"}, {}]
}]
}],
l_calif_alumnos_alumnosCursos: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.VistaInscAlumnCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2","startUpdate":false,"type":"com.aprendoz_test.data.VistaInscAlumnCurso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_alumnos_panel1_sel_curso.dataValue","targetProperty":"filter.id.idCurso"}, {}],
wire1: ["wm.Wire", {"source":"calif_alumnos_panel1_sel_sy.dataValue","targetProperty":"filter.id.idSy"}, {}]
}]
}],
l_calif_alumnos_aprendizajes: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaAprendizajesAsignatura","orderBy":"asc: id.fechaEsperada","startUpdate":false,"type":"com.aprendoz_test.data.DocentesVistaAprendizajesAsignatura"}, {}],
l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.inscalumaprendizajeLiveView1","startUpdate":false,"type":"com.aprendoz_test.data.InscAlumAprendizaje"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.persona.idPersona","targetProperty":"filter.inscAlumCurso.persona.idPersona"}, {}],
wire: ["wm.Wire", {"source":"calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.id.idAprendizaje","targetProperty":"filter.aprendizaje.idAprendizaje"}, {}],
wire2: ["wm.Wire", {"source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona","targetProperty":"filter.persona.idPersona"}, {}]
}]
}],
l_calif_alumnos_calificaciones_finales: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaCalificacionFinal","startUpdate":false,"type":"com.aprendoz_test.data.DocentesVistaCalificacionFinal"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona","targetProperty":"filter.id.personaIdPersona"}, {}],
wire1: ["wm.Wire", {"source":"calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.id.idAprendizaje","targetProperty":"filter.id.aprendizajeIdAprendizaje"}, {}]
}]
}],
l_inscrip_panel_lista_cursos: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Curso","startUpdate":false,"type":"com.aprendoz_test.data.Curso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Grado.dataValue","targetProperty":"filter.grado.idGrado"}, {}]
}]
}],
l_inscrip_panel_VistaAsignaturas: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.InscipcionesVistaAsignaturas","orderBy":"asc: id.asignatura","startUpdate":false,"type":"com.aprendoz_test.data.InscipcionesVistaAsignaturas"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Grado.dataValue","targetProperty":"filter.id.gradoIdGrado"}, {}],
wire1: ["wm.Wire", {"source":"Schoolar_Year.dataValue","targetProperty":"filter.id.syIdSy"}, {}]
}]
}],
l_inscrip_panel_VistaEstudiantesCursos: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.InscripcionesVistaInscAlumnCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2","startUpdate":false,"type":"com.aprendoz_test.data.InscripcionesVistaInscAlumnCurso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Curso.dataValue","targetProperty":"filter.id.idCurso"}, {}],
wire1: ["wm.Wire", {"source":"Schoolar_Year.dataValue","targetProperty":"filter.id.idSy"}, {}]
}]
}],
l_nivel_asig_asignaturas_vista_docentes_asignaturas: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.VProfesorAsignatura","startUpdate":false,"type":"com.aprendoz_test.data.VProfesorAsignatura"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"nivel_encabezado_sel_sy.dataValue","targetProperty":"filter.id.syIdSy"}, {}],
wire1: ["wm.Wire", {"source":"nivel_encabezado_sel_grado.dataValue","targetProperty":"filter.id.gradoIdGrado"}, {}]
}]
}],
l_dirNivel_formulario_aprendizaje_lista_Ejes: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Eje","startUpdate":false,"type":"com.aprendoz_test.data.Eje"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_EjesBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_EjesSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"nivel_asig_datag_asignaturasDataGrid1.selectedItem.idSubarea1","targetProperty":"filter.subarea.idSubarea"}, {}]
}]
}],
l_dirNivel_formulario_aprendizaje_lista_domension_comprension: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionComprension","startUpdate":false,"type":"com.aprendoz_test.data.DimensionComprension"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_domension_comprensionBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_domension_comprensionSuccess"}],
l_dirNivel_formulario_aprendizaje_lista_domension_curricular: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionCurricular","startUpdate":false,"type":"com.aprendoz_test.data.DimensionCurricular"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_domension_curricularBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_domension_curricularSuccess"}],
a_isAuthenticated: ["wm.ServiceVariable", {"operation":"isAuthenticated","service":"securityService"}, {}, {
input: ["wm.ServiceInput", {"type":"isAuthenticatedInputs"}, {}]
}],
l_dirNivel_formulario_aprendizaje_lista_inteligencia: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia","startUpdate":false,"type":"com.aprendoz_test.data.Inteligencia"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_inteligenciaBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_inteligenciaSuccess"}],
l_promocion_insc_alum_curso: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.PromocionVistaInscAlumnCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2","startUpdate":false,"type":"com.aprendoz_test.data.PromocionVistaInscAlumnCurso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"promocion_sel_curso.dataValue","targetProperty":"filter.id.idCurso"}, {}],
wire1: ["wm.Wire", {"source":"promocion_sel_ao_escolar.dataValue","targetProperty":"filter.id.idSy"}, {}],
wire2: ["wm.Wire", {"source":"promocion_box_codigo.dataValue","targetProperty":"filter.id.codigo"}, {}]
}]
}],
l_promocion_curso: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Curso","startUpdate":false,"type":"com.aprendoz_test.data.Curso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"promocion_sel_grado.dataValue","targetProperty":"filter.grado.idGrado"}, {}]
}]
}],
l_promocion_promocionLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.promocionLiveView2","maxResults":50,"startUpdate":false,"type":"com.aprendoz_test.data.Promocion"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"promocion_container_datag_personas_x_curso.selectedItem.id.idPersona","targetProperty":"filter.persona.idPersona"}, {}],
wire1: ["wm.Wire", {"source":"promocion_sel_ao_escolar.dataValue","targetProperty":"filter.sy.idSy"}, {}]
}]
}],
a_getTipoPersona: ["wm.ServiceVariable", {"operation":"getInformacionValiosa","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"getInformacionValiosaInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"cur_encabezado_tex_ldapUser.dataValue","targetProperty":"usuario"}, {}]
}]
}]
}],
multiReporte: ["wm.ServiceVariable", {"operation":"getReport","service":"MultiReportes"}, {"onResult":"multiReporteResult"}, {
input: ["wm.ServiceInput", {"type":"getReportInputs"}, {}]
}],
tipoDocumento: ["wm.Variable", {"isList":true,"json":"[{name: \"PDF (Adobe Reader)\", value: \"PDF\"},\n{name: \"DOCX (Microsoft Word 2007 o Superior)\", value: \"DOCX\"}]","type":"EntryData"}, {}],
a_obtenerNombre: ["wm.ServiceVariable", {"operation":"getInformacionValiosa","service":"aprendoz_test"}, {"onSuccess":"a_obtenerNombreSuccess"}, {
input: ["wm.ServiceInput", {"type":"getInformacionValiosaInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"aux_getNameUser.dataValue","targetProperty":"usuario"}, {}]
}]
}]
}],
a_actualizaClave: ["wm.ServiceVariable", {"operation":"actualizarClave","service":"aprendoz_test"}, {"onError":"a_actualizaClaveError","onSuccess":"a_actualizaClaveSuccess"}, {
input: ["wm.ServiceInput", {"type":"actualizarClaveInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"aux_getNameUser.dataValue","targetProperty":"usuario"}, {}],
wire1: ["wm.Wire", {"source":"inicio_box_clave.dataValue","targetProperty":"clave"}, {}]
}]
}]
}],
a_numero_unidad: ["wm.Variable", {"isList":true,"json":"[{name: \"Unidad #1\", dataValue: 1}, \n{name: \"Unidad #2\", dataValue: 2}, \n{name: \"Unidad #3\", dataValue: 3},\n{name: \"Unidad #4\", dataValue: 4}, \n{name: \"Unidad #5\", dataValue: 5}, \n{name: \"Unidad #6\", dataValue: 6},\n{name: \"Unidad #7\", dataValue: 7}, \n{name: \"Unidad #8\", dataValue: 8}, \n{name: \"Unidad #9\", dataValue: 9},\n{name: \"Unidad #10\", dataValue: 10}]","type":"EntryData"}, {}],
a_numero_subtopico: ["wm.Variable", {"isList":true,"json":"[{name: \"Subtópico #1\", dataValue: 1}, \n{name: \"Subtópico #2\", dataValue: 2}, \n{name: \"Subtópico #3\", dataValue: 3},\n{name: \"Subtópico #4\", dataValue: 4}, \n{name: \"Subtópico #5\", dataValue: 5}, \n{name: \"Subtópico #6\", dataValue: 6},\n{name: \"Subtópico #7\", dataValue: 7}, \n{name: \"Subtópico #8\", dataValue: 8}, \n{name: \"Subtópico #9\", dataValue: 9},\n{name: \"Subtópico #10\", dataValue: 10}]","type":"EntryData"}, {}],
a_numero_aprendizaje: ["wm.Variable", {"isList":true,"json":"[{name: \"Aprendizaje #1\", dataValue: 1}, \n{name: \"Aprendizaje #2\", dataValue: 2}, \n{name: \"Aprendizaje #3\", dataValue: 3},\n{name: \"Aprendizaje #4\", dataValue: 4}, \n{name: \"Aprendizaje #5\", dataValue: 5}, \n{name: \"Aprendizaje #6\", dataValue: 6},\n{name: \"Aprendizaje #7\", dataValue: 7}, \n{name: \"Aprendizaje #8\", dataValue: 8}, \n{name: \"Aprendizaje #9\", dataValue: 9},\n{name: \"Aprendizaje #10\", dataValue: 10}]","type":"EntryData"}, {}],
a_pesos: ["wm.Variable", {"isList":true,"json":"[\n\t{name:\"1\", dataValue:\"1\"},\n        {name:\"2\", dataValue:\"2\"},\n\t{name:\"3\", dataValue:\"3\"},\n\t{name:\"4\", dataValue:\"4\"},\n\t{name:\"5\", dataValue:\"5\"}\n]\n","type":"EntryData"}, {}],
l_inicio_cursos: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Curso","startUpdate":false,"type":"com.aprendoz_test.data.Curso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"inicio_sel_grado.dataValue","targetProperty":"filter.grado.idGrado"}, {}]
}]
}],
a_logInsertRecords: ["wm.Variable", {"type":"com.aprendoz_test.data.LogDocentes"}, {}],
l_reportes_graficos_listado_reportes: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.DirectoresDocentesListadoReportes","matchMode":"anywhere","maxResults":50,"orderBy":"asc: id.codigo","startUpdate":false,"type":"com.aprendoz_test.data.DirectoresDocentesListadoReportes"}, {}],
openUpReportes: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Reportes\"","targetProperty":"pageName"}, {}]
}]
}]
}],
dash_dash_lv1: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"dash_logDocentes","service":"aprendoz_test"}, {"onSuccess":"dash_dash_lv1Success"}, {
input: ["wm.ServiceInput", {"type":"dash_logDocentesInputs"}, {}]
}],
dash_asig_doc: ["wm.ServiceVariable", {"operation":"dash_getAsigByDocente","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"dash_getAsigByDocenteInputs"}, {}]
}],
dash_chart2_lv2: ["wm.ServiceVariable", {"operation":"dash_no_calificados","service":"aprendoz_test"}, {"onSuccess":"dash_chart2_lv2Success"}, {
input: ["wm.ServiceInput", {"type":"dash_no_calificadosInputs"}, {}]
}],
dash_chart3_lv3: ["wm.ServiceVariable", {"operation":"dash_aprendizajes","service":"aprendoz_test"}, {"onSuccess":"dash_chart3_lv3Success"}, {
input: ["wm.ServiceInput", {"type":"dash_aprendizajesInputs"}, {}]
}],
a_nivel_esperado: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.NivelEsperado","startUpdate":false,"type":"com.aprendoz_test.data.NivelEsperado"}, {}],
l_calif_encabezado_opciones_listaCurso: ["wm.ServiceVariable", {"operation":"hql_ls_cursos","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"hql_ls_cursosInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_encabezado_opciones_sel_grado.dataValue","targetProperty":"idg"}, {}]
}]
}]
}],
l_calif_encabezado_opciones_listaCurso2: ["wm.ServiceVariable", {"operation":"hql_ls_cursos","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"hql_ls_cursosInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_alumnos_panel1_sel_grado.dataValue","targetProperty":"idg"}, {}]
}]
}]
}],
sendMailHQLService: ["wm.ServiceVariable", {"operation":"sendMailHQL","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"sendMailHQLInputs"}, {}]
}],
cur_ls_inteligencias: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia","startUpdate":false,"type":"com.aprendoz_test.data.Inteligencia"}, {}],
l_calif_alumnos_alumnos_asignaturas2: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaInscAlumnAsig","startUpdate":false,"type":"com.aprendoz_test.data.DocentesVistaInscAlumnAsig"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona","targetProperty":"filter.id.personaIdPersona"}, {}],
wire1: ["wm.Wire", {"source":"calif_alumnos_panel1_sel_sy.dataValue","targetProperty":"filter.id.idSy"}, {}]
}]
}],
l_calif_alumnos_alumnos_asignaturas: ["wm.ServiceVariable", {"operation":"subjectsBySyAndStudent","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"subjectsBySyAndStudentInputs"}, {}]
}],
iraUpload: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Uploads\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":"250","targetProperty":"width"}, {}],
wire2: ["wm.Wire", {"expression":"250","targetProperty":"height"}, {}]
}]
}]
}],
a_cursy: ["wm.ServiceVariable", {"operation":"getSyByCurDate_","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"getSyByCurDate_Inputs"}, {}]
}],
activitiesGetSubjectsByUser: ["wm.ServiceVariable", {"operation":"getSubjectsByProfile","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"getSubjectsByProfileInputs"}, {}]
}],
actividad_lv: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Actividad","orderBy":"asc: fecha","startUpdate":false,"type":"com.aprendoz_test.data.Actividad"}, {}],
actividad_estudiantes: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2 ","startUpdate":false,"type":"com.aprendoz_test.data.InscAlumCurso"}, {}],
global_cursy: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"_global_getSyByCurDate","service":"aprendoz_test"}, {"onSuccess":"global_cursySuccess"}, {
input: ["wm.ServiceInput", {"type":"_global_getSyByCurDateInputs"}, {}]
}],
global_docentes_asignaturas: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"_global_curriculo_asig_doc","service":"aprendoz_test"}, {"onResult":"global_docentes_asignaturasResult"}, {
input: ["wm.ServiceInput", {"type":"_global_curriculo_asig_docInputs"}, {}]
}],
global_username: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {"onSuccess":"global_usernameSuccess"}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
unidadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"type":"com.aprendoz_test.data.Unidad"}, {"onResult":"unidadLiveVariable1Result"}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Unidad","related":["asignatura"],"view":[
{"caption":"IdUnidad","sortable":true,"dataIndex":"idUnidad","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Unidad","sortable":true,"dataIndex":"unidad","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Unit","sortable":true,"dataIndex":"unit","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaInicio","sortable":true,"dataIndex":"fechaInicio","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"FechaFin","sortable":true,"dataIndex":"fechaFin","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"NumeroUnidad","sortable":true,"dataIndex":"numeroUnidad","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}
]}, {}]
}],
global_numero_unidad: ["wm.Variable", {"isList":true,"json":"[{\n\t\"name\": \"1\", \n\t\"dataValue\": \"1\"\n},\n{\n    \"name\": \"2\", \n\t\"dataValue\": \"2\"\n},\n{\n    \"name\": \"3\", \n\t\"dataValue\": \"3\"\n},\n{\n    \"name\": \"4\", \n\t\"dataValue\": \"4\"\n},\n{\n    \"name\": \"5\", \n\t\"dataValue\": \"5\"\n},\n{\n    \"name\": \"6\", \n\t\"dataValue\": \"6\"\n},\n{\n    \"name\": \"7\", \n\t\"dataValue\": \"7\"\n}]","type":"EntryData"}, {}],
subtopicoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"maxResults":100,"startUpdate":false,"type":"com.aprendoz_test.data.Subtopico"}, {"onResult":"subtopicoLiveVariable1Result"}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Subtopico","related":["unidad"],"view":[
{"caption":"IdSubtopico","sortable":true,"dataIndex":"idSubtopico","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Subtopico","sortable":true,"dataIndex":"subtopico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"FechaInicio","sortable":true,"dataIndex":"fechaInicio","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaFin","sortable":true,"dataIndex":"fechaFin","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Subtopic","sortable":true,"dataIndex":"subtopic","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"NumeroSubtopico","sortable":true,"dataIndex":"numeroSubtopico","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}
]}, {}]
}],
aprendizajeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"type":"com.aprendoz_test.data.Aprendizaje"}, {"onResult":"aprendizajeLiveVariable1Result"}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Aprendizaje","related":["dimensionComprension","subtopico","dimensionCurricular","inteligencia","nivelEsperado"],"view":[
{"caption":"IdAprendizaje","sortable":true,"dataIndex":"idAprendizaje","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"FechaEsperada","sortable":true,"dataIndex":"fechaEsperada","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Aprendizaje","sortable":true,"dataIndex":"aprendizaje","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Learning","sortable":true,"dataIndex":"learning","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Peso","sortable":true,"dataIndex":"peso","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"EjeIdEje","sortable":true,"dataIndex":"ejeIdEje","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Eje2IdEje","sortable":true,"dataIndex":"eje2IdEje","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Eje3IdEje","sortable":true,"dataIndex":"eje3IdEje","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}
]}, {}]
}],
otrasmetasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"maxResults":100,"startUpdate":false,"type":"com.aprendoz_test.data.OtrasMetas"}, {"onResult":"otrasmetasLiveVariable1Result"}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.OtrasMetas","related":["subtopico"],"view":[
{"caption":"IdOtraMeta","sortable":true,"dataIndex":"idOtraMeta","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Meta","sortable":true,"dataIndex":"meta","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Fecha","sortable":true,"dataIndex":"fecha","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Logrado","sortable":true,"dataIndex":"logrado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}
]}, {}]
}],
recursoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"maxResults":100,"startUpdate":false,"type":"com.aprendoz_test.data.Recurso"}, {"onResult":"recursoLiveVariable1Result"}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Recurso","related":["subtopico","tipoRecurso"],"view":[
{"caption":"IdRecurso","sortable":true,"dataIndex":"idRecurso","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Recurso","sortable":true,"dataIndex":"recurso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Ubicacion","sortable":true,"dataIndex":"ubicacion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FileName","sortable":true,"dataIndex":"fileName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}
]}, {}]
}],
actividadLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"type":"com.aprendoz_test.data.Actividad"}, {"onResult":"actividadLiveVariable2Result"}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Actividad","related":["subtopico","tipoValoracion","tipoDesempeno","tipoActividad"],"view":[
{"caption":"IdActividad","sortable":true,"dataIndex":"idActividad","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Actividad","sortable":true,"dataIndex":"actividad","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Fecha","sortable":true,"dataIndex":"fecha","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"RequeridoAlternativo","sortable":true,"dataIndex":"requeridoAlternativo","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}
]}, {}]
}],
local_unidades: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":50,"startUpdate":false,"type":"com.aprendoz_test.data.Unidad"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Unidad","view":[
{"caption":"IdUnidad","sortable":true,"dataIndex":"idUnidad","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Unidad","sortable":true,"dataIndex":"unidad","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Unit","sortable":true,"dataIndex":"unit","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaInicio","sortable":true,"dataIndex":"fechaInicio","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"FechaFin","sortable":true,"dataIndex":"fechaFin","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"NumeroUnidad","sortable":true,"dataIndex":"numeroUnidad","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}
]}, {}]
}],
local_asignaturas: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":50,"startUpdate":false,"type":"com.aprendoz_test.data.Asignatura"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Asignatura","view":[
{"caption":"IdAsignatura","sortable":true,"dataIndex":"idAsignatura","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Asignatura","sortable":true,"dataIndex":"asignatura","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Subject","sortable":true,"dataIndex":"subject","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Electiva","sortable":true,"dataIndex":"electiva","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"IdArea1","sortable":true,"dataIndex":"idArea1","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"IdArea2","sortable":true,"dataIndex":"idArea2","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"IdArea3","sortable":true,"dataIndex":"idArea3","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"IdSubarea1","sortable":true,"dataIndex":"idSubarea1","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"IdSubarea2","sortable":true,"dataIndex":"idSubarea2","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"IdSubarea3","sortable":true,"dataIndex":"idSubarea3","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"SalonIdSalon","sortable":true,"dataIndex":"salonIdSalon","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"IntensidadHoraria","sortable":true,"dataIndex":"intensidadHoraria","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"Peso","sortable":true,"dataIndex":"peso","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"DescripAsigEspaniol","sortable":true,"dataIndex":"descripAsigEspaniol","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"DescripAsigIngles","sortable":true,"dataIndex":"descripAsigIngles","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"IhA1","sortable":true,"dataIndex":"ihA1","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},
{"caption":"IhA2","sortable":true,"dataIndex":"ihA2","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},
{"caption":"IhA3","sortable":true,"dataIndex":"ihA3","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},
{"caption":"Meses","sortable":true,"dataIndex":"meses","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},
{"caption":"Esperadostotal","sortable":true,"dataIndex":"esperadostotal","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19,"subType":null}
]}, {}]
}],
global_numero_subtopico: ["wm.Variable", {"isList":true,"json":"[\n    {\n\t\t\"name\": \"1\", \n\t\t\"dataValue\": \"1\"\n\t}, \n\t{\n\t\t\"name\": \"2\", \n\t\t\"dataValue\": \"2\"\n\t}, \n\t{\n\t\t\"name\": \"3\", \n\t\t\"dataValue\": \"3\"\n\t}, \n\t{\n\t\t\"name\": \"4\", \n\t\t\"dataValue\": \"4\"\n\t}, \n\t{\n\t\t\"name\": \"5\", \n\t\t\"dataValue\": \"5\"\n\t}, \n\t{\n\t\t\"name\": \"6\", \n\t\t\"dataValue\": \"6\"\n\t}, \n\t{\n\t\t\"name\": \"7\", \n\t\t\"dataValue\": \"7\"\n\t},\n    {\n    \t\"name\": \"8\", \n\t\t\"dataValue\": \"8\"\n\t},\n    {\n    \t\"name\": \"9\", \n\t\t\"dataValue\": \"9\"\n\t},\n    {\n    \t\"name\": \"10\", \n\t\t\"dataValue\": \"10\"\n\t}\n]","type":"EntryData"}, {}],
global_numero_aprendizaje: ["wm.Variable", {"isList":true,"json":"[\n    {\n\t\t\"name\": \"1\", \n\t\t\"dataValue\": \"1\"\n\t}, \n\t{\n\t\t\"name\": \"2\", \n\t\t\"dataValue\": \"2\"\n\t}, \n\t{\n\t\t\"name\": \"3\", \n\t\t\"dataValue\": \"3\"\n\t}, \n\t{\n\t\t\"name\": \"4\", \n\t\t\"dataValue\": \"4\"\n\t}, \n\t{\n\t\t\"name\": \"5\", \n\t\t\"dataValue\": \"5\"\n\t}, \n\t{\n\t\t\"name\": \"6\", \n\t\t\"dataValue\": \"6\"\n\t}, \n\t{\n\t\t\"name\": \"7\", \n\t\t\"dataValue\": \"7\"\n\t}, \n\t{\n\t\t\"name\": \"8\", \n\t\t\"dataValue\": \"8\"\n\t}, \n\t{\n\t\t\"name\": \"9\", \n\t\t\"dataValue\": \"9\"\n\t}, \n\t{\n\t\t\"name\": \"10\", \n\t\t\"dataValue\": \"10\"\n\t}\n]","type":"EntryData"}, {}],
curriculo_lista_dimension_comprension: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":20,"startUpdate":false,"type":"com.aprendoz_test.data.DimensionComprension"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.DimensionComprension","view":[
{"caption":"IdDimension","sortable":true,"dataIndex":"idDimension","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"DimensionComprension","sortable":true,"dataIndex":"dimensionComprension","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
curriculo_lista_dimension_curricular: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":50,"startUpdate":false,"type":"com.aprendoz_test.data.DimensionCurricular"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.DimensionCurricular","view":[
{"caption":"IdDimension","sortable":true,"dataIndex":"idDimension","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"DimensionCurricular","sortable":true,"dataIndex":"dimensionCurricular","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
curriculo_lista_inteligencia: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.Inteligencia"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Inteligencia","view":[
{"caption":"IdInteligencia","sortable":true,"dataIndex":"idInteligencia","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Inteligencia","sortable":true,"dataIndex":"inteligencia","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
curriculo_lista_nivel_esperado: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":50,"startUpdate":false,"type":"com.aprendoz_test.data.NivelEsperado"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.NivelEsperado","view":[
{"caption":"IdNivelEsperado","sortable":true,"dataIndex":"idNivelEsperado","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"NivelEsperado","sortable":true,"dataIndex":"nivelEsperado","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
curriculo_aprendizaje_eje1: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":50,"startUpdate":false,"type":"com.aprendoz_test.data.Eje"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Eje","view":[
{"caption":"IdEje","sortable":true,"dataIndex":"idEje","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"EjeTematico","sortable":true,"dataIndex":"ejeTematico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Axis","sortable":true,"dataIndex":"axis","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}
]}, {}]
}],
curriculo_aprendizaje_eje2: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":50,"startUpdate":false,"type":"com.aprendoz_test.data.Eje"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Eje","view":[
{"caption":"IdEje","sortable":true,"dataIndex":"idEje","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"EjeTematico","sortable":true,"dataIndex":"ejeTematico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Axis","sortable":true,"dataIndex":"axis","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}
]}, {}]
}],
curriculo_aprendizaje_eje3: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.Eje"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Eje","view":[
{"caption":"IdEje","sortable":true,"dataIndex":"idEje","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"EjeTematico","sortable":true,"dataIndex":"ejeTematico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Axis","sortable":true,"dataIndex":"axis","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}
]}, {}]
}],
curriculo_tipo_recurso: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.TipoRecurso"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.TipoRecurso","view":[
{"caption":"IdTipoRecurso","sortable":true,"dataIndex":"idTipoRecurso","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"TipoRecurso","sortable":true,"dataIndex":"tipoRecurso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
a_informacionUsuario: ["wm.ServiceVariable", {"operation":"showInformationUser2","service":"aprendoz_test"}, {"onSuccess":"a_informacionUsuarioSuccess"}, {
input: ["wm.ServiceInput", {"type":"showInformationUser2Inputs"}, {}]
}],
templateUsernameVar: ["wm.ServiceVariable", {"operation":"getUserName","service":"securityService"}, {}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
templateLogoutVar: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
a_getLastAccess: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"last_accessHQL","service":"aprendoz_test"}, {"onSuccess":"a_getLastAccessSuccess"}, {
input: ["wm.ServiceInput", {"type":"last_accessHQLInputs"}, {}]
}],
curriculo_tipo_desempeno: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.TipoDesempeno"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.TipoDesempeno","view":[
{"caption":"IdTipoDesempeno","sortable":true,"dataIndex":"idTipoDesempeno","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"TipoDesempeno","sortable":true,"dataIndex":"tipoDesempeno","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
curriculo_tipo_valoracion: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.TipoValoracion"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.TipoValoracion","view":[
{"caption":"IdTipoValoracion","sortable":true,"dataIndex":"idTipoValoracion","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"TipoValoracion","sortable":true,"dataIndex":"tipoValoracion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
curriculo_tipo_actividad: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.TipoActividad"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.TipoActividad","view":[
{"caption":"IdTipoActividad","sortable":true,"dataIndex":"idTipoActividad","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"TipoActividad","sortable":true,"dataIndex":"tipoActividad","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
curriculo_aprendizajes_asignaturasLiveVariable: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.AprendizajesAsignaturas"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.AprendizajesAsignaturas","related":["inteligencia","dimensionComprension","nivelEsperado","dimensionCurricular"],"view":[
{"caption":"IdAprendizaje","sortable":true,"dataIndex":"idAprendizaje","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"FechaEsperada","sortable":true,"dataIndex":"fechaEsperada","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Aprendizaje","sortable":true,"dataIndex":"aprendizaje","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Learning","sortable":true,"dataIndex":"learning","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Peso","sortable":true,"dataIndex":"peso","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"EjeIdEje","sortable":true,"dataIndex":"ejeIdEje","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Eje2IdEje","sortable":true,"dataIndex":"eje2IdEje","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Eje3IdEje","sortable":true,"dataIndex":"eje3IdEje","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}
]}, {}]
}],
logCurriculoDocentes: ["wm.Variable", {"type":"com.aprendoz_test.data.LogAccionesDocentes"}, {}],
asignaturas_estudiantes_asignaturas_ServiceVariable: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"asignatura_alumnos_asignatura","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"asignatura_alumnos_asignaturaInputs"}, {}]
}],
asignatura_vista_estudiantesAsignatura: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.VistaAsignaturaEstudiantes"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.VistaAsignaturaEstudiantes","related":["id"],"view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"com.aprendoz_test.data.VistaAsignaturaEstudiantesId","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"IdAsignatura","sortable":true,"dataIndex":"id.idAsignatura","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Asignatura","sortable":true,"dataIndex":"id.asignatura","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"IdPersona","sortable":true,"dataIndex":"id.idPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"id.codigo","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Apellido1","sortable":true,"dataIndex":"id.apellido1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Apellido2","sortable":true,"dataIndex":"id.apellido2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Nombre1","sortable":true,"dataIndex":"id.nombre1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Nombre2","sortable":true,"dataIndex":"id.nombre2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"Calificacion","sortable":true,"dataIndex":"id.calificacion","type":"java.math.BigDecimal","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"CalifChar","sortable":true,"dataIndex":"id.califChar","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"Porcentaje","sortable":true,"dataIndex":"id.porcentaje","type":"java.math.BigDecimal","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"Esperados","sortable":true,"dataIndex":"id.esperados","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"Logrados","sortable":true,"dataIndex":"id.logrados","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"Curso","sortable":true,"dataIndex":"id.curso","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":13,"subType":null}
]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"asignatura_codigo.dataValue","targetProperty":"filter.id.idAsignatura"}, {}]
}]
}],
asignaturas_vista_asignaturas_estudiantes_sv: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getting_subjects_students","service":"aprendoz_test"}, {"onSuccess":"asignaturas_vista_asignaturas_estudiantes_svSuccess"}, {
input: ["wm.ServiceInput", {"type":"getting_subjects_studentsInputs"}, {}]
}],
estudiantes_detalles_curriculo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"estudiantes_listado_curriculo","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"estudiantes_listado_curriculoInputs"}, {}]
}],
feedback_tipo: ["wm.Variable", {"isList":true,"json":"[{\n\t\"name\": \"Bug-Error\", \n\t\"dataValue\": \"Bug-Error\"\n},\n{\n    \"name\": \"Mejora\", \n\t\"dataValue\": \"Mejora\"\n},\n{\n    \"name\": \"Carga de Datos\", \n\t\"dataValue\": \"Carga de Datos\"\n},\n{\n    \"name\": \"Navegación\", \n    \"dataValue\": \"Navegación\"\n},\n{\n    \"name\": \"Interfaz de usuario\", \n    \"dataValue\": \"Interfaz de usuario\"\n},\n{\n    \"name\": \"Acceso al sistema\", \n    \"dataValue\": \"Acceso al sistema\"\n}\n]","type":"EntryData"}, {}],
feedback_sendFeedBack: ["wm.Variable", {"type":"com.aprendoz_test.data.FeedbackReportes"}, {}],
AccionExitosa: ["wm.NotificationCall", {"operation":"toast"}, {}, {
input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
wire1: ["wm.Wire", {"expression":"\"Success\"","targetProperty":"cssClasses"}, {}],
wire2: ["wm.Wire", {"expression":"\"bottom center\"","targetProperty":"dialogPosition"}, {}],
wire3: ["wm.Wire", {"expression":"\"¡Acción realizada con exitosamente!\"","targetProperty":"text"}, {}]
}]
}]
}],
AccionError: ["wm.NotificationCall", {"operation":"toast"}, {}, {
input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
wire2: ["wm.Wire", {"expression":"\"bottom center\"","targetProperty":"dialogPosition"}, {}],
wire1: ["wm.Wire", {"expression":"\"Warning\"","targetProperty":"cssClasses"}, {}],
wire3: ["wm.Wire", {"expression":"\"¡Acción no exitosa!\"","targetProperty":"text"}, {}]
}]
}]
}],
muestraCoordinadorCurso: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCoordinadorCursoInfo","service":"aprendoz_test"}, {"onSuccess":"muestraCoordinadorCursoSuccess"}, {
input: ["wm.ServiceInput", {"type":"getCoordinadorCursoInfoInputs"}, {}]
}],
muestraCoordinadorSubArea: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCoordinadorCurricularInfo","service":"aprendoz_test"}, {"onSuccess":"muestraCoordinadorSubAreaSuccess"}, {
input: ["wm.ServiceInput", {"type":"getCoordinadorCurricularInfoInputs"}, {}]
}],
dashboard_faltas_graves: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.VistaDashboardFaltasGraves"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.VistaDashboardFaltasGraves","related":["id"],"view":[
{"caption":"IdPersona","sortable":true,"dataIndex":"id.idPersona","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2000,"subType":null,"widthUnits":"px"},
{"caption":"Apellido1","sortable":true,"dataIndex":"id.apellido1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2001,"subType":null,"widthUnits":"px"},
{"caption":"Apellido2","sortable":true,"dataIndex":"id.apellido2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2002,"subType":null,"widthUnits":"px"},
{"caption":"Curso","sortable":true,"dataIndex":"id.curso","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2003,"subType":null,"widthUnits":"px"},
{"caption":"PorcentajeFaltasGraves","sortable":true,"dataIndex":"id.porcentajeFaltasGraves","type":"java.math.BigDecimal","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2004,"subType":null,"widthUnits":"px"}
]}, {}]
}],
dashboard_calificacion_estudiantes: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.VistaDashboardCalificacionEstudiantes"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.VistaDashboardCalificacionEstudiantes","related":["id"],"view":[
{"caption":"DirectorId","sortable":true,"dataIndex":"id.directorId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2000,"subType":null,"widthUnits":"px"},
{"caption":"DirectorApellido1","sortable":true,"dataIndex":"id.directorApellido1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2001,"subType":null,"widthUnits":"px"},
{"caption":"DirectorApellido2","sortable":true,"dataIndex":"id.directorApellido2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2002,"subType":null,"widthUnits":"px"},
{"caption":"Curso","sortable":true,"dataIndex":"id.curso","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2003,"subType":null,"widthUnits":"px"},
{"caption":"AlumnoApellido1","sortable":true,"dataIndex":"id.alumnoApellido1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2004,"subType":null,"widthUnits":"px"},
{"caption":"AlumnoApellido2","sortable":true,"dataIndex":"id.alumnoApellido2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2005,"subType":null,"widthUnits":"px"},
{"caption":"Puntaje","sortable":true,"dataIndex":"id.puntaje","type":"java.lang.Double","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2006,"subType":null,"widthUnits":"px"},
{"caption":"Calificacion","sortable":true,"dataIndex":"id.calificacion","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2007,"subType":null,"widthUnits":"px"}
]}, {}]
}],
dashboard_calificacion_general: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.VistaDashboardAsignaturaGlobal"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.VistaDashboardAsignaturaGlobal","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"com.aprendoz_test.data.VistaDashboardAsignaturaGlobalId","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"DirectorId","sortable":true,"dataIndex":"id.directorId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"DirectorApellido1","sortable":true,"dataIndex":"id.directorApellido1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"DirectorApellido2","sortable":true,"dataIndex":"id.directorApellido2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Curso","sortable":true,"dataIndex":"id.curso","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Apellido1","sortable":true,"dataIndex":"id.apellido1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Apellido2","sortable":true,"dataIndex":"id.apellido2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Asignatura","sortable":true,"dataIndex":"id.asignatura","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"AvgPuntaje","sortable":true,"dataIndex":"id.avgPuntaje","type":"java.math.BigDecimal","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"AvgCalificacion","sortable":true,"dataIndex":"id.avgCalificacion","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"IdAsignatura","sortable":true,"dataIndex":"id.idAsignatura","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":9,"subType":null}
]}, {}]
}],
asignaturasPorDocente: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSubjectsByTeacher","service":"aprendoz_test"}, {"onSuccess":"asignaturasPorDocenteSuccess"}, {
input: ["wm.ServiceInput", {"type":"getSubjectsByTeacherInputs"}, {}]
}],
dashboard_puntaje_asig_global: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.VistaDashboardAsignaturaGlobal"}, {"onSuccess":"dashboard_puntaje_asig_globalSuccess"}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.VistaDashboardAsignaturaGlobal","related":["id"],"view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"com.aprendoz_test.data.VistaDashboardAsignaturaGlobalId","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"DirectorId","sortable":true,"dataIndex":"id.directorId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"DirectorApellido1","sortable":true,"dataIndex":"id.directorApellido1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"DirectorApellido2","sortable":true,"dataIndex":"id.directorApellido2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Curso","sortable":true,"dataIndex":"id.curso","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Apellido1","sortable":true,"dataIndex":"id.apellido1","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Apellido2","sortable":true,"dataIndex":"id.apellido2","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Asignatura","sortable":true,"dataIndex":"id.asignatura","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"AvgPuntaje","sortable":true,"dataIndex":"id.avgPuntaje","type":"java.math.BigDecimal","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"AvgCalificacion","sortable":true,"dataIndex":"id.avgCalificacion","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"IdAsignatura","sortable":true,"dataIndex":"id.idAsignatura","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":9,"subType":null}
]}, {}]
}],
dashboard_malla_dimension_comprension: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.VistaDashboardMallaDimensionComprension"}, {"onSuccess":"dashboard_malla_dimension_comprensionSuccess"}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.VistaDashboardMallaDimensionComprension","related":["id"],"view":[
{"caption":"IdAsignatura","sortable":true,"dataIndex":"id.idAsignatura","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2000,"subType":null,"widthUnits":"px"},
{"caption":"Asignatura","sortable":true,"dataIndex":"id.asignatura","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2001,"subType":null,"widthUnits":"px"},
{"caption":"DimensionComprension","sortable":true,"dataIndex":"id.dimensionComprension","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2002,"subType":null,"widthUnits":"px"},
{"caption":"Porcentaje","sortable":true,"dataIndex":"id.porcentaje","type":"java.math.BigDecimal","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2003,"subType":null,"widthUnits":"px"}
]}, {}]
}],
dashboard_malla_dimension_curricular: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.aprendoz_test.data.VistaDashboardMallaDimensionCurricular"}, {"onSuccess":"dashboard_malla_dimension_curricularSuccess"}, {
liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.VistaDashboardMallaDimensionCurricular","view":[
{"caption":"Id","sortable":true,"dataIndex":"id","type":"com.aprendoz_test.data.VistaDashboardMallaDimensionCurricularId","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"IdAsignatura","sortable":true,"dataIndex":"id.idAsignatura","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Asignatura","sortable":true,"dataIndex":"id.asignatura","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"DimensionCurricular","sortable":true,"dataIndex":"id.dimensionCurricular","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Porcentaje","sortable":true,"dataIndex":"id.porcentaje","type":"java.math.BigDecimal","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":3,"subType":null}
]}, {}]
}],
unidadDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","styles":{"backgroundColor":"#ebebeb","color":"#0e0c0c"},"title":"Formulario Unidades","width":"500px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
unidadLiveForm2: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"336px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginInsert":"unidadLiveForm2BeginInsert","onBeginUpdate":"unidadLiveForm2BeginUpdate","onDeleteData":"unidadLiveForm2DeleteData","onInsertData":"unidadLiveForm2InsertData","onSuccess":"unidadLivePanel1.popupLiveFormSuccess","onSuccess1":"unidadLiveForm2Success1","onUpdateData":"unidadLiveForm2UpdateData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"unidadDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.asignatura"}, {}]
}],
idUnidadEditor2: ["wm.Number", {"border":"0","caption":"Id unidad","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idUnidad","height":"26px","required":true,"width":"100%"}, {}],
relatedEditor1: ["wm.RelatedEditor", {"editingMode":"readonly","fitToContentHeight":true,"formField":"asignatura","height":"56px","horizontalAlign":"left","lock":true,"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"unidadDojoGrid.selectedItem.asignatura","targetProperty":"dataSet"}, {}]
}],
panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
idAsignaturaEditor1: ["wm.Number", {"border":"0","caption":"Id asignatura","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"idAsignatura","height":"26px","required":true,"width":"100%"}, {}],
asignaturaEditor1: ["wm.Text", {"border":"0","caption":"Asignatura","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"asignatura","height":"26px","width":"100%"}, {}],
idSubarea3Editor1: ["wm.Number", {"border":"0","caption":"IdSubarea3","captionSize":"140px","emptyValue":"zero","formField":"idSubarea3","showing":false,"width":"100%"}, {}],
salonIdSalonEditor1: ["wm.Number", {"border":"0","caption":"SalonIdSalon","captionSize":"140px","emptyValue":"zero","formField":"salonIdSalon","showing":false,"width":"100%"}, {}],
subjectEditor1: ["wm.Text", {"border":"0","caption":"Subject","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"subject","height":"26px","showing":false,"width":"100%"}, {}],
electivaEditor1: ["wm.Checkbox", {"caption":"Electiva","captionSize":"140px","desktopHeight":"26px","displayValue":false,"formField":"electiva","height":"26px","showing":false,"width":"100%"}, {}],
idArea1Editor1: ["wm.Number", {"border":"0","caption":"IdArea1","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"idArea1","height":"26px","showing":false,"width":"100%"}, {}],
idArea2Editor1: ["wm.Number", {"border":"0","caption":"IdArea2","captionSize":"140px","emptyValue":"zero","formField":"idArea2","showing":false,"width":"100%"}, {}],
idArea3Editor1: ["wm.Number", {"border":"0","caption":"IdArea3","captionSize":"140px","emptyValue":"zero","formField":"idArea3","showing":false,"width":"100%"}, {}],
idSubarea1Editor1: ["wm.Number", {"border":"0","caption":"IdSubarea1","captionSize":"140px","emptyValue":"zero","formField":"idSubarea1","showing":false,"width":"100%"}, {}],
idSubarea2Editor1: ["wm.Number", {"border":"0","caption":"IdSubarea2","captionSize":"140px","emptyValue":"zero","formField":"idSubarea2","showing":false,"width":"100%"}, {}],
intensidadHorariaEditor1: ["wm.Number", {"border":"0","caption":"IntensidadHoraria","captionSize":"140px","emptyValue":"zero","formField":"intensidadHoraria","showing":false,"width":"100%"}, {}],
pesoEditor1: ["wm.Number", {"border":"0","caption":"Peso","captionSize":"140px","emptyValue":"zero","formField":"peso","showing":false,"width":"100%"}, {}],
descripAsigEspaniolEditor1: ["wm.Text", {"border":"0","caption":"DescripAsigEspaniol","captionSize":"140px","emptyValue":"emptyString","formField":"descripAsigEspaniol","showing":false,"width":"100%"}, {}],
descripAsigInglesEditor1: ["wm.Text", {"border":"0","caption":"DescripAsigIngles","captionSize":"140px","emptyValue":"emptyString","formField":"descripAsigIngles","showing":false,"width":"100%"}, {}],
ihA1Editor1: ["wm.Number", {"border":"0","caption":"IhA1","captionSize":"140px","emptyValue":"zero","formField":"ihA1","showing":false,"width":"100%"}, {}],
ihA2Editor1: ["wm.Number", {"border":"0","caption":"IhA2","captionSize":"140px","emptyValue":"zero","formField":"ihA2","showing":false,"width":"100%"}, {}],
ihA3Editor1: ["wm.Number", {"border":"0","caption":"IhA3","captionSize":"140px","emptyValue":"zero","formField":"ihA3","showing":false,"width":"100%"}, {}],
mesesEditor1: ["wm.Number", {"border":"0","caption":"Meses","captionSize":"140px","emptyValue":"zero","formField":"meses","showing":false,"width":"100%"}, {}],
esperadostotalEditor1: ["wm.Number", {"border":"0","caption":"Esperadostotal","captionSize":"140px","emptyValue":"zero","formField":"esperadostotal","showing":false,"width":"100%"}, {}]
}]
}],
panel17: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
numeroUnidadselect1: ["wm.SelectMenu", {"caption":"No. Unidad","captionSize":"140px","dataField":"dataValue","dataType":"EntryData","desktopHeight":"26px","displayField":"name","formField":"numeroUnidad","height":"26px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"global_numero_unidad","targetProperty":"dataSet"}, {}]
}]
}]
}],
unidadEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Unidad","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"unidad","height":"80px","helpText":"ingrese la descripción en español","maxChars":500,"required":true,"styles":{},"width":"100%"}, {}],
unitEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Unit","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"unit","height":"80px","helpText":"insert here the description in english","maxChars":500,"required":true,"width":"100%"}, {}],
fechaInicioEditor3: ["wm.DateTime", {"border":"0","caption":"Fecha Inicio","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaInicio","height":"26px","width":"100%"}, {}],
fechaFinEditor3: ["wm.DateTime", {"border":"0","caption":"Fecha Finalización","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaFin","height":"26px","width":"100%"}, {}],
idSyIdIdSyEditor3: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idSyIdIdSy","height":"26px","showing":false,"width":"100%"}, {}]
}]
}],
buttonBar1: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"42px","height":"34px","mobileHeight":"42px"}, {}, {
unidadSaveButton: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Guardar","margin":"4","styles":{}}, {"onclick":"unidadLiveForm2.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"unidadLiveForm2.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
unidadCancelButton: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Cancelar","margin":"4","styles":{}}, {"onclick":"unidadDialog.hide","onclick1":"unidadLiveForm2.cancelEdit"}]
}]
}],
subtopicoDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","styles":{"backgroundColor":"#ebebeb","color":"#070707"},"title":"Formulario de Subtópicos","width":"500px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
subtopicoLiveForm2: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"302px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginInsert":"subtopicoLiveForm2BeginInsert","onBeginUpdate":"subtopicoLiveForm2BeginUpdate","onDeleteData":"subtopicoLiveForm2DeleteData","onInsertData":"subtopicoLiveForm2InsertData","onSuccess":"subtopicoLivePanel1.popupLiveFormSuccess","onSuccess1":"subtopicoLiveForm2Success1","onUpdateData":"subtopicoLiveForm2UpdateData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"subtopicoDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor2.dataOutput","targetProperty":"dataOutput.unidad"}, {}]
}],
idSubtopicoEditor2: ["wm.Number", {"border":"0","caption":"Id subtópico","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idSubtopico","height":"26px","required":true,"width":"100%"}, {}],
panel21: ["wm.Panel", {"freeze":true,"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
relatedEditor2: ["wm.RelatedEditor", {"editingMode":"readonly","fitToContentHeight":true,"formField":"unidad","height":"54px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"subtopicoDojoGrid.selectedItem.unidad","targetProperty":"dataSet"}, {}]
}],
idUnidadEditor1: ["wm.Number", {"border":"0","caption":"Id unidad","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"idUnidad","height":"26px","required":true,"width":"100%"}, {}],
unidadEditor1: ["wm.Text", {"border":"0","caption":"Unidad","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"unidad","height":"26px","width":"100%"}, {}],
unitEditor1: ["wm.Text", {"border":"0","caption":"Unit","captionSize":"140px","emptyValue":"emptyString","formField":"unit","showing":false,"width":"100%"}, {}],
fechaInicioEditor4: ["wm.DateTime", {"border":"0","caption":"FechaInicio","captionSize":"140px","dateMode":"Date","desktopHeight":"30px","emptyValue":"zero","formField":"fechaInicio","height":"30px","showing":false,"width":"100%"}, {}],
fechaFinEditor4: ["wm.DateTime", {"border":"0","caption":"FechaFin","captionSize":"140px","dateMode":"Date","desktopHeight":"30px","emptyValue":"zero","formField":"fechaFin","height":"30px","showing":false,"width":"100%"}, {}],
numeroUnidadEditor1: ["wm.Number", {"border":"0","caption":"NumeroUnidad","captionSize":"140px","emptyValue":"zero","formField":"numeroUnidad","showing":false,"width":"100%"}, {}],
idSyIdIdSyEditor9: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","emptyValue":"zero","formField":"idSyIdIdSy","showing":false,"width":"100%"}, {}]
}]
}],
numeroSubtopicoSelect1: ["wm.SelectMenu", {"caption":"No. subtopico","captionSize":"140px","dataField":"dataValue","dataType":"EntryData","desktopHeight":"26px","displayField":"name","formField":"numeroSubtopico","height":"26px","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"global_numero_subtopico","targetProperty":"dataSet"}, {}]
}]
}],
subtopicoEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Subtópico","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"subtopico","height":"80px","maxChars":200,"required":true,"width":"100%"}, {}],
subtopicEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Subtopic","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"subtopic","height":"80px","maxChars":200,"required":true,"width":"100%"}, {}],
idSyIdIdSyEditor4: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idSyIdIdSy","height":"26px","showing":false,"width":"100%"}, {}],
date1: ["wm.Date", {"border":"0","caption":"Fecha inicio","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"fechaInicio","height":"26px","required":true,"width":"100%"}, {}],
date2: ["wm.Date", {"border":"0","caption":"Fecha final","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"fechaFin","height":"26px","required":true,"width":"100%"}, {}]
}]
}],
buttonBar2: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"42px","height":"34px","mobileHeight":"42px"}, {}, {
subtopicoSaveButton: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Guardar","margin":"4","styles":{}}, {"onclick":"subtopicoLiveForm2.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"subtopicoLiveForm2.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
subtopicoCancelButton: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Cancelar","margin":"4","styles":{}}, {"onclick":"subtopicoDialog.hide","onclick1":"subtopicoLiveForm2.cancelEdit"}]
}]
}],
aprendizajeDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar3","containerWidgetId":"containerWidget3","desktopHeight":"565px","height":"565px","styles":{"backgroundColor":"#ebebeb","color":"#050505"},"title":"Formulario de Aprendizaje","width":"550px"}, {}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
aprendizajeLiveForm2: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"484px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginInsert":"aprendizajeLiveForm2BeginInsert","onBeginInsert1":"aprendizajeLiveForm2BeginInsert1","onBeginInsert2":"aprendizajeLiveForm2BeginInsert2","onBeginUpdate":"aprendizajeLiveForm2BeginUpdate","onDeleteData":"aprendizajeLiveForm2DeleteData","onInsertData":"aprendizajeLiveForm2InsertData","onSuccess":"aprendizajeLivePanel1.popupLiveFormSuccess","onSuccess1":"aprendizajeLiveForm2Success1","onUpdateData":"aprendizajeLiveForm2UpdateData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"aprendizajeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor3.dataOutput","targetProperty":"dataOutput.subtopico"}, {}]
}],
idAprendizajeEditor2: ["wm.Number", {"border":"0","caption":"Id aprendizaje","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idAprendizaje","height":"26px","required":true,"width":"100%"}, {}],
aprendizajes_grupo_1: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
relatedEditor3: ["wm.RelatedEditor", {"editingMode":"readonly","fitToContentHeight":true,"formField":"subtopico","height":"54px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"aprendizajeDojoGrid.selectedItem.subtopico","targetProperty":"dataSet"}, {}]
}],
idSubtopicoEditor1: ["wm.Number", {"border":"0","caption":"Id subtópico","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"idSubtopico","height":"26px","required":true,"width":"100%"}, {}],
subtopicoEditor1: ["wm.Text", {"border":"0","caption":"Subtópico","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"subtopico","height":"26px","width":"100%"}, {}],
fechaInicioEditor5: ["wm.DateTime", {"border":"0","caption":"FechaInicio","captionSize":"140px","dateMode":"Date","desktopHeight":"30px","emptyValue":"zero","formField":"fechaInicio","height":"30px","showing":false,"width":"100%"}, {}],
fechaFinEditor5: ["wm.DateTime", {"border":"0","caption":"FechaFin","captionSize":"140px","dateMode":"Date","desktopHeight":"30px","emptyValue":"zero","formField":"fechaFin","height":"30px","showing":false,"width":"100%"}, {}],
subtopicEditor4: ["wm.Text", {"border":"0","caption":"Subtopic","captionSize":"140px","emptyValue":"emptyString","formField":"subtopic","showing":false,"width":"100%"}, {}],
numeroSubtopicoEditor3: ["wm.Number", {"border":"0","caption":"NumeroSubtopico","captionSize":"140px","emptyValue":"zero","formField":"numeroSubtopico","showing":false,"width":"100%"}, {}],
idSyIdIdSyEditor10: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","emptyValue":"zero","formField":"idSyIdIdSy","showing":false,"width":"100%"}, {}]
}]
}],
fechaEsperadaEditor2: ["wm.Date", {"border":"0","caption":"Fecha esperada","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"fechaEsperada","height":"26px","required":true,"width":"100%"}, {}],
aprendizajesAsignaturasGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idAprendizaje","title":" ","width":"50px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fechaEsperada","title":"Fecha esperada","width":"60px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"peso","title":"Peso","width":"40px","align":"center","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"aprendizaje","title":"Aprendizaje","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"learning","title":"Learning","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ejeIdEje","title":"EjeIdEje","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"eje2IdEje","title":"Eje2IdEje","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"eje3IdEje","title":"Eje3IdEje","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idAprendizaje} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha esperada: \" + ${wm.runtimeId}.formatCell(\"fechaEsperada\", ${fechaEsperada}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Peso: \" + ${peso}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Aprendizaje: \" + ${aprendizaje}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Learning: \" + ${learning}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.AprendizajesAsignaturas","height":"296px","localizationStructure":{},"margin":"4","minDesktopHeight":60,"showing":false,"singleClickEdit":true}, {"onSelect":"aprendizajesAsignaturasGrid1Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_aprendizajes_asignaturasLiveVariable","targetProperty":"dataSet"}, {}]
}]
}],
aprendizajes_grupo2: ["wm.Panel", {"height":"392px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
aprendizajeEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Aprendizaje","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"aprendizaje","height":"80px","maxChars":1000,"required":true,"width":"100%"}, {}],
learningEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Learning","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"learning","height":"80px","maxChars":1000,"required":true,"width":"100%"}, {}],
ejeSelect1: ["wm.SelectMenu", {"caption":"Eje No. 1","captionSize":"140px","dataField":"idEje","dataType":"com.aprendoz_test.data.Eje","desktopHeight":"26px","displayField":"ejeTematico","formField":"ejeIdEje","height":"26px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_aprendizaje_eje1","targetProperty":"dataSet"}, {}]
}]
}],
ejeSelect2: ["wm.SelectMenu", {"caption":"Eje No. 2","captionSize":"140px","dataField":"idEje","dataType":"com.aprendoz_test.data.Eje","desktopHeight":"26px","displayField":"ejeTematico","formField":"eje2IdEje","height":"26px","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_aprendizaje_eje2","targetProperty":"dataSet"}, {}]
}]
}],
ejeSelect3: ["wm.SelectMenu", {"caption":"Eje No. 3","captionSize":"140px","dataField":"idEje","dataType":"com.aprendoz_test.data.Eje","dataValue":undefined,"desktopHeight":"26px","displayField":"ejeTematico","displayValue":"","height":"26px","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_aprendizaje_eje3","targetProperty":"dataSet"}, {}]
}]
}],
numeroAprendizajeSelectMenu1: ["wm.SelectMenu", {"caption":"Peso","captionSize":"140px","dataField":"dataValue","dataType":"EntryData","desktopHeight":"26px","displayField":"name","formField":"peso","height":"26px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"global_numero_aprendizaje","targetProperty":"dataSet"}, {}]
}]
}],
dimensionComprensionLookup2: ["wm.Lookup", {"autoDataSet":false,"caption":"Dimensión comprensión","captionSize":"140px","dataType":"com.aprendoz_test.data.DimensionComprension","desktopHeight":"30px","displayField":"dimensionComprension","formField":"dimensionComprension","height":"30px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_lista_dimension_comprension","targetProperty":"dataSet"}, {}]
}]
}],
dimensionCurricularLookup2: ["wm.Lookup", {"autoDataSet":false,"caption":"Dimension curricular","captionSize":"140px","dataType":"com.aprendoz_test.data.DimensionCurricular","desktopHeight":"30px","displayField":"dimensionCurricular","formField":"dimensionCurricular","height":"30px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_lista_dimension_curricular","targetProperty":"dataSet"}, {}]
}]
}],
inteligenciaLookup2: ["wm.Lookup", {"autoDataSet":false,"caption":"Inteligencia","captionSize":"140px","dataType":"com.aprendoz_test.data.Inteligencia","desktopHeight":"30px","displayField":"inteligencia","formField":"inteligencia","height":"30px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_lista_inteligencia","targetProperty":"dataSet"}, {}]
}]
}],
nivelEsperadoLookup2: ["wm.Lookup", {"autoDataSet":false,"caption":"Nivel esperado","captionSize":"140px","dataType":"com.aprendoz_test.data.NivelEsperado","desktopHeight":"30px","displayField":"nivelEsperado","formField":"nivelEsperado","height":"30px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_lista_nivel_esperado","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}],
buttonBar3: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"42px","height":"34px","mobileHeight":"42px"}, {}, {
aprendizajeSaveButton: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Guardar","margin":"4","styles":{}}, {"onclick":"aprendizajeLiveForm2.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"aprendizajeLiveForm2.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
aprendizajeCancelButton: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Cancelar","margin":"4","styles":{}}, {"onclick":"aprendizajeDialog.hide","onclick1":"aprendizajeLiveForm2.cancelEdit"}]
}]
}],
otrasmetasDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar4","containerWidgetId":"containerWidget4","desktopHeight":"284px","height":"284px","styles":{"backgroundColor":"#ebebeb","color":"#020202"},"title":"Formulario Metas","width":"500px"}, {}, {
containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
otrasmetasLiveForm2: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"222px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginInsert":"otrasmetasLiveForm2BeginInsert","onBeginUpdate":"otrasmetasLiveForm2BeginUpdate","onDeleteData":"otrasmetasLiveForm2DeleteData","onInsertData":"otrasmetasLiveForm2InsertData","onSuccess":"otrasmetasLivePanel1.popupLiveFormSuccess","onSuccess1":"otrasmetasLiveForm2Success1","onUpdateData":"otrasmetasLiveForm2UpdateData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"otrasmetasDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor5.dataOutput","targetProperty":"dataOutput.subtopico"}, {}]
}],
idOtraMetaEditor2: ["wm.Number", {"border":"0","caption":"Id meta","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idOtraMeta","height":"26px","required":true,"styles":{},"width":"100%"}, {}],
relatedEditor5: ["wm.RelatedEditor", {"editingMode":"readonly","fitToContentHeight":true,"formField":"subtopico","height":"54px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"otrasmetasDojoGrid.selectedItem.subtopico","targetProperty":"dataSet"}, {}]
}],
idSubtopicoEditor3: ["wm.Number", {"border":"0","caption":"Id subtópico","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"idSubtopico","height":"26px","required":true,"width":"100%"}, {}],
subtopicoEditor3: ["wm.Text", {"border":"0","caption":"Subtopico","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"subtopico","height":"26px","width":"100%"}, {}],
fechaInicioEditor1: ["wm.DateTime", {"border":"0","caption":"FechaInicio","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaInicio","height":"26px","showing":false,"width":"100%"}, {}],
fechaFinEditor1: ["wm.DateTime", {"border":"0","caption":"FechaFin","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaFin","height":"26px","showing":false,"width":"100%"}, {}],
subtopicEditor1: ["wm.Text", {"border":"0","caption":"Subtopic","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"subtopic","height":"26px","showing":false,"width":"100%"}, {}],
numeroSubtopicoEditor1: ["wm.Number", {"border":"0","caption":"NumeroSubtopico","captionSize":"140px","emptyValue":"zero","formField":"numeroSubtopico","showing":false,"width":"100%"}, {}],
idSyIdIdSyEditor1: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","emptyValue":"zero","formField":"idSyIdIdSy","showing":false,"width":"100%"}, {}]
}],
metaEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Meta","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"meta","height":"80px","maxChars":200,"styles":{},"width":"100%"}, {}],
fechaEditorDate1: ["wm.Date", {"border":"0","caption":"Fecha","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"fecha","height":"26px","width":"100%"}, {}],
logradoEditor3: ["wm.Checkbox", {"caption":"Logrado","captionSize":"140px","desktopHeight":"26px","displayValue":false,"formField":"logrado","height":"26px","width":"100%"}, {}],
idSyIdIdSyEditor5: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idSyIdIdSy","height":"26px","showing":false,"width":"100%"}, {}]
}]
}],
buttonBar4: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"42px","height":"34px","mobileHeight":"42px"}, {}, {
otrasmetasSaveButton: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Guardar","margin":"4","styles":{}}, {"onclick":"otrasmetasLiveForm2.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"otrasmetasLiveForm2.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
otrasmetasCancelButton: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Cancelar","margin":"4","styles":{}}, {"onclick":"otrasmetasDialog.hide","onclick1":"otrasmetasLiveForm2.cancelEdit"}]
}]
}],
recursoDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar5","containerWidgetId":"containerWidget5","desktopHeight":"440px","height":"440px","styles":{"backgroundColor":"#ebebeb","color":"#090808"},"title":"Formulario Recursos","width":"500px"}, {}, {
containerWidget5: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
recursoLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"337px","horizontalAlign":"left","liveEditing":false,"margin":"4","styles":{},"verticalAlign":"top"}, {"onBeginInsert":"recursoLiveForm1BeginInsert","onBeginUpdate":"recursoLiveForm1BeginUpdate","onDeleteData":"recursoLiveForm1DeleteData","onInsertData":"recursoLiveForm1InsertData","onSuccess":"recursoLivePanel1.popupLiveFormSuccess","onSuccess1":"recursoLiveForm1Success1","onUpdateData":"recursoLiveForm1UpdateData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"recursoDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor6.dataOutput","targetProperty":"dataOutput.subtopico"}, {}]
}],
idRecursoEditor1: ["wm.Number", {"border":"0","caption":"IdRecurso","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idRecurso","height":"26px","required":true,"width":"100%"}, {}],
relatedEditor6: ["wm.RelatedEditor", {"editingMode":"readonly","fitToContentHeight":true,"formField":"subtopico","height":"54px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"recursoDojoGrid.selectedItem.subtopico","targetProperty":"dataSet"}, {}]
}],
idSubtopicoEditor4: ["wm.Number", {"border":"0","caption":"Id subtópico","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"idSubtopico","height":"26px","required":true,"width":"100%"}, {}],
subtopicoEditor4: ["wm.Text", {"border":"0","caption":"Subtopico","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"subtopico","height":"26px","width":"100%"}, {}],
fechaInicioEditor2: ["wm.DateTime", {"border":"0","caption":"FechaInicio","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaInicio","height":"26px","showing":false,"width":"100%"}, {}],
fechaFinEditor2: ["wm.DateTime", {"border":"0","caption":"FechaFin","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaFin","height":"26px","showing":false,"width":"100%"}, {}],
subtopicEditor3: ["wm.Text", {"border":"0","caption":"Subtopic","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"subtopic","height":"26px","showing":false,"width":"100%"}, {}],
numeroSubtopicoEditor2: ["wm.Number", {"border":"0","caption":"NumeroSubtopico","captionSize":"140px","emptyValue":"zero","formField":"numeroSubtopico","showing":false,"width":"100%"}, {}],
idSyIdIdSyEditor8: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","emptyValue":"zero","formField":"idSyIdIdSy","showing":false,"width":"100%"}, {}]
}],
idSyIdIdSyEditor6: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idSyIdIdSy","height":"26px","showing":false,"styles":{},"width":"100%"}, {}],
tipoRecursoLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Tipo recurso","captionSize":"140px","dataType":"com.aprendoz_test.data.TipoRecurso","desktopHeight":"30px","displayField":"tipoRecurso","formField":"tipoRecurso","height":"30px","required":true,"width":"100%"}, {"onchange":"tipoRecursoLookup1Change"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_tipo_recurso","targetProperty":"dataSet"}, {}]
}]
}],
recursoTextEditor1: ["wm.Text", {"border":"0","caption":"Recurso","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"recurso","height":"26px","helpText":"Ingrese el nombre del recurso que desea crear","placeHolder":"Nombre del recurso","required":true,"styles":{},"width":"100%"}, {}],
fileNameEditor2: ["wm.Text", {"border":"0","caption":"Nombre del archivo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","disabled":true,"emptyValue":"emptyString","formField":"fileName","height":"26px","helpText":"Este es el nombre del recurso cargado, verifiquelo y corrijalo en caso de ser necesario.","maxChars":1000,"width":"100%"}, {}],
panel20: ["wm.Panel", {"disabled":true,"height":"42px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dojoFileUpload1: ["wm.DojoFileUpload", {"buttonCaption":"Click para cargar","buttonWidth":120,"height":"36px","showing":false,"styles":{},"width":"338px"}, {"onSuccess":"dojoFileUpload1Success"}, {
input: ["wm.ServiceInput", {"type":"uploadFileInputs"}, {}]
}]
}],
ubicacionEditor1: ["wm.LargeTextArea", {"border":"0","caption":"Ubicación","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"123px","emptyValue":"emptyString","formField":"ubicacion","height":"123px","helpText":"Ingresa la ubicación del recurso, este es el resultado de la carga de un archivo a nuestro sistema la dirección del recurso será ingresada de manera automática. Si por el contrario es un video o recurso como YoutTube o Video debe ingresarse manualmente. E.j.  http://www.youtube.com/watch?v=kxd7GbszcXQ","maxChars":1000,"width":"100%"}, {}]
}]
}],
buttonBar5: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"42px","height":"34px","mobileHeight":"42px"}, {}, {
recursoSaveButton: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Guardar","margin":"4","styles":{}}, {"onclick":"recursoLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"recursoLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
recursoCancelButton: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Cancelar","margin":"4","styles":{}}, {"onclick":"recursoDialog.hide","onclick1":"recursoLiveForm1.cancelEdit"}]
}]
}],
actividadDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar6","containerWidgetId":"containerWidget6","desktopHeight":"380px","height":"380px","styles":{"backgroundColor":"#ebebeb","fontSize":"11px","color":"#000000"},"title":"Formulario Actividad","width":"500px"}, {}, {
containerWidget6: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
actividadLiveForm3: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"313px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginDelete":"actividadLiveForm3BeginDelete","onBeginInsert":"actividadLiveForm3BeginInsert","onBeginUpdate":"actividadLiveForm3BeginUpdate","onDeleteData":"actividadLiveForm3DeleteData","onInsertData":"actividadLiveForm3InsertData","onSuccess":"actividadLivePanel2.popupLiveFormSuccess","onSuccess1":"actividadLiveForm3Success1","onSuccess2":"actividadLiveForm3Success2","onUpdateData":"actividadLiveForm3UpdateData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"actividadDojoGrid1.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor7.dataOutput","targetProperty":"dataOutput.subtopico"}, {}]
}],
idActividadEditor3: ["wm.Number", {"border":"0","caption":"Id actividad","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idActividad","height":"26px","required":true,"styles":{},"width":"100%"}, {}],
relatedEditor7: ["wm.RelatedEditor", {"editingMode":"readonly","fitToContentHeight":true,"formField":"subtopico","height":"54px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"actividadDojoGrid1.selectedItem.subtopico","targetProperty":"dataSet"}, {}]
}],
idSubtopicoEditor5: ["wm.Number", {"border":"0","caption":"Id subtópico","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"idSubtopico","height":"26px","required":true,"width":"100%"}, {}],
subtopicoEditor5: ["wm.Text", {"border":"0","caption":"Subtopico","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"subtopico","height":"26px","width":"100%"}, {}],
fechaInicioEditor6: ["wm.DateTime", {"border":"0","caption":"FechaInicio","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaInicio","height":"26px","showing":false,"width":"100%"}, {}],
fechaFinEditor6: ["wm.DateTime", {"border":"0","caption":"FechaFin","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fechaFin","height":"26px","openOnClick":false,"showing":false,"width":"100%"}, {}],
subtopicEditor5: ["wm.Text", {"border":"0","caption":"Subtopic","captionSize":"140px","desktopHeight":"26px","emptyValue":"emptyString","formField":"subtopic","height":"26px","showing":false,"width":"100%"}, {}],
numeroSubtopicoEditor4: ["wm.Number", {"border":"0","caption":"NumeroSubtopico","captionSize":"140px","emptyValue":"zero","formField":"numeroSubtopico","showing":false,"width":"100%"}, {}],
idSyIdIdSyEditor11: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","emptyValue":"zero","formField":"idSyIdIdSy","showing":false,"width":"100%"}, {}]
}],
actividadEditor3: ["wm.LargeTextArea", {"border":"0","caption":"Actividad","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"actividad","height":"80px","maxChars":65535,"width":"100%"}, {}],
panel8: ["wm.Panel", {"height":"31px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lookup3: ["wm.Lookup", {"autoDataSet":false,"caption":"Tipo actividad","captionSize":"140px","dataType":"com.aprendoz_test.data.TipoActividad","desktopHeight":"30px","displayField":"tipoActividad","formField":"tipoActividad","height":"30px","placeHolder":"seleccione un tipo de actividad","required":true,"width":"100%"}, {"onchange":"lookup3Change"}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"lookup3.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_tipo_actividad","targetProperty":"dataSet"}, {}]
}]
}]
}],
lookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Tipo valoración","captionSize":"140px","dataType":"com.aprendoz_test.data.TipoValoracion","desktopHeight":"30px","disabled":true,"displayField":"tipoValoracion","formField":"tipoValoracion","height":"30px","placeHolder":"seleccione un tipo de valoración","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"lookup1.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_tipo_valoracion","targetProperty":"dataSet"}, {}]
}]
}],
lookup2: ["wm.Lookup", {"autoDataSet":false,"caption":"Tipo desempeño","captionSize":"140px","dataType":"com.aprendoz_test.data.TipoDesempeno","desktopHeight":"30px","disabled":true,"displayField":"tipoDesempeno","formField":"tipoDesempeno","height":"30px","placeHolder":"seleccione un tipo de desempeño","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"lookup2.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"curriculo_tipo_desempeno","targetProperty":"dataSet"}, {}]
}]
}],
fechaEditor6: ["wm.DateTime", {"border":"0","caption":"Fecha","captionSize":"140px","dateMode":"Date","desktopHeight":"26px","emptyValue":"zero","formField":"fecha","height":"26px","width":"100%"}, {}],
requeridoAlternativoEditor3: ["wm.Checkbox", {"caption":"Requerido","captionSize":"140px","desktopHeight":"26px","displayValue":false,"formField":"requeridoAlternativo","height":"26px","width":"100%"}, {}],
idSyIdIdSyEditor7: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idSyIdIdSy","height":"26px","showing":false,"width":"100%"}, {}]
}]
}],
buttonBar6: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"42px","height":"34px","mobileHeight":"42px"}, {}, {
actividadSaveButton1: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Guardar","margin":"4","styles":{}}, {"onclick":"actividadLiveForm3.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"actividadLiveForm3.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
actividadCancelButton1: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Cancelar","margin":"4","styles":{}}, {"onclick":"actividadDialog1.hide","onclick1":"actividadLiveForm3.cancelEdit"}]
}]
}],
settingsUser: ["wm.DesignableDialog", {"buttonBarId":"buttonBar7","containerWidgetId":"containerWidget7","styles":{"backgroundColor":"#1125b2","color":"#ffffff"},"title":"Perfil"}, {}, {
containerWidget7: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
profile_image: ["wm.Panel", {"border":"3","borderColor":"#f2f2f4","height":"100%","horizontalAlign":"center","padding":"20,0,0,0","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"266px"}, {}, {
configuracion_profile_image: ["wm.Picture", {"_classes":{"domNode":["profile_img"]},"aspect":"v","height":"150px","link":undefined,"source":"http://www.rochester.edu.co/fotosempleados/343225.Jpeg","styles":{},"width":"150px"}, {}],
configuracion_detalles: ["wm.Label", {"align":"center","caption":" ","height":"130px","padding":"4","singleLine":false,"styles":{"fontSize":"12px","color":"#020202"},"width":"100%"}, {}]
}],
panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"96%"}, {}, {
inicio_panel_opciones: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"10","styles":{},"verticalAlign":"top","width":"275px"}, {}, {
inicio_box_usuario: ["wm.TextEditor", {"caption":"Usuario","height":"28px","padding":"2","readonly":true,"styles":{},"width":"150%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
inicio_box_clave: ["wm.TextEditor", {"caption":"Clave","height":"28px","padding":"2","readonly":true,"styles":{},"width":"150%"}, {"onchange":"inicio_box_claveChange"}, {
editor: ["wm._TextEditor", {"changeOnEnter":true,"changeOnKey":true,"password":true}, {}]
}],
inicio_box_reclave: ["wm.TextEditor", {"caption":"Repetir Clave","height":"28px","padding":"2","readonly":true,"styles":{},"width":"150%"}, {"onchange":"inicio_box_reclaveChange"}, {
editor: ["wm._TextEditor", {"changeOnEnter":true,"changeOnKey":true,"password":true}, {}]
}],
inicio_ok_label: ["wm.Label", {"align":"center","caption":"Comparación de contraseña correcta!","height":"22px","padding":"4","showing":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
inicio_bad_label: ["wm.Label", {"align":"center","caption":"Verificación de contraseña erronea!","height":"22px","padding":"4","showing":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
spacer3: ["wm.Spacer", {"height":"12px","width":"96px"}, {}],
inicio_panel_boton_actualizar: ["wm.Panel", {"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
inicio_boton_actualiza: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Actualizar","disabled":true,"height":"100%","margin":"4","styles":{},"width":"96px"}, {"onclick":"a_actualizaClave"}],
inicio_boton_cancelar: ["wm.Button", {"_classes":{"domNode":["blue_button"]},"caption":"Cancelar","height":"100%","margin":"4","styles":{},"width":"96px"}, {"onclick":"inicio_boton_cancelarClick"}]
}],
inicio_forgot_password: ["wm.Label", {"align":"center","caption":"<u>¿Desea cambiar su contraseña?</u>","height":"25px","padding":"4","styles":{},"width":"100%"}, {"onclick":"inicio_forgot_passwordClick"}, {
format: ["wm.DataFormatter", {}, {}]
}],
logForm: ["wm.LiveForm", {"height":"60px","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {}, {
inicio_box_fecha: ["wm.DateEditor", {"caption":"hora","disabled":true,"displayValue":"2/11/2015","padding":"2","readonly":true,"showing":false}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}],
editor: ["wm._DateEditor", {}, {}]
}],
inicio_box_hora: ["wm.TimeEditor", {"caption":"fecha","disabled":true,"displayValue":"15:10 PM","padding":"2","showing":false}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}],
editor: ["wm._TimeEditor", {}, {}]
}]
}]
}]
}]
}],
buttonBar7: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"42px","height":"34px","mobileHeight":"42px","styles":{}}, {}, {
close_settings: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Cerrar","margin":"4","styles":{}}, {"onclick":"settingsUser.hide"}]
}]
}],
loadingDialog1: ["wm.LoadingDialog", {"caption":"unos segundos mas...","serviceVariableToTrack":["dash_dash_lv1","a_informacionUsuario","global_username","global_cursy","activitiesGetSubjectsByUser","a_cursy","a_getLastAccess"]}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel_principal","targetProperty":"widgetToCover"}, {}]
}]
}],
feedbackDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"420px","height":"420px","styles":{"backgroundColor":"#c53539"},"title":"Feedback - Usuarios"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","padding":"10,0,0,0","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"top","width":"100%"}, {}, {
feedback_texto_header: ["wm.Label", {"caption":"En este espacio usted podrá enviarnos su retroalimentación sobre  su experiencia en el uso del sistema Aprendoz.  <br><br>Por favor complete el formulario y haga clic en \"Enviar\". <br><br>Agradecemos su tiempo y ayuda.","height":"112px","padding":"4","singleLine":false,"styles":{"color":"#020202"},"width":"300px"}, {}],
feedback_liveForm: ["wm.LiveForm", {"height":"37px","horizontalAlign":"left","showing":false,"styles":{},"verticalAlign":"top"}, {"onSuccess":"feedback_liveFormSuccess","onSuccess1":"AccionExitosa"}],
feedback_tipo_feedback: ["wm.SelectMenu", {"caption":"Tipo feedback","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","required":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"feedback_tipo","targetProperty":"dataSet"}, {}]
}]
}],
feedback_titulo: ["wm.Text", {"border":"0","caption":"Titulo","dataValue":undefined,"displayValue":"","required":true,"styles":{}}, {}],
feedback_comentario: ["wm.LargeTextArea", {"border":"0","caption":"Comentario","captionAlign":"right","captionPosition":"left","captionSize":"100px","dataValue":undefined,"desktopHeight":"134px","displayValue":"","height":"134px","required":true,"styles":{}}, {}],
panel10: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"302px"}, {}, {
feedback_enviar: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Enviar","margin":"4","styles":{}}, {"onclick":"feedback_enviarClick"}],
feedback_cancelar: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Cancelar","margin":"4","styles":{}}, {"onclick":"feedback_cancelarClick"}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"34px","height":"34px"}, {}, {
feedback_close_butt: ["wm.Button", {"_classes":{"domNode":["Modificar"]},"caption":"Cerrar","margin":"4","styles":{}}, {"onclick":"feedbackDialog.hide"}]
}]
}],
demograficaDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar8","containerWidgetId":"containerWidget8","desktopHeight":"430px","height":"430px","modal":false,"styles":{"backgroundColor":"#63bb00"},"title":"Demográfica"}, {}, {
containerWidget8: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","styles":{"backgroundColor":"#f7f7f7"},"verticalAlign":"top","width":"100%"}, {}, {
wizardLayers1: ["wm.WizardLayers", {"height":"95%"}, {}, {
layer1: ["wm.Layer", {"caption":"<img src=\"http://img3.wikia.nocookie.net/__cb20120710180150/lego/images/e/ed/Red_Home_Icon.png\" height=\"15px\" width=\"15px\">","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
label6: ["wm.Label", {"padding":"4"}, {}]
}],
layer2: ["wm.Layer", {"caption":"layer2","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
label3: ["wm.Label", {"padding":"4"}, {}]
}],
layer3: ["wm.Layer", {"caption":"layer3","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
label4: ["wm.Label", {"padding":"4"}, {}]
}],
layer4: ["wm.Layer", {"caption":"layer4","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
label2: ["wm.Label", {"padding":"4"}, {}],
label5: ["wm.Label", {"padding":"4"}, {}]
}]
}]
}],
buttonBar8: ["wm.ButtonBarPanel", {"border":"1","desktopHeight":"34px","height":"34px"}, {}, {
demografica_close_butt: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Cerrar","margin":"4","styles":{}}, {"onclick":"demograficaDialog.hide"}]
}]
}],
panel_principal: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top","width":"802px"}, {}, {
FancyCentered: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
templateMain: ["wm.Template", {"_classes":{"domNode":["template-main","wm_BackgroundColor_White"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
aprendoz: ["wm.Panel", {"freeze":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panelHeader: ["wm.Panel", {"_classes":{"domNode":["template-header-panel","wm_BackgroundColor_White"]},"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"styles":{},"verticalAlign":"bottom","width":"100%"}, {}, {
logo: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/logos/headerapp.jpg","width":"600px"}, {}],
spacer5: ["wm.Spacer", {"height":"48px","width":"99%"}, {}],
top_Head: ["wm.Panel", {"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
dateEditor1: ["wm.DateEditor", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"captionPosition":"right","displayValue":"2/11/2015","padding":"2","readonly":true,"width":"80px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}],
editor: ["wm._DateEditor", {}, {}]
}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"align":"center","caption":"|","padding":"0","width":"10px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
timeEditor1: ["wm.TimeEditor", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"displayValue":"15:10 PM","padding":"2","readonly":true,"width":"76px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}],
editor: ["wm._TimeEditor", {}, {}]
}],
logout_picture: ["wm.Picture", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"border":"1","borderColor":"#aaa","height":"24px","margin":"2","source":"resources/images/buttons/logut.png","width":"25px"}, {"onclick":"LOGOUT"}]
}]
}],
panel1: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
templateTopLeft: ["wm.Panel", {"_classes":{"domNode":["template-top-left"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
templateTop: ["wm.Panel", {"_classes":{"domNode":["template-top-center"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
templateTopRight: ["wm.Panel", {"_classes":{"domNode":["template-top-right"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
}],
panel2: ["wm.Panel", {"freeze":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
templateLeft: ["wm.Panel", {"_classes":{"domNode":["template-left"]},"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"24px"}, {}],
templateContent: ["wm.Panel", {"_classes":{"domNode":["template-content"]},"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
main_menu: ["wm.Panel", {"border":"4","height":"100%","horizontalAlign":"center","lock":true,"styles":{"backgroundColor":"#a3a3a3"},"verticalAlign":"top","width":"135px"}, {}, {
spacer1: ["wm.Spacer", {"height":"37px","width":"96px"}, {}],
menu_logo: ["wm.Picture", {"aspect":"v","height":"35px","source":"resources/images/news_icons/logo_aprendoz.png","width":"120px"}, {}],
menu_bienvenida: ["wm.Label", {"align":"center","caption":"Bienvenido,","padding":"4","styles":{"color":"#fff"},"width":"100%"}, {}],
menu_profile_img: ["wm.Picture", {"aspect":"v","borderColor":"#fff","margin":"8","source":"http://aprendoz.rochester.edu.co/recursos/default_user.png","styles":{"borderRadius":"0px"},"width":"100%"}, {"onclick":"settingsUser.show"}],
menu_rol: ["wm.Label", {"align":"center","caption":"Rol","padding":"4","styles":{"color":"#fff"},"width":"100%"}, {}],
menu_spacer1: ["wm.Spacer", {"height":"10px","styles":{},"width":"100%"}, {}],
logout_icon: ["wm.Picture", {"aspect":"v","height":"24px","source":"resources/images/icon_set/logout.png","width":"24px"}, {"onclick":"templateLogoutVar"}],
panel6: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lastAccess_Label: ["wm.Label", {"_classes":{"domNode":["lastAccess"]},"align":"center","caption":"","height":"30px","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
menu_spacer2: ["wm.Spacer", {"height":"20px","styles":{},"width":"100%"}, {}],
menu_inicio_butt: ["wm.Button", {"border":"0","caption":" Inicio","desktopHeight":"48px","height":"48px","iconHeight":"24px","iconUrl":"resources/images/icon_set/home.png","iconWidth":"25px","margin":"0","styles":{"backgroundColor":"#1125b2"},"width":"100%"}, {"onclick":"menu_inicio_buttClick","onclick1":"menu_inicio_buttClick1","onclick2":"menu_inicio_buttClick2"}],
menu_curriculo_butt: ["wm.Button", {"_classes":{"domNode":["MenuButtons"]},"border":"0","caption":" Curriculo","desktopHeight":"48px","height":"48px","iconHeight":"37px","iconMargin":"0 0px 0 0","iconUrl":"resources/images/icon_set/curriculo_white.png","iconWidth":"25px","margin":"0","styles":{},"width":"100%"}, {"onclick":"menu_curriculo_buttClick","onclick1":"menu_curriculo_buttClick1","onclick3":"menu_curriculo_buttClick3","onclick4":"menu_curriculo_buttClick4","onclick5":"menu_curriculo_buttClick5","onclick6":"menu_curriculo_buttClick6","onclick7":"menu_curriculo_buttClick7"}],
menu_asignatura_butt: ["wm.Button", {"_classes":{"domNode":["MenuButtons"]},"caption":"Asignatura","desktopHeight":"48px","height":"48px","iconHeight":"22px","iconUrl":"resources/images/icon_set/board.png","iconWidth":"22px","margin":"0","styles":{},"width":"100%"}, {"onclick":"menu_asignatura_buttClick","onclick1":"menu_asignatura_buttClick1"}],
menu_estudiante_butt: ["wm.Button", {"_classes":{"domNode":["MenuButtons"]},"caption":"Estudiante","desktopHeight":"48px","height":"48px","iconHeight":"22px","iconUrl":"resources/images/icon_set/student.png","iconWidth":"22px","margin":"0","styles":{},"width":"100%"}, {"onclick":"menu_estudiante_buttClick","onclick1":"menu_estudiante_buttClick1"}],
menu_coordinator: ["wm.Button", {"desktopHeight":"65px","height":"65px","margin":"0","showing":false,"styles":{},"width":"100%"}, {}],
menu_calificaciones_butt: ["wm.Button", {"_classes":{"domNode":["MenuButtons"]},"border":"0","caption":"Calificaciones","desktopHeight":"48px","height":"48px","margin":"0","showing":false,"styles":{},"width":"100%"}, {}],
menu_cafemu_butt: ["wm.Button", {"_classes":{"domNode":["MenuButtons"]},"border":"0","caption":"Cafe-Mu","desktopHeight":"48px","height":"48px","margin":"0","showing":false,"styles":{},"width":"100%"}, {}],
menu_horarios_butt: ["wm.Button", {"_classes":{"domNode":["MenuButtons"]},"border":"0","caption":"Horarios","desktopHeight":"48px","height":"48px","margin":"0","showing":false,"styles":{},"width":"100%"}, {}],
menu_demografica_butt: ["wm.Button", {"_classes":{"domNode":["MenuButtons"]},"border":"0","caption":"Demográfica","desktopHeight":"48px","height":"48px","margin":"0","showing":false,"styles":{},"width":"100%"}, {}],
menu_spacer: ["wm.Spacer", {"height":"100%","styles":{},"width":"96px"}, {}],
menu_feedback_butt: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"border":"0","caption":"Feedback","desktopHeight":"40px","height":"40px","iconHeight":"22px","iconUrl":"resources/images/icon_set/feedback.png","iconWidth":"22px","margin":"0","styles":{},"width":"100%"}, {"onclick":"feedbackDialog.show"}]
}],
contaniner_panels: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5,10,10,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
top_notification_panel: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"margin":"0,0,0,0","padding":"0,5,0,0","styles":{"backgroundColor":"#a3a3a3"},"verticalAlign":"middle","width":"100%"}, {}, {
top_select_sy: ["wm.SelectMenu", {"caption":"Año escolar","dataType":"com.aprendoz_test.data.Sy","dataValue":undefined,"displayField":"schoolYear","displayValue":""}, {"onchange":"top_select_syChange","onchange1":"top_select_syChange1","onchange2":"top_select_syChange2"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_lista_sy","targetProperty":"dataSet"}, {}]
}]
}],
spacer2: ["wm.Spacer", {"height":"48px","width":"100%"}, {}],
profile_button: ["wm.Button", {"_classes":{"domNode":["blue_button"]},"border":"0","caption":" ","iconHeight":"24px","iconMargin":"0 5px 0 0","iconUrl":"resources/images/icon_set/settings.png","iconWidth":"24px","margin":"0","styles":{},"width":"110px"}, {"onclick":"settingsUser.show"}]
}],
curriculo_big_panel: ["wm.Panel", {"height":"1264px","horizontalAlign":"left","lock":true,"showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
curriculo_action_panel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"top","width":"100%"}, {}, {
curriculo_detalles_estudiantes_butt: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Ver estudiantes","disabled":true,"margin":"4","styles":{},"width":"138px"}, {"onclick":"curriculo_detalles_estudiantes_buttClick","onclick1":"curriculo_detalles_estudiantes_buttClick1"}]
}],
curriculo_grid_docentes_asignaturas: ["wm.DojoGrid", {"_classes":{"domNode":["gridscss"]},"columns":[
{"show":false,"field":"idpersona","title":"Idpersona","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nick","title":"Nick","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"idasignatura","title":" ","width":"80px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"asignatura","title":"Nombre<br>Asignatura","width":"100%","align":"left","formatFunc":"","editorProps":null,"expression":"'<u>'+${asignatura}+'</u>'","mobileColumn":false},
{"show":true,"field":"subject","title":"Subject<br>Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idasignatura} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombre<br>Asignatura: \" + ${wm.runtimeId}.formatCell(\"asignatura\", ${asignatura}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Subject<br>Name: \" + ${subject}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"year","title":"Year","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idsy","title":"Idsy","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subarea2","title":"Subarea2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subarea1","title":"Subarea1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subarea3","title":"Subarea3","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"com.aprendoz_test.data.output._global_curriculo_asig_docRtnType","height":"210px","localizationStructure":{},"margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"11px","backgroundColor":"#ffffff"}}, {"onCellDblClick":"curriculo_grid_docentes_asignaturasCellDblClick","onSelect":"curriculo_grid_docentes_asignaturasSelect","onSelect1":"curriculo_grid_docentes_asignaturasSelect1","onSelect2":"curriculo_grid_docentes_asignaturasSelect2","onSelect3":"curriculo_grid_docentes_asignaturasSelect3","onSelect4":"curriculo_grid_docentes_asignaturasSelect4","onSelectionChange":"curriculo_grid_docentes_asignaturasSelectionChange","onSelectionChange1":"curriculo_grid_docentes_asignaturasSelectionChange1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"global_docentes_asignaturas","targetProperty":"dataSet"}, {}]
}]
}],
panel9: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"top","width":"100%"}, {}],
logDocentesliveForm: ["wm.LiveForm", {"height":"44px","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {}],
unidadLivePanel1: ["wm.LivePanel", {"autoScroll":false,"height":"230px","horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"unidadDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"unidadLiveForm2","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"unidadDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"unidadSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
unidadDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["gridscss"]},"columns":[
{"show":true,"field":"idUnidad","title":" ","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"numeroUnidad","title":"No. <br>Unidad","width":"80px","align":"center","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"unidad","title":"Unidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"unit","title":"Unit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fechaInicio","title":"Fecha Inicio","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"fechaFin","title":"Fecha Fin","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idUnidad} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"No. <br>Unidad: \" + ${numeroUnidad}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Unidad: \" + ${unidad}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Unit: \" + ${unit}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha Inicio: \" + ${wm.runtimeId}.formatCell(\"fechaInicio\", ${fechaInicio}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha Fin: \" + ${wm.runtimeId}.formatCell(\"fechaFin\", ${fechaFin}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.Unidad","height":"100%","margin":"0","minDesktopHeight":60,"styles":{"fontSize":"11px"}}, {"onCellDblClick":"unidadLivePanel1.popupLivePanelEdit","onDeselect":"unidadDojoGridDeselect","onSelect":"unidadDojoGridSelect","onSelect1":"unidadDojoGridSelect1","onSelectionChange":"unidadDojoGridSelectionChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"unidadLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
unidadGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"top","width":"100%"}, {}, {
unidadNewButton: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Nueva unidad","disabled":true,"margin":"4","styles":{},"width":"120px"}, {"onclick":"unidadLivePanel1.popupLivePanelInsert"}],
unidadUpdateButton: ["wm.Button", {"_classes":{"domNode":["Modificar"]},"caption":"Modificar","margin":"4","styles":{}}, {"onclick":"unidadLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"unidadDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
unidadDeleteButton: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Eliminar","margin":"4","styles":{}}, {"onclick":"unidadLiveForm2.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"unidadDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}],
subtopicoLivePanel1: ["wm.LivePanel", {"autoScroll":false,"height":"230px","horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"subtopicoDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"subtopicoLiveForm2","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"subtopicoDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"subtopicoSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
subtopicoDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["gridscss"]},"columns":[
{"show":true,"field":"idSubtopico","title":" ","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"numeroSubtopico","title":"No. <br>Subtopico","width":"80px","align":"center","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"subtopico","title":"Subtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"subtopic","title":"Subtopic","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"fechaInicio","title":"Fecha Inicio","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"fechaFin","title":"Fecha Fin","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idSubtopico} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"No. <br>Subtopico: \" + ${numeroSubtopico}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Subtopico: \" + ${subtopico}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Subtopic: \" + ${subtopic}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha Inicio: \" + ${wm.runtimeId}.formatCell(\"fechaInicio\", ${fechaInicio}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha Fin: \" + ${wm.runtimeId}.formatCell(\"fechaFin\", ${fechaFin}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.Subtopico","height":"100%","margin":"0","minDesktopHeight":60,"styles":{"color":"#050505","fontSize":"11px"}}, {"onCellDblClick":"subtopicoLivePanel1.popupLivePanelEdit","onSelect":"subtopicoDojoGridSelect","onSelect1":"subtopicoDojoGridSelect1","onSelect2":"subtopicoDojoGridSelect2","onSelect3":"subtopicoDojoGridSelect3","onSelect4":"curriculo_tipo_recurso","onSelect5":"subtopicoDojoGridSelect5"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"subtopicoLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
subtopicoGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"top","width":"100%"}, {}, {
subtopicoNewButton: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Nuevo subtópico","disabled":true,"margin":"4","styles":{},"width":"120px"}, {"onclick":"subtopicoLivePanel1.popupLivePanelInsert"}],
subtopicoUpdateButton: ["wm.Button", {"_classes":{"domNode":["Modificar"]},"caption":"Modificar","margin":"4","styles":{}}, {"onclick":"subtopicoLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"subtopicoDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
subtopicoDeleteButton: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Eliminar","margin":"4","styles":{}}, {"onclick":"subtopicoLiveForm2.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"subtopicoDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}],
subs_and_details: ["wm.TabLayers", {"height":"260px","styles":{}}, {}, {
aprendizaje: ["wm.Layer", {"caption":"Aprendizaje","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
aprendizajeLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"aprendizajeDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"aprendizajeLiveForm2","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"aprendizajeDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"aprendizajeSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
aprendizajeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["gridscss"]},"columns":[
{"show":true,"field":"idAprendizaje","title":" ","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fechaEsperada","title":"Fecha esperada","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"aprendizaje","title":"Aprendizaje","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"learning","title":"Learning","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"peso","title":"Peso","width":"50px","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ejeIdEje","title":"EjeIdEje","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"eje2IdEje","title":"Eje2IdEje","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"eje3IdEje","title":"Eje3IdEje","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idAprendizaje} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha esperada: \" + ${wm.runtimeId}.formatCell(\"fechaEsperada\", ${fechaEsperada}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Aprendizaje: \" + ${aprendizaje}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Learning: \" + ${learning}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Peso: \" + ${peso}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.Aprendizaje","height":"100%","margin":"0","minDesktopHeight":60,"styles":{"fontSize":"11px","color":"#090808"}}, {"onCellDblClick":"aprendizajeLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"aprendizajeLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
aprendizajeGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"top","width":"100%"}, {}, {
aprendizajeNewButton: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Nuevo aprendizaje","disabled":true,"margin":"4","styles":{"backgroundColor":"#63bb00","color":"#ffffff"},"width":"120px"}, {"onclick":"aprendizajeLivePanel1.popupLivePanelInsert"}],
aprendizajeUpdateButton: ["wm.Button", {"_classes":{"domNode":["Modificar"]},"caption":"Modificar","margin":"4","showing":false,"styles":{}}, {"onclick":"aprendizajeLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"aprendizajeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
aprendizajeDeleteButton: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Eliminar","margin":"4","styles":{}}, {"onclick":"aprendizajeLiveForm2.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"aprendizajeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
metas: ["wm.Layer", {"_classes":{"domNode":["gridscss"]},"caption":"Metas","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
otrasmetasLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"otrasmetasDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"otrasmetasLiveForm2","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"otrasmetasDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"otrasmetasSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
otrasmetasDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idOtraMeta","title":" ","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"meta","title":"Descripción<br>Meta","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fecha","title":"Fecha","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"logrado","title":"Logrado","width":"100px","align":"center","formatFunc":"","fieldType":"dojox.grid.cells.Bool","mobileColumn":false},
{"show":false,"field":"idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idOtraMeta} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Descripción<br>Meta: \" + ${meta}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha: \" + ${wm.runtimeId}.formatCell(\"fecha\", ${fecha}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Logrado: \" + ${logrado}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.OtrasMetas","height":"100%","margin":"0","minDesktopHeight":60,"styles":{"fontSize":"11px","color":"#050505"}}, {"onCellDblClick":"otrasmetasLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"otrasmetasLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
otrasmetasGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"top","width":"100%"}, {}, {
otrasmetasNewButton: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Nueva meta","disabled":true,"margin":"4","styles":{},"width":"120px"}, {"onclick":"otrasmetasLivePanel1.popupLivePanelInsert"}],
otrasmetasUpdateButton: ["wm.Button", {"_classes":{"domNode":["Modificar"]},"caption":"Modificar","margin":"4","styles":{}}, {"onclick":"otrasmetasLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"otrasmetasDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
otrasmetasDeleteButton: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Eliminar","margin":"4","styles":{}}, {"onclick":"otrasmetasLiveForm2.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"otrasmetasDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
recursos: ["wm.Layer", {"caption":"Recursos","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
recursoLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"recursoDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"recursoLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"recursoDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"recursoSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
recursoDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["gridscss"]},"columns":[
{"show":true,"field":"idRecurso","title":" ","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"recurso","title":"Nombre<br>Recurso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"ubicacion","title":"Ubicación / Http","width":"80%","align":"left","expression":"if (${tipoRecurso.tipoRecurso}==\"Archivo / Documento digital\" || ${tipoRecurso.tipoRecurso}==\"Sitio Internet\" || ${tipoRecurso.tipoRecurso}==\"Libro / Artículo\" || ${tipoRecurso.tipoRecurso}==\"Película / Video\" || ${tipoRecurso.tipoRecurso}==\"Tecnología\" ) {\n'<a href=\"'+${ubicacion}+'\" target=\"_blank\">'+${ubicacion}+'</a>';\n} \nelse {\n${ubicacion}\n}","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idRecurso} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombre<br>Recurso: \" + ${recurso}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Ubicación / Http: \" + ${wm.runtimeId}.formatCell(\"ubicacion\", ${ubicacion}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"fileName","title":"FileName","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"com.aprendoz_test.data.Recurso","height":"100%","margin":"0","minDesktopHeight":60,"styles":{"color":"#070707","fontSize":"11px"}}, {"onCellDblClick":"recursoLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"recursoLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
recursoGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"top","width":"100%"}, {}, {
recursoNewButton: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Nuevo recurso","disabled":true,"margin":"4","styles":{},"width":"120px"}, {"onclick":"recursoLivePanel1.popupLivePanelInsert"}],
recursoUpdateButton: ["wm.Button", {"_classes":{"domNode":["Modificar"]},"caption":"Modificar","margin":"4","styles":{}}, {"onclick":"recursoLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"recursoDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
recursoDeleteButton: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Eliminar","margin":"4","styles":{}}, {"onclick":"recursoLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"recursoDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
actividades2: ["wm.Layer", {"caption":"Actividades","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
actividadLivePanel2: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"actividadDialog1","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"actividadLiveForm3","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"actividadDojoGrid1","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"actividadSaveButton1","targetId":null,"targetProperty":"saveButton"}, {}]
}],
actividadDojoGrid1: ["wm.DojoGrid", {"_classes":{"domNode":["gridscss"]},"columns":[
{"show":true,"field":"idActividad","title":" ","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"actividad","title":"Nombre<br>Actividad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fecha","title":"Fecha","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"requeridoAlternativo","title":"Requerido","width":"80px","align":"center","formatFunc":"","fieldType":"dojox.grid.cells.Bool","mobileColumn":false},
{"show":false,"field":"idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idActividad} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombre<br>Actividad: \" + ${actividad}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha: \" + ${wm.runtimeId}.formatCell(\"fecha\", ${fecha}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Requerido: \" + ${requeridoAlternativo}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.Actividad","height":"100%","margin":"0","minDesktopHeight":60,"styles":{"fontSize":"11px","color":"#020202"}}, {"onCellDblClick":"actividadLivePanel2.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"actividadLiveVariable2","targetProperty":"dataSet"}, {}]
}]
}],
actividadGridButtonPanel1: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"top","width":"100%"}, {}, {
actividadNewButton1: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Nueva actividad","disabled":true,"margin":"4","styles":{},"width":"120px"}, {"onclick":"actividadLivePanel2.popupLivePanelInsert"}],
actividadUpdateButton1: ["wm.Button", {"_classes":{"domNode":["Modificar"]},"caption":"Modificar","margin":"4","styles":{}}, {"onclick":"actividadLivePanel2.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"actividadDojoGrid1.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
actividadDeleteButton1: ["wm.Button", {"_classes":{"domNode":["eliminar"]},"caption":"Eliminar","margin":"4","styles":{}}, {"onclick":"actividadLiveForm3.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"actividadDojoGrid1.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
how_to_start: ["wm.Panel", {"height":"156px","horizontalAlign":"left","lock":true,"showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
home_label1: ["wm.Label", {"caption":"¿Cómo desea empezar?","height":"40px","padding":"4","styles":{"color":"#020202","fontSize":"14px"},"width":"100%"}, {}],
panel23: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}]
}],
inicio_big_panel: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label_nombreCompleto: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_28px"]},"align":"center","caption":"Indicadores // Dashboard","height":"50px","padding":"4","styles":{"fontSize":"10px"},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
dash_chart1: ["wm.Panel", {"height":"276px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}],
panelCoordinadorCurricular: ["wm.Panel", {"height":"276px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"styles":{"backgroundColor":"#dcc0c0"},"verticalAlign":"top","width":"100%"}, {}, {
panel_left1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
button1: ["wm.Button", {"margin":"4","styles":{}}, {}],
chart2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}]
}],
panel_right1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
button2: ["wm.Button", {"margin":"4","styles":{}}, {}],
chart3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#ad395e"},"verticalAlign":"top","width":"100%"}, {}]
}]
}],
panelCoordinadorCurso: ["wm.Panel", {"height":"275px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel_left2: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
top_panel_chart_4: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#bbb"},"verticalAlign":"top","width":"100%"}, {}, {
label7: ["wm.Label", {"_classes":{"domNode":["dashboard_headers_labels"]},"align":"center","caption":"ALUMNOS SIN FALTAS GRAVES","height":"100%","padding":"4","styles":{"fontSize":"14px"},"width":"100%"}, {}]
}],
chart4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"230px"}, {}]
}],
panel_right2: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel12: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label8: ["wm.Label", {"_classes":{"domNode":["dashboard_headers_labels"]},"align":"center","caption":"PUNTAJE GENERAL POR ASIGNATURA","height":"100%","padding":"4","styles":{},"width":"100%"}, {}]
}],
asignaturaCoordinadorSelect: ["wm.SelectMenu", {"caption":"Asignatura","dataField":"idasignatura","dataType":"com.aprendoz_test.data.output.GetSubjectsByTeacherRtnType","dataValue":undefined,"displayField":"asignatura","displayValue":""}, {"onchange":"asignaturaCoordinadorSelectChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"asignaturasPorDocente","targetProperty":"dataSet"}, {}]
}]
}],
chart5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"230px"}, {}]
}]
}],
panel11: ["wm.Panel", {"height":"450px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel_left3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel13: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label9: ["wm.Label", {"_classes":{"domNode":["dashboard_headers_labels"]},"caption":"MALLA SOBRE ENFASIS CURRICULAR","height":"100%","padding":"4","styles":{},"width":"100%"}, {}]
}],
panel15: ["wm.Panel", {"height":"36px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
asignaturaCoordinadorSelect2: ["wm.SelectMenu", {"caption":"Asignatura","dataField":"idasignatura","dataType":"com.aprendoz_test.data.output.GetSubjectsByTeacherRtnType","dataValue":undefined,"displayField":"asignatura","displayValue":""}, {"onchange":"asignaturaCoordinadorSelect2Change"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"asignaturasPorDocente","targetProperty":"dataSet"}, {}]
}]
}]
}],
spider_container: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
spider_comprension: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
spider_curricular: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}]
}]
}],
panel_right3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel14: ["wm.Panel", {"height":"48px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label10: ["wm.Label", {"_classes":{"domNode":["dashboard_headers_labels"]},"caption":"PUNTAJES DE ESTUDIANTES POR CURSO","height":"100%","padding":"4","styles":{},"width":"200%"}, {}]
}],
chart6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}]
}]
}]
}],
spacer6: ["wm.Spacer", {"height":"10px","styles":{},"width":"96px"}, {}],
asignatura_big_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","lock":true,"showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
asignatura_header_panel: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,2,2","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"middle","width":"100%"}, {}, {
asignatura_titulo: ["wm.Label", {"caption":"&NestedGreaterGreater; Nombre asignatura","height":"42px","padding":"4","styles":{"color":"#0c0b0b","fontWeight":"bold","textDecoration":"underline","fontSize":"12px"},"width":"100%"}, {}],
asignatura_detalles_alumno: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Detalles Estudiante","disabled":true,"margin":"4","styles":{},"width":"150px"}, {"onclick":"asignatura_detalles_alumnoClick","onclick1":"asignatura_detalles_alumnoClick1","onclick2":"asignatura_detalles_alumnoClick2"}]
}],
dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"curso","title":"Curso","width":"80px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"codigo","title":"Código<br>Estudiante","width":"80px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"nombres","title":"Nombres","width":"100%","align":"left","formatFunc":"","editorProps":null,"expression":"'<u>'+${nombres}+'</u>'","mobileColumn":false},
{"show":true,"field":"apellidos","title":"Apellidos","width":"100%","align":"left","formatFunc":"","editorProps":null,"expression":"'<u>'+${apellidos}+'</u>'","mobileColumn":false},
{"show":false,"field":"asignatura","title":"Asignatura","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"esperados","title":"Esperados","width":"70px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"porcentaje","title":"Porcentaje","width":"70px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"calificacion","title":"Calificacion","width":"70px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"puntaje","title":"Puntaje","width":"70px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"idasignatura","title":"Idasignatura","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idPersona","title":"IdPersona","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"logrados","title":"Logrados","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Curso: \" + ${curso} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Código<br>Estudiante: \" + ${codigo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombres: \" + ${wm.runtimeId}.formatCell(\"nombres\", ${nombres}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Apellidos: \" + ${wm.runtimeId}.formatCell(\"apellidos\", ${apellidos}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Esperados: \" + ${esperados}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Porcentaje: \" + ${porcentaje}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Calificacion: \" + ${calificacion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Puntaje: \" + ${puntaje}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.output.Getting_subjects_studentsRtnType","height":"500px","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"11px"}}, {"onCellDblClick":"dojoGrid1CellDblClick","onSelect":"dojoGrid1Select"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"asignaturas_vista_asignaturas_estudiantes_sv","targetProperty":"dataSet"}, {}]
}]
}],
asignatura_footer_tabla: ["wm.Panel", {"_classes":{"domNode":["nuevoButtons"]},"height":"28px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
asignatura_footer_counter_label: ["wm.Label", {"align":"right","caption":"Total alumnos en la asignatura:  ","height":"100%","padding":"4","width":"300px"}, {}]
}]
}],
estudiante_big_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"styles":{},"verticalAlign":"top","width":"100%"}, {}, {
estudiante_header_detalles: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"middle","width":"100%"}, {}, {
estudiante_demografica_butt: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Demográfica","desktopHeight":"34px","height":"34px","iconHeight":"22px","iconUrl":"resources/images/icon_set/demo.png","iconWidth":"22px","margin":"4","styles":{},"width":"252px"}, {"onclick":"demograficaDialog.show"}],
estudiante_asignatura_butt: ["wm.Button", {"_classes":{"domNode":["nuevoButtons"]},"caption":"Asignatura","desktopHeight":"34px","height":"34px","iconHeight":"22px","iconUrl":"resources/images/icon_set/board.png","iconWidth":"22px","margin":"4","styles":{},"width":"312px"}, {"onclick":"estudiante_asignatura_buttClick","onclick1":"estudiante_asignatura_buttClick1"}]
}],
estudiante_detalles_curriculo: ["wm.Panel", {"height":"450px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
left_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"80%"}, {}, {
estudiantes_curriculo_dojogrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idaprendizaje","title":" ","width":"60px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"peso","title":"#","width":"10px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"fechaesperada","title":"Fecha <br>esperada","width":"80px","align":"left","formatFunc":"wm_date_formatter","editorProps":null,"mobileColumn":false},
{"show":true,"field":"aprendizaje","title":"Aprendizaje","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"idpersona","title":"Idpersona","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idunidad","title":"Idunidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idsubtopico","title":"Idsubtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"numerounidad","title":"#","width":"10px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"unidad","title":"Unidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idasignatura","title":"Idasignatura","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"numerosubtopico","title":"#","width":"10px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"subtopico","title":"Subtópico","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idaprendizaje} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"#: \" + ${peso}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha <br>esperada: \" + ${wm.runtimeId}.formatCell(\"fechaesperada\", ${fechaesperada}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Aprendizaje: \" + ${aprendizaje}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"#: \" + ${numerounidad}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Unidad: \" + ${unidad}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"#: \" + ${numerosubtopico}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Subtópico: \" + ${subtopico}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.output.Estudiantes_listado_curriculoRtnType","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"10px"}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"estudiantes_detalles_curriculo","targetProperty":"dataSet"}, {}]
}]
}]
}],
right_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"middle","width":"20%"}, {}, {
details_estudiante: ["wm.Panel", {"height":"90%","horizontalAlign":"center","styles":{"backgroundColor":"#d3d3d3"},"verticalAlign":"middle","width":"90%"}, {}, {
estudiante_foto_perfil: ["wm.Picture", {"aspect":"v","border":"3","height":"110px","source":"http://www.oolux.org/wp-content/uploads/2013/04/profile_default.jpg","styles":{},"width":"110px"}, {}],
spacer4: ["wm.Spacer", {"height":"10px","width":"96px"}, {}],
estudiante_nombre_perfil: ["wm.Label", {"align":"center","caption":"Estudiante","height":"55px","padding":"4","singleLine":false,"width":"200%"}, {}]
}]
}]
}],
estudiante_footer_detalles: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#f2f2f2"},"verticalAlign":"middle","width":"100%"}, {}, {
estudiante_calif_estudiante_butt: ["wm.Button", {"_classes":{"domNode":["blue_button"]},"caption":"Calificar estudiante","desktopHeight":"34px","disabled":true,"height":"34px","iconHeight":"22px","iconUrl":"resources/images/icon_set/score.png","iconWidth":"22px","margin":"4","styles":{},"width":"180px"}, {}]
}]
}]
}],
main: ["wm.TabLayers", {"padding":"10","showing":false,"styles":{}}, {}, {
horarios: ["wm.Layer", {"caption":"Horarios","horizontalAlign":"left","lock":true,"margin":"2,0,2,0","roles":["4","5","6","7","8","9","10","11","13","14","15","16","17","18","19","20","21","22","23","24"],"verticalAlign":"top"}, {}, {
HorarioPageContainer: ["wm.PageContainer", {"deferLoad":true,"pageName":"Horarios","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
coordinadores: ["wm.Layer", {"caption":"Coordinador","horizontalAlign":"left","lock":true,"margin":"2,0,2,0","verticalAlign":"top"}, {}, {
coordinador_page: ["wm.PageContainer", {"deferLoad":true,"loadParentFirst":false,"pageName":"Coordinador","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
demografica: ["wm.Layer", {"caption":"Demográfica","horizontalAlign":"left","lock":true,"margin":"2,0,2,0","roles":["4","5","7","8","9","6","10","18","17","19","20","21","22","23","24"],"verticalAlign":"top"}, {}, {
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"Demografica","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
asignaturas: ["wm.Layer", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"caption":"Asignaturas","horizontalAlign":"left","lock":true,"margin":"2,0,2,0","roles":["7","10","8","11","22","23","21","24","6","5","4"],"showing":false,"verticalAlign":"top"}, {"onShow":"asignaturasShow"}, {
panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2","verticalAlign":"top","width":"100%"}, {}, {
panel61: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
asignaturaLivePanel2: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
asignaturaGridPanel3: ["wm.FancyPanel", {"height":"573px","margin":"0","title":"Tabla Asignatura"}, {}, {
panel63: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"55px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
label21: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Buscar Asignaturas por:","height":"48px","padding":"4","width":"187px"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
textEditor2: ["wm.TextEditor", {"caption":"Codigo Asignatura","captionAlign":"left","captionPosition":"top","height":"55px","padding":"2","width":"160px"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
textEditor3: ["wm.TextEditor", {"caption":"Asignatura","captionAlign":"left","captionPosition":"top","height":"55px","padding":"2","width":"158px"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
textEditor4: ["wm.TextEditor", {"caption":"Intersidad Horaria","captionAlign":"left","captionPosition":"top","height":"55px","padding":"2","width":"139px"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
selectEditor15: ["wm.SelectEditor", {"caption":"Año escolar","captionAlign":"left","captionPosition":"top","height":"55px","padding":"2","width":"120px"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"idSy","displayField":"schoolYear"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_lista_sy","targetProperty":"dataSet"}, {}]
}]
}]
}],
selectEditor16: ["wm.SelectEditor", {"caption":"Grado","captionAlign":"left","captionPosition":"top","height":"55px","padding":"2","width":"135px"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"idGrado","displayField":"grado"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_grado","targetProperty":"dataSet"}, {}]
}]
}]
}],
spacer38: ["wm.Spacer", {"height":"48px","width":"19px"}, {}],
button16: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Buscar","margin":"2","width":"74px"}, {"onclick":"asignaturaLiveVariable3"}],
button17: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Limpiar","margin":"2"}, {"onclick":"button17Click"}]
}],
asignaturaDataGrid2: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]}}, {"onRowDblClick":"asignaturaDataGrid2RowDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"asignaturaLiveVariable3","targetProperty":"dataSet"}, {}]
}],
idAsignatura2: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"•","columnWidth":"64px","field":"idAsignatura"}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
asignatura2: ["wm.DataGridColumn", {"caption":"Asignatura","columnWidth":"250px","field":"asignatura","index":1}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
subject2: ["wm.DataGridColumn", {"caption":"Subject","columnWidth":"250px","field":"subject","index":2}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
idArea4: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Area #1","columnWidth":"67px","display":"Number","field":"idArea1","index":3}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
idArea5: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Area #2","columnWidth":"64px","display":"Number","field":"idArea2","index":5}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
idArea6: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Area #3","columnWidth":"65px","display":"Number","field":"idArea3","index":7}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
idSubarea4: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Subarea #1","columnWidth":"57px","display":"Number","field":"idSubarea1","index":9}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
idSubarea5: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Subarea #2","columnWidth":"59px","display":"Number","field":"idSubarea2","index":10}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
idSubarea6: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Subarea #3","columnWidth":"63px","display":"Number","field":"idSubarea3","index":11}, {}, {
format1: ["wm.NumberFormatter", {}, {}]
}],
column1: ["wm.DataGridColumn", {"caption":"Peso","columnWidth":"42px","field":"peso","index":12}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column2: ["wm.DataGridColumn", {"caption":"I.H Area 1","columnWidth":"60px","field":"ihA1","index":4}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column3: ["wm.DataGridColumn", {"caption":"I.H Area 2","columnWidth":"60px","field":"ihA2","index":6}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column4: ["wm.DataGridColumn", {"caption":"I.H Area 3","columnWidth":"60px","field":"ihA3","index":8}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}]
}]
}],
splitter5: ["wm.Splitter", {"height":"4px","width":"100%"}, {}],
asignaturaDetailsPanel1: ["wm.FancyPanel", {"margin":"0","title":"Asignaturas"}, {}, {
asignaturaLiveForm2: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_16px"]},"height":"100%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onSuccess":"asignaturaLiveVariable3"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"asignaturaDataGrid2.selectedItem","targetProperty":"dataSet"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"syRelatedEditor2.dataOutput","targetProperty":"dataOutput.sy"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor4.dataOutput","targetProperty":"dataOutput.tipoInscAsig"}, {}]
}],
panel62: ["wm.Panel", {"height":"162px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
layers13: ["wm.Layers", {}, {}, {
layer31: ["wm.Layer", {"borderColor":"","caption":"layer31","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
idAsignaturaEditor2: ["wm.Editor", {"caption":"ID Asignatura","display":"Number","formField":"idAsignatura","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._NumberEditor", {"required":true}, {}]
}],
asignaturaEditor2: ["wm.Editor", {"caption":"Asignatura","formField":"asignatura","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
panel89: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
idArea1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_Yellow"]},"caption":"Area 1","display":"Select","formField":"idArea1","height":"25px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"idArea","displayField":"area"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"ls_Area1","targetProperty":"dataSet"}, {}]
}]
}]
}],
IhA1: ["wm.NumberEditor", {"_classes":{"domNode":["wm_BackgroundColor_Yellow"]},"caption":"I.H","disabled":true,"formField":"ihA1","height":"25px","padding":"2","readonly":true}, {}, {
editor: ["wm._NumberEditor", {"places":"2","promptMessage":"Digite aqui la Intensidad Horaria para el Area #1","required":true}, {}]
}]
}],
panel90: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
idArea2: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_Purple"]},"caption":"Area 2","display":"Select","formField":"idArea2","height":"25px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"idArea","displayField":"area"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"ls_Area2","targetProperty":"dataSet"}, {}]
}]
}]
}],
IhA2: ["wm.NumberEditor", {"_classes":{"domNode":["wm_BackgroundColor_Purple"]},"caption":"I.H","disabled":true,"formField":"ihA2","height":"25px","padding":"2","readonly":true}, {}, {
editor: ["wm._NumberEditor", {"places":"2","promptMessage":"Digite aqui la Intensidad Horaria para el Area #2","required":true}, {}]
}]
}],
panel91: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
idArea3: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_Green"]},"caption":"Area 3","display":"Select","formField":"idArea3","height":"25px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"idArea","displayField":"area"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"ls_Area3","targetProperty":"dataSet"}, {}]
}]
}]
}],
IhA3: ["wm.NumberEditor", {"_classes":{"domNode":["wm_BackgroundColor_Green"]},"caption":"I.H","disabled":true,"formField":"ihA3","height":"25px","padding":"2","readonly":true}, {}, {
editor: ["wm._NumberEditor", {"places":"2","promptMessage":"Digite aqui la Intensidad Horaria para el Area #3","required":true}, {}]
}]
}],
intensidadHorariaEditor2: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"I.H Total Asignatura","captionSize":"120%","disabled":true,"display":"Number","formField":"intensidadHoraria","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${IhA1.dataValue}+${IhA2.dataValue}+${IhA3.dataValue}","targetProperty":"dataValue"}, {}]
}],
editor: ["wm._NumberEditor", {"places":"1","promptMessage":"xxxx"}, {}]
}]
}]
}],
layers12: ["wm.Layers", {}, {}, {
layer30: ["wm.Layer", {"borderColor":"","caption":"layer30","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
electivaEditor2: ["wm.Editor", {"caption":"Electiva","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"electiva","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
}],
subjectEditor2: ["wm.Editor", {"caption":"Subject","formField":"subject","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._TextEditor", {}, {}]
}],
idSubarea1: ["wm.Editor", {"caption":"Subarea 1","display":"Select","formField":"idSubarea1","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"idSubarea","displayField":"subarea"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lv_subarea1","targetProperty":"dataSet"}, {}]
}]
}]
}],
idSubarea2: ["wm.Editor", {"caption":"Subarea 2","display":"Select","formField":"idSubarea2","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"idSubarea","displayField":"subarea"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lv_subarea1","targetProperty":"dataSet"}, {}]
}]
}]
}],
idSubarea3: ["wm.Editor", {"caption":"Subarea 3","display":"Select","formField":"idSubarea3","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"idSubarea","displayField":"subarea"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lv_subarea1","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}],
panel92: ["wm.Panel", {"height":"174px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
aux110: ["wm.TextAreaEditor", {"caption":"Descripción español","captionAlign":"left","captionPosition":"top","formField":"descripAsigEspaniol","height":"100%","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
editor: ["wm._TextAreaEditor", {}, {}]
}],
aux111: ["wm.TextAreaEditor", {"caption":"Descripcion Ingles","captionAlign":"left","captionPosition":"top","formField":"descripAsigIngles","height":"100%","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
editor: ["wm._TextAreaEditor", {}, {}]
}]
}],
textEditor5: ["wm.TextEditor", {"caption":"Peso","disabled":true,"display":"Number","formField":"peso","padding":"2","readonly":true,"showing":false,"width":"150%"}, {}, {
editor: ["wm._NumberEditor", {}, {}]
}],
salonIdSalonEditor2: ["wm.Editor", {"caption":"Salon","disabled":true,"display":"Number","formField":"salonIdSalon","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._NumberEditor", {"required":true}, {}]
}],
relatedEditor4: ["wm.RelatedEditor", {"fitToContentHeight":true,"formField":"tipoInscAsig","height":"28px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"asignaturaDataGrid2.selectedItem.tipoInscAsig","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"tipoInscAsigLookup2.selectedItem","targetProperty":"dataOutput"}, {}]
}],
tipoInscAsigLookup2: ["wm.Editor", {"caption":"Tipo Asignatura","disabled":true,"display":"Lookup","formField":"","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._LookupEditor", {"autoDataSet":false,"displayField":"tipo","required":true,"startUpdate":false}, {}]
}]
}],
gradoRelatedEditor2: ["wm.RelatedEditor", {"formField":"grado"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"asignaturaDataGrid2.selectedItem.grado","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"gradoLookup2.selectedItem","targetProperty":"dataOutput"}, {}]
}],
gradoLookup2: ["wm.Editor", {"caption":"Grado ","disabled":true,"display":"Lookup","displayValue":"PREJARDIN","formField":"","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._LookupEditor", {"autoDataSet":false,"displayField":"grado","required":true,"startUpdate":false}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_grado","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
syRelatedEditor2: ["wm.RelatedEditor", {"formField":"sy"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"asignaturaDataGrid2.selectedItem.sy","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"syLookup2.selectedItem","targetProperty":"dataOutput"}, {}]
}],
syLookup2: ["wm.Editor", {"caption":"Año Escolar","disabled":true,"display":"Lookup","displayValue":"2010-2011","formField":"","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
editor: ["wm._LookupEditor", {"autoDataSet":false,"displayField":"schoolYear","required":true,"startUpdate":false}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_lista_sy","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
editPanel11: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"isCustomized":true,"liveForm":"asignaturaLiveForm2","lock":false,"operationPanel":"operationPanel11","savePanel":"savePanel11"}, {}, {
savePanel11: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton11: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel11.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"editPanel11.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton11: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel11.cancelEdit"}]
}],
operationPanel11: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton11: ["wm.RoundedButton", {"caption":"Nuevo","height":"100%","margin":"2","roles":["10","11","23","22","21","24"],"showing":false,"width":"100px"}, {"onclick":"editPanel11.beginDataInsert"}],
updateButton11: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2","width":"120px"}, {"onclick":"editPanel11.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"editPanel11.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton11: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","showing":false,"width":"100px"}, {"onclick":"editPanel11.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"editPanel11.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
}],
asistencia: ["wm.Layer", {"caption":"Asistencia","horizontalAlign":"left","lock":true,"margin":"2,0,2,0","roles":["4","10","11","21","22","23","24","8","7","6","5","18","19","20"],"verticalAlign":"top"}, {"onShow":"asistenciaShow"}, {
eventualidadesContainer: ["wm.PageContainer", {"deferLoad":true,"pageName":"Eventualidades","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
eventualidades: ["wm.Layer", {"caption":"Eventualidades","horizontalAlign":"left","lock":true,"margin":"2,0,2,0","roles":["4","5","6","7","8","9","10","11","13","15","14","16","17","18","19","20","21","22","23","24"],"verticalAlign":"top"}, {}, {
registro_eventualidades: ["wm.PageContainer", {"deferLoad":true,"pageName":"Reg_eventualidades","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
Inscripciones: ["wm.Layer", {"caption":"Inscripciones","horizontalAlign":"left","lock":true,"margin":"2,0,2,0","roles":["6","10","20","21","22","23","24","5","4","7","11","13","15","16","17","18","19"],"verticalAlign":"top"}, {}, {
inscripciones: ["wm.PageContainer", {"pageName":"Inscripciones","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
pestana_reportes_seguimiento: ["wm.Layer", {"caption":"Reportes","horizontalAlign":"left","lock":true,"margin":"2,0,2,0","padding":"40","roles":["4","5","6","7","8","9","10","11","13","14","15","16","17","18","19","20","21","22","23"],"verticalAlign":"top"}, {"onShow":"pestana_reportes_seguimientoShow"}, {
reportes_top_panel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_BackgroundColor_VeryLightGray"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"2","verticalAlign":"top","width":"100%"}, {}, {
reports_open_report_window: ["wm.Button", {"borderColor":"#c6c6c6","caption":"<img src=\"resources/images/buttons/report.png\" WIDTH=32 HEIGHT=32 > Generar reporte","disabled":true,"height":"100%","hint":"Abrir generador de  reporte","margin":"4","width":"155px"}, {"onclick":"reports_open_report_windowClick"}],
uctualizar_reportes_descripcion: ["wm.Button", {"caption":"<img src=\"resources/images/buttons/Update.png\" WIDTH=22 HEIGHT=22 > Actualizar información","disabled":true,"height":"100%","margin":"4","width":"200px"}, {}]
}],
panel5: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
codigoReporte: ["wm.TextEditor", {"caption":"Código","height":"32px","padding":"2"}, {"onchange":"codigoReporteChange"}, {
editor: ["wm._TextEditor", {"changeOnEnter":true,"changeOnKey":true}, {}]
}],
reporte: ["wm.TextEditor", {"caption":"Reporte","height":"32px","padding":"2","width":"220px"}, {"onchange":"reporteChange"}, {
editor: ["wm._TextEditor", {"changeOnEnter":true,"changeOnKey":true}, {}]
}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
reportes_graficos_listado_reportes: ["wm.DataGrid", {"scrollY":true}, {"onDeselected":"reportes_graficos_listado_reportesDeselected","onSelected":"reportes_graficos_listado_reportesSelected","onSelectionChanged":"reportes_graficos_listado_reportesSelectionChanged"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"l_reportes_graficos_listado_reportes","targetProperty":"dataSet"}, {}]
}],
column1: ["wm.DataGridColumn", {"caption":"<center>+ Código</center>","dataExpression":"\"<center>\"+${id.codigo}+\"</center>\"","field":"id.codigo"}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column3: ["wm.DataGridColumn", {"caption":"Reporte","columnWidth":"100%","field":"id.reporte","index":1}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column6: ["wm.DataGridColumn", {"caption":"Tipo <br/>Persona","field":"id.tipoPersona","index":2}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}],
column4: ["wm.DataGridColumn", {"caption":"Descripción","columnWidth":"100%","field":"id.descripcion","index":3}, {}, {
format1: ["wm.DataFormatter", {}, {}]
}]
}]
}]
}],
transporte: ["wm.Layer", {"caption":"Transportes","horizontalAlign":"left","margin":"2,0,2,0","showing":false,"verticalAlign":"top"}, {}],
mensaje: ["wm.Layer", {"caption":"Aviso","horizontalAlign":"left","lock":true,"margin":"2,0,2,0","roles":["1","2","3","12"],"verticalAlign":"top"}, {}, {
panel56: ["wm.Panel", {"height":"482px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture6: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/illustrator-old-school-icon.gif","width":"615px"}, {}],
label18: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"border":"3","borderColor":"#FFxxyy","caption":"<font color=\"red\"><b><h3>AVISO IMPORTANTE: </h3></b></font> <font color=\"red\"><b>Aprendoz</b></font> ha detectado que usted no cumple con los requisitos de seguridad para utilizar este  servicio.</br></br> Le sugerimos ponerse en contacto con el administrador del sistema quien le podra brindar información mas precisa sobre esta restricción.</br></br>  Sentimos  las molestias causadas.","height":"100%","padding":"4","singleLine":false,"width":"96%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
}]
}],
templateRight: ["wm.Panel", {"_classes":{"domNode":["template-right"]},"height":"100%","horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top","width":"24px"}, {}]
}],
panel3: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
templateBottomLeft: ["wm.Panel", {"_classes":{"domNode":["template-bottom-left"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}],
templateBottom: ["wm.Panel", {"_classes":{"domNode":["template-bottom-center"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
templateBottomRight: ["wm.Panel", {"_classes":{"domNode":["template-bottom-right"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"24px"}, {}]
}],
panelFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_LightGray","wm_FontSizePx_14px"]},"align":"right","caption":"<font color=\"#fff\">Aprendoz® | Colegio Rochester  2014-2015</font>","height":"48px","padding":"10,20","singleLine":false,"styles":{"backgroundColor":"#a3a3a3"},"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}]
}]
}]
}]
};

Main.prototype._cssText = '/*init css new version*/\
#main_menu_profile_img {\
border-radius: 50% 50% !important;\
height: 76px !important;\
width: 75px !important;\
margin-left: 19% !important;\
}\
#main_profile_image {\
background-color: #FAFAFA !important;\
}\
#main_details_estudiante {\
border-radius: 0 5px 5px 0;\
}\
#main_dojoGrid1 {\
cursor: pointer;\
}\
#main_wizardLayers1_wizardWrapper {\
margin-top: 20px !important;\
background-color: blueviolet;\
}\
#main_wizardLayers1_tabsControl {\
height: 40px !important;\
background-color: red;\
}\
#main_estudiante_foto_perfil {\
box-shadow: 3px 3px 3px darkgrey;\
}\
#main_estudiante_nombre_perfil {\
background-color: #bbb;\
color: #fff;\
height: 60px !important;\
}\
#main_left_panel {\
z-index: 1;\
box-shadow: 12px 0 15px -4px #BABABA, 0px 0 8px -4px rgba(31, 73, 125, 0.8);\
width: 100px;\
height: 100px;\
margin: 50px;\
background: white;\
}\
#main_estudiante_foto_perfil {\
width: 110px !important;\
height: 110px !important;\
border-radius: 50% 50%;\
}\
div#main_configuracion_detalles {\
font-size: 11px !important;\
text-rendering: optimizeLegibility;\
}\
#main_aprendizajesAsignaturasGrid1{\
cursor: pointer;\
}\
#main_menu_inicio_butt {\
background-color: #1125b2;\
border: none !important;\
background: none;\
color: #fff !important;\
}\
#main_menu_curriculo_butt {\
background-color: #a3a3a3;\
border: none !important;\
background: none;\
color: #fff !important;\
}\
/*new version css*/\
.dojoxGridMasterHeader {\
height: 33px !important;\
}\
.wmgrid-disabled .dojoxGrid-cell {\
color: Gray;\
background-color: VeryLightGray;\
}\
.Main .Main-rSecretaria{\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-rSeguimiento{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-rCurriculo{\
background: #009900;\
background-image: -moz-linear-gradient(center top , #009900, #009900);\
background-image: -webkit-linear-gradient(center top , #009900, #009900);\
background-image: -moz-linear-gradient(center top , #009900, #009900);\
background-image: -o-linear-gradient(center top , #009900, #009900);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-rEventualidades{\
background: #CC6600;\
background-image: -moz-linear-gradient(center top , #CC0000, #CC0000);\
background-image: -webkit-linear-gradient(center top , #CC0000, #CC0000);\
background-image: -moz-linear-gradient(center top , #CC0000, #CC0000);\
background-image: -o-linear-gradient(center top , #CC0000, #CC0000);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-rAsistencia{\
background: #0cb7ef;\
background-image: -moz-linear-gradient(center top , #0cb7ef, #0cb7ef);\
background-image: -webkit-linear-gradient(center top , #0cb7ef, #0cb7ef);\
background-image: -moz-linear-gradient(center top , #0cb7ef, #0cb7ef);\
background-image: -o-linear-gradient(center top , #0cb7ef, #0cb7ef);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
/*Botones de generadores Styles*/\
.Main .Main-bAusentes{\
background: #0cb7ef;\
background-image: -moz-linear-gradient(center top , #0cb7ef, #0cb7ef);\
background-image: -webkit-linear-gradient(center top , #0cb7ef, #0cb7ef);\
background-image: -moz-linear-gradient(center top , #0cb7ef, #0cb7ef);\
background-image: -o-linear-gradient(center top , #0cb7ef, #0cb7ef);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-generar5{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-button57{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-generar6{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-button55{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px; button58\
}\
.Main .Main-button58{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-button_activities{\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #FFFFFF;\
border: 1px solid #3079ED;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
/**text-transform: uppercase; */\
cursor: pointer;\
border-radius: 0px 2px 2px 0px;\
-moz-transition: all 0.218s ease 0s;\
}\
.Main .Main-l_calif_alumnos_panel1_butt_promocion{\
/*background: #4D90FE;*/\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4D90FE);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4D90FE);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4D90FE);\
background-image: -o-linear-gradient(center top , #4D90FE, #4D90FE);\
color: #FFFFFF;\
border: 1px solid #3079ED;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
/**text-transform: uppercase; */\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
-moz-transition: all 0.218s ease 0s;\
}\
.Main .Main-xxx{\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #FFFFFF;\
border: 1px solid #3079ED;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
-moz-transition: all 0.218s ease 0s;\
}\
.Main .Main-button12{\
background: #3C9300;\
background-image: -moz-linear-gradient(center top , #3C9300, #398A00) ;\
background-image: -webkit-linear-gradient(center top , #3C9300, #398A00);\
background-image: -moz-linear-gradient(center top , #3C9300, #398A00);\
background-image: -o-linear-gradient(center top , #3C9300, #398A00);\
color: #FFFFFF;\
border: 1px solid #3079ED;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
/**text-transform: uppercase; */\
cursor: pointer;\
border-radius: 0px 0px 0px 0px;\
-moz-transition: all 0.218s ease 0s;\
}\
.Main .Main-l_calif_alumnos_panel1_butt_cambiarPanel{\
background: #D14836;\
background-image: -moz-linear-gradient(center top , #DD4B39, #D14836);\
background-image: -webkit-linear-gradient(center top , #DD4B39, #D14836);\
background-image: -moz-linear-gradient(center top , #DD4B39, #D14836);\
background-image: -o-linear-gradient(center top , #DD4B39, #D14836);\
color: #FFFFFF;\
border: 1px solid #3079ED;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
/**text-transform: uppercase; */\
cursor: pointer;\
-moz-transition: all 0.218s ease 0s;\
border-bottom-left-radius: 2px;\
border-top-left-radius: 2px;\
border-bottom-right-radius: 0px;\
border-top-right-radius: 0px;\
}\
.Main .Main-calif_encabezado_opciones_butt_limpiar{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-calif_encabezado_opciones_butt_reporte{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-button16{\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #FFFFFF;\
border: 1px solid #3079ED;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
/**text-transform: uppercase; */\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
-moz-transition: all 0.218s ease 0s;\
}\
.Main .Main-button17{\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #FFFFFF;\
border: 1px solid #3079ED;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
/**text-transform: uppercase; */\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
-moz-transition: all 0.218s ease 0s;\
}\
.Main .Main-calif_alumnos_panel1_butt_limpiar{\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-cur_asig_datag_asignaturasDataGrid1{\
cursor: pointer;\
}\
.Main .Main-cur_unid_datag_unidadesDataGrid1{\
cursor: pointer;\
}\
.Main .Main-cur_subt_datag_subtopicoDataGrid1{\
cursor: pointer;\
}\
.Main .Main-cur_apr_datag_aprendizajeDataGrid1{\
cursor: pointer;\
}\
.Main .Main-cur_metas_datag_otrasmetasDataGrid1{\
cursor: pointer;\
}\
.Main .actividadDataGrid1{\
cursor: pointer;\
}\
.Main .Main-cur_rec_datag_recursosDataGrid1{\
cursor: pointer;\
}\
.Main .Main-nivel_asig_datag_asignaturasDataGrid1{\
cursor: pointer;\
text-transform: none;\
color: #000000;\
}\
.Main .Main-unidadDataGrid2{\
cursor: pointer;\
text-transform: none;\
color: #000000;\
}\
.Main .Main-subtopicoDataGrid2{\
cursor: pointer;\
text-transform: none;\
color: #000000;\
}\
.Main .Main-aprendizajeDataGrid2{\
cursor: pointer;\
text-transform: none;\
color: #000000;\
}\
.Main .Main-otrasmetasDataGrid2{\
cursor: pointer;\
text-transform: none;\
color: #000000;\
}\
.Main .Main-actividadDataGrid2{\
cursor: pointer;\
text-transform: none;\
color: #000000;\
}\
.Main .Main-recursoDataGrid2{\
cursor: pointer;\
text-transform: none;\
color: #000000;\
}\
/*PANELES PRINCIPALES*/\
/*Asignaturas*/\
.Main .Main-nivel_asig_panel_asignaturas{\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
}\
/*Unidad*/\
.Main .Main-unidadGridPanel1{\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
}\
/*Subtopicos*/\
.Main .Main-subtopicoGridPanel1{\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
}\
/*Aprendizajes*/\
.Main .Main-aprendizajeGridPanel1{\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
}\
/*Metas*/\
.Main .Main-otrasmetasGridPanel1{\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
}\
/*Actividades*/\
.Main .Main-actividadGridPanel1{\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
}\
/*Recursos*/\
.Main .Main-recursoGridPanel1{\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
}\
/*Botones*/\
/*boton restaurar*/\
.Main .Main-nivel_encabezado_butt_restaurar{\
background: #D64937;\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -webkit-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -o-linear-gradient(center top, #DC4A38, #D14836);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
/*boton Unidad*/\
.Main .Main-bCrearUnidad{\
background: #D64937;\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -webkit-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -o-linear-gradient(center top, #DC4A38, #D14836);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
/*boton Subtopicos*/\
.Main .Main-bSubtopico{\
background: #D64937;\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -webkit-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -o-linear-gradient(center top, #DC4A38, #D14836);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
/*boton Aprendizajes*/\
.Main .Main-bAprendizajes{\
background: #D64937;\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -webkit-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -o-linear-gradient(center top, #DC4A38, #D14836);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
/*boton Metas*/\
.Main .Main-bMetas{\
background: #D64937;\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -webkit-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -o-linear-gradient(center top, #DC4A38, #D14836);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
/*boton Actividades*/\
.Main .Main-bActividades{\
background: #D64937;\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -webkit-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -o-linear-gradient(center top, #DC4A38, #D14836);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
/*boton Recursos*/\
.Main .Main-bRecursos{\
background: #D64937;\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -webkit-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -moz-linear-gradient(center top, #DC4A38, #D14836);\
background-image: -o-linear-gradient(center top, #DC4A38, #D14836);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
/*fin botones*/\
/*Hand Cursor overMouse table*/\
.Main .Main-calif_alumnos_datagrids_datag_alumnos_cursos{ cursor: pointer; }\
.Main .Main-calif_alumnos_datagrids_datag_alumnos_asignaturas{ cursor: pointer; }\
.Main .Main-calif_alumnos_datagrids_datag_aprendizajes_asignaturas{ cursor: pointer; }\
.Main .Main-inscalumaprendizajeDataGrid2{ cursor: pointer; }\
.Main .Main-calif_asig_datag_asignaturasDataGrid1{ cursor: pointer;}\
.Main .Main-calif_asig_datag_aprendizajesDataGrid1{ cursor: pointer; }\
.Main .Main-calif_alumnos_curso_datag_alumnosDataGrid1{ cursor: pointer; }\
.Main .Main-inscalumaprendizajeDataGrid1{ cursor: pointer; }\
/*footer*/\
.Main .Main-panelFooter{\
background: #E0E0E0;\
background-image: -moz-linear-gradient(center top , #E0E0E0, #E0E0E0);\
background-image: -webkit-linear-gradient(center top , #E0E0E0, #E0E0E0);\
background-image: -moz-linear-gradient(center top , #E0E0E0, #E0E0E0);\
background-image: -o-linear-gradient(center top , #E0E0E0, #E0E0E0);\
color: #990000;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
}\
.Main .Main-generar1{\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-generar2{\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-generar3{\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-generar4{\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-button59{\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-button60{\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-button61 {\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #FFFFFF;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px; button58\
}\
.Main .Main-button7 {\
background-color: #f1f5fc;\
cursor: pointer;\
margin-top: 4px;\
}\
.Main .Main-cur_asig_panel_asignaturas{\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}.Main .Main-cur_unid_panel_unidades {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_subt_panel_subtopicos {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_apr_panel_subtopicos {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_metas_panel_metas {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_act_panel_actividades {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_rec_panel_recursos {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_formularios_panel_unidad {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_formularios_panel_subtopico {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_formularios_panel_otrasmetas {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_formularios_panel_actividad {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_asig_datag_asignaturasDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-cur_unid_datag_unidadesDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-cur_subt_datag_subtopicoDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-cur_apr_datag_aprendizajeDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-cur_metas_datag_otrasmetasDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-cur_subTablas_act {\
cursor: pointer;\
}\
.Main .Main-cur_rec_datag_recursosDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-cur_encabezado_butt_reporte1 {\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 3px 3px 3px 3px;\
}\
.Main .Main-cur_encabezado_butt_restaurar {\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 3px 3px 3px 3px;\
}\
.Main .Main-cur_encabezado2_butt_crea_unidad {\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 3px 3px 3px 3px;\
}\
.Main .Main-cur_encabezado3_butt_crear_subtopico {\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 3px 3px 3px 3px;\
}\
.Main .Main-cur_apr_encabezado_butt_crear_aprendizaje {\
cursor: pointer;\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 3px 3px 3px 3px;\
}\
.Main .Main-cur_formularios_panel_aprendizaje {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_act_encabezado_butt_crear_actividad {\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 3px 3px 3px 3px;\
}\
.Main .Main-cur_formularios_panel_recurso {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-cur_formularios_butt_cargar_recurso {\
cursor: pointer;\
}\
.Main .Main-cur_rec_encabezado_butt_crear_recurso {\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 3px 3px 3px 3px;\
}\
.Main .Main-calif_contenedor_panel_encabezado {\
background: #bf5e5e;\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -webkit-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -o-linear-gradient(center top , #3366CC, #bf5e5e);\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
}\
.Main .Main-calif_contenedor_panel_encabezado2 {\
background: #bf5e5e;\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -webkit-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -o-linear-gradient(center top , #3366CC, #bf5e5e);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
}\
.Main .Main-inscalumaprendizajeGridPanel {\
background: #bf5e5e;\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -webkit-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -o-linear-gradient(center top , #3366CC, #bf5e5e);\
border: #FFCC00;\
text: black;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-inscalumaprendizajeDetailsPanel {\
background: #bf5e5e;\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -webkit-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -o-linear-gradient(center top , #3366CC, #bf5e5e);\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-calif_asig_datag_aprendizajesDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-dataGrid1 {\
cursor: pointer;\
}\
.Main .Main-inscalumaprendizajeDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-inscalumaprendizajeGridPanel1 {\
background: #bf5e5e;\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -webkit-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -o-linear-gradient(center top , #3366CC, #bf5e5e);\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-inscalumaprendizajeDetailsPanel1 {\
background: #bf5e5e;\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -webkit-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -moz-linear-gradient(center top , #bf5e5e, #bf5e5e);\
background-image: -o-linear-gradient(center top , #3366CC, #bf5e5e);\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-inscalumaprendizajeDataGrid2 {\
cursor: pointer;\
}\
.Main .Main-calif_alumnos_datag_calificaciones_finales {\
cursor: pointer;\
}\
.Main .Main-calif_alumnos_datagrids_datag_aprendizajes_asignaturas {\
cursor: pointer;\
}\
.Main .Main-calif_alumnos_datagrids_datag_alumnos_asignaturas {\
cursor: pointer;\
}\
.Main .Main-calif_alumnos_datagrids_datag_alumnos_cursos {\
cursor: pointer;\
}\
.Main .Main-calif_alumnos_panel1_butt_limpiar {\
cursor: pointer;\
}\
.Main .Main-calif_alumnos_panel1_butt_show {\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 3px 0px 0px 3px;\
}\
.Main .Main-calif_alumnos_panel1_butt_hide {\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 0px 3px 3px 0px;\
}\
.Main .Main-l_calif_alumnos_butt_ocultar {\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 3px 0px 0px 3px;\
}\
.Main .Main-l_calif_alumnos_butt_mostrar {\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 0px 3px 3px 0px;\
}\
.Main .Main-insc_panel_panel1 {\
color: #000000;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-inscalumasigDetailsPanel {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-blink_message {\
text-decoration: blink;\
background: #FFCC00;\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -webkit-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -moz-linear-gradient(center top , #FFCC00, #FFCC00);\
background-image: -o-linear-gradient(center top , #FFCC00, #FFCC00);\
color: #000000;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
}\
.Main .Main-inscalumasigGridPanel {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-calif_encabezado_opciones_butt_limpiar1 {\
background: #2E2E2E;\
background-image: -moz-linear-gradient(center top , #2E2E2E, #2E2E2E);\
background-image: -webkit-linear-gradient(center top , #2E2E2E, #2E2E2E);\
background-image: -moz-linear-gradient(center top , #2E2E2E, #2E2E2E);\
background-image: -o-linear-gradient(center top , #2E2E2E, #2E2E2E);\
color: #FFFFFF;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
text-transform: uppercase;\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
cursor: pointer;\
}\
.Main .Main-unidadDetalles {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-aprendizajeDetailsPanel2 {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-subtopicoDetailsPanel2 {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-l_calif_alumnos_panel1_butt_promocion {\
background: #CD3333;\
background-image: -moz-linear-gradient(center top , #CD3333, #CD3333);\
background-image: -webkit-linear-gradient(center top , #CD3333, #CD3333);\
background-image: -moz-linear-gradient(center top , #CD3333, #CD3333);\
background-image: -o-linear-gradient(center top , #CD3333, #CD3333);\
color: #ffffff;\
border: 1px solid #3079ED;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 0px 0px 0px 0px;\
-moz-transition: all 0.218s ease 0s;\
}\
.Main .Main-promocionDetailsPanel {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
}\
.Main .Main-promocion_butt_buscar {\
background: #3366CC;\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -webkit-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -moz-linear-gradient(center top , #3366CC, #3366CC);\
background-image: -o-linear-gradient(center top , #3366CC, #3366CC);\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
color: #FFFFFF;\
cursor: pointer;\
}\
.Main .Main-promocion_butt_limpiar {\
color: #FFFFFF;\
cursor: pointer;\
}\
.Main .Main-promocion_container_datag_personas_x_curso {\
cursor: pointer;\
}\
.Main .Main-promocionDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-promocion_butt_promover {\
float: left;\
display: block;\
line-height: 60px;\
height: 60px;\
padding: 0 30px 0 66px;\
font-size: 12px;\
text-decoration: none;\
background:\
#E6F7FB;\
border: solid 1px\
#A1CBD3;\
text-transform: uppercase;\
font-weight: bold;\
color:\
#000000;\
margin-right: 20px;\
border-radius: 5px;\
}\
.Main .Main-menu_horarios_butt {\
color: #FFFFFF;\
cursor: pointer;\
}\
.Main .Main-inscripcion_estudiante {\
cursor: pointer;\
}\
.Main .Main-inscripcion_asignatura {\
cursor: pointer;\
}\
.Main .Main-asignaturaGridPanel3 {\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #000000;\
border: 1px solid #3079ED;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
/**text-transform: uppercase; */\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
-moz-transition: all 0.218s ease 0s;\
}\
.Main .Main-asignaturaDetailsPanel1 {\
background: #4D90FE;\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -webkit-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED);\
background-image: -o-linear-gradient(center top , #4D90FE, #4787ED);\
color: #000000;\
border: 1px solid #3079ED;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
/**text-transform: uppercase; */\
cursor: pointer;\
border-radius: 2px 2px 2px 2px;\
-moz-transition: all 0.218s ease 0s;\
}\
.Main .Main-inicio {\
background: #f2f2f2;\
}\
.Main .Main-logo_aprendoz {\
background: white;\
border-top-left-radius: 50px;\
border-bottom-right-radius: 50px;\
}\
.Main .Main-label_bienvenida {\
border: 1px solid #B0281A;\
color: #b22418;\
text-shadow: 0 1px rgba(0, 0, 0, 0.3);\
}\
.Main .Main-label_nombreCompleto {\
color: #B22418;\
font-size: 20px !important;\
}\
.Main .Main-timeEditor1 {\
color: #281D73;\
}\
.Main .Main-dateEditor1 {\
color: #281D73;\
}\
.Main .Main-inicio_panel_opciones {\
background: white;\
border-bottom-left-radius: 10px;\
color: #a62121;\
}\
.Main .Main-inicio_abrir_preferencias {\
border-bottom-left-radius: 5px;\
border-top-left-radius: 5px;\
background: white;\
cursor: pointer;\
}\
.Main .Main-inicio_cerrar_preferencias {\
border-bottom-left-radius: 5px;\
border-top-left-radius: 5px;\
background: white;\
cursor: pointer;\
}\
.Main .Main-inicio_forgot_password {\
cursor:pointer;\
}\
.Main .Main-inicio_ok_label {\
background: #61B329;\
color: white;\
}\
.Main .Main-inicio_bad_label {\
background: #EEAD0E;\
color: white;\
}\
.Main .Main-inscalumasigDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-inicio_abrir_preferencias1 {\
border-bottom-left-radius: 5px;\
border-top-left-radius: 5px;\
background: white;\
cursor: pointer;\
}\
.Main .Main-inicio_filtros_claves {\
border-bottom-left-radius: 5px;\
border-top-left-radius: 5px;\
}\
.Main .Main-reportes_graficos_listado_reportes {\
cursor: pointer;\
}\
.Main .Main-reportes_graficos_listado_reportes .dojoxGrid .dojoxGrid-header .dojoxGrid-cell {\
background: #a62121;\
border-color: #a62121 #a62121 #a62121 #a62121;\
border-style: solid;\
border-width: 1px;\
color: white;\
font-weight: normal;\
padding-bottom: 2px;\
height: 30px;\
border: 0px solid;\
}\
.Main .Main-reportes_graficos_listado_reportes .dojoxGrid .dojoxGrid-row {\
position: relative;\
width: 9000em;\
padding: 4px;\
}\
.Main .Main-reportes_graficos_listado_reportes .dojoxGrid .dojoxGrid-header{\
height: 30px;\
}\
.Main .Main-reportes_graficos_listado_reportes .dojoxGrid .dojoxGrid-row-selected {\
background-color: #4D90FE;\
color: white;\
}\
.Main .Main-reportes_graficos_listado_reportes .dojoxGrid .dojoxGrid-row-table{\
background-color: rgba(0,0,0,.2);\
/* background: #4D90FE;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#4D90FE),to(#2169DF));\
background-image: -webkit-linear-gradient(top,#4D90FE,#2169DF);\
background-image: -moz-linear-gradient(top,#4D90FE,#2169DF);\
background-image: -ms-linear-gradient(top,#4D90FE,#2169DF);\
background-image: -o-linear-gradient(top,#4D90FE,#2169DF);\
background-image: linear-gradient(top,#4D90FE,#2169DF);*/\
color: black;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
-webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\
-moz-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-ms-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
-o-box-shadow: 0 1px 1px rgba(0,0,0,0.2);\
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\
border-bottom-left-radius: 13px;\
border-top-left-radius: 13px;\
border-top-right-radius: 13px;\
border-bottom-right-radius: 13px;\
height: 30px;\
}\
.Main .Main-reportes_graficos_listado_reportes .dojoxGrid .dojoxGrid-cell {\
border: 0px solid;\
border-color: white;\
padding: 3px 3px 3px 3px;\
text-align: left;\
overflow: hidden;\
}\
.Main .Main-reports_open_report_window {\
background-color: #f8f8f8;\
background-image: -webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));\
background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);\
background-image: linear-gradient(top,#f8f8f8,#f1f1f1);\
border: 1px solid #c6c6c6;\
color: #222;\
font-family: arial,sans-serif;\
font-size: 11px;\
font-weight: bold;\
height: 27px;\
line-height: 27px;\
margin: 2px 0;\
min-width: 54px;\
padding: 0 8px;\
text-align: center;border-top-left-radius: 5px;\
border-bottom-right-radius: 5px;\
cursor: pointer;\
}\
.Main .Main-uctualizar_reportes_descripcion {\
background: #D14130;\
background: -webkit-linear-gradient(top, #DC4A38, #C53727);\
background: -moz-linear-gradient(top, #DC4A38, #C53727);\
background: -ms-linear-gradient(top, #DC4A38, #C53727);\
background: -o-linear-gradient(top, #DC4A38, #C53727);\
border: 1px solid #B0281A !important;\
color: #ffffff;\
font-family: arial,sans-serif;\
font-size: 11px;\
font-weight: bold;\
height: 27px;\
line-height: 27px;\
margin: 2px 0;\
min-width: 54px;\
padding: 0 8px;\
text-align: center;border-top-left-radius: 5px;\
border-bottom-right-radius: 5px;\
cursor: pointer;\
}\
.Main .Main-calf_panel_encabezado_principal {\
background: #F1F1F1;\
padding: 11px;\
border: 1px solid #D2D2D2;\
margin-bottom: 20px;\
}\
.Main .Main-calf_panel_encabezado_opciones {\
background: #F1F1F1;\
padding: 11px;\
border: 1px solid #D2D2D2;\
margin-bottom: 20px;\
}.Main .Main-calif_alumnos_panel_panel1 {\
background: #F1F1F1;\
padding: 11px;\
border: 1px solid #D2D2D2;\
margin-bottom: 20px;\
}\
.Main .Main-lastAccess_Label {\
background-color: #271770;\
border-radius: 2px;\
color: white;\
}\
.Main .Main-logout_picture {\
cursor: pointer;\
border-radius: 2px;\
}\
.Main .Main-cur_metas_encabezado_butt_crear_meta {\
background: #F3F3F3;\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -webkit-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -moz-linear-gradient(center top , #F3F3F3, #F3F3F3);\
background-image: -o-linear-gradient(center top , #F3F3F3, #F3F3F3);\
color: #000000;\
border: solid 1px #D9D9D9;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 3px 3px 3px 3px;\
}\
.Main .Main-calif_contenedor_cadena_curriculo {\
color: #000000;\
border: #FFCC00;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
}.Main .Main-comentarios_estudiantes {\
background: #CD3333;\
background-image: -moz-linear-gradient(center top , #CD3333, #CD3333);\
background-image: -webkit-linear-gradient(center top , #CD3333, #CD3333);\
background-image: -moz-linear-gradient(center top , #CD3333, #CD3333);\
background-image: -o-linear-gradient(center top , #CD3333, #CD3333);\
color: #ffffff;\
border: 1px solid #3079ED;\
text-shadow: 0 1px rgba(0, 0, 0, 0.1);\
cursor: pointer;\
border-radius: 0px 2px 2px 0px;\
-moz-transition: all 0.218s ease 0s;\
}\
.Main .Main-activitiesDataGrid {\
cursor: pointer;\
}\
.Main .Main-inscalumactividadDataGrid1 {\
cursor: pointer;\
}\
.Main .Main-activities_studentsDataGrid {\
cursor: pointer;\
}\
.Main .Main-calificaTodos {\
color: #fff;\
background-color: #4D90FE !important;\
border-color: #357ebd !important;\
padding: 10px 16px;\
line-height: 1.33;\
border-radius: 6px;\
cursor: pointer;\
}\
.Main .Main-chart2 {\
background-color: #4D90FE;\
}\
.Main .Main-actividad_form_label1 {\
background-color: #4D90FE;\
}\
';
Main.prototype._htmlText = '';