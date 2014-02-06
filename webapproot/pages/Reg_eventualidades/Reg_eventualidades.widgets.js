Reg_eventualidades.widgets = {
	eventualidadpersonasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.eventualidadpersonasLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.eventualidades.idEventualidad","source":"eventualidadesDataGrid1.selectedItem.idEventualidad"}, {}]
		}]
	}],
	getUserID: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	ls_Grado: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	estudiantes_liveVariable: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.buscar_personas_LiveView","maxResults":20,"designMaxResults":20}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"curso_select_1.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.persona.codigo","source":"codigo_box_1.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.nombre1","source":"nombre1_box_1.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.persona.nombre2","source":"nombre2_box_1.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.persona.apellido1","source":"apellido1_box_1.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"filter.persona.apellido2","source":"apellido2_box_1.dataValue"}, {}],
			wire6: ["wm.Wire", {"targetProperty":"filter.apellido1","source":"apellido1_box_1.dataValue"}, {}],
			wire7: ["wm.Wire", {"targetProperty":"filter.apellido2","source":"apellido2_box_1.dataValue"}, {}],
			wire8: ["wm.Wire", {"targetProperty":"filter.nombre1","source":"nombre1_box_1.dataValue"}, {}],
			wire9: ["wm.Wire", {"targetProperty":"filter.nombre2","source":"nombre2_box_1.dataValue"}, {}]
		}]
	}],
	ls_Curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"grado_select_1.dataValue"}, {}]
		}]
	}],
	ls_tipo_eventualidad: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.TipoEventualidad"}, {}],
	ls_subtipo_eventualidad: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.SubtipoEventualidad"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.tipoEventualidad.idTipoEventualidad","source":"tipo_eventualidad_select.dataValue"}, {}]
		}]
	}],
	lista_lugares: ["wm.Variable", {"type":"EntryData","json":"[\n\t{name:\"Choice A\", dataValue:\"foo\"},\n        {name:\"Choice B\", dataValue:\"bar\"},\n\t{name:\"Choice A\", dataValue:\"foo\"},\n\t{name:\"Choice A\", dataValue:\"foo\"},\n\t{name:\"Choice A\", dataValue:\"foo\"},\n\t{name:\"Choice A\", dataValue:\"foo\"}\n]"}, {}],
	lista_estados: ["wm.Variable", {"type":"EntryData","json":"[\n\t{name:\"Abierto\", dataValue:\"Abierto\"},\n        {name:\"En seguimiento\", dataValue:\"En seguimiento\"},\n\t{name:\"Cerrado\", dataValue:\"Cerrado\"}\n\n]"}, {}],
	complexSearch: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"searchReportesAlumnos"}, {}, {
		input: ["wm.ServiceInput", {"type":"searchReportesAlumnosInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"a_searchEventualities","source":"searchInput.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"search","source":"searchInput.dataValue"}, {}]
			}]
		}]
	}],
	a_searchEventualities: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"seachEventualidadHQL"}, {}, {
		input: ["wm.ServiceInput", {"type":"seachEventualidadHQLInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"search","source":"inputSearchEventuralidades.dataValue"}, {}]
			}]
		}]
	}],
	getTipoEventualidad: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getTipoEventualidadByIdSubTipo"}, {"onSuccess":"getTipoEventualidadSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getTipoEventualidadByIdSubTipoInputs"}, {}]
	}],
	eventualidadesLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.eventualidadesLiveView1","orderBy":"desc: idEventualidad","maxResults":3,"designMaxResults":3}, {"onSuccess":"eventualidadesLiveVariable1Success"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.usuarioReg","source":"setUsername.dataValue"}, {}]
		}]
	}],
	a_insertarPersonaEventualidad: ["wm.Variable", {"type":"com.aprendoz_test.data.EventualidadPersonas"}, {}],
	svEventualidadPersonas: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"hqlPersonaEventualidad"}, {}, {
		input: ["wm.ServiceInput", {"type":"hqlPersonaEventualidadInputs"}, {}]
	}],
	deleteEventualidadPersona: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"deleteEventualidadPersona"}, {}, {
		input: ["wm.ServiceInput", {"type":"deleteEventualidadPersonaInputs"}, {}]
	}],
	sendMail: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"enviarMailEventualidades"}, {"onSuccess":"sendMailSuccess"}, {
		input: ["wm.ServiceInput", {"type":"enviarMailEventualidadesInputs"}, {}]
	}],
	jsSendMail: ["wm.ServiceVariable", {"service":"EnviarMail","operation":"sendEmailNotification"}, {"onSuccess":"jsSendMailSuccess","onError":"jsSendMailError","onBeforeUpdate":"loading"}, {
		input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}]
	}],
	loading: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"SendingMessage\""}, {}],
				wire2: ["wm.Wire", {"targetProperty":"width","expression":"270"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"height","expression":"130"}, {}]
			}]
		}]
	}],
	sendMailHQLService: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"sendMailHQL"}, {"onSuccess":"sendMailHQLServiceSuccess"}, {
		input: ["wm.ServiceInput", {"type":"sendMailHQLInputs"}, {}]
	}],
	faltasLeves2GraveSV: ["wm.ServiceVariable", {"service":"faltasLevesaGrave","operation":"faltasLeves"}, {"onSuccess":"faltasLeves2GraveSVSuccess"}, {
		input: ["wm.ServiceInput", {"type":"faltasLevesInputs"}, {}]
	}],
	faltagraveRegistroV: ["wm.Variable", {"type":"com.aprendoz_test.data.EventualidadPersonas"}, {}],
	historicosEventualidades: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"eventualitiesByDate"}, {}, {
		input: ["wm.ServiceInput", {"type":"eventualitiesByDateInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"targetProperty":"pcodigo","source":"codigo.dataValue"}, {}],
				wire: ["wm.Wire", {"targetProperty":"docente","source":"docente.dataValue"}, {}],
				wire3: ["wm.Wire", {"targetProperty":"search","source":"involucrado.dataValue"}, {}]
			}]
		}]
	}],
	popUpFaltaGrave: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"CreandoFaltaGrave\""}, {}],
				wire2: ["wm.Wire", {"targetProperty":"hideControls","expression":"false"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"height","expression":"150"}, {}],
				wire3: ["wm.Wire", {"targetProperty":"width","expression":"280"}, {}]
			}]
		}]
	}],
	involucradoSv: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"involucrados"}, {}, {
		input: ["wm.ServiceInput", {"type":"involucradosInputs"}, {}]
	}],
	svNotificacionCorreosPadres: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"orientacionInvolucradosGrupoFamiliar"}, {}, {
		input: ["wm.ServiceInput", {"type":"orientacionInvolucradosGrupoFamiliarInputs"}, {}]
	}],
	enviarNotificacionCorreo: ["wm.ServiceVariable", {"service":"enviarNotificacionFaltaGrave","operation":"enviarNotificacionFaltaGrave"}, {"onSuccess":"enviarNotificacionCorreoSuccess","onError":"enviarNotificacionCorreoError","onBeforeUpdate":"enviarNotificacionCorreoBeforeUpdate"}, {
		input: ["wm.ServiceInput", {"type":"enviarNotificacionFaltaGraveInputs"}, {}]
	}],
	orientacionDocentesCorreo: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"sendMailHQL"}, {}, {
		input: ["wm.ServiceInput", {"type":"sendMailHQLInputs"}, {}]
	}],
	getCurseOne: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"sendMailHQLOne"}, {"onSuccess":"getCurseOneSuccess"}, {
		input: ["wm.ServiceInput", {"type":"sendMailHQLOneInputs"}, {}]
	}],
	enviaCorreoAcumulado: ["wm.ServiceVariable", {"service":"EnviarMailAcumulado","operation":"sendEmailNotification"}, {}, {
		input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}]
	}],
	main_layer: ["wm.Layout", {"height":"100%","width":"1038px","horizontalAlign":"left","verticalAlign":"top","padding":"10","autoScroll":false}, {}, {
		buttons_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"61px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","padding":"1","lock":true}, {}, {
			setUsername: ["wm.TextEditor", {"width":"242px","showing":false}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"dataValue","source":"getUserID.dataValue"}, {}]
				}],
				editor: ["wm._TextEditor", {}, {}]
			}],
			spacer3: ["wm.Spacer", {"height":"48px","width":"100px"}, {}],
			r_eventualidades: ["wm.Button", {"height":"100%","width":"179px","borderColor":"#c6c6c6","caption":"Registrar Eventualidad","iconUrl":"resources/images/buttons/eventualidades.png","iconWidth":"30px","iconHeight":"30px","iconMargin":"0 -10px 0 0"}, {"onclick":"r_eventualidadesClick"}],
			b_consulta: ["wm.Button", {"height":"100%","width":"169px","borderColor":"#c6c6c6","caption":"Consultar Eventualidad","iconUrl":"resources/images/buttons/buscar.png","iconWidth":"25px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"b_consultaClick"}],
			b_orientacion: ["wm.Button", {"height":"100%","width":"150px","borderColor":"#c6c6c6","caption":"ORIENTACIÓN","iconUrl":"resources/images/buttons/orientacion.png","iconWidth":"25px","iconHeight":"20px","iconMargin":"0 0px 0 0","roles":["18"]}, {"onclick":"b_orientacionClick"}]
		}],
		Ingreso_Eventualidades: ["wm.Layers", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"padding":"0,100,0,100","showing":false}, {}, {
			layer5: ["wm.Layer", {"caption":"layer5","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					eventualidadesLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved8px"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true,"autoScroll":true}, {"onSuccess":"eventualidadesLiveVariable1","onBeginInsert":"eventualidadesLiveForm1BeginInsert","onInsertData":"eventualidadesLiveForm1InsertData"}, {
						binding: ["wm.Binding", {}, {}, {
							wire1: ["wm.Wire", {"targetProperty":"dataOutput.subtipoEventualidad","source":"subtipoEventualidadRelatedEditor1.dataOutput","expression":undefined}, {}],
							wire2: ["wm.Wire", {"targetProperty":"dataOutput.tipoLugar","source":"relatedEditor1.dataOutput","expression":undefined}, {}],
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"eventualidadesDataGrid1.selectedItem"}, {}]
						}],
						editPanel1: ["wm.EditPanel", {"liveForm":"eventualidadesLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","padding":"2","height":"45px"}, {}, {
							savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
								saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
									}]
								}],
								cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
							}],
							operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								newButton1: ["wm.RoundedButton", {"caption":"Nueva eventualidad","width":"172px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
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
						}],
						panel13: ["wm.Panel", {"height":"35px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
							spacer11: ["wm.Spacer", {"height":"26px","width":"45%"}, {}],
							picture1: ["wm.Picture", {"height":"28px","width":"24px","border":"0","source":"resources/images/buttons/number_1.png","aspect":"v"}, {}],
							label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"28px","width":"100%","border":"0","caption":"Ingresa los detalles principales de la eventualidad, posteriormente guarde los detalles."}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						idEventualidadEditor1: ["wm.Editor", {"caption":"ID","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idEventualidad"}, {}, {
							editor: ["wm._NumberEditor", {}, {}]
						}],
						fechaIngresoEditor1: ["wm.Editor", {"caption":"FechaIngreso","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","showing":false}, {}, {
							editor: ["wm._DateEditor", {"required":true}, {}]
						}],
						panel5: ["wm.Panel", {"height":"27px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							spacer6: ["wm.Spacer", {"height":"26px","width":"102%"}, {}],
							fechaEditor1: ["wm.Editor", {"caption":"Fecha","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fecha","captionSize":"51%"}, {}, {
								editor: ["wm._DateEditor", {"required":true}, {}]
							}],
							horaEditor1: ["wm.Editor", {"caption":"Hora","width":"100%","height":"26px","display":"Time","readonly":true,"formField":"hora"}, {}, {
								editor: ["wm._TimeEditor", {"required":true}, {}]
							}],
							usuarioRegEditor1: ["wm.Editor", {"caption":"Usuario","width":"100%","height":"26px","readonly":true,"formField":"usuarioReg"}, {}, {
								editor: ["wm._TextEditor", {"required":true}, {}]
							}]
						}],
						estadoEditor1: ["wm.Editor", {"caption":"Estado","width":"100%","height":"28px","display":"Select","readonly":true,"formField":"estado","captionSize":"51%"}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Abierto, Cerrado","required":true}, {}, {
								optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
							}]
						}],
						relatedEditor1: ["wm.RelatedEditor", {"formField":"tipoLugar","lock":true,"height":"28px","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"eventualidadesDataGrid1.selectedItem.tipoLugar","expression":undefined}, {}],
								wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoLugarLookup1.selectedItem","expression":undefined}, {}]
							}],
							tipoLugarLookup1: ["wm.Editor", {"caption":"Lugar","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","captionSize":"51%"}, {}, {
								editor: ["wm._LookupEditor", {"required":true,"displayField":"lugar","allowNone":true}, {}]
							}]
						}],
						panel14: ["wm.Panel", {"height":"35px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
							spacer12: ["wm.Spacer", {"height":"26px","width":"45%"}, {}],
							picture2: ["wm.Picture", {"height":"28px","width":"24px","border":"0","source":"resources/images/buttons/number_2.png","aspect":"v"}, {}],
							label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"28px","width":"100%","border":"0","caption":"Busca, selecciona y adiciona las eventualidades de los involucrados"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						layers1: ["wm.Layers", {"height":"329px"}, {}, {
							layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"right","verticalAlign":"top"}, {}, {
								panel2: ["wm.Panel", {"height":"32px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									limpiar_boton_1: ["wm.Button", {"height":"34px","width":"150px","margin":"2","borderColor":"#4D90FE","caption":"Limpiar","showing":false}, {"onclick":"limpiar_boton_1Click"}],
									searchInput: ["wm.TextEditor", {"width":"100%","caption":"Buscar involucrados","height":"30px","captionSize":"51%"}, {"onchange":"complexSearch"}, {
										editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
									}]
								}],
								panel10: ["wm.Panel", {"height":"150px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									spacer10: ["wm.Spacer", {"height":"48px","width":"102%"}, {}],
									tabla_buscar_persona: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","width":"130%"}, {"onRowDblClick":"tabla_buscar_personaRowDblClick"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"complexSearch","expression":undefined}, {}]
										}],
										id1: ["wm.DataGridColumn", {"caption":"+","field":"id","columnWidth":"38px"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										complex1: ["wm.DataGridColumn", {"caption":"Nombre completo","field":"complex","columnWidth":"100%","index":2}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										code1: ["wm.DataGridColumn", {"caption":"Código","field":"code","columnWidth":"70px","index":1}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}],
									layers3: ["wm.Layers", {"width":"70%"}, {}, {
										layer3: ["wm.Layer", {"caption":"layer3","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											tipo_eventualidad_select: ["wm.SelectEditor", {"width":"100%","caption":"Tipo eventualidad","captionSize":"70%","height":"26px"}, {"onchange":"ls_subtipo_eventualidad"}, {
												editor: ["wm._SelectEditor", {"displayField":"tipoEventualidad","dataField":"idTipoEventualidad"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_tipo_eventualidad","expression":undefined}, {}]
													}]
												}]
											}],
											subtipo_eventualidad: ["wm.SelectEditor", {"width":"100%","caption":"Subtipo Eventualidad","captionSize":"70%","height":"26px"}, {"onchange":"subtipo_eventualidadChange"}, {
												editor: ["wm._SelectEditor", {"displayField":"subtipoEventualidad","dataField":"idSubtipoEventualidad"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subtipo_eventualidad","expression":undefined}, {}]
													}]
												}]
											}],
											spacer9: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
											panel7: ["wm.Panel", {"height":"38px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												agregar_butt: ["wm.Button", {"height":"100%","width":"100%","disabled":true,"caption":"+ Agregar"}, {"onclick":"agregar_buttClick"}],
												quitar_butt: ["wm.Button", {"height":"100%","width":"100%","disabled":true,"borderColor":"#aaa","caption":"- Quitar"}, {"onclick":"quitar_buttClick"}]
											}]
										}]
									}]
								}],
								panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									spacer8: ["wm.Spacer", {"height":"48px","width":"51%"}, {}],
									eventualidadPersonasDataGrid: ["wm.DataGrid", {"border":"0"}, {"onSelected":"eventualidadPersonasDataGridSelected"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"svEventualidadPersonas","expression":undefined}, {}]
										}],
										nombrecompleto1: ["wm.DataGridColumn", {"caption":"Nombre completo","field":"nombrecompleto","columnWidth":"100%","index":1}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										subtipo1: ["wm.DataGridColumn", {"caption":"Tipo eventualidad","field":"subtipo","columnWidth":"100%","index":2}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column1: ["wm.DataGridColumn", {"caption":"+","field":"id","columnWidth":"40px"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}]
								}]
							}]
						}],
						panel11: ["wm.Panel", {"height":"39px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							testSV: ["wm.Button", {"height":"100%","width":"160px","margin":"3","disabled":true,"caption":"Enviar notificación","iconUrl":"resources/images/buttons/sendMail.png","iconWidth":"20px","iconHeight":"18px","iconMargin":"0 0px 0 0"}, {"onclick":"testSVClick"}]
						}],
						panel15: ["wm.Panel", {"height":"35px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
							spacer13: ["wm.Spacer", {"height":"26px","width":"45%"}, {}],
							picture3: ["wm.Picture", {"height":"28px","width":"24px","border":"0","source":"resources/images/buttons/number_3.png","aspect":"v"}, {}],
							label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"28px","width":"100%","border":"0","caption":"Presione el botón <u><b>Editar acta</b></u> y a continuación ingrese los detalles del acta"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel12: ["wm.Panel", {"height":"38px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							quitar_butt2: ["wm.Button", {"height":"100%","width":"120px","disabled":true,"borderColor":"#aaa","caption":"Editar acta","iconUrl":"resources/images/buttons/update0.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"quitar_butt2Click"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable"}, {}]
								}]
							}]
						}],
						descripcion: ["wm.TextAreaEditor", {"height":"120px","width":"100%","caption":"Descripción","singleLine":false,"readonly":true,"formField":"descripcion"}, {}, {
							editor: ["wm._TextAreaEditor", {}, {}]
						}],
						autoevaluacion: ["wm.TextAreaEditor", {"height":"120px","width":"100%","caption":"Autoevaluación","singleLine":false,"readonly":true,"formField":"pregunta1"}, {}, {
							editor: ["wm._TextAreaEditor", {}, {}]
						}],
						pregunta2: ["wm.TextAreaEditor", {"height":"120px","width":"130%","caption":"Plan de acción para<br> resolver problemas o mejorar,<br> incluyendo formas de seguimiento","singleLine":false,"readonly":true,"formField":"pregunta2"}, {}, {
							editor: ["wm._TextAreaEditor", {}, {}]
						}],
						pregunta3: ["wm.TextAreaEditor", {"height":"120px","width":"100%","caption":"Socialización del plan con padres y otros, <br>y sus comentarios","singleLine":false,"readonly":true,"formField":"pregunta3"}, {}, {
							editor: ["wm._TextAreaEditor", {}, {}]
						}],
						confidencialcheckBoxEditor1: ["wm.CheckBoxEditor", {"width":"100%","caption":"Confidencial","readonly":true,"display":"Select","formField":"confidencial"}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Si, No"}, {}, {
								optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
							}]
						}],
						fechaPlanReparacionEditor1: ["wm.Editor", {"caption":"Fecha Revisión","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaPlanReparacion"}, {}, {
							editor: ["wm._DateEditor", {}, {}]
						}],
						panel16: ["wm.Panel", {"height":"38px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
							picture4: ["wm.Picture", {"height":"30px","width":"24px","border":"0","source":"resources/images/buttons/number_4.png","aspect":"v"}, {}],
							imprimir_acta: ["wm.Button", {"height":"100%","width":"132px","disabled":true,"borderColor":"#aaa","caption":"Imprimir acta","iconUrl":"resources/images/buttons/acta.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"imprimir_actaClick"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable"}, {}]
								}]
							}],
							guardar_cuerpo_eventualidades: ["wm.Button", {"height":"100%","width":"120px","disabled":true,"borderColor":"#aaa","caption":"Guardar acta","iconUrl":"resources/images/buttons/save.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"guardar_cuerpo_eventualidadesClick"}]
						}]
					}],
					eventualidadesDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","showing":false}, {"onAfterRender":"eventualidadesDataGrid1AfterRender","onSelected":"eventualidadesDataGrid1Selected"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"eventualidadesLiveVariable1","expression":undefined}, {}]
						}],
						idEventualidad1: ["wm.DataGridColumn", {"caption":"+","field":"idEventualidad","columnWidth":"36px","index":1,"display":"Number","autoSize":undefined}, {}, {
							format: ["wm.NumberFormatter", {}, {}]
						}],
						fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","columnWidth":"72px","index":2,"display":"Date","autoSize":undefined}, {}, {
							format: ["wm.DateFormatter", {}, {}]
						}],
						hora1: ["wm.DataGridColumn", {"caption":"Hora","field":"hora","columnWidth":"82px","index":3,"display":"Time","autoSize":undefined}, {}, {
							format: ["wm.TimeFormatter", {}, {}]
						}],
						estado1: ["wm.DataGridColumn", {"caption":"Estado","field":"estado","columnWidth":"49px","index":4,"autoSize":undefined}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						fechaIngreso1: ["wm.DataGridColumn", {"caption":"FechaIngreso","field":"fechaIngreso","columnWidth":"82px","index":5,"display":"Date","autoSize":undefined}, {}, {
							format: ["wm.DateFormatter", {}, {}]
						}],
						usuarioReg1: ["wm.DataGridColumn", {"caption":"UsuarioReg","field":"usuarioReg","columnWidth":"72px","autoSize":undefined}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					agregarLiveForm: ["wm.LiveForm", {"height":"210px","verticalAlign":"top","horizontalAlign":"left","width":"76px","showing":false}, {"onSuccess":"agregarLiveFormSuccess"}],
					graveRegistroLiveForm: ["wm.LiveForm", {"verticalAlign":"top","horizontalAlign":"left","width":"88px","showing":false}, {"onBeforeOperation":"popUpFaltaGrave","onSuccess":"graveRegistroLiveFormSuccess"}]
				}]
			}]
		}],
		Consulta_Eventualidades: ["wm.Layers", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"padding":"0,100,0,100","showing":false}, {}, {
			layer6: ["wm.Layer", {"caption":"layer6","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				detalles_usuarios1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					layers7: ["wm.Layers", {}, {}, {
						layer7: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
							panel6: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"54px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
								button3: ["wm.Button", {"height":"48px","width":"96px","caption":"Reporte"}, {}],
								button4: ["wm.Button", {"height":"48px","width":"96px","caption":"Reporte"}, {}]
							}],
							panel_usuarios_2: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_BackgroundColor_VeryLightGray"]},"height":"90px","horizontalAlign":"right","width":"100%","verticalAlign":"bottom","layoutKind":"left-to-right","lock":true}, {}, {
								layers4: ["wm.Layers", {"width":"350px"}, {}, {
									layer4: ["wm.Layer", {"caption":"layer4","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										inputSearchEventuralidades: ["wm.TextEditor", {"width":"100%","height":"32px"}, {"onchange":"a_searchEventualities"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}],
										layers10: ["wm.Layers", {"height":"50px"}, {}, {
											layer10: ["wm.Layer", {"caption":"layer3","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												panel8: ["wm.Panel", {"height":"37px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													actualizarEventualidad_butt: ["wm.Button", {"height":"100%","width":"40%","margin":"2","disabled":true,"borderColor":"#BBB","caption":"Actualizar","iconUrl":"resources/images/buttons/update0.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"actualizarEventualidad_buttClick"}],
													limpiar_boton_2: ["wm.Button", {"height":"100%","width":"40%","margin":"2","borderColor":"#BBB","caption":"Limpiar","iconUrl":"resources/images/buttons/clear.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"limpiar_boton_2Click"}]
												}]
											}]
										}]
									}]
								}],
								spacer2: ["wm.Spacer", {"height":"48px","width":"474%"}, {}],
								reporte_eventualidades: ["wm.Button", {"height":"50px","width":"140px","margin":"2","borderColor":"#bbb","caption":"Eventualidades x alumno","iconUrl":"resources/images/buttons/reporte.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"reporte_eventualidadesClick"}]
							}],
							eventualidades: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0"}, {"onSelected":"eventualidadesSelected"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_searchEventualities","expression":undefined}, {}]
								}],
								complex1: ["wm.DataGridColumn", {"caption":"Nombre completo","field":"complex","columnWidth":"104px","index":3}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","columnWidth":"76px","index":4,"display":"Date"}, {}, {
									format: ["wm.DateFormatter", {}, {}]
								}],
								id1: ["wm.DataGridColumn", {"caption":"+","field":"ideventualidad","columnWidth":"39px","index":1}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								hora1: ["wm.DataGridColumn", {"caption":"Hora","field":"hora","columnWidth":"64px","index":5,"display":"Time"}, {}, {
									format: ["wm.TimeFormatter", {}, {}]
								}],
								estado1: ["wm.DataGridColumn", {"caption":"Estado","field":"estado","columnWidth":"47px","index":6}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								lugar1: ["wm.DataGridColumn", {"caption":"Lugar","field":"lugar","columnWidth":"87px","index":7}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column2: ["wm.DataGridColumn", {"caption":"Confidencial","field":"confidencial","columnWidth":"71px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column3: ["wm.DataGridColumn", {"caption":"Eventualidad","field":"subtipo","columnWidth":"100%","index":9}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column4: ["wm.DataGridColumn", {"caption":"Registrante","field":"registrante","columnWidth":"80px","index":9}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}],
		registro_orientacion: ["wm.Panel", {"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
			orientacion_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
				panel_faltasgraves: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"60%","verticalAlign":"top"}, {}, {
					orientacionTopHead: ["wm.Panel", {"height":"27px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						label4: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"height":"100%","width":"100%","border":"0","caption":"Eventualidades"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					label6: ["wm.Label", {"height":"27px","width":"100%","border":"0","caption":"A continuación realice la busqueda seleccionando una fecha"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					panel17: ["wm.Panel", {"height":"158px","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"5"}, {}, {
						fecha: ["wm.DateEditor", {"width":"250px","caption":"Fecha"}, {}, {
							editor: ["wm._DateEditor", {}, {}]
						}],
						involucrado: ["wm.TextEditor", {"width":"250px","caption":"Incolucrado","showing":false}, {"onchange":"historicosEventualidades"}, {
							editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
						}],
						panel19: ["wm.Panel", {"height":"48px","horizontalAlign":"right","width":"250px","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							buscarEventualidades: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_Blue"]},"height":"48px","width":"96px","borderColor":"#357ebd","caption":"Buscar"}, {"onclick":"buscarEventualidadesClick"}]
						}],
						importantMessage: ["wm.Label", {"height":"100%","width":"100%","border":"0","caption":"<u>Aviso importante:</u><br><br>Antes de proceder con el envió de la notificación vía correo asegúrese que exista un acta creada. Para esto verifique la columna <u>\"¿Existe acta?\"</u>, de no ser así contacte al docente que proceso la eventualidad y asegúrese que el acta sea creada de manera correcta.","singleLine":false}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					orientacionEventualidades: ["wm.DataGrid", {"border":"0"}, {"onSelected":"orientacionEventualidadesSelected","onSetColumns":"orientacionEventualidadesSetColumns"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"historicosEventualidades","expression":undefined}, {}]
						}],
						column2: ["wm.DataGridColumn", {"caption":"Docente","field":"registrante","columnWidth":"90px","index":1}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","columnWidth":"86px","index":3,"display":"Date"}, {}, {
							format: ["wm.DateFormatter", {}, {}]
						}],
						column3: ["wm.DataGridColumn", {"caption":"Hora","field":"hora","columnWidth":"60px","index":4,"display":"Time"}, {}, {
							format: ["wm.TimeFormatter", {}, {}]
						}],
						column4: ["wm.DataGridColumn", {"caption":"Id","field":"ideventualidad","columnWidth":"54px","index":2}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						column5: ["wm.DataGridColumn", {"caption":"Eventualidad","field":"subtipo","columnWidth":"100%","index":5}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						acta: ["wm.DataGridColumn", {"caption":"<center>¿Existe acta?</center>","field":"descripcion","columnWidth":"56px"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}]
				}],
				panel_involucrados: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"40%","verticalAlign":"top"}, {}, {
					orientacionTopHead1: ["wm.Panel", {"height":"27px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
						label5: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White"]},"height":"100%","width":"100%","border":"0","caption":"Estudiantes Involucrados"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					accordionLayers1: ["wm.AccordionLayers", {"height":"221px"}, {}, {
						notificaciones: ["wm.Layer", {"caption":"Envio de Notificaciones","horizontalAlign":"center","verticalAlign":"middle","padding":"10"}, {}, {
							headMessage: ["wm.Label", {"height":"75px","width":"100%","border":"0","singleLine":false}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							fechaCita: ["wm.DateEditor", {"width":"100%","disabled":true,"caption":"Fecha de la cita"}, {}, {
								editor: ["wm._DateEditor", {"required":true,"invalidMessage":"Es necesario ingresar una fecha para la cita"}, {}]
							}],
							horaCita: ["wm.TimeEditor", {"disabled":true,"caption":"Hora de la cita","width":"100%"}, {}, {
								editor: ["wm._TimeEditor", {"required":true,"promptMessage":"La hora tiene intervalos de 15 minutos, si necesita ingresar una hora diferente puede hacerlo de manera manual.","invalidMessage":"Es necesario ingresar una hora para la cita"}, {}]
							}],
							panel20: ["wm.Panel", {"height":"32px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								imprimirCita: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"45px","margin":"1","disabled":true,"borderColor":"#357ebd","caption":"","iconUrl":"resources/images/buttons/print.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"imprimirCitaClick"}],
								enviarCita: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"45px","margin":"1","disabled":true,"borderColor":"#357ebd","caption":"","iconUrl":"resources/images/buttons/email.png","iconWidth":"19px","iconHeight":"15px","iconMargin":"0 0px 0 0"}, {"onclick":"enviarCitaClick"}],
								cancelar: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"96px","margin":"1","disabled":true,"borderColor":"#ac2925","caption":"Cancelar"}, {}]
							}],
							responseMessageOk: ["wm.Label", {"height":"28px","width":"100%","border":"0","align":"center","caption":"¡Notificación enviada exitosamente!","showing":false}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							responseMessageBad: ["wm.Label", {"height":"28px","width":"100%","border":"0","align":"center","caption":"¡Acción no realizada, verifique la información de padres!","showing":false}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							responseMessageWait: ["wm.Label", {"height":"28px","width":"100%","border":"0","align":"center","caption":"Envio en proceso...","showing":false}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}]
					}],
					orientacionInvolucrados: ["wm.List", {"height":"100%","width":"100%","border":"0","dataFields":"eventualidad,codigo,nombre,curso","columnWidths":"20,20,40,20"}, {"onselect":"orientacionInvolucradosSelect"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"involucradoSv","expression":undefined}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}