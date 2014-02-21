dojo.declare("Inscripciones", wm.Page, {
"preferredDevice": "desktop",
start: function() {
},
subjectsSelectChange: function(inSender, inDisplayValue, inDataValue) {
/*var username = this.getUserName.getData().dataValue;
var idgrado  = this.subjectsSelect.getDataValue();
this.subjectsByUser.input.setValue("sy","4");
this.subjectsByUser.input.setValue("usuario",username);
this.subjectsByUser.update();*/
},
/*listadoGradoSelectChange: function(inSender, inDisplayValue, inDataValue) {
var idcurso   = this.listadoCursoSelect.getDataValue();
var idgradosel= this.listadoGradoSelect.getDataValue();
var index     = this.asignatura.getSelectedIndex();
var data      = this.asignatura.getItemData(index);
var subjectid = data.idasignatura;
var gradoid   = data.idgrado;
if(gradoid != idgradosel){
alert("***Atención:***\n\nHa seleccionado una Asignatura que no pertenece a el grado seleccionado.");
var idgrado= this.listadoGradoSelect.getDataValue();
this.a_cursosv.input.setValue("pgrado", idgrado);
this.a_cursosv.update();
}else{
var idgrado= this.listadoGradoSelect.getDataValue();
this.a_cursosv.input.setValue("pgrado", idgrado);
this.a_cursosv.update();
}
},*/
item_ : 0,
inscribirEstudiantesClick: function(inSender, inEvent) {
this.obj_ = this.estudiantesDojoGrid.dojoObj.selection.getSelected();
this.cont_= this.estudiantesDojoGrid.dojoObj.selection.getSelectedCount();
this.index     = this.asignatura.getSelectedIndex();
this.data      = this.asignatura.getItemData(this.index);
this.subjectid = this.data.idasignatura;
this.subject   = this.data.asignatura;
this.gradoid   = this.data.idgrado;
this.grado     = this.data.grado;
this.periodoid = 10;
this.periodo   = "2013-2014";
this.writeNext();
},
writeNext: function(){
var obj = this.obj_;
var cont = this.cont_;
var index= this.index;
var data = this.data;
var subjectid= this.subjectid;
var subject= this.subject;
var gradoid= this.gradoid;
var grado= this.grado;
var periodoid= this.periodoid;
var periodo  = this.periodo;
console.log(obj);
console.log(cont);
this.inscribirVar.setValue("grado.idGrado", obj[this.item_].idgrado);
this.inscribirVar.setValue("grado.idGrado", obj[this.item_].grado);
this.inscribirVar.setValue("asignatura.idAsignatura", subjectid);
this.inscribirVar.setValue("asignatura.asignatura", subject);
var intp = parseInt(obj[this.item_].idpersona);
console.log(intp);
this.inscribirVar.setValue("persona.idPersona", intp);
this.inscribirVar.setValue("periodo.idPeriodo", periodoid);
this.inscribirVar.setValue("periodo.periodo", periodo);
this.inscribirForm.setDataSet(this.inscribirVar);
this.inscribirForm.insertData();
this.item_++;
},
inscribirFormSuccess: function(inSender, inData){
try {
if (this.item_ <= this.cont_) {
this.writeNext();
}
} catch(e) {
console.error('ERROR IN inscribirFormSuccess: ' + e);
this.item_=0;
this.studentsListGradeSubject.update();
}
},
asignaturaSelect: function(inSender, inItem) {
/* var index     = this.asignatura.getSelectedIndex();
var data      = this.asignatura.getItemData(index);
var subjectid = data.idasignatura;
this.studentsListGradeSubject.input.setValue("pasignatura", subjectid);
this.studentsListGradeSubject.update();*/
var index     = this.asignatura.getSelectedIndex();
var data      = this.asignatura.getItemData(index);
var idgrado   = data.idgrado;
var idcurso   = data.idcurso;
var curso     = data.curso;
var subjectid = data.idasignatura;
var subject   = data.asignatura;
this.messageTop.setCaption("Ha seleccionado: "+subject+"<br>Curso: "+curso);
this.studentsListGradeSubject.input.setValue("pcurso",idcurso);
this.studentsListGradeSubject.input.setValue("pasignatura",subjectid);
this.listStudentsByCurse.input.setValue("pcurso",idcurso);
this.listStudentsByCurse.update();
this.studentsListGradeSubject.update();
},
showSubjectsButtonClick: function(inSender, inEvent) {
var username = this.getUserName.getData().dataValue;
//var idgrado  = this.subjectsSelect.getDataValue();
this.subjectsByUser.input.setValue("sy","4");
this.subjectsByUser.input.setValue("usuario",username);
this.subjectsByUser.update();
},
itemretirar_ : 0,
retirarEstudiantesClick: function(inSender, inEvent) {
this.obj_ = this.estudiantesInscritosAsignatura.dojoObj.selection.getSelected();
this.cont_= this.estudiantesInscritosAsignatura.dojoObj.selection.getSelectedCount();
this.deleteRecord();
},
deleteRecord: function(){
var obj  = this.obj_;
var cont = this.cont_;
console.log(obj);
console.log(cont);
var intiaa = parseInt(obj[this.item_].idaa);
console.log(intiaa);
this.borrarVar.setValue("idInscAlumAsig", intiaa);
this.retirarForm.setDataSet(this.borrarVar);
this.retirarForm.deleteData();
this.itemretirar_++;
},
retirarFormSuccess: function(inSender, inData) {
try {
if(this.itemretirar_ <= this.cont_) {
this.deleteRecord();
}else{
this.studentsListGradeSubject.update();
}
} catch(e) {
console.error('ERROR IN retirarFormSuccess: ' + e);
this.itemretirar_=0;
//this.studentsListGradeSubject.update();
}
},
getUserNameSuccess: function(inSender, inDeprecated) {
var username = this.getUserName.getData().dataValue;
this.subjectsByUser.input.setValue("sy","4");
this.subjectsByUser.input.setValue("usuario",username);
this.subjectsByUser.update();
},
estudiantesDojoGridCellClick: function(inSender, evt) {
this.inscribirEstudiantes.enable();
},
estudiantesInscritosAsignaturaCellClick: function(inSender, evt) {
this.retirarEstudiantes.enable();
},
_end: 0
});

Inscripciones.widgets = {
subjectsByUser: ["wm.ServiceVariable", {"operation":"getSubjectsByProfile","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"getSubjectsByProfileInputs"}, {}]
}],
getUserName: ["wm.ServiceVariable", {"operation":"getUserName","service":"securityService"}, {"onSuccess":"getUserNameSuccess"}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
a_grado: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Grado","startUpdate":false,"type":"com.aprendoz_test.data.Grado"}, {}],
a_curso: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Curso","startUpdate":false,"type":"com.aprendoz_test.data.Curso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"listadoGradoSelect.dataValue","targetProperty":"filter.grado.idGrado"}, {}]
}]
}],
a_cursosv: ["wm.ServiceVariable", {"operation":"getCurseByidGrade","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"getCurseByidGradeInputs"}, {}]
}],
listStudentsByCurse: ["wm.ServiceVariable", {"operation":"getListStudentsByCurse","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"getListStudentsByCurseInputs"}, {}]
}],
inscribirVar: ["wm.Variable", {"type":"com.aprendoz_test.data.InscAlumAsig"}, {}],
studentsListGradeSubject: ["wm.ServiceVariable", {"operation":"studentsByCurseBySubject","service":"aprendoz_test"}, {}, {
input: ["wm.ServiceInput", {"type":"studentsByCurseBySubjectInputs"}, {}]
}],
borrarVar: ["wm.Variable", {"type":"com.aprendoz_test.data.InscAlumAsig"}, {}],
a_cursosv2: ["wm.ServiceVariable", {"operation":"getCurseByidGrade","service":"aprendoz_test"}, {"onSuccess":"a_cursosv2Success"}, {
input: ["wm.ServiceInput", {"type":"getCurseByidGradeInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"subjectGradeSelect.dataValue","targetProperty":"pgrado"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
subjectsLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Asignaturas","height":"38px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
showSubjectsButton: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":" #3d80df","caption":"Para ver las asignaturas haga clic aquí","iconHeight":"20px","iconMargin":"0 0px 0 0","iconUrl":"resources/images/showme.png","iconWidth":"20px","margin":"1","showing":false,"width":"100%"}, {"onclick":"showSubjectsButtonClick"}],
label2: ["wm.Label", {"caption":"A continuación seleccione la <u>Asignatura</u> a la cual desea (+Agregar) o (-Retirar) alumnos.<br><br>Una vez hecho esto, el listado aparecera en <u>Estudiantes por Curso</u> podrá seleccionarlos y (+Agregar) a la asignatura.","height":"115px","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
asignatura: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"columnWidths":"20,40","columns":[
{"width":"100%","field":"curso","show":true,"title":"Curso"},
{"width":"100%","field":"asignatura","show":true,"title":"Asignatura"},
{"show":false,"field":"nombre","title":"Nombre","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""},
{"show":false,"field":"sy_escolar","title":"Sy_escolar","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""},
{"show":false,"field":"idpersona","title":"Idpersona","width":"100%","displayType":"Java.lang.Integer","align":"left","formatFunc":""},
{"show":false,"field":"usuario","title":"Usuario","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""},
{"show":false,"field":"idasignatura","title":"Idasignatura","width":"100%","displayType":"Java.lang.Integer","align":"left","formatFunc":""},
{"show":false,"field":"grado","title":"Grado","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""},
{"show":false,"field":"idsy","title":"Idsy","width":"100%","displayType":"Java.lang.Integer","align":"left","formatFunc":""},
{"show":false,"field":"idgrado","title":"Idgrado","width":"100%","displayType":"Java.lang.Integer","align":"left","formatFunc":""},
{"show":false,"field":"idcurso","title":"Idcurso","width":"100%","displayType":"Java.lang.Integer","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Curso: \" + ${curso} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Asignatura: \" + ${asignatura}\n + \"</div>\"\n\n","mobileColumn":true}
],"dataFields":"curso,asignatura","height":"100%","minDesktopHeight":60}, {"onselect":"asignaturaSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"subjectsByUser","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
estudiantesCurso: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Estudiantes por Curso","height":"38px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
label3: ["wm.Label", {"caption":"Para (+Agregar) alumnos a un listado de Asignatura deberá realizar el siguiente proceso:<br><br>1). Haga clic sobre el/los alumnos que quiera agregar. Nota*** La tabla permite <b><u>multiselección.</u></b><br>2). Haga clic en el botón <u>+Agregar</u>.<br>*Importante: Espere unos segundos luego de <u>+Agregar</u> los alumnos.","height":"115px","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
panel7: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
listadoGradoSelect: ["wm.SelectEditor", {"caption":"Grado","height":"100%","padding":"2","showing":false,"width":"100%"}, {"onchange":"listadoGradoSelectChange"}, {
editor: ["wm._SelectEditor", {"dataField":"idGrado","displayField":"grado"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_grado","targetProperty":"dataSet"}, {}]
}]
}]
}],
listadoCursoSelect: ["wm.SelectEditor", {"caption":"Curso","height":"100%","padding":"2","showing":false,"width":"100%"}, {}, {
editor: ["wm._SelectEditor", {"dataField":"idcurso","displayField":"curso"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"a_cursosv","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
estudiantesDojoGrid: ["wm.DojoGrid", {"height":"100%","margin":"4","minDesktopHeight":60,"selectionMode":"multiple"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"listStudentsByCurse","targetProperty":"dataSet"}, {}]
}]
}],
alumnos_curso: ["wm.List", {"_classes":{"domNode":["GridListStyle"]},"columns":[
{"width":"100%","field":"codigo","show":true,"title":"Codigo"},
{"width":"100%","field":"apellidos","show":true,"title":"Apellidos"},
{"width":"100%","field":"nombres","show":true,"title":"Nombres"},
{"width":"100%","field":"curso","show":true,"title":"Curso"},
{"show":false,"field":"schoolYear","title":"SchoolYear","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""},
{"show":false,"field":"idpersona","title":"Idpersona","width":"100%","displayType":"Java.lang.Integer","align":"left","formatFunc":""},
{"show":false,"field":"grado","title":"Grado","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""},
{"show":false,"field":"idgrado","title":"Idgrado","width":"100%","displayType":"Java.lang.Integer","align":"left","formatFunc":""},
{"show":false,"field":"idcurso","title":"Idcurso","width":"100%","displayType":"Java.lang.Integer","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Codigo: \" + ${codigo} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Apellidos: \" + ${apellidos}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombres: \" + ${nombres}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Curso: \" + ${curso}\n + \"</div>\"\n\n","mobileColumn":true}
],"dataFields":"codigo,apellidos,nombres,curso","height":"150%","minDesktopHeight":60,"showing":false,"width":"250%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"listStudentsByCurse","targetProperty":"dataSet"}, {}]
}]
}],
inscribirForm: ["wm.LiveForm", {"horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {"onSuccess":"inscribirFormSuccess"}]
}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"58px"}, {}, {
spacer1: ["wm.Spacer", {"height":"150px","width":"100%"}, {}],
inscribirEstudiantes: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"#5cb85c","caption":"+<br>Agregar","disabled":true,"margin":"1","width":"100%"}, {"onclick":"inscribirEstudiantesClick"}],
retirarEstudiantes: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"#d9534f","caption":"-<br>Retirar","disabled":true,"margin":"1","width":"100%"}, {"onclick":"retirarEstudiantesClick"}]
}],
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
alumnosInscritos: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Estudiantes Inscritos por Asignatura y curso","height":"38px","padding":"4","width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
panel6: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Esta tabla muestra los estudiantes inscritos en la asignatura y curso seleccionados en la tabla de <u>Asignaturas.</u>","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}]
}],
label4: ["wm.Label", {"caption":"Para retirar un alumno de la asignatura siga el siguiente proceso:<br><br>1). Seleccione un alumno de la lista.<br>2). Haga clic en el botón <u>-Retirar</u>","height":"115px","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
messageTop: ["wm.Label", {"caption":"Seleccione una Asignatura","height":"32px","padding":"4","singleLine":false,"width":"100%"}, {}, {
format: ["wm.DataFormatter", {}, {}]
}],
estudiantesInscritosAsignatura: ["wm.DojoGrid", {"height":"100%","margin":"4","minDesktopHeight":60}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"studentsListGradeSubject","targetProperty":"dataSet"}, {}]
}]
}],
retirarForm: ["wm.LiveForm", {"horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {"onSuccess":"retirarFormSuccess"}]
}]
}]
}]
};

Inscripciones.prototype._cssText = '.Inscripciones .Inscripciones-subjectsLabel {\
background-color: #465BA3;\
color: #fff;\
}\
.Inscripciones .Inscripciones-estudiantesCurso {\
color: #fff;\
background-color: #5cb85c !important;\
border-color: #4cae4c;\
font-size: 9px;\
}\
.Inscripciones .Inscripciones-alumnosInscritos {\
background-color: #C1272D;\
color: #fff;\
}\
.Inscripciones .Inscripciones-estudiantesDojoGrid {\
cursor: pointer;\
}\
.Inscripciones .Inscripciones-estudiantesInscritosAsignatura {\
cursor: pointer;\
}\
.Inscripciones .Inscripciones-showMe {\
cursor: pinter;\
}\
.Inscripciones .Inscripciones-inscribirEstudiantes {\
color: #fff;\
background-color: #5cb85c;\
border-color: #4cae4c;\
font-size: 9px;\
}\
.Inscripciones .Inscripciones-retirarEstudiantes {\
color: #fff;\
background-color: #d9534f;\
border-color: #d43f3a;\
font-size: 9px;\
}\
.Inscripciones .Inscripciones-showSubjectsButton {\
color: #FFFFFF;\
background: #3d80df;\
}\
';
Inscripciones.prototype._htmlText = '';