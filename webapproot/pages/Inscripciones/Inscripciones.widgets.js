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
}