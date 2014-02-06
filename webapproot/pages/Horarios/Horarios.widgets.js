Horarios.widgets = {
	getUserName: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","autoUpdate":true,"startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	ls_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {}],
	sv_asignaturas_docentes: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getSubjectsByProfile"}, {}, {
		input: ["wm.ServiceInput", {"type":"getSubjectsByProfileInputs"}, {}]
	}],
	tipo_semana: ["wm.Variable", {"type":"EntryData","json":"[\n{name: \"Semana A\", dataValue: \"1\"},\n{name: \"Semana B\", dataValue: \"2\"}\n]"}, {}],
	dias_semana: ["wm.Variable", {"type":"EntryData","json":"[\n{name:\"Lunes\",dataValue:\"1\"},{name:\"Martes\",dataValue:\"2\"},{name:\"Miercoles\",dataValue:\"3\"},{name:\"Jueves\",dataValue:\"4\"},{name:\"Viernes\",dataValue:\"5\"}\n]"}, {}],
	horariosServiceVariable: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getScheduleByProfile"}, {}, {
		input: ["wm.ServiceInput", {"type":"getScheduleByProfileInputs"}, {}]
	}],
	accionesHorarios: ["wm.Variable", {"type":"com.aprendoz_test.data.Horario"}, {}],
	ls_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso","maxResults":10}, {}],
	ls_asignaturas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Asignatura","maxResults":10}, {}],
	lsHorario: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getScheduleByProfile"}, {}, {
		input: ["wm.ServiceInput", {"type":"getScheduleByProfileInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel6: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"bottom","layoutKind":"left-to-right","padding":"5,0,0,10"}, {}, {
			horarioButton1: ["wm.Button", {"height":"36px","width":"110px","caption":"Horarios","margin":"0","borderColor":"#C1272D","iconUrl":"resources/images/buttons/ring.png","iconWidth":"30px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {}],
			coordinacionButton2: ["wm.Button", {"height":"48px","width":"96px","caption":"Coordinación","showing":false}, {}]
		}],
		horario: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			left_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","horizontalAlign":"left","width":"380px","verticalAlign":"top","padding":"10"}, {}, {
				userName: ["wm.TextEditor", {"width":"100%","readonly":true,"showing":false}, {"onchange":"userNameChange"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataValue","source":"getUserName.dataValue"}, {}]
					}],
					editor: ["wm._TextEditor", {}, {}]
				}],
				panel3: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved4px"]},"height":"49px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					horarios_title: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"GESTIÓN DE HORARIOS","height":"48px","width":"100%","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				label1: ["wm.Label", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"caption":"A continuación siga los siguiente pasos para realizar el proceso de manera exitosa.<br><br>1. Seleccione un Año escolar<br>2. Seleccione la asignatura para la cual desea consultar, ingresar o actualizar los horarios.<br>3. Use los botones Nuevo, Actualizar y Borrar para realizar acciones sobre los horarios.<br>4. Tenga en cuenta los siguientes datos importantes para realizar con éxito el proceso. <br><br>a) Número de sesión<br>b) Día se la semana<br>c) Tipo de semana     ","height":"203px","width":"100%","border":"0","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel7: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_BottomStyleCurved4px"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
					syHorario: ["wm.SelectEditor", {"width":"100%","caption":"Año Escolar"}, {"onchange":"syHorarioChange"}, {
						editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_sy","expression":undefined}, {}]
							}]
						}]
					}],
					asignaturas_docentes: ["wm.List", {"height":"100%","width":"100%","border":"0","dataFields":"usuario, asignatura, curso ","columnWidths":"20%, 60%, 30%"}, {"onselect":"asignaturas_docentesSelect"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sv_asignaturas_docentes","expression":undefined}, {}]
						}]
					}]
				}]
			}],
			content_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
				panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
					panel2: ["wm.Panel", {"height":"49px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						guardarNewButton: ["wm.Button", {"height":"48px","width":"96px","caption":"Guardar","borderColor":"#cccccc","showing":false}, {"onclick":"guardarNewButtonClick"}],
						guardarUpdateButton: ["wm.Button", {"height":"48px","width":"96px","caption":"Guardar ","borderColor":"#cccccc","showing":false}, {"onclick":"guardarUpdateButtonClick"}],
						cancelarButton: ["wm.Button", {"height":"48px","width":"96px","caption":"Cancelar","borderColor":"#cccccc","showing":false}, {"onclick":"cancelarButtonClick"}],
						nuevohorario: ["wm.Button", {"height":"48px","width":"96px","caption":"Nuevo","disabled":true,"borderColor":"#006dcc"}, {"onclick":"nuevohorarioClick"}],
						actualizahorario: ["wm.Button", {"height":"48px","width":"96px","caption":"Actualizar","disabled":true,"borderColor":" #006dcc"}, {"onclick":"actualizahorarioClick"}],
						eliminahorario: ["wm.Button", {"height":"48px","width":"96px","caption":"Borrar","disabled":true,"borderColor":"#da4f49"}, {"onclick":"eliminahorarioClick"}]
					}],
					panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						horariosDataGrid: ["wm.DataGrid", {"border":"0","width":"280px"}, {"onSelected":"horariosDataGridSelected","onSelectionChanged":"horariosDataGridSelectionChanged"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"horariosServiceVariable","expression":undefined}, {}]
							}],
							column2: ["wm.DataGridColumn", {"caption":"Horarios por Asignatura","field":"dia","columnWidth":"100%","index":1,"dataExpression":"\"No. Horario: \"+${id}+\"<br><u>\"+\"No. Sesión \"+${numero_sesion}+\"<br>\"+\"Día: \"+${dia}+\"</u><br>\"+\"Asignatura: \"+${asignatura}+\"<br><u>\"+\"Tipo semana: \"+${tiposemana}+\"</u><br>\"+\"Curso: \"+${curso}"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel5: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
							idHorarioEditor1: ["wm.NumberEditor", {"caption":"Id","width":"100%","readonly":true}, {}, {
								editor: ["wm._NumberEditor", {}, {}]
							}],
							idSesionEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Número de sesión","readonly":true}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"0,1,2,3,4,5,6,7"}, {}, {
									optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
								}]
							}],
							idDiaSemanaEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Día","readonly":true}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"dias_semana","expression":undefined}, {}]
									}]
								}]
							}],
							idTipoSemanaEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Tipo semana","readonly":true}, {}, {
								editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"tipo_semana","expression":undefined}, {}]
									}]
								}]
							}],
							idSyEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar","display":"Text","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							idCursoEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Curso","display":"Text","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							idAsignaturaEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Asignatura","display":"Text","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							horariosLiveForm: ["wm.LiveForm", {"verticalAlign":"top","horizontalAlign":"left","showing":false}, {"onInsertData":"horariosLiveFormInsertData","onUpdateData":"horariosLiveFormUpdateData","onDeleteData":"horariosLiveFormDeleteData","onSuccess":"horariosLiveFormSuccess"}]
						}]
					}]
				}]
			}]
		}]
	}]
}