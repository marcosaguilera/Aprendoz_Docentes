Inscripciones.widgets = {
	subjectsByUser: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getSubjectsByProfile"}, {}, {
		input: ["wm.ServiceInput", {"type":"getSubjectsByProfileInputs"}, {}]
	}],
	getUserName: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","autoUpdate":true,"startUpdate":true}, {"onSuccess":"getUserNameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	a_grado: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	a_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"listadoGradoSelect.dataValue"}, {}]
		}]
	}],
	a_cursosv: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getCurseByidGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getCurseByidGradeInputs"}, {}]
	}],
	listStudentsByCurse: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getListStudentsByCurse"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListStudentsByCurseInputs"}, {}]
	}],
	inscribirVar: ["wm.Variable", {"type":"com.aprendoz_test.data.InscAlumAsig"}, {}],
	studentsListGradeSubject: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"studentsByCurseBySubject"}, {}, {
		input: ["wm.ServiceInput", {"type":"studentsByCurseBySubjectInputs"}, {}]
	}],
	borrarVar: ["wm.Variable", {"type":"com.aprendoz_test.data.InscAlumAsig"}, {}],
	a_cursosv2: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getCurseByidGrade"}, {"onSuccess":"a_cursosv2Success"}, {
		input: ["wm.ServiceInput", {"type":"getCurseByidGradeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pgrado","source":"subjectGradeSelect.dataValue"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
				subjectsLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Asignaturas","height":"38px","width":"100%","border":"0"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				showSubjectsButton: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"33px","width":"100%","caption":"Para ver las asignaturas haga clic aquí","margin":"1","borderColor":" #3d80df","iconUrl":"resources/images/showme.png","iconWidth":"20px","iconMargin":"0 0px 0 0","iconHeight":"20px","showing":false}, {"onclick":"showSubjectsButtonClick"}],
				label2: ["wm.Label", {"caption":"A continuación seleccione la <u>Asignatura</u> a la cual desea (+Agregar) o (-Retirar) alumnos.<br><br>Una vez hecho esto, el listado aparecera en <u>Estudiantes por Curso</u> podrá seleccionarlos y (+Agregar) a la asignatura.","height":"115px","width":"100%","border":"0","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				asignatura: ["wm.List", {"height":"100%","width":"100%","border":"0","dataFields":"curso,asignatura","columnWidths":"20,40"}, {"onselect":"asignaturaSelect"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"subjectsByUser","expression":undefined}, {}]
					}]
				}]
			}],
			panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
				estudiantesCurso: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Estudiantes por Curso","height":"38px","width":"100%","border":"0"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				label3: ["wm.Label", {"caption":"Para (+Agregar) alumnos a un listado de Asignatura deberá realizar el siguiente proceso:<br><br>1). Haga clic sobre el/los alumnos que quiera agregar. Nota*** La tabla permite <b><u>multiselección.</u></b><br>2). Haga clic en el botón <u>+Agregar</u>.<br>*Importante: Espere unos segundos luego de <u>+Agregar</u> los alumnos.","height":"115px","width":"100%","border":"0","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel7: ["wm.Panel", {"height":"32px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					listadoGradoSelect: ["wm.SelectEditor", {"width":"100%","caption":"Grado","height":"100%","showing":false}, {"onchange":"listadoGradoSelectChange"}, {
						editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
							}]
						}]
					}],
					listadoCursoSelect: ["wm.SelectEditor", {"width":"100%","caption":"Curso","height":"100%","showing":false}, {}, {
						editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idcurso"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_cursosv","expression":undefined}, {}]
							}]
						}]
					}]
				}],
				estudiantesDojoGrid: ["wm.DojoGrid", {"height":"100%","border":"0","structure":"[[{\"field\":\"idpersona\",\"name\":\"+\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"apellidos\",\"name\":\"Apellidos\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"nombres\",\"name\":\"Nombres\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"curso\",\"name\":\"Curso\",\"width\":\"auto\",\"displayType\":undefined}]]","selectionMode":"multiple"}, {"onCellClick":"estudiantesDojoGridCellClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listStudentsByCurse"}, {}]
					}]
				}],
				alumnos_curso: ["wm.List", {"height":"150%","width":"250%","border":"0","dataFields":"codigo,apellidos,nombres,curso","showing":false}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listStudentsByCurse","expression":undefined}, {}]
					}]
				}],
				inscribirForm: ["wm.LiveForm", {"verticalAlign":"top","horizontalAlign":"left","showing":false}, {"onSuccess":"inscribirFormSuccess"}]
			}],
			panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"58px","verticalAlign":"top","padding":"5"}, {}, {
				spacer1: ["wm.Spacer", {"height":"150px","width":"100%"}, {}],
				inscribirEstudiantes: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"48px","width":"100%","caption":"+<br>Agregar","margin":"1","borderColor":"#5cb85c","disabled":true}, {"onclick":"inscribirEstudiantesClick"}],
				retirarEstudiantes: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"48px","width":"100%","caption":"-<br>Retirar","margin":"1","borderColor":"#d9534f","disabled":true}, {"onclick":"retirarEstudiantesClick"}]
			}],
			panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
				alumnosInscritos: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Estudiantes Inscritos por Asignatura y curso","height":"38px","width":"100%","border":"0"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel6: ["wm.Panel", {"height":"50px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
					label1: ["wm.Label", {"caption":"Esta tabla muestra los estudiantes inscritos en la asignatura y curso seleccionados en la tabla de <u>Asignaturas.</u>","height":"100%","width":"100%","border":"0","singleLine":false}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				label4: ["wm.Label", {"caption":"Para retirar un alumno de la asignatura siga el siguiente proceso:<br><br>1). Seleccione un alumno de la lista.<br>2). Haga clic en el botón <u>-Retirar</u>","height":"115px","width":"100%","border":"0","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				messageTop: ["wm.Label", {"caption":"Seleccione una Asignatura","height":"32px","width":"100%","border":"0","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				estudiantesInscritosAsignatura: ["wm.DojoGrid", {"height":"100%","border":"0","structure":"[[{\"field\":\"idpersona\",\"name\":\"+\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"idaa\",\"name\":\"Id\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"apellidos\",\"name\":\"Apellidos\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"nombres\",\"name\":\"Nombres\",\"width\":\"auto\",\"displayType\":undefined},{\"field\":\"curso\",\"name\":\"Curso\",\"width\":\"auto\",\"displayType\":undefined}]]","customFields":"[]","customFieldCounter":1}, {"onCellClick":"estudiantesInscritosAsignaturaCellClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"studentsListGradeSubject"}, {}]
					}]
				}],
				retirarForm: ["wm.LiveForm", {"verticalAlign":"top","horizontalAlign":"left","showing":false}, {"onSuccess":"retirarFormSuccess"}]
			}]
		}]
	}]
}