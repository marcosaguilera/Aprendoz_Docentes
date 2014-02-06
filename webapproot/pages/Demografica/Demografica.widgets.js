Demografica.widgets = {
	personaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.personaLiveView2","maxResults":10,"designMaxResults":100}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grupoFamiliar.idGrupoFamiliar","source":"Tabla_personas_docentes.selectedItem.id.grupoFamiliarIdGrupoFamiliar"}, {}]
		}]
	}],
	iraVer: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Info_academica\""}, {}]
			}]
		}]
	}],
	iradetalles: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"tab_detalles_academicos"}, {}]
			}]
		}]
	}],
	listaEstados: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.EstadoDepartamento"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.pais.idPais","source":"paisNacimiento.dataValue"}, {}]
		}]
	}],
	sylista: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {}],
	listaPais2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Pais"}, {}],
	listaEstados2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.EstadoDepartamento"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.pais.pais","source":"paisDomicilio.dataValue"}, {}]
		}]
	}],
	Vista_Detalles_Academicos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaInscAlumnAsigDemografica","maxResults":40}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"caja_sy_detalles_academicos.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"Tabla_personas_docentes.selectedItem.id.idPersona"}, {}]
		}]
	}],
	Vista_Personas_Demografica: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaPersonasDemografica","maxResults":100}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.nombre1","source":"n1.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.nombre2","source":"n2.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.apellido1","source":"a1.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.apellido2","source":"a2.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.id.codigo","source":"codigo.dataValue"}, {}]
		}]
	}],
	ls_tipo_persona: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoPersona"}, {"onBeforeUpdate":"ls_tipo_personaBeforeUpdate","onSuccess":"ls_tipo_personaSuccess"}],
	listcurso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}],
	studentosByComplexName: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"searchStudentsByComplexName","maxResults":20}, {}, {
		input: ["wm.ServiceInput", {"type":"searchStudentsByComplexNameInputs"}, {}]
	}],
	a_getCursoProcesoSV: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"a_getCursoProcesoSV"}, {"onSuccess":"a_getCursoProcesoSVSuccess"}, {
		input: ["wm.ServiceInput", {"type":"a_getCursoProcesoSVInputs"}, {}]
	}],
	listaNacionalidades: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Nacionalidades"}, {"onBeforeUpdate":"listaNacionalidadesBeforeUpdate","onSuccess":"listaNacionalidadesSuccess"}],
	lsEps: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.TipoEps"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"center","verticalAlign":"top"}, {}, {
		tabLayers1: ["wm.TabLayers", {}, {}, {
			layer11: ["wm.Layer", {"caption":"Demográfica","horizontalAlign":"left","verticalAlign":"top","padding":"5"}, {}, {
				panel2: ["wm.Panel", {"height":"72px","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"0,0,0,5","layoutKind":"left-to-right"}, {}, {
					panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"218px","verticalAlign":"top"}, {}, {
						Ingrese_el_nombre_del_estudiante: ["wm.Label", {"caption":"Ingrese el nombre del estudiante","height":"32px","width":"100%","border":"0"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						demo_nameComplex_search: ["wm.TextEditor", {"width":"100%","height":"34px"}, {"onchange":"demo_nameComplex_searchChange"}, {
							editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
						}]
					}],
					panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"218px","verticalAlign":"bottom","padding":"0,0,5,0"}, {}, {
						clear_button_demograp: ["wm.Button", {"height":"34px","width":"96px","caption":"Limpiar","margin":"1","borderColor":"#4D90FE"}, {"onclick":"clear_button_demograpClick"}],
						button1: ["wm.Button", {"height":"100%","width":"96px","margin":"1","showing":false}, {}]
					}]
				}],
				panel3: ["wm.Panel", {"height":"202px","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"0,0,0,5","layoutKind":"left-to-right"}, {}, {
					image: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","horizontalAlign":"center","width":"218px","verticalAlign":"top","padding":"15"}, {}, {
						student_pic: ["wm.Picture", {"height":"100%","border":"0","width":"166px","source":"http://opticians-website.co.uk/wp-content/uploads/2011/04/staffNoImageLarge.jpg","aspect":"v"}, {}]
					}],
					students: ["wm.List", {"height":"201px","width":"454px","border":"0","dataFields":"codigo, nombreCompleto, grupoFamiliar","columnWidths":"20%, 60%, 20%"}, {"onselect":"studentsSelect"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"studentosByComplexName","expression":undefined}, {}]
						}]
					}]
				}],
				personaDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_SilverBlueTheme_LightBlueInsetPanel","margin":"2","borderColor":"#ffffff","border":"3,3,3,3"}, {}, {
					personaLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"200%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"personaLiveVariable1","onBeginInsert":"listaNacionalidades","onBeginUpdate":"listaNacionalidades"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem","expression":undefined}, {}],
							wire2: ["wm.Wire", {"targetProperty":"dataOutput.grupoFamiliar","source":"grupoFamiliarRelatedEditor1.dataOutput","expression":undefined}, {}],
							wire1: ["wm.Wire", {"targetProperty":"dataOutput.pais","source":"relatedEditor1.dataOutput","expression":undefined}, {}]
						}],
						info: ["wm.TabLayers", {"borderColor":"#ffffff"}, {}, {
							familiarGroup: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Grupo Familiar","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								panel_grupo_familiar: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_FontColor_White","wm_TextDecoration_Bold"]},"height":"28px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									info_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"INREGRANTES GRUPO FAMILIAR","height":"24px","width":"100%","border":"0"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}],
								personaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"personaDataGrid1Selected","onDeselected":"personaDataGrid1Deselected"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"personaLiveVariable1","expression":undefined}, {}]
									}],
									codigo1: ["wm.DataGridColumn", {"caption":"•","field":"codigo","columnWidth":"70px","dataExpression":"'<img src=\"http://www.rochester.edu.co/fotosestudiantes/'+${codigo}+\".Jpeg\"+'\" height=\"80\" width=\"60\"/><center>'"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									apellido1: ["wm.DataGridColumn", {"caption":"1er Apellido","field":"apellido1","columnWidth":"164px","index":2,"autoSize":undefined}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									apellido2: ["wm.DataGridColumn", {"caption":"2do Apellido","field":"apellido2","columnWidth":"160px","index":3,"autoSize":undefined}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									nombre1: ["wm.DataGridColumn", {"caption":"1er Nombre","field":"nombre1","columnWidth":"150px","index":4,"autoSize":undefined}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									nombre2: ["wm.DataGridColumn", {"caption":"2do Nombre","field":"nombre2","columnWidth":"145px","index":5,"autoSize":undefined}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									idgrupofamiliar: ["wm.DataGridColumn", {"caption":"Grupo Familiar","field":"grupoFamiliar.grupoFamiliar","columnWidth":"100%","index":6}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									column2: ["wm.DataGridColumn", {"caption":"Código","field":"codigo","index":1}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}]
								}]
							}],
							personalInfo: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Info. Persona","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									infoPersonaLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"50%","verticalAlign":"top"}, {}, {
										idPersonaEditor1: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
											editor: ["wm._NumberEditor", {"required":true}, {}]
										}],
										codigoEditor1: ["wm.Editor", {"caption":"Código","width":"100%","height":"26px","readonly":true,"formField":"codigo"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										sexoEditor1: ["wm.Editor", {"caption":"Género","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"sexo"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Masculino, Femenino"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}],
										nombre1Editor1: ["wm.Editor", {"caption":"1er Nombre","width":"100%","height":"26px","readonly":true,"formField":"nombre1"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										nombre2Editor1: ["wm.Editor", {"caption":"2do Nombre","width":"100%","height":"26px","readonly":true,"formField":"nombre2"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										apellido1Editor1: ["wm.Editor", {"caption":"1er Apellido","width":"100%","height":"26px","readonly":true,"formField":"apellido1"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										apellido2Editor1: ["wm.Editor", {"caption":"2do Apellido","width":"100%","height":"26px","readonly":true,"formField":"apellido2"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										tipoPersonaRelatedEditor1: ["wm.RelatedEditor", {"formField":"tipoPersona","lock":true}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem.tipoPersona","expression":undefined}, {}],
												wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoPersonaLookup1.selectedItem","expression":undefined}, {}]
											}],
											tipoPersonaLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"Tipo persona","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {"onchange":"tipoPersonaLookup1Change"}, {
												editor: ["wm._LookupEditor", {"displayField":"tipoPersona","autoDataSet":false,"startUpdate":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_tipo_persona","expression":undefined}, {}]
													}]
												}]
											}]
										}],
										cursoActualSelectEditor: ["wm.SelectEditor", {"width":"150%","caption":"Curso actual","height":"26px","readonly":true,"formField":"inscAlumCursoIdInscAlumCurso"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso","startUpdate":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listcurso","expression":undefined}, {}]
												}]
											}]
										}],
										nacionalidadEditor1: ["wm.TextEditor", {"width":"100%","caption":"Nacionalidad","display":"Select","height":"26px","readonly":true,"formField":"nacionalidad"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"nacionalidad","dataField":"nacionalidad"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaNacionalidades","expression":undefined}, {}]
												}]
											}]
										}],
										paisNacimeintoEditor1: ["wm.SelectEditor", {"width":"100%","caption":"Pais nacimiento","display":"Text","readonly":true,"formField":"paisDomicilio"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										deptoNacimiento: ["wm.SelectEditor", {"width":"150%","caption":"Departamento nacimiento ","height":"26px","readonly":true,"formField":"lugarNacimientoDepartamento"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"estado","dataField":"estado"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaEstados","expression":undefined}, {}]
												}]
											}]
										}],
										lugarNacimientoMunicipioEditor1: ["wm.Editor", {"caption":"Municipio de nacimiento","width":"100%","height":"26px","readonly":true,"formField":"lugarNacimientoMunicipio"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										tipoDocumentoEditor1: ["wm.Editor", {"caption":"Tipo documento","width":"100%","height":"26px","readonly":true,"formField":"tipoDocumento"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										noDocumentoEditor1: ["wm.Editor", {"caption":"No. documento","width":"100%","height":"26px","readonly":true,"formField":"noDocumento"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										lugarExpedicionDepartamentoEditor1: ["wm.Editor", {"caption":"Dpto Expedición","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"lugarExpedicionDepartamento"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"estado","dataField":"estado"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaEstados","expression":undefined}, {}]
												}]
											}]
										}],
										lugarExpedicionMunicipioEditor1: ["wm.Editor", {"caption":"Municipio Expedición","width":"100%","height":"26px","readonly":true,"formField":"lugarExpedicionMunicipio"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}]
									}],
									infoPersonaRight: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"50%","verticalAlign":"top"}, {}, {
										checkBoxEditor1: ["wm.CheckBoxEditor", {"width":"100%","caption":"¿Matriculado?","readonly":true,"formField":"matriculado","height":"26px","emptyValue":"false"}, {}, {
											editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
										}],
										activoRetiradoEditor1: ["wm.Editor", {"caption":"¿Activo?","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"activoRetirado","displayValue":true,"emptyValue":"false"}, {}, {
											editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
										}],
										emailEditor1: ["wm.Editor", {"caption":"E-mail","width":"100%","height":"26px","readonly":true,"formField":"email"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										nivelAcademicoEditor1: ["wm.Editor", {"caption":"Nivel académico","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"nivelAcademico","disabled":true}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Educación básica, Bachiller, Pregrado profesional, Universitario, Pregrado Técnico, Postgrado, Especialización, Postgrado maestría, Postgrado Doctorado"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}],
										fechaNacimientoEditor1: ["wm.Editor", {"caption":"Fecha nacimiento","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaNacimiento"}, {}, {
											editor: ["wm._DateEditor", {}, {}]
										}],
										telefonoEditor1: ["wm.Editor", {"caption":"Teléfono","width":"100%","height":"26px","readonly":true,"formField":"telefono"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										telefono2Editor1: ["wm.Editor", {"caption":"Teléfono (alterno)","width":"100%","height":"26px","readonly":true,"formField":"telefono2"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										religionEditor1: ["wm.Editor", {"caption":"Religión","width":"100%","height":"26px","readonly":true,"formField":"religion"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										paisDomicilio: ["wm.SelectEditor", {"width":"150%","caption":"Pais domicilio","height":"26px","display":"Text","readonly":true,"formField":"paisDomicilio"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										departamentoEditor1: ["wm.Editor", {"caption":"Departamento domicilio","width":"100%","height":"26px","readonly":true,"formField":"departamento"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										municipioEditor1: ["wm.Editor", {"caption":"Municipio domicilio","width":"100%","height":"26px","readonly":true,"formField":"municipio"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										direccionResidenciaEditor1: ["wm.Editor", {"caption":"Dirección domicilio","width":"100%","height":"26px","readonly":true,"formField":"direccionResidencia"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										barrioEditor1: ["wm.Editor", {"caption":"Barrio","width":"100%","height":"26px","readonly":true,"formField":"barrio"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										colegioAnteriorEditor1: ["wm.Editor", {"caption":"Colegio anterior","width":"100%","height":"26px","readonly":true,"formField":"colegioAnterior"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										gradoIngresoEditor1: ["wm.Editor", {"caption":"Grado de ingreso","width":"100%","height":"26px","readonly":true,"formField":"gradoIngreso"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										cursoIngresoEditor1: ["wm.Editor", {"caption":"Curso ingreso","width":"100%","height":"26px","readonly":true,"formField":"cursoIngreso"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}]
									}]
								}]
							}],
							familiarInfo: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Info. Familiar","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								infoPersonalLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"50%","verticalAlign":"top"}, {}, {
									viveConEditor1: ["wm.Editor", {"caption":"Vive con","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"viveCon"}, {}, {
										editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"MADRE, PADRE, ACUDIENTE, AMBOS PADRES, NO APLICA"}, {}, {
											optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
										}]
									}],
									codigoFamiliaEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"Código familiar","width":"100%","height":"26px","readonly":true,"formField":"codigoFamilia","disabled":true}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha Ingreso","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso"}, {}, {
										editor: ["wm._DateEditor", {}, {}]
									}],
									hijoDeExalumnoEditor1: ["wm.Editor", {"caption":"¿Hijo de exalumno?","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"hijoDeExalumno","displayValue":true,"emptyValue":"false"}, {}, {
										editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
									}],
									nombrePadreExalumnoEditor1: ["wm.Editor", {"caption":"¿Padre/Madre exalumno?","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"nombrePadreExalumno"}, {}, {
										editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Padre, Madre"}, {}, {
											optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
										}]
									}],
									promocionEditor1: ["wm.Editor", {"caption":"Promoción","width":"100%","height":"26px","readonly":true,"formField":"promocion"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}]
								}]
							}],
							jobInfo: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Info. Laboral","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								infoLaboralLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"50%","verticalAlign":"top"}, {}, {
									cargoEditor1: ["wm.Editor", {"caption":"Cargo","width":"100%","height":"26px","readonly":true,"formField":"cargo"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									profesionEditor1: ["wm.Editor", {"caption":"Profesión","width":"100%","height":"26px","readonly":true,"formField":"profesion"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									empresaEditor1: ["wm.Editor", {"caption":"Empresa","width":"100%","height":"26px","readonly":true,"formField":"empresa"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									direccionOficinaEditor1: ["wm.Editor", {"caption":"Dirección oficina","width":"100%","height":"26px","readonly":true,"formField":"direccionOficina"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									telefonoOficinaEditor1: ["wm.Editor", {"caption":"Teléfono oficina","width":"100%","height":"26px","readonly":true,"formField":"telefonoOficina"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									celularEditor1: ["wm.Editor", {"caption":"Celular","width":"100%","height":"26px","readonly":true,"formField":"celular"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									parentescoEditor1: ["wm.Editor", {"caption":"Parentesco","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"parentesco"}, {}, {
										editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Padre, Madre, Hermano(a), Abuelo(a), Tio(a), Otro "}, {}, {
											optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
										}]
									}]
								}]
							}],
							medicareInfo: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Info. Seguro y Emergencias","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								infoSeguroLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"50%","verticalAlign":"top"}, {}, {
									epsEditor1: ["wm.Editor", {"caption":"E.P.S","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"eps"}, {}, {
										editor: ["wm._SelectEditor", {"displayField":"eps","dataField":"eps"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"lsEps","expression":undefined}, {}]
											}]
										}]
									}],
									saludPrepagadaEditor1: ["wm.Editor", {"caption":"Salud Prepagada","width":"100%","height":"26px","readonly":true,"formField":"saludPrepagada"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									numeroContratoSaludEditor1: ["wm.Editor", {"caption":"Número contrato salud","width":"100%","height":"26px","readonly":true,"formField":"numeroContratoSalud"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									clinicaEmergenciaEditor1: ["wm.Editor", {"caption":"Clínica emergencia","width":"100%","height":"26px","readonly":true,"formField":"clinicaEmergencia"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									tipoSangreEditor1: ["wm.Editor", {"caption":"Tipo Sangre","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"tipoSangre"}, {}, {
										editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"A+,A-,B+,B-,O+,O-, AB+ , AB-"}, {}, {
											optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
										}]
									}]
								}]
							}],
							ServicesInfo: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Servicios","horizontalAlign":"left","verticalAlign":"top"}, {}, {
								infoServicioLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"50%","verticalAlign":"top"}, {}, {
									noPlaquetaEditor1: ["wm.Editor", {"caption":"No Plaqueta","width":"100%","height":"26px","readonly":true,"formField":"noPlaqueta"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									rutaMEditor1: ["wm.Editor", {"caption":"Ruta Mañana","width":"100%","height":"26px","readonly":true,"formField":"rutaM"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									rutaTEditor1: ["wm.Editor", {"caption":"Ruta Tarde","width":"100%","height":"26px","readonly":true,"formField":"rutaT"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									tomaAlmuerzoEditor1: ["wm.Editor", {"caption":"¿Toma almuerzo?","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"tomaAlmuerzo","displayValue":true,"emptyValue":"false"}, {}, {
										editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
									}],
									tomaMediasNuevesEditor1: ["wm.Editor", {"caption":"¿Toma medias nueves?","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"tomaMediasNueves","displayValue":true,"emptyValue":"false"}, {}, {
										editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
									}],
									tomaSeguroAccidentesEditor1: ["wm.Editor", {"caption":"¿Toma seguro contra accidentes?","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"tomaSeguroAccidentes","displayValue":true,"emptyValue":"false"}, {}, {
										editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
									}]
								}]
							}]
						}],
						editPanel1: ["wm.EditPanel", {"liveForm":"personaLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","lock":false,"roles":["7","10"]}, {}, {
							savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
								saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
									}]
								}],
								cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
							}],
							operationPanel1: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								newButton1: ["wm.RoundedButton", {"caption":"NUEVO","width":"100px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
								updateButton1: ["wm.RoundedButton", {"caption":"ACTUALIZAR","width":"130px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
									}]
								}]
							}]
						}]
					}]
				}]
			}],
			tab_detalles_academicos: ["wm.Layer", {"caption":"Detalles académicos","horizontalAlign":"left","verticalAlign":"top","lock":true,"showing":false}, {"onShow":"tab_detalles_academicosShow"}, {
				panel22: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"210px","horizontalAlign":"left","width":"100%","verticalAlign":"top","border":"2","padding":"3","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
					tiny_img: ["wm.Picture", {"height":"100%","border":"0","width":"187px","source":"resources/images/ico/noImg.gif","aspect":"v"}, {}],
					layers12: ["wm.Layers", {}, {}, {
						layer20: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"layer20","horizontalAlign":"left","verticalAlign":"top"}, {}, {
							aux1: ["wm.TextEditor", {"width":"390px","caption":"Nombres","captionAlign":"left","captionSize":"70%","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							aux2: ["wm.TextEditor", {"width":"390px","caption":"Apellidos","captionAlign":"left","captionSize":"70%","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							aux3: ["wm.TextEditor", {"width":"390px","caption":"Tipo de documento","captionAlign":"left","captionSize":"70%","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							aux4: ["wm.TextEditor", {"width":"390px","caption":"No. Documento","captionAlign":"left","captionSize":"70%","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							aux5: ["wm.TextEditor", {"width":"390px","caption":"Curso Ingreso","captionAlign":"left","captionSize":"70%","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							aux6: ["wm.TextEditor", {"width":"471px","caption":"E-mail contacto","captionAlign":"left","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}]
						}]
					}]
				}],
				inscalumasigLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
					inscalumasigGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_DropShadow","wm_Border_BottomStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"DETALLES ACADEMICOS","captionClasses":"wm_BackgroundGradient_Blue wm_Border_DropShadow wm_Border_BottomStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"2"}, {}, {
						panel24: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"57px","horizontalAlign":"left","width":"100%","verticalAlign":"bottom","layoutKind":"left-to-right"}, {}, {
							label18: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"BUSCAR DETALLES ACADEMICOS POR AÑO ESCOLAR:","height":"37px","width":"431px","border":"0"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							caja_sy_detalles_academicos: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontSizePx_14px"],"domNode":["wm_FontSizePx_16px"]},"width":"202px","caption":"Año escolar","height":"100%","disabled":true,"captionAlign":"left","captionPosition":"top"}, {"onchange":"Vista_Detalles_Academicos"}, {
								editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sylista","expression":undefined}, {}]
									}]
								}]
							}]
						}],
						tabla_detalles_academicos: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_16px"]},"border":"0"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"Vista_Detalles_Academicos","expression":undefined}, {}]
							}],
							column2: ["wm.DataGridColumn", {"caption":"●","field":"id.idAsignatura","index":1}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"300px","index":1}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column3: ["wm.DataGridColumn", {"caption":"Subject","field":"id.subject","columnWidth":"300px","index":2}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column4: ["wm.DataGridColumn", {"caption":"Porcentaje","field":"id.porcentaje","columnWidth":"100px","index":3}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column5: ["wm.DataGridColumn", {"caption":"Logrados","field":"id.logrados","columnWidth":"100px","index":4}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column6: ["wm.DataGridColumn", {"caption":"Esperados","field":"id.esperados","columnWidth":"100px","index":5}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column7: ["wm.DataGridColumn", {"caption":"Calificacion","field":"id.calificacion","index":6}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column8: ["wm.DataGridColumn", {"caption":"Calificación (Char)","field":"id.califChar","columnWidth":"130px","index":7}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}