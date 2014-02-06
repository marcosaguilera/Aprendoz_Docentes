Eventualidades.widgets = {
	sesionLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.sesionLiveView1","orderBy":"asc: idSesion, asc: horaInicio"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.fecha","source":"fecha_sesiones.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.asignatura.idAsignatura","source":"asignaturas.selectedItem.id.asignaturaIdAsignatura"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"asignaturas.selectedItem.id.cursoIdCurso"}, {}]
		}]
	}],
	listaCurso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"selectEditor2.dataValue"}, {}]
		}]
	}],
	asignaturaCurso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscCursoAsig"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"selectEditor3.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.periodo.sy.idSy","source":"selectEditor1.dataValue"}, {}]
		}]
	}],
	asistencia: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Asistencia","orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.sesion.idSesion","source":"sesionDataGrid1.selectedItem.idSesion"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.persona.sexo","source":"generoSelect.dataValue"}, {}]
		}]
	}],
	getUserName: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	docenteAsig: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.VProfesorAsignaturaCompleto","maxResults":20,"designMaxResults":20}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"selectEditor3.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.periodo.sy.idSy","source":"selectEditor1.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.nombreLdap","source":"personaBox.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.cursoIdCurso","source":"selectEditor3.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.id.nombreLdap","source":"personaBox.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"selectEditor1.dataValue"}, {}]
		}]
	}],
	a_lista_sy: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {}],
	a_lista_grado: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	asistenciaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesAsistenciaAsistencias"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.sexo","source":"generoSelect.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSesion","source":"sesionDataGrid1.selectedItem.idSesion"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"10"}, {}, {
		panel2: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"216px","horizontalAlign":"left","verticalAlign":"top","width":"100%","border":"1","padding":"5","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
			layers1: ["wm.Layers", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"width":"400px"}, {}, {
				layer1: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"layer1","horizontalAlign":"left","verticalAlign":"top","border":"3","borderColor":"#000000"}, {}, {
					selectEditor1: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"150%","caption":"Año escolar"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"\"2\""}, {}]
						}],
						editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
							}]
						}]
					}],
					selectEditor2: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"150%","caption":"Grado"}, {"onchange":"listaCurso"}, {
						editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_grado","expression":undefined}, {}]
							}]
						}]
					}],
					selectEditor3: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"150%","caption":"Curso"}, {}, {
						editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaCurso","expression":undefined}, {}]
							}]
						}]
					}],
					personaBox: ["wm.TextEditor", {"width":"150%","caption":"Persona","showing":false,"disabled":true}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataValue","source":"getUserName.dataValue"}, {}]
						}],
						editor: ["wm._TextEditor", {}, {}]
					}],
					panel3: ["wm.Panel", {"height":"43px","horizontalAlign":"right","verticalAlign":"top","width":"100%","layoutKind":"left-to-right"}, {}, {
						button3: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"height":"100%","width":"56px","caption":"⚑","roles":["10","5","6","20","21","22","23","24"]}, {"onclick":"button3Click"}],
						button1: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"90px","caption":"Limpiar"}, {"onclick":"button1Click"}],
						button2: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"90px","caption":"Buscar"}, {"onclick":"button2Click"}]
					}]
				}]
			}],
			asignaturas: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"3","borderColor":"#ffffff"}, {"onSelected":"sesionLiveVariable1","onCellClick":"asignaturasCellClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"docenteAsig","expression":undefined}, {}]
				}],
				column1: ["wm.DataGridColumn", {"caption":"●","field":"id.asignaturaIdAsignatura","columnWidth":"70px","index":1}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				column2: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"120%","index":2}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				column4: ["wm.DataGridColumn", {"caption":"Nombre Docente","field":"id.nombre1","columnWidth":"120%","index":4,"dataExpression":"${id.nombre1}+\" \"+${id.apellido1}"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				column5: ["wm.DataGridColumn", {"caption":"Curso","field":"id.curso","columnWidth":"90px","index":4}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		panel1: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"309px","horizontalAlign":"left","verticalAlign":"top","width":"100%","border":"1","padding":"5","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
			sesionDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","borderColor":"#000000","width":"400px"}, {}, {
				sesionLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"172%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"sesionLiveVariable1","onBeginInsert":"sesionLiveForm1BeginInsert"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sesionDataGrid1.selectedItem","expression":undefined}, {}],
						wire1: ["wm.Wire", {"targetProperty":"dataOutput.curso","source":"cursoRelatedEditor1.dataOutput","expression":undefined}, {}],
						wire2: ["wm.Wire", {"targetProperty":"dataOutput.asignatura","source":"asignaturaRelatedEditor1.dataOutput","expression":undefined}, {}]
					}],
					idSesionEditor1: ["wm.Editor", {"caption":"ID Sesion","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSesion"}, {}, {
						editor: ["wm._NumberEditor", {"required":true}, {}]
					}],
					numeroSesionEditor1: ["wm.Editor", {"caption":"Numero Sesión","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"numeroSesion"}, {}, {
						editor: ["wm._NumberEditor", {}, {}]
					}],
					checkBoxEditor1: ["wm.CheckBoxEditor", {"width":"150%","caption":"¿Impartida?","emptyValue":"false","readonly":true,"formField":"impartida"}, {}, {
						editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
					}],
					fechaEditor1: ["wm.Editor", {"caption":"Fecha","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fecha"}, {}, {
						editor: ["wm._DateEditor", {}, {}]
					}],
					textEditor1: ["wm.TextEditor", {"width":"150%","caption":"Comentario","display":"TextArea","height":"63px","singleLine":false,"readonly":true,"formField":"comentario"}, {}, {
						editor: ["wm._TextAreaEditor", {}, {}]
					}],
					panel8: ["wm.Panel", {"height":"30px","horizontalAlign":"left","verticalAlign":"top","width":"100%","layoutKind":"left-to-right","roles":["5","6","10","20","21","22","23","24","25"]}, {}, {
						timeEditor1: ["wm.TimeEditor", {"caption":"Hora Inicio","width":"150%","captionSize":"100%","readonly":true,"formField":"horaInicio"}, {}, {
							editor: ["wm._TimeEditor", {}, {}]
						}],
						timeEditor2: ["wm.TimeEditor", {"caption":"Hora Fin","width":"150%","captionSize":"100%","readonly":true,"formField":"horaFin"}, {}, {
							editor: ["wm._TimeEditor", {}, {}]
						}]
					}],
					cursoRelatedEditor1: ["wm.RelatedEditor", {"formField":"curso","lock":true}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"sesionDataGrid1.selectedItem.curso","expression":undefined}, {}]
						}],
						cursoLookup1: ["wm.Editor", {"caption":"ID Curso","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idCurso"}, {}, {
							editor: ["wm._NumberEditor", {"required":true}, {}]
						}]
					}],
					asignaturaRelatedEditor1: ["wm.RelatedEditor", {"formField":"asignatura","lock":true}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"sesionDataGrid1.selectedItem.asignatura","expression":undefined}, {}]
						}],
						asignaturaLookup1: ["wm.Editor", {"caption":"ID Asignatura","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAsignatura"}, {}, {
							editor: ["wm._NumberEditor", {"required":true}, {}]
						}]
					}],
					editPanel1: ["wm.EditPanel", {"liveForm":"sesionLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","lock":false}, {}, {
						savePanel1: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","horizontalAlign":"right","verticalAlign":"top","width":"100%","layoutKind":"left-to-right","showing":false}, {}, {
							saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
								}]
							}],
							cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"40px","horizontalAlign":"right","verticalAlign":"top","width":"100%","layoutKind":"left-to-right"}, {}, {
							newButton1: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%","roles":["5","6","10","20","21","22","23","24"]}, {"onclick":"editPanel1.beginDataInsert"}],
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
			}],
			sesionLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
				panel6: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"35px","horizontalAlign":"left","verticalAlign":"middle","width":"100%","layoutKind":"left-to-right"}, {}, {
					fecha_sesiones: ["wm.DateEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"],"captionNode":["wm_FontSizePx_12px"]},"width":"230px","displayValue":"31/03/2013","height":"28px","caption":"Seleccionar Fecha","captionSize":"120%"}, {"onchange":"sesionLiveVariable1"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
						}],
						editor: ["wm._DateEditor", {"changeOnEnter":true}, {}]
					}],
					label1: ["wm.Label", {"caption":"<i>*Nota Importante: Las sesiones de clases serán listadas en relacion al <u>Horario de Clase por Fecha","height":"100%","width":"100%","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				sesionGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_FontColor_White wm_TextDecoration_Bold","margin":"0","border":"3,3,3,3","borderColor":"#ffffff"}, {}, {
					sesionDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]},"border":"0"}, {"onSelected":"asistencia"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sesionLiveVariable1","expression":undefined}, {}]
						}],
						fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","index":2,"display":"Date","autoSize":undefined}, {}, {
							format: ["wm.DateFormatter", {}, {}]
						}],
						numeroSesion1: ["wm.DataGridColumn", {"caption":"Numero Sesion","field":"numeroSesion","index":3,"display":"Number","autoSize":undefined}, {}, {
							format: ["wm.NumberFormatter", {}, {}]
						}],
						column2: ["wm.DataGridColumn", {"caption":"Curso","field":"curso.curso","columnWidth":"90%","index":1}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column1: ["wm.DataGridColumn", {"caption":"Hora Inicio","field":"horaInicio","columnWidth":"88px","index":4,"display":"Time"}, {}, {
							format: ["wm.TimeFormatter", {"formatLength":"short"}, {}]
						}],
						column3: ["wm.DataGridColumn", {"caption":"Hora Fin","field":"horaFin","columnWidth":"80px","index":5,"display":"Time"}, {}, {
							format: ["wm.TimeFormatter", {"formatLength":"short"}, {}]
						}],
						column4: ["wm.DataGridColumn", {"caption":"¿Impartida?","field":"impartida","columnWidth":"80px","dataExpression":"if(${impartida}==\"1\") {'<img src=\"resources/images/ico/si.gif\" height=\"22\" width=\"22\" /><center>'}  if(${impartida}==\"0\") {'<img src=\"resources/images/ico/no.gif\" height=\"22\" width=\"22\" /><center>'}"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}]
			}]
		}],
		panel4: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%","border":"1","padding":"5","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
			panel5: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"400px","border":"3","borderColor":"#000000"}, {}, {
				liveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"232%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"padding":"5"}, {"onSuccess":"asistencia","onCancelEdit":"liveForm1CancelEdit","onBeginUpdate":"liveForm1BeginUpdate","onUpdateData":"liveForm1UpdateData","onResult":"liveForm1Result"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"asistenciadataGrid1.selectedItem","expression":undefined}, {}],
						wire1: ["wm.Wire", {"targetProperty":"dataOutput.sesion","source":"sesionRelatedEditor1.dataOutput","expression":undefined}, {}],
						wire2: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor1.dataOutput","expression":undefined}, {}],
						wire3: ["wm.Wire", {"targetProperty":"dataOutput.tipoAsistencia","source":"tipoAsistenciaRelatedEditor1.dataOutput","expression":undefined}, {}]
					}],
					idAsistenciaEditor1: ["wm.Editor", {"caption":"ID Asistencia","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAsistencia"}, {}, {
						editor: ["wm._NumberEditor", {"required":true}, {}]
					}],
					tipoAsistenciaRelatedEditor1: ["wm.RelatedEditor", {"formField":"tipoAsistencia"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"asistenciadataGrid1.selectedItem.tipoAsistencia","expression":undefined}, {}],
							wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoAsistenciaLookup1.selectedItem","expression":undefined}, {}]
						}],
						tipoAsistenciaLookup1: ["wm.Editor", {"caption":"Tipo Asistencia","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
							editor: ["wm._LookupEditor", {"required":true,"displayField":"tipo"}, {}]
						}]
					}],
					tipoEventualidadIdTipoEventualidadEditor1: ["wm.Editor", {"caption":"Eventualidad #1","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"tipoEventualidadIdTipoEventualidad"}, {}, {
						editor: ["wm._SelectEditor", {"displayField":"tipoEventualidad","dataField":"tipoEventualidad","startUpdate":true}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.lsEventualidad","expression":undefined}, {}]
							}]
						}]
					}],
					tipoEventualidadIdTipoEventualidad1Editor1: ["wm.Editor", {"caption":"Eventualidad #2","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"tipoEventualidadIdTipoEventualidad1"}, {}, {
						editor: ["wm._SelectEditor", {"displayField":"tipoEventualidad","dataField":"tipoEventualidad","startUpdate":true}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.lsEventualidad","expression":undefined}, {}]
							}]
						}]
					}],
					tipoEventualidadIdTipoEventualidad2Editor1: ["wm.Editor", {"caption":"Eventualidad #3","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"tipoEventualidadIdTipoEventualidad2"}, {}, {
						editor: ["wm._SelectEditor", {"displayField":"tipoEventualidad","dataField":"tipoEventualidad","startUpdate":true}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"app.lsEventualidad","expression":undefined}, {}]
							}]
						}]
					}],
					comentarioEditor1: ["wm.Editor", {"caption":"Comentario","width":"379px","height":"162px","display":"TextArea","readonly":true,"formField":"comentario","singleLine":false}, {}, {
						editor: ["wm._TextAreaEditor", {}, {}]
					}],
					sesionRelatedEditor1: ["wm.RelatedEditor", {"formField":"sesion"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"asistenciadataGrid1.selectedItem.sesion","expression":undefined}, {}]
						}],
						sesionLookup1: ["wm.Editor", {"caption":"ID Sesion","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSesion"}, {}, {
							editor: ["wm._NumberEditor", {"required":true}, {}]
						}]
					}],
					personaRelatedEditor1: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"asistenciadataGrid1.selectedItem.persona","expression":undefined}, {}]
						}],
						personaLookup1: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
							editor: ["wm._NumberEditor", {"required":true}, {}]
						}]
					}],
					editPanel2: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"liveForm1","savePanel":"savePanel2","operationPanel":"operationPanel2","lock":false}, {}, {
						savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"top","width":"100%","layoutKind":"left-to-right","showing":false}, {}, {
							saveButton2: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel2.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formInvalid","expression":undefined}, {}]
								}]
							}],
							cancelButton2: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel2.cancelEdit"}]
						}],
						operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"top","width":"100%","layoutKind":"left-to-right"}, {}, {
							newButton2: ["wm.RoundedButton", {"caption":"New","width":"100px","height":"100%","showing":false}, {"onclick":"editPanel2.beginDataInsert"}],
							updateButton2: ["wm.RoundedButton", {"caption":"Modificar","width":"155px","height":"100%","disabled":true}, {"onclick":"editPanel2.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
								}]
							}],
							deleteButton2: ["wm.RoundedButton", {"caption":"Delete","width":"100px","height":"100%","disabled":true,"showing":false}, {"onclick":"editPanel2.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
								}]
							}]
						}]
					}]
				}]
			}],
			layers2: ["wm.Layers", {}, {}, {
				layer2: ["wm.Layer", {"caption":"layer2","horizontalAlign":"left","verticalAlign":"top"}, {}, {
					panel7: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"28px","horizontalAlign":"left","verticalAlign":"middle","width":"100%","layoutKind":"left-to-right"}, {}, {
						generoSelect: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"215px","caption":"Genero"}, {"onchange":"asistencia"}, {
							editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Masculino, Femenino","startUpdate":true}, {}, {
								optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
							}]
						}],
						picture1: ["wm.Picture", {"source":"resources/images/ico/dialog-close.png","height":"20px","border":"0","width":"20px","aspect":"v"}, {"onclick":"picture1Click"}]
					}],
					asistenciadataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"3","borderColor":"#ffffff"}, {"onSelectionChanged":"asistenciadataGrid1SelectionChanged"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"asistencia","expression":undefined}, {}]
						}],
						column2: ["wm.DataGridColumn", {"caption":"Curso","field":"sesion.curso.curso"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column1: ["wm.DataGridColumn", {"caption":"Codigo","field":"persona.codigo","columnWidth":"70px","index":1}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column3: ["wm.DataGridColumn", {"caption":"Nombres","field":"persona.nombre1","index":3,"dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column4: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","index":2,"dataExpression":"${persona.apellido1}+\" \"+${persona.apellido2}"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column5: ["wm.DataGridColumn", {"caption":"<center>♂♀</center>","field":"persona.sexo","columnWidth":"50px","index":5,"dataExpression":"if(${persona.sexo}==\"Masculino\") {'<img src=\"resources/images/ico/Male.png\" height=\"28\" width=\"28\" /><center>'}  if(${persona.sexo}==\"Femenino\") {'<img src=\"resources/images/ico/Female.png\" height=\"28\" width=\"28\" /><center>'} "}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column6: ["wm.DataGridColumn", {"caption":"<center>+</center>","field":"tipoAsistencia.tipo","columnWidth":"40px","index":6,"dataExpression":"if(${tipoAsistencia.tipo}==\"Presente\") {'<img src=\"resources/images/ico/1.ico\" height=\"32\" width=\"32\" /><center>'} \tif(${tipoAsistencia.tipo}==\"Ausente Injustificado\") \t{'<img src=\"resources/images/ico/2.ico\" height=\"32\" width=\"32\"/><center>'} \t if(${tipoAsistencia.tipo}==\"Ausente Justificado\") \t  {'<img src=\"resources/images/ico/3.ico\" height=\"32\" width=\"32\"/><center>'} \t   if(${tipoAsistencia.tipo}==\"Tarde Injustificado\") \t    {'<img src=\"resources/images/ico/4.ico\" height=\"32\" width=\"32\"/><center>'} \t     if(${tipoAsistencia.tipo}==\"Tarde Justificado\") \t      {'<img src=\"resources/images/ico/5.ico\" height=\"32\" width=\"32\"/><center>'} "}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column7: ["wm.DataGridColumn", {"caption":"comentario","field":"comentario","columnWidth":"100%","index":4}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}