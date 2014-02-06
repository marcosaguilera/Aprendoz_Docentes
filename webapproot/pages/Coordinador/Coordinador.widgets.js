Coordinador.widgets = {
	a_cursy: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getSyByCurDate"}, {}, {
		input: ["wm.ServiceInput", {"type":"getSyByCurDateInputs"}, {}]
	}],
	listStudentsByCurse: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getListStudentsByCurse"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListStudentsByCurseInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pcurso","source":"curso.dataValue"}, {}]
			}]
		}]
	}],
	lsgrado: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	lscurso: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getCurseByidGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getCurseByidGradeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pgrado","source":"grado.dataValue"}, {}]
			}]
		}]
	}],
	insccomentariosalumnosLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.insccomentariosalumnosLiveView1","maxResults":10}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"10"}, {}, {
		top_header_buttons: ["wm.Panel", {"height":"41px","horizontalAlign":"left","width":"100%","verticalAlign":"bottom","layoutKind":"left-to-right","margin":"0px 0px 0px 3px"}, {}, {
			comentarios: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"96px","caption":"Comentarios","margin":"0","borderColor":"#357ebd"}, {}]
		}],
		main_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			left_comentario: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","horizontalAlign":"left","width":"38%","verticalAlign":"top","padding":"5"}, {}, {
				label1: ["wm.Label", {"height":"154px","width":"100%","border":"0","caption":"Instrucciones de uso:<br><br>A continuación se describen los pasos a seguir para realizar el registro de comentarios para los estudiantes.<br><br>1. Seleccione un <u>Grado</u><br>2. Seleccione un <u>Curso</u><br>3. Seleccione el estudiante al cual desea ingresar el comentario","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				grado: ["wm.SelectEditor", {"width":"100%","caption":"Grado"}, {"onchange":"lscurso"}, {
					editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lsgrado","expression":undefined}, {}]
						}]
					}]
				}],
				curso: ["wm.SelectEditor", {"width":"100%","caption":"Curso"}, {"onchange":"listStudentsByCurse"}, {
					editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idcurso"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lscurso","expression":undefined}, {}]
						}]
					}]
				}],
				alumnos_curso_listado: ["wm.DataGrid", {"border":"0"}, {"onSelected":"alumnos_curso_listadoSelected","onSelectionChanged":"alumnos_curso_listadoSelectionChanged"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listStudentsByCurse","expression":undefined}, {}]
					}],
					codigo1: ["wm.DataGridColumn", {"caption":"Código","field":"codigo","columnWidth":"66px"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					nombres1: ["wm.DataGridColumn", {"caption":"Nombres","field":"nombres","columnWidth":"100%","index":2}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					curso1: ["wm.DataGridColumn", {"caption":"Curso","field":"curso","columnWidth":"100%","index":3}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					apellidos1: ["wm.DataGridColumn", {"caption":"Apellidos","field":"apellidos","columnWidth":"100%","index":1}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}],
			right_comentario: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"65%","verticalAlign":"top"}, {}, {
				panel1: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}],
				insccomentariosalumnosLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","padding":"8"}, {}, {
					insccomentariosalumnosDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","height":"154px"}, {"onSelectionChanged":"insccomentariosalumnosDataGrid1SelectionChanged"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"insccomentariosalumnosLiveVariable1","expression":undefined}, {}]
						}],
						numeroBimestre1: ["wm.DataGridColumn", {"caption":"No. Bimestre","field":"numeroBimestre","index":1,"display":"Number","autoSize":undefined}, {}, {
							format: ["wm.NumberFormatter", {}, {}]
						}],
						comentario1: ["wm.DataGridColumn", {"caption":"Comentario","field":"comentario","columnWidth":"100%","index":2}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						fechaActual1: ["wm.DataGridColumn", {"caption":"Fecha ingreso","field":"fechaActual","index":3,"display":"Date","autoSize":undefined}, {}, {
							format: ["wm.DateFormatter", {}, {}]
						}]
					}],
					panel2: ["wm.Panel", {"height":"258px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						insccomentariosalumnosLiveForm1: ["wm.LiveForm", {"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true}, {"onSuccess":"insccomentariosalumnosLiveVariable1","onBeginInsert":"insccomentariosalumnosLiveForm1BeginInsert","onBeginUpdate":"insccomentariosalumnosLiveForm1BeginUpdate"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"insccomentariosalumnosDataGrid1.selectedItem","expression":undefined}, {}],
								wire1: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"syRelatedEditor1.dataOutput","expression":undefined}, {}],
								wire2: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor1.dataOutput","expression":undefined}, {}]
							}],
							fullpanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								left: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
									idComentarioEstudianteEditor1: ["wm.Editor", {"caption":"Id","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idComentarioEstudiante"}, {}, {
										editor: ["wm._NumberEditor", {}, {}]
									}],
									numeroBimestreEditor1: ["wm.Editor", {"caption":"No. Bimestre","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"numeroBimestre"}, {}, {
										editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true,"options":"1,2,3,4"}, {}, {
											optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
										}]
									}],
									comentarioEditor1: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"90%","display":"TextArea","readonly":true,"formField":"comentario","captionAlign":"left"}, {}, {
										editor: ["wm._TextAreaEditor", {"required":true}, {}]
									}]
								}],
								right: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
									fechaActualEditor1: ["wm.Editor", {"caption":"Fecha ingreso","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaActual"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
										}],
										editor: ["wm._DateEditor", {"required":true}, {}]
									}],
									syRelatedEditor1: ["wm.RelatedEditor", {"formField":"sy"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"insccomentariosalumnosDataGrid1.selectedItem.sy","expression":undefined}, {}]
										}],
										syLookup1: ["wm.Editor", {"caption":"Año escolar","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSy"}, {}, {
											editor: ["wm._NumberEditor", {"required":true}, {}]
										}]
									}],
									personaRelatedEditor1: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"insccomentariosalumnosDataGrid1.selectedItem.persona","expression":undefined}, {}]
										}],
										personaLookup1: ["wm.Editor", {"caption":"Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
											editor: ["wm._NumberEditor", {"required":true}, {}]
										}]
									}]
								}]
							}],
							editPanel1: ["wm.EditPanel", {"liveForm":"insccomentariosalumnosLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","lock":false}, {}, {
								savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
									saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
										}]
									}],
									cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
								}],
								operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									newButton1: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
									updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
										}]
									}],
									deleteButton1: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
										}]
									}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}