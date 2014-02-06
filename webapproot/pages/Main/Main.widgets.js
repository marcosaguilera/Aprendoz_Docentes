Main.widgets = {
	listGrado: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Grado","startUpdate":false,"type":"com.aprendoz_test.data.Grado"}, {}],
	iraformularios: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"cur_formularios","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	listDES: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.TipoDesempeno","startUpdate":false,"type":"com.aprendoz_test.data.TipoDesempeno"}, {}],
	listRETRO: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.TipoValoracion","startUpdate":false,"type":"com.aprendoz_test.data.TipoValoracion"}, {}],
	LOGOUT: ["wm.ServiceVariable", {"operation":"logout","service":"securityService"}, {"onResult":"iraSALIR"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	iraSALIR: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Login\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	getUserName: ["wm.ServiceVariable", {"operation":"getUserName","service":"securityService","startUpdate":true}, {"onSuccess":"getUserNameSuccess"}, {
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
	listaGrado4: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Grado","startUpdate":false,"type":"com.aprendoz_test.data.Grado"}, {}],
	listaCursos4: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Curso","startUpdate":false,"type":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"grado1.dataValue","targetProperty":"filter.grado.idGrado"}, {}]
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
	actividadLV: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Unidad","startUpdate":false,"type":"com.aprendoz_test.data.Unidad"}, {}],
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
	subtopicoLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.subtopicoLiveView3","startUpdate":false,"type":"com.aprendoz_test.data.Subtopico"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"unidadDataGrid2.selectedItem.idUnidad","targetProperty":"filter.unidad.idUnidad"}, {}]
		}]
	}],
	iraFormulario2: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"layer47","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	ejesDirNivel: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Eje","startUpdate":false,"type":"com.aprendoz_test.data.Eje"}, {}],
	actualizacalifestudiante: ["wm.ServiceVariable", {"operation":"corre_proc_calcula_calif_est","service":"actualiza_calif"}, {"onResult":"actualizacalifestudianteResult"}, {
		input: ["wm.ServiceInput", {"type":"corre_proc_calcula_calif_estInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"aux200.dataValue","targetProperty":"Pr_Id_Aprendizaje"}, {}],
				wire1: ["wm.Wire", {"source":"aux199.dataValue","targetProperty":"Pr_Id_Persona"}, {}]
			}]
		}]
	}],
	a_lista_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy","type":"com.aprendoz_test.data.Sy"}, {"onSuccess":"a_lista_sySuccess"}],
	a_grado: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Grado","type":"com.aprendoz_test.data.Grado"}, {}],
	l_cur_asig_asignaturas_vista_docentes_asignaturas: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.VProfesorAsignatura","maxResults":50,"startUpdate":false,"type":"com.aprendoz_test.data.VProfesorAsignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"cur_encabezado_tex_ldapUser.dataValue","targetProperty":"filter.id.nombreLdap"}, {}],
			wire1: ["wm.Wire", {"source":"cur_encabezado_sel_sy.dataValue","targetProperty":"filter.id.syIdSy"}, {}],
			wire2: ["wm.Wire", {"source":"cur_encabezado_sel_grado.dataValue","targetProperty":"filter.id.cursoIdCurso"}, {}],
			wire3: ["wm.Wire", {"source":"cur_encabezado_sel_grado.dataValue","targetProperty":"filter.id.gradoIdGrado"}, {}]
		}]
	}],
	l_cur_unid_unidades_unidadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.unidadLiveView1","startUpdate":false,"type":"com.aprendoz_test.data.Unidad"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"cur_asig_datag_asignaturasDataGrid1.selectedItem.id.asignaturaIdAsignatura","targetProperty":"filter.asignatura.idAsignatura"}, {}]
		}]
	}],
	l_cur_subt_subtopicos_subtopicoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"ignoreCase":true,"liveSource":"app.subtopicoLiveView1","maxResults":50,"orderBy":"asc: fechaInicio","startUpdate":false,"type":"com.aprendoz_test.data.Subtopico"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"cur_unid_datag_unidadesDataGrid1.selectedItem.idUnidad","targetProperty":"filter.unidad.idUnidad"}, {}]
		}]
	}],
	l_cur_apr_aprendizajes_aprendizajeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.aprendizajeLiveView1","startUpdate":false,"type":"com.aprendoz_test.data.Aprendizaje"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico","targetProperty":"filter.subtopico.idSubtopico"}, {}]
		}]
	}],
	l_cur_metas_metas_otrasmetasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.otrasmetasLiveView1","startUpdate":false,"type":"com.aprendoz_test.data.OtrasMetas"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico","targetProperty":"filter.subtopico.idSubtopico"}, {}]
		}]
	}],
	l_cur_rec_recursos_recursoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.recursoLiveView3","startUpdate":false,"type":"com.aprendoz_test.data.Recurso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico","targetProperty":"filter.subtopico.idSubtopico"}, {}]
		}]
	}],
	l_cur_formularios_aprendizajes_listaEjes: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Eje","startUpdate":false,"type":"com.aprendoz_test.data.Eje"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaEjesBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaEjesSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"cur_asig_datag_asignaturasDataGrid1.selectedItem.id.idSubarea1","targetProperty":"filter.subarea.idSubarea"}, {}]
		}]
	}],
	l_cur_formularios_aprendizajes_listaDimension_comprension: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionComprension","startUpdate":false,"type":"com.aprendoz_test.data.DimensionComprension"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaDimension_comprensionBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaDimension_comprensionSuccess"}],
	l_cur_formularios_aprendizajes_listaDimension_curricular: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionCurricular","startUpdate":false,"type":"com.aprendoz_test.data.DimensionCurricular"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaDimension_curricularBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaDimension_curricularSuccess"}],
	l_cur_formularios_aprendizajes_listaInteligencias: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia","startUpdate":false,"type":"com.aprendoz_test.data.Inteligencia"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaInteligenciasBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaInteligenciasSuccess"}],
	l_cur_formularios_actividad_listaTipoActividades: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.TipoActividad","startUpdate":false,"type":"com.aprendoz_test.data.TipoActividad"}, {"onBeforeUpdate":"l_cur_formularios_actividad_listaTipoActividadesBeforeUpdate","onSuccess":"l_cur_formularios_actividad_listaTipoActividadesSuccess"}],
	l_cur_formularios_actividad_listaTipoValoracion: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.TipoValoracion","startUpdate":false,"type":"com.aprendoz_test.data.TipoValoracion"}, {"onBeforeUpdate":"l_cur_formularios_actividad_listaTipoValoracionBeforeUpdate","onSuccess":"l_cur_formularios_actividad_listaTipoValoracionSuccess"}],
	l_cur_formularios_actividad_listaTipoDesempeno: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.TipoDesempeno","startUpdate":false,"type":"com.aprendoz_test.data.TipoDesempeno"}, {}],
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
	a_isAuthenticated: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"isAuthenticated","service":"securityService","startUpdate":true}, {"onSuccess":"a_isAuthenticatedSuccess"}, {
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
	getCompleteName: ["wm.ServiceVariable", {"operation":"getFullName","service":"aprendoz_test"}, {"onSuccess":"getCompleteNameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getFullNameInputs"}, {}]
	}],
	l_cur_formularios_aprendizajes_listaEjes2: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Eje","startUpdate":false,"type":"com.aprendoz_test.data.Eje"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"cur_asig_datag_asignaturasDataGrid1.selectedItem.id.idSubarea2","targetProperty":"filter.subarea.idSubarea"}, {}]
		}]
	}],
	l_cur_formularios_aprendizajes_listaEjes3: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.Eje","startUpdate":false,"type":"com.aprendoz_test.data.Eje"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"cur_asig_datag_asignaturasDataGrid1.selectedItem.id.idSubarea3","targetProperty":"filter.subarea.idSubarea"}, {}]
		}]
	}],
	a_obtenerNombre: ["wm.ServiceVariable", {"operation":"getInformacionValiosa","service":"aprendoz_test"}, {"onSuccess":"a_obtenerNombreSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getInformacionValiosaInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"aux_getNameUser.dataValue","targetProperty":"usuario"}, {}]
			}]
		}]
	}],
	a_informacionUsuario: ["wm.ServiceVariable", {"operation":"showInformationUser","service":"aprendoz_test"}, {"onSuccess":"a_informacionUsuarioSuccess"}, {
		input: ["wm.ServiceInput", {"type":"showInformationUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"aux_getNameUser.dataValue","targetProperty":"user"}, {}]
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
	l_inicio_detalles_acceso: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesInicioVistaDetallesAcceso","startUpdate":false,"type":"com.aprendoz_test.data.DocentesInicioVistaDetallesAcceso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"source":"inicio_sel_sy.dataValue","targetProperty":"filter.id.syIdSy"}, {}],
			wire1: ["wm.Wire", {"source":"inicio_sel_curso.dataValue","targetProperty":"filter.id.cursoIdCurso"}, {}]
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
	a_informacionUsuario2: ["wm.ServiceVariable", {"operation":"showInformationUser2","service":"aprendoz_test"}, {}, {
		input: ["wm.ServiceInput", {"type":"showInformationUser2Inputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"aux_getNameUser.dataValue","targetProperty":"user"}, {}]
			}]
		}]
	}],
	variable1: ["wm.Variable", {}, {}],
	a_getLastAccess: ["wm.ServiceVariable", {"designMaxResults":10,"maxResults":5,"operation":"last_accessHQL","service":"aprendoz_test"}, {"onSuccess":"a_getLastAccessSuccess"}, {
		input: ["wm.ServiceInput", {"type":"last_accessHQLInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"aux_getNameUser.dataValue","targetProperty":"user"}, {}]
			}]
		}]
	}],
	dash_dash_lv1: ["wm.ServiceVariable", {"operation":"dash_logDocentes","service":"aprendoz_test"}, {"onSuccess":"dash_dash_lv1Success"}, {
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
	global_cursy: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"_global_getSyByCurDate","service":"aprendoz_test"}, {}, {
		input: ["wm.ServiceInput", {"type":"_global_getSyByCurDateInputs"}, {}]
	}],
	global_docentes_asignaturas: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"_global_curriculo_asig_doc","service":"aprendoz_test"}, {"onResult":"global_docentes_asignaturasResult"}, {
		input: ["wm.ServiceInput", {"type":"_global_curriculo_asig_docInputs"}, {}]
	}],
	global_username: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
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
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"IdAsignatura","sortable":true,"dataIndex":"asignatura.idAsignatura","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Asignatura","sortable":true,"dataIndex":"asignatura.asignatura","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Subject","sortable":true,"dataIndex":"asignatura.subject","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Electiva","sortable":true,"dataIndex":"asignatura.electiva","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"IdArea1","sortable":true,"dataIndex":"asignatura.idArea1","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"IdArea2","sortable":true,"dataIndex":"asignatura.idArea2","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"IdArea3","sortable":true,"dataIndex":"asignatura.idArea3","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"IdSubarea1","sortable":true,"dataIndex":"asignatura.idSubarea1","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"IdSubarea2","sortable":true,"dataIndex":"asignatura.idSubarea2","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"IdSubarea3","sortable":true,"dataIndex":"asignatura.idSubarea3","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":9,"subType":null},
{"caption":"SalonIdSalon","sortable":true,"dataIndex":"asignatura.salonIdSalon","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":10,"subType":null},
{"caption":"IntensidadHoraria","sortable":true,"dataIndex":"asignatura.intensidadHoraria","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":11,"subType":null},
{"caption":"Peso","sortable":true,"dataIndex":"asignatura.peso","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":12,"subType":null},
{"caption":"DescripAsigEspaniol","sortable":true,"dataIndex":"asignatura.descripAsigEspaniol","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":13,"subType":null},
{"caption":"DescripAsigIngles","sortable":true,"dataIndex":"asignatura.descripAsigIngles","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":14,"subType":null},
{"caption":"IhA1","sortable":true,"dataIndex":"asignatura.ihA1","type":"java.lang.Float","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":15,"subType":null},
{"caption":"IhA2","sortable":true,"dataIndex":"asignatura.ihA2","type":"java.lang.Float","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":16,"subType":null},
{"caption":"IhA3","sortable":true,"dataIndex":"asignatura.ihA3","type":"java.lang.Float","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":17,"subType":null},
{"caption":"Meses","sortable":true,"dataIndex":"asignatura.meses","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":18,"subType":null},
{"caption":"Esperadostotal","sortable":true,"dataIndex":"asignatura.esperadostotal","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":19,"subType":null}
]}, {}]
	}],
	global_numero_unidad: ["wm.Variable", {"isList":true,"json":"[{\n\t\"name\": \"1\", \n\t\"dataValue\": \"1\"\n},\n{\n    \"name\": \"2\", \n\t\"dataValue\": \"2\"\n},\n{\n    \"name\": \"3\", \n\t\"dataValue\": \"3\"\n},\n{\n    \"name\": \"4\", \n\t\"dataValue\": \"4\"\n},\n{\n    \"name\": \"5\", \n\t\"dataValue\": \"5\"\n},\n{\n    \"name\": \"6\", \n\t\"dataValue\": \"6\"\n},\n{\n    \"name\": \"7\", \n\t\"dataValue\": \"7\"\n}]","type":"EntryData"}, {}],
	subtopicoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"type":"com.aprendoz_test.data.Subtopico"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Subtopico","related":["unidad"],"view":[
{"caption":"IdSubtopico","sortable":true,"dataIndex":"idSubtopico","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Subtopico","sortable":true,"dataIndex":"subtopico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"FechaInicio","sortable":true,"dataIndex":"fechaInicio","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaFin","sortable":true,"dataIndex":"fechaFin","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Subtopic","sortable":true,"dataIndex":"subtopic","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"NumeroSubtopico","sortable":true,"dataIndex":"numeroSubtopico","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"IdUnidad","sortable":true,"dataIndex":"unidad.idUnidad","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Unidad","sortable":true,"dataIndex":"unidad.unidad","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Unit","sortable":true,"dataIndex":"unidad.unit","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaInicio","sortable":true,"dataIndex":"unidad.fechaInicio","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"FechaFin","sortable":true,"dataIndex":"unidad.fechaFin","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"NumeroUnidad","sortable":true,"dataIndex":"unidad.numeroUnidad","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"unidad.idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}
]}, {}]
	}],
	aprendizajeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"type":"com.aprendoz_test.data.Aprendizaje"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Aprendizaje","related":["dimensionComprension","subtopico","dimensionCurricular","inteligencia","nivelEsperado"],"view":[
{"caption":"IdAprendizaje","sortable":true,"dataIndex":"idAprendizaje","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"FechaEsperada","sortable":true,"dataIndex":"fechaEsperada","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Aprendizaje","sortable":true,"dataIndex":"aprendizaje","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Learning","sortable":true,"dataIndex":"learning","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Peso","sortable":true,"dataIndex":"peso","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"EjeIdEje","sortable":true,"dataIndex":"ejeIdEje","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Eje2IdEje","sortable":true,"dataIndex":"eje2IdEje","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"Eje3IdEje","sortable":true,"dataIndex":"eje3IdEje","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"IdDimension","sortable":true,"dataIndex":"dimensionComprension.idDimension","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"DimensionComprension","sortable":true,"dataIndex":"dimensionComprension.dimensionComprension","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"IdSubtopico","sortable":true,"dataIndex":"subtopico.idSubtopico","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Subtopico","sortable":true,"dataIndex":"subtopico.subtopico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"FechaInicio","sortable":true,"dataIndex":"subtopico.fechaInicio","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaFin","sortable":true,"dataIndex":"subtopico.fechaFin","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Subtopic","sortable":true,"dataIndex":"subtopico.subtopic","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"NumeroSubtopico","sortable":true,"dataIndex":"subtopico.numeroSubtopico","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"subtopico.idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"IdDimension","sortable":true,"dataIndex":"dimensionCurricular.idDimension","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"DimensionCurricular","sortable":true,"dataIndex":"dimensionCurricular.dimensionCurricular","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"IdInteligencia","sortable":true,"dataIndex":"inteligencia.idInteligencia","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Inteligencia","sortable":true,"dataIndex":"inteligencia.inteligencia","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"IdNivelEsperado","sortable":true,"dataIndex":"nivelEsperado.idNivelEsperado","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"NivelEsperado","sortable":true,"dataIndex":"nivelEsperado.nivelEsperado","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
	}],
	otrasmetasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"maxResults":100,"startUpdate":false,"type":"com.aprendoz_test.data.OtrasMetas"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.OtrasMetas","related":["subtopico"],"view":[
{"caption":"IdOtraMeta","sortable":true,"dataIndex":"idOtraMeta","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Meta","sortable":true,"dataIndex":"meta","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Fecha","sortable":true,"dataIndex":"fecha","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Logrado","sortable":true,"dataIndex":"logrado","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"IdSubtopico","sortable":true,"dataIndex":"subtopico.idSubtopico","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Subtopico","sortable":true,"dataIndex":"subtopico.subtopico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"FechaInicio","sortable":true,"dataIndex":"subtopico.fechaInicio","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaFin","sortable":true,"dataIndex":"subtopico.fechaFin","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Subtopic","sortable":true,"dataIndex":"subtopico.subtopic","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"NumeroSubtopico","sortable":true,"dataIndex":"subtopico.numeroSubtopico","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"subtopico.idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}
]}, {}]
	}],
	recursoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"maxResults":100,"startUpdate":false,"type":"com.aprendoz_test.data.Recurso"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Recurso","related":["tipoRecurso","subtopico"],"view":[
{"caption":"IdRecurso","sortable":true,"dataIndex":"idRecurso","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Recurso","sortable":true,"dataIndex":"recurso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Documento","sortable":true,"dataIndex":"documento","type":"byte","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Ubicacion","sortable":true,"dataIndex":"ubicacion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"IdTipoRecurso","sortable":true,"dataIndex":"tipoRecurso.idTipoRecurso","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"TipoRecurso","sortable":true,"dataIndex":"tipoRecurso.tipoRecurso","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"IdSubtopico","sortable":true,"dataIndex":"subtopico.idSubtopico","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Subtopico","sortable":true,"dataIndex":"subtopico.subtopico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"FechaInicio","sortable":true,"dataIndex":"subtopico.fechaInicio","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaFin","sortable":true,"dataIndex":"subtopico.fechaFin","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Subtopic","sortable":true,"dataIndex":"subtopico.subtopic","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"NumeroSubtopico","sortable":true,"dataIndex":"subtopico.numeroSubtopico","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"subtopico.idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}
]}, {}]
	}],
	actividadLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"type":"com.aprendoz_test.data.Actividad"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.aprendoz_test.data.Actividad","related":["subtopico"],"view":[
{"caption":"IdActividad","sortable":true,"dataIndex":"idActividad","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Actividad","sortable":true,"dataIndex":"actividad","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Fecha","sortable":true,"dataIndex":"fecha","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"RequeridoAlternativo","sortable":true,"dataIndex":"requeridoAlternativo","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"IdSubtopico","sortable":true,"dataIndex":"subtopico.idSubtopico","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Subtopico","sortable":true,"dataIndex":"subtopico.subtopico","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"FechaInicio","sortable":true,"dataIndex":"subtopico.fechaInicio","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"FechaFin","sortable":true,"dataIndex":"subtopico.fechaFin","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Subtopic","sortable":true,"dataIndex":"subtopico.subtopic","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"NumeroSubtopico","sortable":true,"dataIndex":"subtopico.numeroSubtopico","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"IdSyIdIdSy","sortable":true,"dataIndex":"subtopico.idSyIdIdSy","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}
]}, {}]
	}],
	actividadDialog: ["wm.DesignableDialog", {"height":"284px","styles":{"backgroundColor":"#ebebeb","color":"#000000"},"title":"actividad","titlebarBorderColor":"#fbfbfb","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			actividadLiveForm2: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"192px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"actividadLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"actividadDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idActividadEditor2: ["wm.Number", {"border":"0","caption":"IdActividad","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idActividad","height":"26px","required":true,"width":"100%"}, {}],
				subtopicoLookup2: ["wm.Lookup", {"caption":"Subtopico","captionSize":"140px","dataType":"com.aprendoz_test.data.Subtopico","desktopHeight":"26px","displayField":"subtopico","formField":"subtopico","height":"26px","required":true,"width":"100%"}, {}],
				actividadEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Actividad","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"actividad","height":"100%","maxChars":65535,"width":"100%"}, {}],
				fechaEditor4: ["wm.DateTime", {"border":"0","caption":"Fecha","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fecha","height":"26px","width":"100%"}, {}],
				requeridoAlternativoEditor2: ["wm.Checkbox", {"caption":"Requerido","captionSize":"140px","displayValue":false,"formField":"requeridoAlternativo","height":"26px","styles":{},"width":"100%"}, {}],
				idSyIdIdSyEditor2: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idSyIdIdSy","height":"26px","showing":false,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1","height":"34px"}, {}, {
			actividadSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"actividadLiveForm2.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"actividadLiveForm2.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			actividadCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"actividadDialog.hide","onclick1":"actividadLiveForm2.cancelEdit"}]
		}]
	}],
	unidadDialog: ["wm.DesignableDialog", {"height":"390px","styles":{"backgroundColor":"#ebebeb","color":"#0e0c0c"},"title":"Unidad","width":"500px","containerWidgetId":"containerWidget1","buttonBarId":"buttonBar"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			unidadLiveForm2: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"296px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"unidadLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"unidadDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idUnidadEditor2: ["wm.Number", {"border":"0","caption":"IdUnidad","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idUnidad","height":"26px","required":true,"width":"100%"}, {}],
				unidadEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Unidad","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"unidad","height":"80px","helpText":"ingrese la descripción en español","maxChars":500,"styles":{},"width":"100%"}, {}],
				unitEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Unit","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"unit","height":"80px","helpText":"insert here the description in english","maxChars":500,"width":"100%"}, {}],
				fechaInicioEditor3: ["wm.DateTime", {"border":"0","caption":"Fecha Inicio","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fechaInicio","height":"26px","width":"100%"}, {}],
				fechaFinEditor3: ["wm.DateTime", {"border":"0","caption":"Fecha Finalización","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fechaFin","height":"26px","width":"100%"}, {}],
				idSyIdIdSyEditor3: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idSyIdIdSy","height":"26px","showing":false,"width":"100%"}, {}],
				numeroUnidadselect1: ["wm.SelectMenu", {"caption":"No. Unidad","captionSize":"140px","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"desktopHeight":"26px","displayField":"name","displayValue":"","height":"26px","width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"global_numero_unidad","targetProperty":"dataSet"}, {}]
					}]
				}],
				asignaturaLookup2: ["wm.Lookup", {"caption":"Asignatura","captionSize":"140px","dataType":"com.aprendoz_test.data.Asignatura","displayField":"descripAsigEspaniol","formField":"asignatura","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1","height":"34px"}, {}, {
			unidadSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"unidadLiveForm2.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"unidadLiveForm2.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			unidadCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"unidadDialog.hide","onclick1":"unidadLiveForm2.cancelEdit"}]
		}]
	}],
	subtopicoDialog: ["wm.DesignableDialog", {"height":"390px","styles":{"backgroundColor":"#ebebeb","color":"#070707"},"title":"subtopico","width":"500px","containerWidgetId":"containerWidget2","buttonBarId":"buttonBar"}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			subtopicoLiveForm2: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"322px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"subtopicoLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"subtopicoDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idSubtopicoEditor2: ["wm.Number", {"border":"0","caption":"IdSubtopico","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idSubtopico","height":"26px","required":true,"width":"100%"}, {}],
				subtopicoEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Subtopico","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"subtopico","height":"80px","maxChars":200,"width":"100%"}, {}],
				fechaInicioEditor4: ["wm.DateTime", {"border":"0","caption":"FechaInicio","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fechaInicio","height":"26px","required":true,"width":"100%"}, {}],
				fechaFinEditor4: ["wm.DateTime", {"border":"0","caption":"FechaFin","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fechaFin","height":"26px","required":true,"width":"100%"}, {}],
				subtopicEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Subtopic","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"subtopic","height":"80px","maxChars":200,"width":"100%"}, {}],
				numeroSubtopicoEditor2: ["wm.Number", {"border":"0","caption":"NumeroSubtopico","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"numeroSubtopico","height":"26px","width":"100%"}, {}],
				idSyIdIdSyEditor4: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idSyIdIdSy","height":"26px","width":"100%"}, {}],
				unidadLookup2: ["wm.Lookup", {"caption":"Unidad","captionSize":"140px","dataType":"com.aprendoz_test.data.Unidad","displayField":"unidad","formField":"unidad","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1","height":"34px"}, {}, {
			subtopicoSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"subtopicoLiveForm2.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"subtopicoLiveForm2.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			subtopicoCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"subtopicoDialog.hide","onclick1":"subtopicoLiveForm2.cancelEdit"}]
		}]
	}],
	aprendizajeDialog: ["wm.DesignableDialog", {"height":"512px","styles":{"backgroundColor":"#ebebeb","color":"#050505"},"title":"aprendizaje","width":"500px","containerWidgetId":"containerWidget3","buttonBarId":"buttonBar"}, {}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			aprendizajeLiveForm2: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"448px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"aprendizajeLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"aprendizajeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idAprendizajeEditor2: ["wm.Number", {"border":"0","caption":"IdAprendizaje","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idAprendizaje","height":"26px","required":true,"width":"100%"}, {}],
				panel21: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					subtopicoLookup5: ["wm.Lookup", {"caption":"Subtopico","captionSize":"140px","dataType":"com.aprendoz_test.data.Subtopico","displayField":"subtopico","formField":"subtopico","required":true,"width":"100%"}, {}]
				}],
				fechaEsperadaEditor2: ["wm.DateTime", {"border":"0","caption":"FechaEsperada","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fechaEsperada","height":"26px","required":true,"width":"100%"}, {}],
				aprendizajeEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Aprendizaje","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"aprendizaje","height":"80px","maxChars":500,"required":true,"width":"100%"}, {}],
				learningEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Learning","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"learning","height":"80px","maxChars":500,"required":true,"width":"100%"}, {}],
				pesoEditor1: ["wm.Number", {"border":"0","caption":"Peso","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"peso","height":"26px","required":true,"width":"100%"}, {}],
				ejeIdEjeEditor2: ["wm.Number", {"border":"0","caption":"EjeIdEje","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"ejeIdEje","height":"26px","required":true,"width":"100%"}, {}],
				eje2: ["wm.Number", {"border":"0","caption":"Eje2IdEje","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"eje2IdEje","height":"26px","width":"100%"}, {}],
				eje3: ["wm.Number", {"border":"0","caption":"Eje3IdEje","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"eje3IdEje","height":"26px","width":"100%"}, {}],
				dimensionComprensionLookup2: ["wm.Lookup", {"caption":"Dimensión comprensión","captionSize":"140px","dataType":"com.aprendoz_test.data.DimensionComprension","displayField":"dimensionComprension","formField":"dimensionComprension","required":true,"width":"100%"}, {}],
				dimensionCurricularLookup2: ["wm.Lookup", {"caption":"DimensionCurricular","captionSize":"140px","dataType":"com.aprendoz_test.data.DimensionCurricular","displayField":"dimensionCurricular","formField":"dimensionCurricular","required":true,"width":"100%"}, {}],
				inteligenciaLookup2: ["wm.Lookup", {"caption":"Inteligencia","captionSize":"140px","dataType":"com.aprendoz_test.data.Inteligencia","displayField":"inteligencia","formField":"inteligencia","required":true,"width":"100%"}, {}],
				nivelEsperadoLookup2: ["wm.Lookup", {"caption":"NivelEsperado","captionSize":"140px","dataType":"com.aprendoz_test.data.NivelEsperado","displayField":"nivelEsperado","formField":"nivelEsperado","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1","height":"34px"}, {}, {
			aprendizajeSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"aprendizajeLiveForm2.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"aprendizajeLiveForm2.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			aprendizajeCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"aprendizajeDialog.hide","onclick1":"aprendizajeLiveForm2.cancelEdit"}]
		}]
	}],
	otrasmetasDialog: ["wm.DesignableDialog", {"height":"284px","styles":{"backgroundColor":"#ebebeb","color":"#020202"},"title":"otrasmetas","width":"500px","containerWidgetId":"containerWidget4","buttonBarId":"buttonBar"}, {}, {
		containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			otrasmetasLiveForm2: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"216px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"otrasmetasLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"otrasmetasDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idOtraMetaEditor2: ["wm.Number", {"border":"0","caption":"IdOtraMeta","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idOtraMeta","height":"26px","required":true,"styles":{},"width":"100%"}, {}],
				metaEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Meta","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"meta","height":"80px","maxChars":200,"styles":{},"width":"100%"}, {}],
				fechaEditor5: ["wm.DateTime", {"border":"0","caption":"Fecha","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fecha","height":"26px","width":"100%"}, {}],
				logradoEditor3: ["wm.Checkbox", {"caption":"Logrado","captionSize":"140px","displayValue":false,"formField":"logrado","height":"26px","width":"100%"}, {}],
				idSyIdIdSyEditor5: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idSyIdIdSy","height":"26px","width":"100%"}, {}],
				subtopicoLookup7: ["wm.Lookup", {"caption":"Subtopico","captionSize":"140px","dataType":"com.aprendoz_test.data.Subtopico","displayField":"subtopico","formField":"subtopico","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1","height":"34px"}, {}, {
			otrasmetasSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"otrasmetasLiveForm2.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"otrasmetasLiveForm2.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			otrasmetasCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"otrasmetasDialog.hide","onclick1":"otrasmetasLiveForm2.cancelEdit"}]
		}]
	}],
	recursoDialog: ["wm.DesignableDialog", {"desktopHeight":"420px","height":"420px","styles":{"backgroundColor":"#ebebeb","color":"#090808"},"title":"recurso","width":"500px","containerWidgetId":"containerWidget5","buttonBarId":"buttonBar"}, {}, {
		containerWidget5: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			recursoLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"352px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"recursoLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"recursoDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idRecursoEditor1: ["wm.Number", {"border":"0","caption":"IdRecurso","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idRecurso","height":"26px","required":true,"width":"100%"}, {}],
				panel23: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					subtopicoLookup8: ["wm.Lookup", {"caption":"Subtopico","captionSize":"140px","dataType":"com.aprendoz_test.data.Subtopico","displayField":"subtopico","formField":"subtopico","required":true,"width":"100%"}, {}]
				}],
				recursoEditor2: ["wm.LargeTextArea", {"border":"0","caption":"Recurso","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"recurso","height":"80px","maxChars":300,"width":"100%"}, {}],
				panel20: ["wm.Panel", {"height":"81px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					dojoFileUpload1: ["wm.DojoFileUpload", {"buttonCaption":"Click para cargar","buttonWidth":120,"width":"322px"}, {}, {
						input: ["wm.ServiceInput", {"type":"uploadFileInputs"}, {}]
					}]
				}],
				documentoEditor1: ["wm.Number", {"border":"0","caption":"Documento","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"documento","height":"26px","width":"100%"}, {}],
				ubicacionEditor1: ["wm.LargeTextArea", {"border":"0","caption":"Ubicacion","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"ubicacion","height":"80px","maxChars":300,"width":"100%"}, {}],
				idSyIdIdSyEditor6: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idSyIdIdSy","height":"26px","showing":false,"styles":{},"width":"100%"}, {}],
				tipoRecursoLookup1: ["wm.Lookup", {"caption":"Tipo recurso","captionSize":"140px","dataType":"com.aprendoz_test.data.TipoRecurso","displayField":"tipoRecurso","formField":"tipoRecurso","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1","height":"34px"}, {}, {
			recursoSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"recursoLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"recursoLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			recursoCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"recursoDialog.hide","onclick1":"recursoLiveForm1.cancelEdit"}]
		}]
	}],
	actividadDialog1: ["wm.DesignableDialog", {"height":"284px","styles":{"backgroundColor":"#ebebeb","fontSize":"11px","color":"#000000"},"title":"actividad","width":"500px","containerWidgetId":"containerWidget6","buttonBarId":"buttonBar"}, {}, {
		containerWidget6: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			actividadLiveForm3: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"216px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"actividadLivePanel2.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"actividadDojoGrid1.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idActividadEditor3: ["wm.Number", {"border":"0","caption":"IdActividad","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idActividad","height":"26px","required":true,"styles":{},"width":"100%"}, {}],
				actividadEditor3: ["wm.LargeTextArea", {"border":"0","caption":"Actividad","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"actividad","height":"80px","maxChars":65535,"width":"100%"}, {}],
				fechaEditor6: ["wm.DateTime", {"border":"0","caption":"Fecha","captionSize":"140px","dateMode":"Date","emptyValue":"zero","formField":"fecha","height":"26px","width":"100%"}, {}],
				requeridoAlternativoEditor3: ["wm.Checkbox", {"caption":"RequeridoAlternativo","captionSize":"140px","displayValue":false,"formField":"requeridoAlternativo","height":"26px","width":"100%"}, {}],
				idSyIdIdSyEditor7: ["wm.Number", {"border":"0","caption":"IdSyIdIdSy","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idSyIdIdSy","height":"26px","width":"100%"}, {}],
				subtopicoLookup9: ["wm.Lookup", {"caption":"Subtopico","captionSize":"140px","dataType":"com.aprendoz_test.data.Subtopico","displayField":"subtopico","formField":"subtopico","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1","height":"34px"}, {}, {
			actividadSaveButton1: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"actividadLiveForm3.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"actividadLiveForm3.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			actividadCancelButton1: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"actividadDialog1.hide","onclick1":"actividadLiveForm3.cancelEdit"}]
		}]
	}],
	panel_principal: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top","width":"802px"}, {}, {
		FancyCentered: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			templateMain: ["wm.Template", {"_classes":{"domNode":["template-main","wm_BackgroundColor_White"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				aprendoz: ["wm.Panel", {"freeze":true,"height":"1551px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					panelHeader: ["wm.Panel", {"_classes":{"domNode":["template-header-panel","wm_BackgroundColor_White"]},"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"bottom","width":"100%"}, {}, {
						logo: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/logos/headerapp.jpg","width":"600px"}, {}],
						spacer5: ["wm.Spacer", {"height":"48px","width":"99%"}, {}],
						top_Head: ["wm.Panel", {"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
							dateEditor1: ["wm.DateEditor", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"captionPosition":"right","displayValue":"05/02/2014","padding":"2","readonly":true,"width":"80px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
								}],
								editor: ["wm._DateEditor", {}, {}]
							}],
							label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"align":"center","caption":"|","padding":"0","width":"10px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							timeEditor1: ["wm.TimeEditor", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"displayValue":"11:35 a.m.","padding":"2","readonly":true,"width":"76px"}, {}, {
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
						templateContent: ["wm.Panel", {"_classes":{"domNode":["template-content"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
							main: ["wm.TabLayers", {"padding":"10"}, {}, {
								inicio: ["wm.Layer", {"caption":"Inicio","horizontalAlign":"left","lock":true,"margin":"2,0,2,0","padding":"50","verticalAlign":"top"}, {}, {
									image_logo: ["wm.Panel", {"height":"158px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"middle","width":"100%"}, {}, {
										logo_aprendoz: ["wm.Picture", {"height":"136%","source":"resources/images/logos/LOGO%20APRENDOZ.jpg","width":"100%"}, {}]
									}],
									panel13: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
										label_nombreCompleto: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_28px"]},"align":"center","height":"100%","padding":"4","width":"100%"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}],
									configuracion_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										inicio_filtros_claves: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","lock":true,"margin":"10","padding":"10","showing":false,"verticalAlign":"top","width":"500px"}, {}, {
											inicio_sel_sy: ["wm.SelectEditor", {"caption":"Año Escolar","height":"26px","padding":"2","width":"100%"}, {}, {
												editor: ["wm._SelectEditor", {"dataField":"idSy","displayField":"schoolYear"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"a_lista_sy","targetProperty":"dataSet"}, {}]
													}]
												}]
											}],
											inicio_sel_grado: ["wm.SelectEditor", {"caption":"Grado","height":"26px","padding":"2","width":"150%"}, {"onchange":"l_inicio_cursos"}, {
												editor: ["wm._SelectEditor", {"dataField":"idGrado","displayField":"grado"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"a_grado","targetProperty":"dataSet"}, {}]
													}]
												}]
											}],
											inicio_sel_curso: ["wm.SelectEditor", {"caption":"Curso","height":"26px","padding":"2","width":"150%"}, {"onchange":"l_inicio_detalles_acceso"}, {
												editor: ["wm._SelectEditor", {"dataField":"idCurso","displayField":"curso"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"l_inicio_cursos","targetProperty":"dataSet"}, {}]
													}]
												}]
											}],
											detalles_alumnos: ["wm.DataGrid", {}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"l_inicio_detalles_acceso","targetProperty":"dataSet"}, {}]
												}],
												column2: ["wm.DataGridColumn", {"caption":"*","columnWidth":"62px","field":"id.codigo","index":1}, {}, {
													format1: ["wm.DataFormatter", {}, {}]
												}],
												column1: ["wm.DataGridColumn", {"caption":"Nombre","columnWidth":"100%","dataExpression":"${id.apellido1}+\" \"+${id.apellido2}+\" \"+${id.nombre1}+\" \"+${id.nombre2}","field":"id.nombre1","index":1}, {}, {
													format1: ["wm.DataFormatter", {}, {}]
												}],
												column3: ["wm.DataGridColumn", {"caption":"Usuario","columnWidth":"80px","field":"id.nombreLdap","index":2}, {}, {
													format1: ["wm.DataFormatter", {}, {}]
												}],
												column4: ["wm.DataGridColumn", {"caption":"Clave","columnWidth":"80px","field":"id.clave","index":3}, {}, {
													format1: ["wm.DataFormatter", {}, {}]
												}]
											}]
										}],
										dashboard: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"100%"}, {}, {
											dash_chart1: ["wm.Panel", {"height":"250px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
											top_filters: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
												dash_sy_select: ["wm.SelectEditor", {"caption":"Año escolar","captionSize":"100%","padding":"2","showing":false}, {"onchange":"dash_asig_doc"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":"\"3\"","targetProperty":"dataValue"}, {}]
													}],
													editor: ["wm._SelectEditor", {"dataField":"idSy","displayField":"schoolYear"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"a_lista_sy","targetProperty":"dataSet"}, {}]
														}]
													}]
												}],
												dash_asig_select: ["wm.SelectEditor", {"caption":"Asignaturas","captionSize":"30%","height":"26px","padding":"2","width":"310px"}, {"onchange":"dash_asig_selectChange"}, {
													editor: ["wm._SelectEditor", {"dataField":"idasignatura","displayField":"asignatura"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"dash_asig_doc","targetProperty":"dataSet"}, {}]
														}]
													}]
												}]
											}],
											dash_horizontal_panel: ["wm.Panel", {"height":"150px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												spacer14: ["wm.Spacer", {"height":"48px","width":"10px"}, {}],
												dash_chart2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"160px"}, {}],
												dash_chart3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"160px"}, {}],
												dash_chart4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}]
											}],
											panel12: ["wm.Panel", {"height":"60px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												dash_chart1_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"align":"center","height":"100%","padding":"0","singleLine":false,"width":"160px"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												dash_chart2_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"align":"center","height":"100%","padding":"4","singleLine":false,"width":"160px"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												dash_chart3_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"align":"center","height":"100%","padding":"4","singleLine":false,"width":"160px"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												dash_chart4_label: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"align":"center","height":"100%","padding":"4","singleLine":false,"width":"145px"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}]
											}]
										}],
										spacer13: ["wm.Spacer", {"height":"48px","width":"10px"}, {}],
										tabs: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"44px"}, {}, {
											layers1: ["wm.Layers", {"width":"44px"}, {}, {
												layer1: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"right","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
													spacer2: ["wm.Spacer", {"height":"20px","showing":false,"width":"100%"}, {}],
													inicio_abrir_preferencias: ["wm.Label", {"align":"right","caption":"<img src=\"resources/images/ico/gear.png\" height=\"34\" width=\"34\" align=\"right\">","height":"48px","padding":"4","width":"100%"}, {"onclick":"inicio_abrir_preferenciasClick"}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													spacer7: ["wm.Spacer", {"height":"2px","width":"100%"}, {}],
													inicio_abrir_preferencias1: ["wm.Label", {"align":"right","caption":"<img src=\"resources/images/ico/student.png\" height=\"34\" width=\"34\" align=\"right\">","height":"48px","padding":"4","width":"100%"}, {"onclick":"inicio_abrir_preferencias1Click"}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													spacer6: ["wm.Spacer", {"height":"2px","width":"100%"}, {}],
													inicio_cerrar_preferencias: ["wm.Label", {"align":"right","caption":"<img src=\"resources/images/ico/close.png\" height=\"18\" width=\"18\" align=\"right\">","height":"30px","padding":"4","width":"70%"}, {"onclick":"inicio_cerrar_preferenciasClick"}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}]
											}]
										}],
										inicio_panel_opciones: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"padding":"10","showing":false,"verticalAlign":"top","width":"275px"}, {}, {
											aux_getNameUser: ["wm.TextEditor", {"caption":"userId","disabled":true,"height":"28px","padding":"2","showing":false,"width":"150%"}, {"onchange":"getCompleteName"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"source":"getUserName.dataValue","targetProperty":"dataValue"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											lastAccess_Label: ["wm.Label", {"align":"center","height":"38px","padding":"4","singleLine":false,"width":"100%"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											inicio_box_id_persona: ["wm.TextEditor", {"caption":"•","height":"28px","padding":"2","readonly":true,"width":"100%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_tipo_persona: ["wm.TextEditor", {"caption":"Tipo Persona","height":"28px","padding":"2","readonly":true,"width":"150%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_nombre: ["wm.TextEditor", {"caption":"Nombres","height":"28px","padding":"2","readonly":true,"width":"150%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_apellido: ["wm.TextEditor", {"caption":"Apellidos","height":"28px","padding":"2","readonly":true,"width":"150%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_usuario: ["wm.TextEditor", {"caption":"Usuario","height":"28px","padding":"2","readonly":true,"width":"150%"}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_clave: ["wm.TextEditor", {"caption":"Clave","height":"28px","padding":"2","readonly":true,"width":"150%"}, {"onchange":"inicio_box_claveChange"}, {
												editor: ["wm._TextEditor", {"changeOnEnter":true,"changeOnKey":true,"password":true}, {}]
											}],
											inicio_box_reclave: ["wm.TextEditor", {"caption":"Repetir Clave","height":"28px","padding":"2","readonly":true,"width":"150%"}, {"onchange":"inicio_box_reclaveChange"}, {
												editor: ["wm._TextEditor", {"changeOnEnter":true,"changeOnKey":true,"password":true}, {}]
											}],
											inicio_ok_label: ["wm.Label", {"align":"center","caption":"Comparación de contraseña correcta!","height":"22px","padding":"4","showing":false,"width":"100%"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											inicio_bad_label: ["wm.Label", {"align":"center","caption":"Verificación de contraseña erronea!","height":"22px","padding":"4","showing":false,"width":"100%"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											spacer3: ["wm.Spacer", {"height":"12px","width":"96px"}, {}],
											inicio_panel_boton_actualizar: ["wm.Panel", {"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												inicio_boton_actualiza: ["wm.Button", {"caption":"Actualizar","disabled":true,"height":"100%","margin":"4","width":"96px"}, {"onclick":"a_actualizaClave"}],
												inicio_boton_cancelar: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"caption":"Cancelar","height":"100%","margin":"4","width":"96px"}, {"onclick":"inicio_boton_cancelarClick"}]
											}],
											inicio_forgot_password: ["wm.Label", {"align":"center","caption":"<u>¿Desea cambiar su contraseña?</u>","height":"25px","padding":"4","width":"100%"}, {"onclick":"inicio_forgot_passwordClick"}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											logForm: ["wm.LiveForm", {"height":"60px","horizontalAlign":"left","showing":false,"verticalAlign":"top"}, {}, {
												inicio_box_fecha: ["wm.DateEditor", {"caption":"hora","disabled":true,"displayValue":"05/02/2014","padding":"2","readonly":true,"showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
													}],
													editor: ["wm._DateEditor", {}, {}]
												}],
												inicio_box_hora: ["wm.TimeEditor", {"caption":"fecha","disabled":true,"displayValue":"11:35 a.m.","padding":"2","showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
													}],
													editor: ["wm._TimeEditor", {}, {}]
												}]
											}]
										}]
									}]
								}],
								pestana_curriculo: ["wm.Layer", {"caption":"Currículo","horizontalAlign":"left","margin":"2,0,2,0","roles":["4","5","8","9","10","11","7","6","18","19","20","21","22","23","24"],"styles":{},"verticalAlign":"top"}, {"onShow":"pestana_curriculoShow","onShow1":"pestana_curriculoShow1"}, {
									curriculo_big_panel: ["wm.Panel", {"height":"1264px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
										curriculo_top_head_panel: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}],
										curriculo_grid_docentes_asignaturas: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"idpersona","title":"Idpersona","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nick","title":"Nick","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"idasignatura","title":" ","width":"80px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"asignatura","title":"Asignatura","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"subject","title":"Subject","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idasignatura} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Asignatura: \" + ${asignatura}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Subject: \" + ${subject}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"year","title":"Year","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idsy","title":"Idsy","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"com.aprendoz_test.data.output._global_curriculo_asig_docRtnType","height":"210px","localizationStructure":{},"margin":"0","minDesktopHeight":60,"singleClickEdit":true,"styles":{"fontSize":"11px","backgroundColor":"#ffffff"}}, {"onSelect":"curriculo_grid_docentes_asignaturasSelect"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"global_docentes_asignaturas","targetProperty":"dataSet"}, {}]
											}]
										}],
										actividadLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"source":"actividadDialog","targetId":null,"targetProperty":"dialog"}, {}],
												wire1: ["wm.Wire", {"source":"actividadLiveForm2","targetId":null,"targetProperty":"liveForm"}, {}],
												wire2: ["wm.Wire", {"source":"actividadDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
												wire3: ["wm.Wire", {"source":"actividadSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
											}],
											actividadDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idActividad","title":" ","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"requeridoAlternativo","title":"Requerido","width":"100px","align":"center","formatFunc":"","fieldType":"dojox.grid.cells.Bool","editorProps":null,"mobileColumn":false},
{"show":true,"field":"actividad","title":"Actividad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fecha","title":"Fecha","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.idSubtopico","title":"IdSubtopico","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.subtopico","title":"Subtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.fechaInicio","title":"FechaInicio","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"subtopico.fechaFin","title":"FechaFin","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"subtopico.subtopic","title":"Subtopic","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.numeroSubtopico","title":"NumeroSubtopico","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idActividad} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Requerido: \" + ${requeridoAlternativo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Actividad: \" + ${actividad}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha: \" + ${wm.runtimeId}.formatCell(\"fecha\", ${fecha}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.Actividad","height":"100%","margin":"4","styles":{"color":"#020202","fontSize":"11px"}}, {"onCellDblClick":"actividadLivePanel1.popupLivePanelEdit"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"actividadLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}],
											actividadGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
												actividadNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"actividadLivePanel1.popupLivePanelInsert"}],
												actividadUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"actividadLivePanel1.popupLivePanelEdit"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"source":"actividadDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
													}]
												}],
												actividadDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"actividadLiveForm2.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"source":"actividadDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}],
										unidadLivePanel1: ["wm.LivePanel", {"autoScroll":false,"height":"230px","horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"source":"unidadDialog","targetId":null,"targetProperty":"dialog"}, {}],
												wire1: ["wm.Wire", {"source":"unidadLiveForm2","targetId":null,"targetProperty":"liveForm"}, {}],
												wire2: ["wm.Wire", {"source":"unidadDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
												wire3: ["wm.Wire", {"source":"unidadSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
											}],
											unidadDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idUnidad","title":" ","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"numeroUnidad","title":"No. Unidad","width":"80px","align":"center","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"unidad","title":"Unidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"unit","title":"Unit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fechaInicio","title":"Fecha Inicio","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"fechaFin","title":"Fecha Fin","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.idAsignatura","title":"IdAsignatura","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.asignatura","title":"Asignatura","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.subject","title":"Subject","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.electiva","title":"Electiva","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.idArea1","title":"IdArea1","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.idArea2","title":"IdArea2","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.idArea3","title":"IdArea3","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.idSubarea1","title":"IdSubarea1","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.idSubarea2","title":"IdSubarea2","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.idSubarea3","title":"IdSubarea3","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.salonIdSalon","title":"SalonIdSalon","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.intensidadHoraria","title":"IntensidadHoraria","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.peso","title":"Peso","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.descripAsigEspaniol","title":"DescripAsigEspaniol","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.descripAsigIngles","title":"DescripAsigIngles","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.ihA1","title":"IhA1","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.ihA2","title":"IhA2","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.ihA3","title":"IhA3","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.meses","title":"Meses","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"asignatura.esperadostotal","title":"Esperadostotal","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idUnidad} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"No. Unidad: \" + ${numeroUnidad}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Unidad: \" + ${unidad}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Unit: \" + ${unit}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha Inicio: \" + ${wm.runtimeId}.formatCell(\"fechaInicio\", ${fechaInicio}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha Fin: \" + ${wm.runtimeId}.formatCell(\"fechaFin\", ${fechaFin}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.Unidad","height":"100%","margin":"0","styles":{"fontSize":"11px"}}, {"onCellDblClick":"unidadLivePanel1.popupLivePanelEdit","onSelect":"unidadDojoGridSelect"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"unidadLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}],
											unidadGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
												unidadNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"unidadLivePanel1.popupLivePanelInsert"}],
												unidadUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"unidadLivePanel1.popupLivePanelEdit"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"source":"unidadDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
													}]
												}],
												unidadDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"unidadLiveForm2.deleteData"}, {
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
											subtopicoDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idSubtopico","title":" ","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"numeroSubtopico","title":"No. Subtopico","width":"80px","align":"center","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"subtopico","title":"Subtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"subtopic","title":"Subtopic","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"fechaInicio","title":"Fecha Inicio","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"fechaFin","title":"Fecha Fin","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"unidad.idUnidad","title":"IdUnidad","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"unidad.unidad","title":"Unidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"unidad.unit","title":"Unit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"unidad.fechaInicio","title":"FechaInicio","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"unidad.fechaFin","title":"FechaFin","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"unidad.numeroUnidad","title":"NumeroUnidad","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"unidad.idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idSubtopico} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"No. Subtopico: \" + ${numeroSubtopico}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Subtopico: \" + ${subtopico}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Subtopic: \" + ${subtopic}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha Inicio: \" + ${wm.runtimeId}.formatCell(\"fechaInicio\", ${fechaInicio}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha Fin: \" + ${wm.runtimeId}.formatCell(\"fechaFin\", ${fechaFin}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.Subtopico","height":"100%","margin":"0","styles":{"color":"#050505","fontSize":"11px"}}, {"onCellDblClick":"subtopicoLivePanel1.popupLivePanelEdit","onSelect":"subtopicoDojoGridSelect","onSelect1":"subtopicoDojoGridSelect1","onSelect2":"subtopicoDojoGridSelect2","onSelect3":"subtopicoDojoGridSelect3"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"subtopicoLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}],
											subtopicoGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
												subtopicoNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"subtopicoLivePanel1.popupLivePanelInsert"}],
												subtopicoUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"subtopicoLivePanel1.popupLivePanelEdit"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"source":"subtopicoDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
													}]
												}],
												subtopicoDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"subtopicoLiveForm2.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"source":"subtopicoDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}],
										tabLayers1: ["wm.TabLayers", {"height":"320px"}, {}, {
											aprendizaje: ["wm.Layer", {"caption":"Aprendizaje","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
												aprendizajeLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"source":"aprendizajeDialog","targetId":null,"targetProperty":"dialog"}, {}],
														wire1: ["wm.Wire", {"source":"aprendizajeLiveForm2","targetId":null,"targetProperty":"liveForm"}, {}],
														wire2: ["wm.Wire", {"source":"aprendizajeDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
														wire3: ["wm.Wire", {"source":"aprendizajeSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
													}],
													aprendizajeDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idAprendizaje","title":" ","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fechaEsperada","title":"Fecha esperada","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"aprendizaje","title":"Aprendizaje","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"learning","title":"Learning","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"peso","title":"Peso","width":"50px","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ejeIdEje","title":"EjeIdEje","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"eje2IdEje","title":"Eje2IdEje","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"eje3IdEje","title":"Eje3IdEje","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dimensionComprension.idDimension","title":"IdDimension","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"dimensionComprension.dimensionComprension","title":"Dimensión comprensión","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.idSubtopico","title":"IdSubtopico","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.subtopico","title":"Subtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.fechaInicio","title":"FechaInicio","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"subtopico.fechaFin","title":"FechaFin","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"subtopico.subtopic","title":"Subtopic","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.numeroSubtopico","title":"NumeroSubtopico","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"dimensionCurricular.idDimension","title":"IdDimension","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"dimensionCurricular.dimensionCurricular","title":"Dimensión curricular","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"inteligencia.idInteligencia","title":"IdInteligencia","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"inteligencia.inteligencia","title":"Inteligencia","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"nivelEsperado.idNivelEsperado","title":"IdNivelEsperado","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"nivelEsperado.nivelEsperado","title":"Nivel esperado","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idAprendizaje} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha esperada: \" + ${wm.runtimeId}.formatCell(\"fechaEsperada\", ${fechaEsperada}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Aprendizaje: \" + ${aprendizaje}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Learning: \" + ${learning}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Peso: \" + ${peso}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Dimensión comprensión: \" + ${dimensionComprension.dimensionComprension}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Dimensión curricular: \" + ${dimensionCurricular.dimensionCurricular}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Inteligencia: \" + ${inteligencia.inteligencia}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nivel esperado: \" + ${nivelEsperado.nivelEsperado}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.Aprendizaje","height":"100%","margin":"4","styles":{"fontSize":"11px","color":"#090808"}}, {"onCellDblClick":"aprendizajeLivePanel1.popupLivePanelEdit"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"aprendizajeLiveVariable1","targetProperty":"dataSet"}, {}]
														}]
													}],
													aprendizajeGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
														aprendizajeNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"aprendizajeLivePanel1.popupLivePanelInsert"}],
														aprendizajeUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"aprendizajeLivePanel1.popupLivePanelEdit"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"source":"aprendizajeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
															}]
														}],
														aprendizajeDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"aprendizajeLiveForm2.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"source":"aprendizajeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}],
											metas: ["wm.Layer", {"caption":"Metas","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
												otrasmetasLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","lock":true,"verticalAlign":"top"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"source":"otrasmetasDialog","targetId":null,"targetProperty":"dialog"}, {}],
														wire1: ["wm.Wire", {"source":"otrasmetasLiveForm2","targetId":null,"targetProperty":"liveForm"}, {}],
														wire2: ["wm.Wire", {"source":"otrasmetasDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
														wire3: ["wm.Wire", {"source":"otrasmetasSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
													}],
													otrasmetasDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idOtraMeta","title":" ","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"meta","title":"Meta","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fecha","title":"Fecha","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"logrado","title":"Logrado","width":"100px","align":"center","formatFunc":"","fieldType":"dojox.grid.cells.Bool","mobileColumn":false},
{"show":false,"field":"idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.idSubtopico","title":"IdSubtopico","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.subtopico","title":"Subtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.fechaInicio","title":"FechaInicio","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"subtopico.fechaFin","title":"FechaFin","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"subtopico.subtopic","title":"Subtopic","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.numeroSubtopico","title":"NumeroSubtopico","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idOtraMeta} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Meta: \" + ${meta}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha: \" + ${wm.runtimeId}.formatCell(\"fecha\", ${fecha}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Logrado: \" + ${logrado}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.OtrasMetas","height":"100%","margin":"4","styles":{"fontSize":"11px","color":"#050505"}}, {"onCellDblClick":"otrasmetasLivePanel1.popupLivePanelEdit"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"otrasmetasLiveVariable1","targetProperty":"dataSet"}, {}]
														}]
													}],
													otrasmetasGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
														otrasmetasNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"otrasmetasLivePanel1.popupLivePanelInsert"}],
														otrasmetasUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"otrasmetasLivePanel1.popupLivePanelEdit"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"source":"otrasmetasDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
															}]
														}],
														otrasmetasDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"otrasmetasLiveForm2.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"source":"otrasmetasDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}],
											recursos: ["wm.Layer", {"caption":"Recursos","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
												recursoLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","lock":true,"verticalAlign":"top"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"source":"recursoDialog","targetId":null,"targetProperty":"dialog"}, {}],
														wire1: ["wm.Wire", {"source":"recursoLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
														wire2: ["wm.Wire", {"source":"recursoDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
														wire3: ["wm.Wire", {"source":"recursoSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
													}],
													recursoDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idRecurso","title":" ","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"recurso","title":"Recurso","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"documento","title":"Documento","width":"80%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"ubicacion","title":"Ubicación","width":"80%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"tipoRecurso.idTipoRecurso","title":"IdTipoRecurso","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"tipoRecurso.tipoRecurso","title":"Tipo recurso","width":"100px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.idSubtopico","title":"IdSubtopico","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.subtopico","title":"Subtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.fechaInicio","title":"FechaInicio","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"subtopico.fechaFin","title":"FechaFin","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"subtopico.subtopic","title":"Subtopic","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.numeroSubtopico","title":"NumeroSubtopico","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idRecurso} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Recurso: \" + ${recurso}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Documento: \" + ${documento}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Ubicación: \" + ${ubicacion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Tipo recurso: \" + ${tipoRecurso.tipoRecurso}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.Recurso","height":"100%","margin":"4","styles":{"color":"#070707","fontSize":"11px"}}, {"onCellDblClick":"recursoLivePanel1.popupLivePanelEdit"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"recursoLiveVariable1","targetProperty":"dataSet"}, {}]
														}]
													}],
													recursoGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
														recursoNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"recursoLivePanel1.popupLivePanelInsert"}],
														recursoUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"recursoLivePanel1.popupLivePanelEdit"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"source":"recursoDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
															}]
														}],
														recursoDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"recursoLiveForm1.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"source":"recursoDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}],
											actividades2: ["wm.Layer", {"caption":"Actividades","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
												actividadLivePanel2: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","lock":true,"verticalAlign":"top"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"source":"actividadDialog1","targetId":null,"targetProperty":"dialog"}, {}],
														wire1: ["wm.Wire", {"source":"actividadLiveForm3","targetId":null,"targetProperty":"liveForm"}, {}],
														wire2: ["wm.Wire", {"source":"actividadDojoGrid1","targetId":null,"targetProperty":"dataGrid"}, {}],
														wire3: ["wm.Wire", {"source":"actividadSaveButton1","targetId":null,"targetProperty":"saveButton"}, {}]
													}],
													actividadDojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idActividad","title":" ","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"actividad","title":"Actividad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"fecha","title":"Fecha","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"requeridoAlternativo","title":"Requerido","width":"80px","align":"left","formatFunc":"","fieldType":"dojox.grid.cells.Bool","mobileColumn":false},
{"show":false,"field":"idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.idSubtopico","title":"IdSubtopico","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.subtopico","title":"Subtopico","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.fechaInicio","title":"FechaInicio","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"subtopico.fechaFin","title":"FechaFin","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"subtopico.subtopic","title":"Subtopic","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.numeroSubtopico","title":"NumeroSubtopico","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subtopico.idSyIdIdSy","title":"IdSyIdIdSy","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\" : \" + ${idActividad} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Actividad: \" + ${actividad}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Fecha: \" + ${wm.runtimeId}.formatCell(\"fecha\", ${fecha}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Requerido: \" + ${requeridoAlternativo}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.aprendoz_test.data.Actividad","height":"100%","margin":"0","styles":{"fontSize":"11px","color":"#020202"}}, {"onCellDblClick":"actividadLivePanel2.popupLivePanelEdit"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"actividadLiveVariable2","targetProperty":"dataSet"}, {}]
														}]
													}],
													actividadGridButtonPanel1: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
														actividadNewButton1: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"actividadLivePanel2.popupLivePanelInsert"}],
														actividadUpdateButton1: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"actividadLivePanel2.popupLivePanelEdit"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"source":"actividadDojoGrid1.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
															}]
														}],
														actividadDeleteButton1: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"actividadLiveForm3.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"source":"actividadDojoGrid1.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									curriculo: ["wm.TabLayers", {}, {}, {
										cur_tablas: ["wm.Layer", {"caption":"TABLAS","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {"onShow":"cur_tablasShow"}, {
											cur_tablas_panel: ["wm.LivePanel", {"borderColor":"#CD0000","height":"869px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												cur_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
													cur_encabezado_sel_sy: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Año escolar","captionSize":"80%","height":"30px","padding":"2","width":"210px"}, {"onchange":"cur_encabezado_sel_syChange"}, {
														editor: ["wm._SelectEditor", {"dataField":"idSy","displayField":"schoolYear","startUpdate":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"a_lista_sy","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													cur_encabezado_sel_grado: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_TextDecoration_Bold","wm_FontSizePx_16px"],"domNode":["wm_FontSizePx_16px"]},"caption":"Grado","captionAlign":"left","height":"30px","padding":"2","width":"210px"}, {"onchange":"cur_encabezado_sel_gradoChange"}, {
														editor: ["wm._SelectEditor", {"dataField":"idGrado","displayField":"grado","startUpdate":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"a_grado","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													cur_encabezado_spacer_espacio: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
													cur_encabezado_tex_ldapUser: ["wm.TextEditor", {"disabled":true,"padding":"2","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"source":"getUserName.dataValue","targetProperty":"dataValue"}, {}]
														}],
														editor: ["wm._TextEditor", {}, {}]
													}],
													cur_sel_tipo_documento: ["wm.SelectEditor", {"caption":"Tipo","padding":"2","showing":false,"width":"300px"}, {}, {
														editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"dataValue","options":"PDF, DOCX"}, {}, {
															optionsVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}]
														}]
													}],
													cur_encabezado_butt_reporte1: ["wm.Button", {"borderColor":"#ffffff","iconMargin":"2px 2px 2px 2px","iconUrl":"resources/images/ico/download.png","margin":"4","width":"48px"}, {"onclick":"cur_encabezado_butt_reporte1Click"}],
													cur_encabezado_butt_restaurar: ["wm.Button", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_14px"]},"borderColor":"#bbb","caption":"Restaurar","iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/refresh.png","margin":"4","width":"150px"}, {"onclick":"cur_encabezado_butt_restaurarClick"}]
												}],
												cur_panel_asig: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_asig_panel_asignaturas: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","title":"ASIGNATURAS"}, {}, {
														cur_asig_datag_asignaturasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]}}, {"onSelected":"cur_asig_datag_asignaturasDataGrid1Selected"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_asig_asignaturas_vista_docentes_asignaturas","targetProperty":"dataSet"}, {}]
															}],
															column1: ["wm.DataGridColumn", {"caption":"Asignatura","columnWidth":"100%","field":"id.asignatura","index":1}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"•","field":"id.asignaturaIdAsignatura"}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Subject","columnWidth":"100%","field":"id.subject","index":2}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															column4: ["wm.DataGridColumn", {"caption":"Docente","field":"id.nombreLdap","index":3}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}]
														}]
													}]
												}],
												cur_panel_encabezado2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue","wm_BackgroundColor_VeryLightGray"]},"height":"44px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
													cur_encabezado2_butt_crea_unidad: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"borderColor":"#bbb","caption":"Crear Unidad","disabled":true,"iconHeight":"29px","iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/wired.png","iconWidth":"29px","margin":"4","width":"165px"}, {"onclick":"cur_encabezado2_butt_crea_unidadClick"}]
												}],
												cur_panel_unid: ["wm.LivePanel", {"height":"247px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_unid_panel_unidades: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","height":"244px","title":"UNIDADES"}, {}, {
														cur_unid_datag_unidadesDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]}}, {"onCellClick":"cur_unid_datag_unidadesDataGrid1CellClick","onRowDblClick":"cur_unid_datag_unidadesDataGrid1RowDblClick","onSelected":"l_cur_subt_subtopicos_subtopicoLiveVariable1"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_unid_unidades_unidadLiveVariable1","targetProperty":"dataSet"}, {}]
															}],
															idUnidad2: ["wm.DataGridColumn", {"caption":"•","field":"idUnidad"}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															unidad2: ["wm.DataGridColumn", {"caption":"Unidad","columnWidth":"100%","field":"unidad","index":2}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															unit2: ["wm.DataGridColumn", {"caption":"Unit","columnWidth":"100%","field":"unit","index":3}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															fechaInicio2: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Fecha Inicio","columnWidth":"110px","display":"Date","field":"fechaInicio","index":4}, {}, {
																format1: ["wm.DateFormatter", {}, {}]
															}],
															fechaFin2: ["wm.DataGridColumn", {"caption":"Fecha Final","columnWidth":"110px","display":"Date","field":"fechaFin","index":5}, {}, {
																format1: ["wm.DateFormatter", {}, {}]
															}],
															numeroUnidad2: ["wm.DataGridColumn", {"caption":"No. Unidad","columnWidth":"110px","display":"Number","field":"numeroUnidad","index":1}, {}, {
																format1: ["wm.NumberFormatter", {}, {}]
															}]
														}]
													}]
												}],
												cur_panel_encabezado3: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
													cur_encabezado3_butt_crear_subtopico: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"borderColor":"#bbb","caption":"Crear Subtopico","disabled":true,"iconHeight":"30px","iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/download_link.png","iconWidth":"30px","margin":"4","width":"175px"}, {"onclick":"cur_encabezado3_butt_crear_subtopicoClick"}]
												}],
												cur_panel_subt: ["wm.LivePanel", {"height":"239px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_subt_panel_subtopicos: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","lock":true,"title":"SUBTOPICO"}, {}, {
														cur_subt_datag_subtopicoDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]}}, {"onCellClick":"cur_subt_datag_subtopicoDataGrid1CellClick","onRowDblClick":"cur_subt_datag_subtopicoDataGrid1RowDblClick","onSelected":"cur_subt_datag_subtopicoDataGrid1Selected"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_subt_subtopicos_subtopicoLiveVariable1","targetProperty":"dataSet"}, {}]
															}],
															idSubtopico2: ["wm.DataGridColumn", {"caption":"•","field":"idSubtopico"}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															subtopico2: ["wm.DataGridColumn", {"caption":"Subtopico","columnWidth":"100%","field":"subtopico","index":2}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															fechaInicio2: ["wm.DataGridColumn", {"caption":"Fecha Inicio","columnWidth":"110px","display":"Date","field":"fechaInicio","index":4}, {}, {
																format1: ["wm.DateFormatter", {}, {}]
															}],
															fechaFin2: ["wm.DataGridColumn", {"caption":"Fecha Final","columnWidth":"110px","display":"Date","field":"fechaFin","index":5}, {}, {
																format1: ["wm.DateFormatter", {}, {}]
															}],
															subtopic2: ["wm.DataGridColumn", {"caption":"Subtopic","columnWidth":"100%","field":"subtopic","index":3}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															numeroSubtopico2: ["wm.DataGridColumn", {"caption":"No. Subtopico","columnWidth":"110px","display":"Number","field":"numeroSubtopico","index":1}, {}, {
																format1: ["wm.NumberFormatter", {}, {}]
															}]
														}]
													}]
												}]
											}],
											cur_subTablas: ["wm.TabLayers", {"borderColor":"#CD0000"}, {}, {
												cur_subTablas_apr: ["wm.Layer", {"caption":"APRENDIZAJE","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
													cur_apr_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
														cur_apr_encabezado_butt_crear_aprendizaje: ["wm.Button", {"_classes":{"domNode":["wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px","wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"borderColor":"#bbb","caption":"Crear Aprendizaje","disabled":true,"iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/artwork.png","margin":"4","width":"200px"}, {"onclick":"cur_apr_encabezado_butt_crear_aprendizajeClick"}]
													}],
													cur_panel_apr: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
														cur_apr_panel_subtopicos: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","title":"Aprendizaje"}, {}, {
															cur_apr_datag_aprendizajeDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]}}, {"onRowDblClick":"cur_apr_datag_aprendizajeDataGrid1RowDblClick"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_apr_aprendizajes_aprendizajeLiveVariable1","targetProperty":"dataSet"}, {}]
																}],
																idAprendizaje2: ["wm.DataGridColumn", {"caption":"•","columnWidth":"70px","field":"idAprendizaje"}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																fechaEsperada2: ["wm.DataGridColumn", {"caption":"Fecha esperada","columnWidth":"95px","display":"Date","field":"fechaEsperada","index":1}, {}, {
																	format1: ["wm.DateFormatter", {}, {}]
																}],
																aprendizaje2: ["wm.DataGridColumn", {"caption":"Aprendizaje","columnWidth":"100%","field":"aprendizaje","index":2}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																learning2: ["wm.DataGridColumn", {"caption":"Learning","columnWidth":"100%","field":"learning","index":3}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																peso2: ["wm.DataGridColumn", {"caption":"Peso","columnWidth":"50px","display":"Number","field":"peso","index":4}, {}, {
																	format1: ["wm.NumberFormatter", {}, {}]
																}],
																ejeIdEje2: ["wm.DataGridColumn", {"caption":"Eje 1","columnWidth":"50px","display":"Number","field":"ejeIdEje","index":5}, {}, {
																	format1: ["wm.NumberFormatter", {}, {}]
																}],
																column1: ["wm.DataGridColumn", {"caption":"Dimensión <br>Comprensión","columnWidth":"80px","field":"dimensionCurricular.dimensionCurricular","index":6}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																column2: ["wm.DataGridColumn", {"caption":"Dimensión <br>Curricular","columnWidth":"80px","field":"dimensionComprension.dimensionComprension","index":7}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																column3: ["wm.DataGridColumn", {"caption":"Inteligencia","columnWidth":"80px","field":"inteligencia.inteligencia","index":8}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																column4: ["wm.DataGridColumn", {"caption":"Nivel <br>Esperado","columnWidth":"70px","field":"nivelEsperado.nivelEsperado","index":9}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_metas: ["wm.Layer", {"caption":"OTRAS METAS","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
													cur_metas_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
														cur_metas_encabezado_butt_crear_meta: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"borderColor":"#bbb","caption":"Crear Meta","disabled":true,"iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/travel_directions.png","margin":"4","width":"165px"}, {"onclick":"cur_metas_encabezado_butt_crear_metaClick"}]
													}],
													cur_panel_metas: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
														cur_metas_panel_metas: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","title":"Metas"}, {}, {
															cur_metas_datag_otrasmetasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]}}, {"onRowDblClick":"cur_metas_datag_otrasmetasDataGrid1RowDblClick"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_metas_metas_otrasmetasLiveVariable1","targetProperty":"dataSet"}, {}]
																}],
																idOtraMeta2: ["wm.DataGridColumn", {"caption":"•","field":"idOtraMeta"}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																meta2: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Meta (Descripción)","columnWidth":"832px","field":"meta","index":1}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																fecha2: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Fecha","display":"Date","field":"fecha","index":2}, {}, {
																	format1: ["wm.DateFormatter", {}, {}]
																}],
																logrado2: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Logrado","columnWidth":"67px","field":"logrado","index":3}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_act: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"ACTIVIDADES","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
													cur_act_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
														cur_act_encabezado_butt_crear_actividad: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"borderColor":"#bbb","caption":"Crear Actividad","disabled":true,"iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/add_event.png","margin":"4","width":"199px"}, {"onclick":"cur_act_encabezado_butt_crear_actividadClick"}]
													}],
													cur_panel_act: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
														cur_act_panel_actividades: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","title":"Actividad"}, {}, {
															cur_act_datag_actividadDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]}}, {"onRowDblClick":"cur_act_datag_actividadDataGrid1RowDblClick","onSelected":"cur_act_datag_actividadDataGrid1Selected"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_act_actividades_actividadLiveVariable1","targetProperty":"dataSet"}, {}]
																}],
																idActividad2: ["wm.DataGridColumn", {"caption":"•","field":"idActividad"}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																actividad2: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Actividad","columnWidth":"706px","field":"actividad","index":1}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																fecha2: ["wm.DataGridColumn", {"caption":"Fecha","display":"Date","field":"fecha","index":2}, {}, {
																	format1: ["wm.DateFormatter", {}, {}]
																}],
																requeridoAlternativo2: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Requerido","columnWidth":"102px","field":"requeridoAlternativo","index":3}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																column1: ["wm.DataGridColumn", {"caption":"Tipo Valoracion","columnWidth":"143px","field":"tipoValoracion.tipoValoracion","index":4}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_rec: ["wm.Layer", {"caption":"RECURSOS","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
													cur_rec_encabezado_recursos: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
														cur_rec_encabezado_butt_crear_recurso: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"borderColor":"#bbb","caption":"Crear Recurso","disabled":true,"iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/pastel_colors.png","margin":"4","width":"184px"}, {"onclick":"cur_rec_encabezado_butt_crear_recursoClick"}]
													}],
													cur_panel_rec: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
														cur_rec_panel_recursos: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","title":"Recurso"}, {}, {
															cur_rec_datag_recursosDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]}}, {"onRowDblClick":"cur_rec_datag_recursosDataGrid1RowDblClick"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_rec_recursos_recursoLiveVariable1","targetProperty":"dataSet"}, {}]
																}],
																idRecurso2: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"•","display":"Number","field":"idRecurso"}, {}, {
																	format1: ["wm.NumberFormatter", {}, {}]
																}],
																recurso2: ["wm.DataGridColumn", {"caption":"Recurso","columnWidth":"60%","field":"recurso","index":1}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																ubicacion2: ["wm.DataGridColumn", {"caption":"Direccion Recurso http://","columnWidth":"120%","dataExpression":"'<a href=\"'+${ubicacion}+'\" target=\"_blank\">'+${ubicacion}+'</a>'","field":"ubicacion","index":3}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}]
												}]
											}]
										}],
										cur_formularios: ["wm.Layer", {"caption":"FORMULARIOS","horizontalAlign":"center","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
											cur_formularios_panel_unidad: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px wm_FontFamily_Arial","height":"347px","lock":true,"showing":false,"title":"FORMULARIO UNIDAD"}, {}, {
												unidadLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_16px"]},"height":"170%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"unidadLiveForm1BeginInsert","onBeginUpdate":"unidadLiveForm1BeginUpdate","onCancelEdit":"unidadLiveForm1CancelEdit","onInsertData":"unidadLiveForm1InsertData","onSuccess":"l_cur_unid_unidades_unidadLiveVariable1","onUpdateData":"unidadLiveForm1UpdateData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"cur_unid_datag_unidadesDataGrid1.selectedItem","targetProperty":"dataSet"}, {}],
														wire1: ["wm.Wire", {"expression":undefined,"source":"asignaturaRelatedEditor1.dataOutput","targetProperty":"dataOutput.asignatura"}, {}]
													}],
													cur_formularios_unidad_panel1: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														idUnidadEditor1: ["wm.Editor", {"caption":"ID Unidad:","display":"Number","formField":"idUnidad","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._NumberEditor", {}, {}]
														}],
														asignaturaRelatedEditor1: ["wm.RelatedEditor", {"formField":"asignatura","height":"100%"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire1: ["wm.Wire", {"expression":undefined,"source":"cur_unid_datag_unidadesDataGrid1.selectedItem.asignatura","targetProperty":"dataSet"}, {}]
															}],
															asignaturaLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"ID Asignatura","display":"Number","formField":"idAsignatura","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													cur_formularios_unidad_panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														unidadEditor1: ["wm.Editor", {"caption":"Unidad","captionAlign":"left","formField":"unidad","height":"100%","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
															editor: ["wm._TextEditor", {"invalidMessage":"Este campo es requerido *","promptMessage":"Inserte una descripción en Ingles de la Unidad ","required":true,"tooltipDisplayTime":3000}, {}]
														}],
														unitEditor1: ["wm.Editor", {"caption":"Unit","captionAlign":"left","display":"TextArea","formField":"unit","height":"100%","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
															editor: ["wm._TextAreaEditor", {"invalidMessage":"Este campo es requerido *","promptMessage":"Inserte una descripción en Ingles de la Unidad ","required":true,"tooltipDisplayTime":3000}, {}]
														}]
													}],
													cur_formularios_unidad_panel3: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														fechaInicioEditor1: ["wm.Editor", {"caption":"Fecha Inicio","display":"Date","formField":"fechaInicio","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._DateEditor", {"invalidMessage":"El campo es requerido *","promptMessage":"Selecciones un Fecha Inicial para la Unidad","required":true}, {}]
														}],
														fechaFinEditor1: ["wm.Editor", {"caption":"Fecha Final","display":"Date","formField":"fechaFin","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._DateEditor", {"invalidMessage":"El campo es requerido *","promptMessage":"Selecciones un Fecha Final para la Unidad","required":true}, {}]
														}]
													}],
													numeroUnidadEditor3: ["wm.TextEditor", {"caption":"Numero Unidad","display":"Number","formField":"numeroUnidad","padding":"2","readonly":true,"width":"150%"}, {}, {
														editor: ["wm._NumberEditor", {"required":true}, {}]
													}],
													numeroUnidadEditor1: ["wm.SelectEditor", {"caption":"Numero Unidad","formField":"numeroUnidad","padding":"2","readonly":true,"showing":false,"width":"100%"}, {"onchange":"numeroUnidadEditor1Change"}, {
														editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"name"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"a_numero_unidad","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													editPanel4: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"unidadLiveForm1","operationPanel":"operationPanel4","savePanel":"savePanel4"}, {}, {
														savePanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
															saveButton4: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel4.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel4.formInvalid","targetProperty":"disabled"}, {}]
																}]
															}],
															cancelButton4: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel4.cancelEdit"}]
														}],
														operationPanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
															newButton4: ["wm.RoundedButton", {"caption":"Nueva Unidad","height":"100%","margin":"2","width":"150px"}, {"onclick":"editPanel4.beginDataInsert"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":"selectEditor14.dataValue=1","targetProperty":"disabled"}, {}]
																}]
															}],
															updateButton4: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2","width":"134px"}, {"onclick":"editPanel4.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel4.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}],
															deleteButton4: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel4.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel4.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}]
														}]
													}]
												}]
											}],
											cur_formularios_panel_subtopico: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px wm_FontFamily_Arial","height":"373px","lock":true,"showing":false,"title":"FORMULARIO SUBTOPICOS"}, {}, {
												subtopicoLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_16px"]},"height":"170%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"subtopicoLiveForm1BeginInsert","onBeginUpdate":"subtopicoLiveForm1BeginUpdate","onCancelEdit":"subtopicoLiveForm1CancelEdit","onInsertData":"subtopicoLiveForm1InsertData","onSuccess":"l_cur_subt_subtopicos_subtopicoLiveVariable1","onUpdateData":"subtopicoLiveForm1UpdateData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"cur_subt_datag_subtopicoDataGrid1.selectedItem","targetProperty":"dataSet"}, {}],
														wire1: ["wm.Wire", {"expression":undefined,"source":"unidadRelatedEditor1.dataOutput","targetProperty":"dataOutput.unidad"}, {}]
													}],
													cur_formularios_subtopicos_panel1: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														idSubtopicoEditor1: ["wm.Editor", {"caption":"ID Subtopico","display":"Number","formField":"idSubtopico","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._NumberEditor", {}, {}]
														}],
														unidadRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"unidad","height":"100%","lock":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire1: ["wm.Wire", {"expression":undefined,"source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.unidad","targetProperty":"dataSet"}, {}]
															}],
															unidadLookup1: ["wm.Editor", {"caption":"ID Unidad","display":"Number","formField":"idUnidad","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													cur_formularios_subtopicos_panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														subtopicoEditor1: ["wm.Editor", {"caption":"Subtopico","captionAlign":"left","display":"TextArea","formField":"subtopico","height":"100%","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
															editor: ["wm._TextAreaEditor", {"invalidMessage":"Este campo es requerido *","promptMessage":"Inserte una descripción para Subtópico","required":true}, {}]
														}],
														subtopicEditor1: ["wm.Editor", {"caption":"Subtopic","captionAlign":"left","display":"TextArea","formField":"subtopic","height":"100%","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
															editor: ["wm._TextAreaEditor", {"invalidMessage":"Este campo es requerido *","promptMessage":"Inserte una descripción para Subtópico","required":true}, {}]
														}]
													}],
													cur_formularios_subtopicos_panel3: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														fechaInicioEditor2: ["wm.Editor", {"caption":"Fecha Inicio","display":"Date","formField":"fechaInicio","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._DateEditor", {"invalidMessage":"Fecha Final es un campo obligatorio","promptMessage":"Seleccione un fecha","required":true}, {}]
														}],
														fechaFinEditor2: ["wm.Editor", {"caption":"Fecha Final","display":"Date","formField":"fechaFin","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._DateEditor", {"invalidMessage":"Fecha Final es un campo obligatorio","promptMessage":"Seleccione una Fecha","required":true}, {}]
														}]
													}],
													numeroSubtopicoEditor3: ["wm.TextEditor", {"caption":"Numero Subtopico","display":"Number","formField":"numeroSubtopico","padding":"2","readonly":true,"width":"100%"}, {}, {
														editor: ["wm._NumberEditor", {"required":true}, {}]
													}],
													numeroSubtopicoEditor1: ["wm.Editor", {"caption":"Numero Subtopico","display":"Select","formField":"numeroSubtopico","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {"onchange":"numeroSubtopicoEditor1Change"}, {
														editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"name","required":true}, {}, {
															optionsVar: ["wm.Variable", {"type":"EntryData"}, {}],
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"a_numero_subtopico","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													editPanel5: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"liveForm":"subtopicoLiveForm1","operationPanel":"operationPanel5","savePanel":"savePanel5"}, {}, {
														savePanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
															saveButton5: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel5.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel5.formInvalid","targetProperty":"disabled"}, {}]
																}]
															}],
															cancelButton5: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel5.cancelEdit"}]
														}],
														operationPanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
															newButton5: ["wm.RoundedButton", {"caption":"Nuevo Subtopico","height":"100%","margin":"2","width":"200px"}, {"onclick":"editPanel5.beginDataInsert"}],
															updateButton5: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2","width":"149px"}, {"onclick":"editPanel5.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel5.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}],
															deleteButton5: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel5.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel5.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}]
														}]
													}]
												}]
											}],
											cur_formularios_panel_otrasmetas: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontFamily_Arial wm_FontSizePx_14px","height":"300px","lock":true,"showing":false,"title":"FORMULARIO METAS"}, {}, {
												otrasmetasLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_16px"]},"height":"165%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"otrasmetasLiveForm1BeginInsert","onSuccess":"l_cur_metas_metas_otrasmetasLiveVariable1"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"cur_metas_datag_otrasmetasDataGrid1.selectedItem","targetProperty":"dataSet"}, {}],
														wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor7.dataOutput","targetProperty":"dataOutput.subtopico"}, {}]
													}],
													cur_formularios_metas_panel1: ["wm.Panel", {"height":"38px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														idOtraMetaEditor1: ["wm.Editor", {"caption":"ID Otra Meta","display":"Number","formField":"idOtraMeta","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._NumberEditor", {"required":true}, {}]
														}],
														relatedEditor7: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","height":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"cur_metas_datag_otrasmetasDataGrid1.selectedItem.subtopico","targetProperty":"dataSet"}, {}]
															}],
															subtopicoLookup1: ["wm.Editor", {"caption":"ID Subtopico","display":"Number","formField":"idSubtopico","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													metaEditor1: ["wm.Editor", {"caption":"Meta","display":"TextArea","formField":"meta","height":"100%","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
														editor: ["wm._TextAreaEditor", {"invalidMessage":"Este campo es obligatorio *","promptMessage":"Ingrese la descripción de la Meta","required":true}, {}]
													}],
													fechaEditor1: ["wm.Editor", {"caption":"Fecha","display":"Date","formField":"fecha","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
														editor: ["wm._DateEditor", {"invalidMessage":"Este campo es obligatorio *","promptMessage":"Seleccione una Fecha","required":true}, {}]
													}],
													logradoEditor1: ["wm.Editor", {"caption":"Logrado","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"logrado","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
														editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
													}],
													editPanel2: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"isCustomized":true,"liveForm":"otrasmetasLiveForm1","lock":false,"operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
														savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
															saveButton2: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel2.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel2.formInvalid","targetProperty":"disabled"}, {}]
																}]
															}],
															cancelButton2: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel2.cancelEdit"}]
														}],
														operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
															newButton2: ["wm.RoundedButton", {"caption":"Nueva Meta","height":"100%","margin":"2","width":"150px"}, {"onclick":"editPanel2.beginDataInsert"}],
															updateButton2: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2","width":"128px"}, {"onclick":"editPanel2.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel2.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}],
															deleteButton2: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel2.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel2.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}]
														}]
													}]
												}]
											}],
											cur_formularios_panel_actividad: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px wm_FontFamily_Arial","height":"349px","lock":true,"showing":false,"title":"FORMULARIO ACTIVIDAD"}, {}, {
												actividadLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"224%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeforeOperation":"l_cur_formularios_actividad_listaTipoActividades","onBeginInsert":"actividadLiveForm1BeginInsert","onSuccess":"l_cur_act_actividades_actividadLiveVariable1"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"cur_act_datag_actividadDataGrid1.selectedItem","targetProperty":"dataSet"}, {}],
														wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor8.dataOutput","targetProperty":"dataOutput.tipoActividad"}, {}],
														wire2: ["wm.Wire", {"expression":undefined,"source":"relatedEditor9.dataOutput","targetProperty":"dataOutput.tipoValoracion"}, {}],
														wire3: ["wm.Wire", {"expression":undefined,"source":"relatedEditor10.dataOutput","targetProperty":"dataOutput.tipoDesempeno"}, {}],
														wire4: ["wm.Wire", {"expression":undefined,"source":"relatedEditor3.dataOutput","targetProperty":"dataOutput.subtopico"}, {}]
													}],
													cur_formularios_actividad_panel1: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														idActividadEditor1: ["wm.Editor", {"caption":"ID Actividad:","display":"Number","formField":"idActividad","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._NumberEditor", {"required":true}, {}]
														}],
														relatedEditor3: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","height":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"cur_act_datag_actividadDataGrid1.selectedItem.subtopico","targetProperty":"dataSet"}, {}],
																wire1: ["wm.Wire", {"expression":undefined,"source":"subtopicoLookup2.selectedItem","targetProperty":"dataOutput"}, {}]
															}],
															subtopicoLookup3: ["wm.Editor", {"caption":"ID Subtopico","display":"Number","formField":"idSubtopico","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													fechaEditor2: ["wm.Editor", {"caption":"Fecha","display":"Date","formField":"fecha","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
														editor: ["wm._DateEditor", {}, {}]
													}],
													cur_formularios_actividad_panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														actividadEditor1: ["wm.Editor", {"caption":"Actividad:","display":"TextArea","formField":"actividad","height":"100%","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
															editor: ["wm._TextAreaEditor", {}, {}]
														}],
														requeridoAlternativoEditor1: ["wm.Editor", {"caption":"Requerido","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"requeridoAlternativo","height":"26px","padding":"2","readonly":true,"width":"294px"}, {}, {
															editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
														}]
													}],
													relatedEditor8: ["wm.RelatedEditor", {"fitToContentHeight":true,"formField":"tipoActividad","height":"28px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoActividad","targetProperty":"dataSet"}, {}],
															wire1: ["wm.Wire", {"expression":undefined,"source":"tipoActividadLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														tipoActividadLookup1: ["wm.Editor", {"caption":"Tipo de Actividad:","display":"Lookup","formField":"","height":"26px","padding":"2","readonly":true,"width":"100%"}, {"onchange":"tipoActividadLookup1Change"}, {
															editor: ["wm._LookupEditor", {"allowNone":true,"autoDataSet":false,"displayField":"tipoActividad","startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_formularios_actividad_listaTipoActividades","targetProperty":"dataSet"}, {}]
																}]
															}]
														}]
													}],
													relatedEditor9: ["wm.RelatedEditor", {"fitToContentHeight":true,"formField":"tipoValoracion","height":"28px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoValoracion","targetProperty":"dataSet"}, {}],
															wire1: ["wm.Wire", {"expression":undefined,"source":"tipoValoracionLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														tipoValoracionLookup1: ["wm.Editor", {"caption":"Retroalimentación","display":"Lookup","formField":"","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._LookupEditor", {"allowNone":true,"autoDataSet":false,"displayField":"tipoValoracion","startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_formularios_actividad_listaTipoValoracion","targetProperty":"dataSet"}, {}]
																}]
															}]
														}]
													}],
													relatedEditor10: ["wm.RelatedEditor", {"fitToContentHeight":true,"formField":"tipoDesempeno","height":"28px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoDesempeno","targetProperty":"dataSet"}, {}],
															wire1: ["wm.Wire", {"expression":undefined,"source":"tipoDesempenoLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														tipoDesempenoLookup1: ["wm.Editor", {"caption":"Desempeño","disabled":true,"display":"Lookup","formField":"","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._LookupEditor", {"allowNone":true,"autoDataSet":false,"displayField":"tipoDesempeno","startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_formularios_actividad_listaTipoDesempeno","targetProperty":"dataSet"}, {}]
																}]
															}]
														}]
													}],
													editPanel6: ["wm.EditPanel", {"isCustomized":true,"liveForm":"actividadLiveForm1","lock":false,"operationPanel":"operationPanel6","savePanel":"savePanel6"}, {}, {
														savePanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
															saveButton6: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel6.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel6.formInvalid","targetProperty":"disabled"}, {}]
																}]
															}],
															cancelButton6: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel6.cancelEdit"}]
														}],
														operationPanel6: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
															newButton6: ["wm.RoundedButton", {"caption":"Nueva Actividad","height":"100%","margin":"2","width":"160px"}, {"onclick":"editPanel6.beginDataInsert"}],
															updateButton6: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2"}, {"onclick":"editPanel6.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel6.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}],
															deleteButton6: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel6.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel6.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}]
														}]
													}]
												}]
											}],
											cur_formularios_panel_recurso: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","height":"364px","margin":"1","title":"FORMULARIO RECURSOS"}, {}, {
												recursoLiveForm2: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeforeOperation":"l_cur_formularios_recursos_tipoRecurso","onBeginInsert":"recursoLiveForm2BeginInsert","onSuccess":"l_cur_rec_recursos_recursoLiveVariable1"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"cur_rec_datag_recursosDataGrid1.selectedItem","targetProperty":"dataSet"}, {}],
														wire1: ["wm.Wire", {"expression":undefined,"source":"tipoRecursoRelatedEditor2.dataOutput","targetProperty":"dataOutput.tipoRecurso"}, {}],
														wire2: ["wm.Wire", {"expression":undefined,"source":"subtopicoRelatedEditor1.dataOutput","targetProperty":"dataOutput.subtopico"}, {}]
													}],
													cur_formulario_recurso_panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														idRecursoEditor2: ["wm.Editor", {"caption":"ID Recurso","display":"Number","formField":"idRecurso","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._NumberEditor", {"required":true}, {}]
														}],
														subtopicoRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","height":"100%"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire1: ["wm.Wire", {"expression":undefined,"source":"cur_rec_datag_recursosDataGrid1.selectedItem.subtopico","targetProperty":"dataSet"}, {}],
																wire: ["wm.Wire", {"expression":undefined,"source":"subtopicoLookup5.selectedItem","targetProperty":"dataOutput"}, {}]
															}],
															subtopicoLookup4: ["wm.Editor", {"caption":"ID Subtopico","display":"Number","formField":"idSubtopico","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													recursoEditor1: ["wm.Editor", {"caption":"Recurso","display":"TextArea","formField":"recurso","height":"119px","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
														editor: ["wm._TextAreaEditor", {}, {}]
													}],
													documentoEditor2: ["wm.Editor", {"caption":"Documento","display":"Number","formField":"documento","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
														editor: ["wm._NumberEditor", {}, {}]
													}],
													ubicacionEditor2: ["wm.Editor", {"caption":"Direccion Http://","formField":"ubicacion","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													idSyIdIdSyEditor1: ["wm.Editor", {"caption":"IdSyIdIdSy","display":"Number","formField":"idSyIdIdSy","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
														editor: ["wm._NumberEditor", {}, {}]
													}],
													tipoRecursoRelatedEditor2: ["wm.RelatedEditor", {"formField":"tipoRecurso","height":"33px"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire1: ["wm.Wire", {"expression":undefined,"source":"cur_rec_datag_recursosDataGrid1.selectedItem.tipoRecurso","targetProperty":"dataSet"}, {}],
															wire: ["wm.Wire", {"expression":undefined,"source":"tipoRecursoLookup2.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														tipoRecursoLookup2: ["wm.Editor", {"caption":"Tipo recurso","display":"Lookup","formField":"","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._LookupEditor", {"autoDataSet":false,"displayField":"tipoRecurso","required":true,"startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_formularios_recursos_tipoRecurso","targetProperty":"dataSet"}, {}]
																}]
															}]
														}]
													}],
													cur_formulario_recurso_panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														cur_formularios_butt_cargar_recurso: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_16px"]},"caption":"Recursos","height":"100%","iconMargin":"0 2px 0 0","iconUrl":"resources/images/ico/page_up.png","margin":"4","width":"193px"}, {"onclick":"cur_formularios_butt_cargar_recursoClick"}]
													}],
													editPanel13: ["wm.EditPanel", {"desktopHeight":"50px","height":"50px","isCustomized":true,"liveForm":"recursoLiveForm2","lock":false,"operationPanel":"operationPanel13","savePanel":"savePanel13"}, {}, {
														savePanel13: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
															saveButton13: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel13.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel13.formInvalid","targetProperty":"disabled"}, {}]
																}]
															}],
															cancelButton13: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel13.cancelEdit"}]
														}],
														operationPanel13: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
															newButton13: ["wm.RoundedButton", {"caption":"Nuevo","height":"100%","margin":"2","width":"131px"}, {"onclick":"editPanel13.beginDataInsert"}],
															updateButton13: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2","width":"136px"}, {"onclick":"editPanel13.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel13.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}],
															deleteButton13: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel13.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel13.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}]
														}]
													}]
												}]
											}],
											cur_formularios_panel_aprendizaje: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","height":"505px","lock":true,"showing":false,"title":"FORMULARIO DE APRENDIZAJES"}, {}, {
												aprendizajeLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"aprendizajeLiveForm1BeginInsert","onBeginUpdate":"aprendizajeLiveForm1BeginUpdate","onCancelEdit":"aprendizajeLiveForm1CancelEdit","onInsertData":"aprendizajeLiveForm1InsertData","onSuccess":"l_cur_apr_aprendizajes_aprendizajeLiveVariable1","onUpdateData":"aprendizajeLiveForm1UpdateData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem","targetProperty":"dataSet"}, {}],
														wire1: ["wm.Wire", {"expression":undefined,"source":"dimensionComprensionRelatedEditor1.dataOutput","targetProperty":"dataOutput.dimensionComprension"}, {}],
														wire2: ["wm.Wire", {"expression":undefined,"source":"dimensionCurricularRelatedEditor1.dataOutput","targetProperty":"dataOutput.dimensionCurricular"}, {}],
														wire3: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.subtopico"}, {}],
														wire4: ["wm.Wire", {"expression":undefined,"source":"relatedEditor11.dataOutput","targetProperty":"dataOutput.nivelEsperado"}, {}],
														wire5: ["wm.Wire", {"expression":undefined,"source":"relatedEditor2.dataOutput","targetProperty":"dataOutput.inteligencia"}, {}]
													}],
													panel16: ["wm.Panel", {"height":"38px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														idAprendizajeEditor1: ["wm.Editor", {"caption":"ID Aprendizaje","display":"Number","formField":"idAprendizaje","height":"100%","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._NumberEditor", {}, {}]
														}],
														relatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","height":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.subtopico","targetProperty":"dataSet"}, {}],
																wire1: ["wm.Wire", {"expression":undefined,"source":"subtopicoLookup7.selectedItem","targetProperty":"dataOutput"}, {}]
															}],
															subtopicoLookup6: ["wm.Editor", {"caption":"ID Subtopico","display":"Number","formField":"idSubtopico","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													panel17: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														aprendizajeEditor1: ["wm.Editor", {"caption":"Aprendizaje","display":"TextArea","formField":"aprendizaje","height":"100%","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
															editor: ["wm._TextAreaEditor", {"invalidMessage":"Este campo es obligatorio *","promptMessage":"Ingrese la descripción del Aprendizaje","required":true,"tooltipDisplayTime":3000}, {}]
														}],
														learningEditor1: ["wm.Editor", {"caption":"Learning","display":"TextArea","formField":"learning","height":"100%","padding":"2","readonly":true,"singleLine":false,"width":"100%"}, {}, {
															editor: ["wm._TextAreaEditor", {"invalidMessage":"Este campo es obligatorio *","promptMessage":"Ingrese la descripción del Aprendizaje","required":true,"tooltipDisplayTime":3000}, {}]
														}]
													}],
													fechaEsperadaEditor1: ["wm.Editor", {"caption":"Fecha esperada","display":"Date","formField":"fechaEsperada","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
														editor: ["wm._DateEditor", {"promptMessage":"Seleccione una Fecha","required":true}, {}]
													}],
													pesoEditor3: ["wm.TextEditor", {"caption":"Peso","display":"Select","formField":"peso","padding":"2","readonly":true,"width":"100%"}, {}, {
														editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"dataValue","options":"1,2,3,4,5","required":true}, {}, {
															optionsVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}]
														}]
													}],
													ejeIdEjeEditor1: ["wm.Editor", {"caption":"Eje (Primer eje curricular)","display":"Select","formField":"ejeIdEje","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
														editor: ["wm._SelectEditor", {"dataField":"idEje","displayField":"ejeTematico","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_formularios_aprendizajes_listaEjes","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													eje2IdEjeEditor1: ["wm.Editor", {"caption":"Eje (Segundo eje curricular)","display":"Select","formField":"eje2IdEje","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
														editor: ["wm._SelectEditor", {"dataField":"idEje","displayField":"ejeTematico"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_formularios_aprendizajes_listaEjes2","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													eje3IdEjeEditor1: ["wm.Editor", {"caption":"Eje (Tercer eje curricular)","display":"Select","formField":"eje3IdEje","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
														editor: ["wm._SelectEditor", {"dataField":"idEje","displayField":"ejeTematico"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_formularios_aprendizajes_listaEjes3","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													relatedEditor11: ["wm.RelatedEditor", {"fitToContentHeight":true,"formField":"nivelEsperado","height":"28px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.nivelEsperado","targetProperty":"dataSet"}, {}],
															wire1: ["wm.Wire", {"expression":undefined,"source":"nivelEsperadoLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														nivelEsperadoLookup1: ["wm.Editor", {"caption":"Nivel Esperado","display":"Lookup","formField":"","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._LookupEditor", {"autoDataSet":false,"displayField":"nivelEsperado","required":true,"startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"a_nivel_esperado","targetProperty":"dataSet"}, {}]
																}]
															}]
														}]
													}],
													dimensionComprensionRelatedEditor1: ["wm.RelatedEditor", {"formField":"dimensionComprension"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire1: ["wm.Wire", {"expression":undefined,"source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.dimensionComprension","targetProperty":"dataSet"}, {}],
															wire: ["wm.Wire", {"expression":undefined,"source":"dimensionComprensionLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														dimensionComprensionLookup1: ["wm.Editor", {"caption":"Dimensión de la comprensión","display":"Lookup","formField":"","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._LookupEditor", {"autoDataSet":false,"displayField":"dimensionComprension","required":true,"startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_formularios_aprendizajes_listaDimension_comprension","targetProperty":"dataSet"}, {}]
																}]
															}]
														}]
													}],
													dimensionCurricularRelatedEditor1: ["wm.RelatedEditor", {"formField":"dimensionCurricular"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire1: ["wm.Wire", {"expression":undefined,"source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.dimensionCurricular","targetProperty":"dataSet"}, {}],
															wire: ["wm.Wire", {"expression":undefined,"source":"dimensionCurricularLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														dimensionCurricularLookup1: ["wm.Editor", {"caption":"Dimensión curricular","display":"Lookup","formField":"","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._LookupEditor", {"autoDataSet":false,"displayField":"dimensionCurricular","required":true,"startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_cur_formularios_aprendizajes_listaDimension_curricular","targetProperty":"dataSet"}, {}]
																}]
															}]
														}]
													}],
													relatedEditor2: ["wm.RelatedEditor", {"fitToContentHeight":true,"formField":"inteligencia","height":"28px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.inteligencia","targetProperty":"dataSet"}, {}],
															wire1: ["wm.Wire", {"expression":undefined,"source":"inteligenciaLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
														}],
														inteligenciaLookup1: ["wm.Editor", {"caption":"Inteligencia ","display":"Lookup","formField":"","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
															editor: ["wm._LookupEditor", {"autoDataSet":false,"displayField":"inteligencia","required":true,"startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"cur_ls_inteligencias","targetProperty":"dataSet"}, {}]
																}]
															}]
														}]
													}],
													editPanel1: ["wm.EditPanel", {"liveForm":"aprendizajeLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
														savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
															saveButton1: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel1.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel1.formInvalid","targetProperty":"disabled"}, {}]
																}]
															}],
															cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel1.cancelEdit"}]
														}],
														operationPanel1: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
															newButton1: ["wm.RoundedButton", {"caption":"Nuevo Aprendizaje","height":"100%","margin":"2","width":"180px"}, {"onclick":"editPanel1.beginDataInsert"}],
															updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2","width":"150px"}, {"onclick":"editPanel1.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel1.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}],
															deleteButton1: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel1.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"editPanel1.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								calificaciones: ["wm.Layer", {"caption":"Calificaciones","horizontalAlign":"left","margin":"2,0,2,0","roles":["4","5","6","8","9","10","7","25","11","13","14","18","19","20","21","23","22"],"verticalAlign":"top"}, {"onShow":"calificacionesShow"}, {
									calf_panel_encabezado_principal: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
										textEditor6: ["wm.TextEditor", {"caption":"idTipoPersona","padding":"2","showing":false,"width":"308px"}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"source":"a_getTipoPersona.usuario","targetProperty":"dataValue"}, {}]
											}],
											editor: ["wm._TextEditor", {}, {}]
										}],
										l_calif_alumnos_panel1_butt_cambiarPanel: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px","wm_FontSizePx_12px"]},"borderColor":"#D14836","caption":"Aprendizajes","iconMargin":"","iconUrl":"resources/images/ico/canvas_holder.png","iconWidth":"30px","margin":"","roles":["10","11","4","5","6","9","18","19","20","22","21","23","24"],"width":"135px"}, {"onclick":"l_calif_alumnos_panel1_butt_cambiarPanelClick"}],
										button12: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"borderColor":"#3C9300","caption":"Estudiantes","iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/user-comment.png","margin":"0","roles":["4","5","6","9","10","11","20","21","22","23","24"],"width":"137px"}, {"onclick":"button12Click"}],
										l_calif_alumnos_panel1_butt_promocion: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"borderColor":"#CD3333","caption":"Promoción","iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/prom32x32.png","margin":"","roles":["6","9","10","13","7","11","25"],"width":"135px"}, {"onclick":"l_calif_alumnos_panel1_butt_promocionClick"}],
										button_activities: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"borderColor":"#4D90FE","caption":"Actividades","iconHeight":"20px","iconMargin":"0 0px 0 0","iconUrl":"resources/images/news_icons/activities.png","iconWidth":"20px","margin":"0","roles":["4","10","11","22","21","20","23","24","5","6","18","19","9"],"width":"107px"}, {"onclick":"button_activitiesClick"}],
										spacer9: ["wm.Spacer", {"height":"48px","width":"3px"}, {}]
									}],
									calf_panel_encabezado_opciones: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"middle","width":"100%"}, {}, {
										calif_encabezado_opciones_sel_sy: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Año escolar","captionSize":"100%","height":"26px","padding":"2","width":"240px"}, {}, {
											editor: ["wm._SelectEditor", {"dataField":"idSy","displayField":"schoolYear","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"a_lista_sy","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_sel_grado: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Grado","captionSize":"70%","height":"26px","padding":"2","width":"200px"}, {"onchange":"calif_encabezado_opciones_sel_gradoChange"}, {
											editor: ["wm._SelectEditor", {"dataField":"idGrado","displayField":"grado","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"a_grado","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_sel_curso: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontSizePx_16px"],"domNode":["wm_FontSizePx_16px"]},"caption":"Curso","captionSize":"70%","disabled":true,"height":"26px","padding":"2","width":"200px"}, {"onchange":"calif_encabezado_opciones_sel_cursoChange"}, {
											editor: ["wm._SelectEditor", {"dataField":"idCurso","displayField":"curso","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_encabezado_opciones_listaCurso","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_butt_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"borderColor":"#FFCC00","caption":"","iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/trash-can.png","margin":"4","width":"48px"}, {"onclick":"calif_encabezado_opciones_butt_limpiarClick"}],
										calif_encabezado_opciones_butt_reporte: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"borderColor":"#FFCC00","disabled":true,"iconUrl":"resources/images/ico/download.png","margin":"4","width":"48px"}, {"onclick":"calif_encabezado_opciones_butt_reporteClick"}],
										calif_encabezado_opciones_butt_limpiar1: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_24px"]},"caption":"☝","iconMargin":"0 0px 0 0","margin":"4","roles":["6","7","9","10","13"],"showing":false,"width":"48px"}, {"onclick":"calif_encabezado_opciones_butt_limpiar1Click"}],
										sp1: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
										l_calif_alumnos_butt_ocultar: ["wm.Button", {"_classes":{"domNode":["wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px","wm_FontSizePx_14px","wm_FontColor_Black"]},"borderColor":"#D9D9D9","caption":"Ocultar","iconHeight":"20px","iconMargin":"","iconUrl":"resources/images/buttons/left.png","iconWidth":"30px","margin":"","width":"100px"}, {"onclick":"l_calif_alumnos_butt_ocultarClick"}],
										l_calif_alumnos_butt_mostrar: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_BottomStyleCurved4px","wm_FontSizePx_14px","wm_Border_TopStyleCurved4px"]},"borderColor":"#D9D9D9","caption":"Mostrar","iconHeight":"20px","iconMargin":"","iconUrl":"resources/images/buttons/right.png","iconWidth":"30px","margin":"","width":"100px"}, {"onclick":"l_calif_alumnos_butt_mostrarClick"}],
										spacer4: ["wm.Spacer", {"height":"100%","width":"3px"}, {}]
									}],
									calif_panel_contenedor_aprendizaje: ["wm.Panel", {"borderColor":"#000000","height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
										calif_contendor_layer_principal: ["wm.Layers", {}, {}, {
											calif_contendor_sublayer_principal: ["wm.Layer", {"borderColor":"","caption":"layer20","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
												calif_contendor_panel1: ["wm.Panel", {"borderColor":"#000000","height":"50%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"3","verticalAlign":"top","width":"100%"}, {}, {
													calif_asig_datag_asignaturasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#000000","width":"430px"}, {"onDeselected":"calif_asig_datag_asignaturasDataGrid1Deselected","onSelected":"calif_asig_datag_asignaturasDataGrid1Selected"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_contenedor_tablas_asignaturas_docentes","targetProperty":"dataSet"}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"●","columnWidth":"80px","field":"id.asignaturaIdAsignatura","index":1}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Asignatura","columnWidth":"120%","field":"id.asignatura","index":1}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Docente","columnWidth":"85px","field":"id.nombreLdap","index":2}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}]
													}],
													tablaUnidades: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"a_Unidades","targetProperty":"dataSet"}, {}]
														}],
														unidad1: ["wm.DataGridColumn", {"caption":"Unidad","columnWidth":"213px","field":"unidad","index":2}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														idUnidad1: ["wm.DataGridColumn", {"caption":"ID Unidad","columnWidth":"58px","field":"idUnidad"}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Numero Unidad","columnWidth":"65px","field":"numeroUnidad","index":1}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}]
													}],
													tablaSubtopicos: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"a_Subtopicos","targetProperty":"dataSet"}, {}]
														}],
														subtopico1: ["wm.DataGridColumn", {"caption":"Subtopico","columnWidth":"259px","field":"subtopico","index":6}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"ID Subtopico","columnWidth":"76px","field":"idSubtopico","index":1}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}]
													}],
													splitter2: ["wm.Splitter", {"height":"100%","width":"4px"}, {}],
													calif_asig_datag_aprendizajesDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#000000"}, {"onSelected":"calif_asig_datag_aprendizajesDataGrid1Selected","onSelectionChanged":"calif_asig_datag_aprendizajesDataGrid1SelectionChanged"}, {
														idAprendizaje1: ["wm.DataGridColumn", {"caption":"•","columnWidth":"55px","field":"id.idAprendizaje"}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														aprendizaje1: ["wm.DataGridColumn", {"caption":"Aprendizaje","columnWidth":"150%","field":"id.aprendizaje","index":2}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Learning","columnWidth":"150%","field":"id.learning","index":3}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"Unidad","columnWidth":"100%","field":"id.unidad","index":6}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Subtopico","columnWidth":"100%","field":"id.subtopico","index":8}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Fecha esperada","columnWidth":"55%","display":"Date","field":"id.fechaEsperada","index":4}, {}, {
															format1: ["wm.DateFormatter", {}, {}]
														}],
														column5: ["wm.DataGridColumn", {"caption":"N° Unidad","columnWidth":"44px","display":"Number","field":"id.numeroUnidad","index":5}, {}, {
															format1: ["wm.NumberFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"N° Subtópico","columnWidth":"61px","display":"Number","field":"id.numeroSubtopico","index":7}, {}, {
															format1: ["wm.NumberFormatter", {}, {}]
														}],
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_contenedor_tablas_aprendizajes","targetProperty":"dataSet"}, {}]
														}],
														column7: ["wm.DataGridColumn", {"caption":"Peso","columnWidth":"40px","field":"id.peso","index":1}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												calif_contenedor_panel1: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"borderColor":"#000000","height":"5%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
													blink_message: ["wm.Label", {"caption":"Importante: Seleccione un <u>Aprendizaje</u> y <u>Estudiante</u> para ver los detalles de calificaciones.","height":"100%","padding":"4","showing":false,"singleLine":false,"width":"100%"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													calif_contenedor_cadena_curriculo: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"align":"right","height":"100%","padding":"4","width":"100%"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}],
												calif_contenedor_panel_datagrids: ["wm.Panel", {"borderColor":"#000000","height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"3","verticalAlign":"top","width":"100%"}, {}, {
													calif_contenedor_datagrids_layer_principal: ["wm.Layers", {}, {}, {
														calif_contenedor_datagrids_sublayer: ["wm.Layer", {"borderColor":"","caption":"layer13","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
															calif_contenedor_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
																calif_contenedor_lab_alumnos: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_TextDecoration_Bold","wm_FontColor_White"]},"caption":"ALUMNOS","height":"100%","padding":"4","width":"124px"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																calif_contenedor_spacer_alumnos: ["wm.Spacer", {"height":"100%","width":"70%"}, {}],
																calif_contenedor_sel_Genero: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontFamily_Geneva","wm_FontColor_White"],"domNode":["wm_FontSizePx_16px"]},"caption":"GENERO","padding":"2","width":"150%"}, {"onchange":"l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso"}, {
																	editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"dataValue","options":"Masculino, Femenino"}, {}, {
																		optionsVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}]
																	}]
																}],
																calif_contenedor_img_limpiar: ["wm.Picture", {"height":"27px","hint":"Restaurar todos los alumnos del curso","source":"resources/images/ico/dialog-close.png","width":"39px"}, {"onclick":"calif_contenedor_img_limpiarClick"}]
															}],
															calif_alumnos_curso_datag_alumnosDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#404040"}, {"onSelected":"calif_alumnos_curso_datag_alumnosDataGrid1Selected","onSelectionChanged":"calif_alumnos_curso_datag_alumnosDataGrid1SelectionChanged"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso","targetProperty":"dataSet"}, {}]
																}],
																column1: ["wm.DataGridColumn", {"caption":"Nombres","columnWidth":"100%","dataExpression":"${id.nombre1}+\" \"+${id.nombre2}","field":"id.nombre1","index":3}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																column2: ["wm.DataGridColumn", {"caption":"<center>+</center>","columnWidth":"38px","dataExpression":"if(${id.sexo}==\"Masculino\") {'<img src=\"resources/images/ico/Male.png\" height=\"28\" width=\"28\" /><center>'}  if(${id.sexo}==\"Femenino\") {'<img src=\"resources/images/ico/Female.png\" height=\"28\" width=\"28\" /><center>'}","field":"id.sexo"}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																column3: ["wm.DataGridColumn", {"caption":"Apellidos","columnWidth":"100%","dataExpression":"${id.apellido1}+\" \"+${id.apellido2}","field":"id.apellido1","index":2}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																column4: ["wm.DataGridColumn", {"caption":"Curso","columnWidth":"100px","field":"id.curso","index":4}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																column5: ["wm.DataGridColumn", {"caption":"ID Persona","columnWidth":"66px","field":"id.personaIdPersona","index":1}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}],
													splitter4: ["wm.Splitter", {"height":"100%","width":"4px"}, {}],
													spacer10: ["wm.Spacer", {"height":"48px","width":"1px"}, {}],
													layers2: ["wm.Layers", {}, {}, {
														layer12: ["wm.Layer", {"borderColor":"","caption":"layer12","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
															calif_contenedor_panel_encabezado2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_Green"]},"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
																label4: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_TextDecoration_Bold","wm_FontColor_White"]},"caption":"DETALLES DE CALIFICACIONES","height":"100%","padding":"4","width":"231%"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}],
															panel36: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"height":"262px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
																liveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"256px","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"liveForm1BeginInsert","onSuccess":"alumnoCALIFICACIONES"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"expression":undefined,"source":"calificaciones.selectedItem","targetProperty":"dataSet"}, {}],
																		wire1: ["wm.Wire", {"expression":undefined,"source":"inscAlumCursoRelatedEditor1.dataOutput","targetProperty":"dataOutput.inscAlumCurso"}, {}]
																	}],
																	panel39: ["wm.Panel", {"height":"31px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																		idInscAlumAprendizajeEditor1: ["wm.Editor", {"caption":"ID","display":"Number","formField":"idInscAlumAprendizaje","height":"26px","padding":"2","readonly":true,"width":"113px"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}],
																		fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha Ingreso:","disabled":true,"display":"Date","formField":"fechaIngreso","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}],
																		calificacionEditor1: ["wm.Editor", {"caption":"Calificación:","display":"Select","formField":"calificacion","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																			editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"dataValue","options":"En Progreso, Competente, Avanzado, Magistral"}, {}, {
																				optionsVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}]
																			}]
																		}],
																		fechaLogroEditor1: ["wm.Editor", {"caption":"Fecha Logro:","display":"Date","formField":"fechaLogro","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}]
																	}],
																	idSyEditor1: ["wm.Editor", {"caption":"IdSy","disabled":true,"display":"Number","formField":"idSy","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	calificacionNumEditor1: ["wm.Editor", {"caption":"CalificacionNum","disabled":true,"display":"Number","formField":"calificacionNum","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	comentarioEditor1: ["wm.Editor", {"caption":"Comentario:","captionAlign":"left","captionPosition":"top","display":"TextArea","formField":"comentario","height":"105px","padding":"2","readonly":true,"width":"100%"}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	personaIdPersonaEditor1: ["wm.Editor", {"caption":"ID PERSONA:","disabled":true,"display":"Number","formField":"personaIdPersona","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	aprendizajeIdAprendizajeEditor1: ["wm.Editor", {"caption":"ID APRENDIZAJE","disabled":true,"display":"Number","formField":"aprendizajeIdAprendizaje","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	periodoIdPeriodoEditor1: ["wm.Editor", {"caption":"PeriodoIdPeriodo","disabled":true,"display":"Number","formField":"periodoIdPeriodo","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	inscAlumCursoRelatedEditor1: ["wm.RelatedEditor", {"formField":"inscAlumCurso"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"expression":undefined,"source":"calificaciones.selectedItem.inscAlumCurso","targetProperty":"dataSet"}, {}],
																			wire: ["wm.Wire", {"expression":undefined,"source":"inscAlumCursoLookup2.selectedItem","targetProperty":"dataOutput"}, {}]
																		}],
																		inscAlumCursoLookup1: ["wm.Editor", {"caption":"ID ALUMNO*CURSO:","display":"Number","formField":"idInscAlumCurso","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}]
																	}],
																	editPanel8: ["wm.EditPanel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_FontSizePx_10px"]},"liveForm":"liveForm1","operationPanel":"operationPanel8","savePanel":"savePanel8"}, {}, {
																		savePanel8: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
																			saveButton8: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel8.saveData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"expression":undefined,"source":"editPanel8.formInvalid","targetProperty":"disabled"}, {}]
																				}]
																			}],
																			cancelButton8: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel8.cancelEdit"}]
																		}],
																		operationPanel8: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																			newButton8: ["wm.RoundedButton", {"caption":"Ingresar Calificacion","height":"100%","margin":"2","width":"160px"}, {"onclick":"editPanel8.beginDataInsert"}],
																			updateButton8: ["wm.RoundedButton", {"caption":"Actualizar Calificación","height":"100%","margin":"2","width":"170px"}, {"onclick":"editPanel8.beginDataUpdate"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"expression":undefined,"source":"editPanel8.formUneditable","targetProperty":"disabled"}, {}]
																				}]
																			}],
																			deleteButton8: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel8.deleteData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"expression":undefined,"source":"editPanel8.formUneditable","targetProperty":"disabled"}, {}]
																				}]
																			}]
																		}]
																	}]
																}]
															}],
															dataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#000000"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_contenedor_tablas_calificacion_final","targetProperty":"dataSet"}, {}]
																}],
																fechaLogro1: ["wm.DataGridColumn", {"caption":"Fecha Logro","display":"Date","field":"id.fechaLogro","index":1}, {}, {
																	format1: ["wm.DateFormatter", {}, {}]
																}],
																calificacion1: ["wm.DataGridColumn", {"caption":"Calificación","columnWidth":"120%","field":"id.calificacion","index":3}, {}, {
																	format1: ["wm.DataFormatter", {}, {}]
																}],
																calificacionNum1: ["wm.DataGridColumn", {"caption":"Equivalencia numerica","columnWidth":"120%","display":"Number","field":"id.calificacionNum","index":4}, {}, {
																	format1: ["wm.NumberFormatter", {"digits":2}, {}]
																}]
															}],
															splitter3: ["wm.Splitter", {"height":"4px","width":"100%"}, {}],
															inscalumaprendizajeLivePanel1: ["wm.LivePanel", {"height":"519%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																inscalumaprendizajeGridPanel: ["wm.FancyPanel", {"captionClasses":"wm_Border_DropShadow wm_BackgroundColor_Green wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","height":"237px","margin":"0","title":"CALIFICACIONES DEL APRENDIZAJE"}, {}, {
																	inscalumaprendizajeDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]}}, {"onRowDblClick":"inscalumaprendizajeDataGrid1RowDblClick","onSelected":"inscalumaprendizajeDataGrid1Selected"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2","targetProperty":"dataSet"}, {}]
																		}],
																		idInscAlumAprendizaje2: ["wm.DataGridColumn", {"caption":"•","columnWidth":"100px","field":"idInscAlumAprendizaje"}, {}, {
																			format1: ["wm.DataFormatter", {}, {}]
																		}],
																		fechaLogro2: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Fecha Logro","columnWidth":"97px","display":"Date","field":"fechaLogro","index":2}, {}, {
																			format1: ["wm.DateFormatter", {}, {}]
																		}],
																		calificacion2: ["wm.DataGridColumn", {"autoSize":undefined,"caption":"Calificación","columnWidth":"87px","field":"calificacion","index":3}, {}, {
																			format1: ["wm.DataFormatter", {}, {}]
																		}],
																		comentario2: ["wm.DataGridColumn", {"caption":"Comentario","columnWidth":"150%","field":"comentario","index":5}, {}, {
																			format1: ["wm.DataFormatter", {}, {}]
																		}],
																		fechaIngreso2: ["wm.DataGridColumn", {"caption":"Fecha Ingreso","columnWidth":"60%","display":"Date","field":"fechaIngreso","index":6}, {}, {
																			format1: ["wm.DateFormatter", {}, {}]
																		}]
																	}]
																}],
																splitter7: ["wm.Splitter", {"height":"4px","width":"100%"}, {}],
																inscalumaprendizajeDetailsPanel: ["wm.FancyPanel", {"captionClasses":"wm_Border_DropShadow wm_BackgroundColor_Green wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","title":"MODIFICAR CALIFICACIÓN"}, {}, {
																	inscalumaprendizajeLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_14px"]},"height":"290%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"inscalumaprendizajeLiveForm1BeginInsert","onBeginUpdate":"inscalumaprendizajeLiveForm1BeginUpdate","onCancelEdit":"inscalumaprendizajeLiveForm1CancelEdit","onDeleteData":"inscalumaprendizajeLiveForm1DeleteData","onSuccess":"inscalumaprendizajeLiveForm1Success"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"expression":undefined,"source":"inscalumaprendizajeDataGrid1.selectedItem","targetProperty":"dataSet"}, {}],
																			wire1: ["wm.Wire", {"expression":undefined,"source":"aprendizajeRelatedEditor1.dataOutput","targetProperty":"dataOutput.aprendizaje"}, {}],
																			wire2: ["wm.Wire", {"expression":undefined,"source":"inscAlumCursoRelatedEditor2.dataOutput","targetProperty":"dataOutput.inscAlumCurso"}, {}],
																			wire3: ["wm.Wire", {"expression":undefined,"source":"personaRelatedEditor1.dataOutput","targetProperty":"dataOutput.persona"}, {}]
																		}],
																		panel40: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																			idInscAlumAprendizajeEditor2: ["wm.Editor", {"caption":"ID","display":"Number","formField":"idInscAlumAprendizaje","height":"26px","padding":"2","readonly":true,"width":"153px"}, {}, {
																				editor: ["wm._NumberEditor", {}, {}]
																			}],
																			fechaIngresoEditor2: ["wm.Editor", {"caption":"Fecha Ingreso","disabled":true,"display":"Date","formField":"fechaIngreso","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																				editor: ["wm._DateEditor", {}, {}]
																			}],
																			fechaLogroEditor2: ["wm.Editor", {"caption":"Fecha Logro","display":"Date","formField":"fechaLogro","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																				editor: ["wm._DateEditor", {"required":true}, {}]
																			}]
																		}],
																		panel22: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																			calificacionEditor2: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Calificación","display":"Select","formField":"calificacion","height":"26px","padding":"2","readonly":true,"width":"150%"}, {"onchange":"calificacionEditor2Change"}, {
																				editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"dataValue","options":"En Progreso, Competente, Avanzado, Magistral","required":true}, {}, {
																					optionsVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}]
																				}]
																			}],
																			label33: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_BackgroundColor_VeryLightGray"]},"caption":"»»","height":"26px","padding":"4","width":"37px"}, {}, {
																				format: ["wm.DataFormatter", {}, {}]
																			}],
																			calificacionNumEditor2: ["wm.Editor", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_BackgroundColor_VeryLightGray"],"captionNode":["wm_FontColor_LightBlue","wm_BackgroundColor_VeryLightGray"]},"disabled":true,"formField":"calificacionNum","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																				editor: ["wm._TextEditor", {"required":true}, {}]
																			}]
																		}],
																		comentarioEditor2: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Comentario","captionAlign":"left","captionPosition":"top","display":"TextArea","formField":"comentario","height":"110px","padding":"2","readonly":true,"width":"100%"}, {}, {
																			editor: ["wm._TextAreaEditor", {}, {}]
																		}],
																		panel8: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																			aprendizajeRelatedEditor1: ["wm.RelatedEditor", {"formField":"aprendizaje"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire1: ["wm.Wire", {"expression":undefined,"source":"inscalumaprendizajeDataGrid1.selectedItem.aprendizaje","targetProperty":"dataSet"}, {}],
																					wire: ["wm.Wire", {"expression":undefined,"source":"aprendizajeLookup2.selectedItem","targetProperty":"dataOutput"}, {}]
																				}],
																				aprendizajeLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"caption":"ID Aprendizaje","display":"Number","formField":"idAprendizaje","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																					editor: ["wm._NumberEditor", {"required":true}, {}]
																				}]
																			}],
																			personaRelatedEditor1: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire1: ["wm.Wire", {"expression":undefined,"source":"inscalumaprendizajeDataGrid1.selectedItem.persona","targetProperty":"dataSet"}, {}],
																					wire: ["wm.Wire", {"expression":undefined,"source":"personaLookup2.selectedItem","targetProperty":"dataOutput"}, {}]
																				}],
																				personaLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"caption":"ID Persona","display":"Number","formField":"idPersona","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																					editor: ["wm._NumberEditor", {"required":true}, {}]
																				}],
																				label32: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Apreciado Visitante: Realice con éxito la consulta de calificaciónes <b><u>siguiendo  paso a paso el proceso.","padding":"4","width":"855px"}, {}, {
																					format: ["wm.DataFormatter", {}, {}]
																				}]
																			}]
																		}],
																		aprendizajeaux: ["wm.TextEditor", {"caption":"aprendizaje","display":"Number","padding":"2","showing":false,"width":"309px"}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		personaaux: ["wm.TextEditor", {"caption":"persona","display":"Number","padding":"2","showing":false,"width":"294px"}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		editPanel9: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"isCustomized":true,"liveForm":"inscalumaprendizajeLiveForm1","lock":false,"operationPanel":"operationPanel9","savePanel":"savePanel9"}, {}, {
																			savePanel9: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
																				saveButton9: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel9.saveData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"expression":undefined,"source":"editPanel9.formInvalid","targetProperty":"disabled"}, {}]
																					}]
																				}],
																				cancelButton9: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel9.cancelEdit"}]
																			}],
																			operationPanel9: ["wm.Panel", {"height":"40px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																				newButton9: ["wm.RoundedButton", {"caption":"Nueva Calificación","height":"100%","margin":"2","width":"201px"}, {"onclick":"editPanel9.beginDataInsert"}],
																				updateButton9: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2","width":"120px"}, {"onclick":"editPanel9.beginDataUpdate"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"expression":undefined,"source":"editPanel9.formUneditable","targetProperty":"disabled"}, {}]
																					}]
																				}],
																				deleteButton9: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel9.deleteData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"expression":undefined,"source":"editPanel9.formUneditable","targetProperty":"disabled"}, {}]
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
											}]
										}]
									}],
									actividades: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										activity_container: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											layers18: ["wm.Layers", {"borderColor":"#ffffff","width":"50%"}, {}, {
												layer41: ["wm.Layer", {"borderColor":"","caption":"layer41","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
													sy_activities: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Año escolar","display":"Text","padding":"2","readonly":true,"width":"100%"}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													subjects_activities: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Asignaturas","padding":"2","width":"100%"}, {"onchange":"subjects_activitiesChange"}, {
														editor: ["wm._SelectEditor", {"dataField":"idcurso","displayExpression":"${idasignatura}+\" - \"+${asignatura}+\" - \"+${curso}","displayField":"asignatura"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"activitiesGetSubjectsByUser","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													activitiesDataGrid: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"borderColor":"#ffffff"}, {"onCellClick":"activitiesDataGridCellClick","onRowDblClick":"activitiesDataGridRowDblClick","onSelected":"activitiesDataGridSelected","onSelectionChanged":"activitiesDataGridSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"actividad_lv","targetProperty":"dataSet"}, {}]
														}],
														fecha2: ["wm.DataGridColumn", {"caption":"Fecha","columnWidth":"98px","display":"Date","field":"fecha","index":2}, {}, {
															format1: ["wm.DateFormatter", {}, {}]
														}],
														actividad2: ["wm.DataGridColumn", {"caption":"Actividad","columnWidth":"100%","field":"actividad","index":1}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														idActividad2: ["wm.DataGridColumn", {"caption":"+","columnWidth":"50px","field":"idActividad"}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}]
											}],
											layers17: ["wm.Layers", {"borderColor":"#ffffff","width":"80%"}, {}, {
												layer40: ["wm.Layer", {"borderColor":"","caption":"layer40","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
													panel19: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														actividad_form_label1: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_FontSizePx_10px"]},"caption":"Opción 1: Usa <u>Calificar a todos</u> para calificar masivamente siga los siguientes pasos:","height":"100%","padding":"4","width":"100%"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													top_header_form: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"350px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														inscalumactividadLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_12px"]},"height":"100%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"inscalumactividadLiveForm1BeginInsert","onSuccess":"inscalumactividadLiveVariable1"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"inscalumactividadDataGrid1.selectedItem","targetProperty":"dataSet"}, {}],
																wire1: ["wm.Wire", {"expression":undefined,"source":"actividadRelatedEditor1.dataOutput","targetProperty":"dataOutput.actividad"}, {}],
																wire2: ["wm.Wire", {"expression":undefined,"source":"personaRelatedEditor3.dataOutput","targetProperty":"dataOutput.persona"}, {}]
															}],
															panel15: ["wm.Panel", {"height":"65px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
																descripcion_califica_masivo: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"1. Seleccione una Asignatura. <br>2. Seleccione la actividad a calificar.<br>3. Haga clic en 'Calificar'. <br>4. Haga clic en 'Calificar a todos' y verifique que los registros de actividades calificadas.","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}],
															panel14: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																actividad_form_label: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_White","wm_FontSizePx_10px"]},"caption":"Opción 2: Selecciona el estudiante y da clic el botón <u>Guardar</u> para calificar de manera individualmente.","height":"100%","padding":"4","width":"100%"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}],
															idInscAlumActividadEditor1: ["wm.Editor", {"caption":"ID Actividad","display":"Number","formField":"idInscAlumActividad","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																editor: ["wm._NumberEditor", {}, {}]
															}],
															logradoEditor2: ["wm.Editor", {"caption":"Logrado","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"logrado","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
															}],
															fechaEditor3: ["wm.Editor", {"caption":"Fecha","display":"Date","formField":"fecha","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																editor: ["wm._DateEditor", {"required":true}, {}]
															}],
															comentarioEditor4: ["wm.Editor", {"caption":"Comentario","display":"TextArea","formField":"comentario","height":"74px","padding":"2","readonly":true,"width":"100%"}, {}, {
																editor: ["wm._TextAreaEditor", {"required":true}, {}]
															}],
															panel6: ["wm.Panel", {"height":"54px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
																actividadRelatedEditor1: ["wm.RelatedEditor", {"formField":"actividad"}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire1: ["wm.Wire", {"expression":undefined,"source":"inscalumactividadDataGrid1.selectedItem.actividad","targetProperty":"dataSet"}, {}]
																	}],
																	actividadLookup1: ["wm.Editor", {"caption":"ID Actividad","display":"Number","formField":"idActividad","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}]
																}],
																personaRelatedEditor3: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire1: ["wm.Wire", {"expression":undefined,"source":"inscalumactividadDataGrid1.selectedItem.persona","targetProperty":"dataSet"}, {}]
																	}],
																	personaLookup4: ["wm.Editor", {"caption":"ID Persona","display":"Number","formField":"idPersona","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}]
																}]
															}],
															editPanel12: ["wm.EditPanel", {"desktopHeight":"43px","height":"43px","isCustomized":true,"liveForm":"inscalumactividadLiveForm1","lock":false,"operationPanel":"operationPanel12","savePanel":"savePanel12","verticalAlign":"middle"}, {}, {
																savePanel12: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
																	calificaTodos: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"borderColor":"","caption":"Calificar a todos","iconHeight":"20px","iconMargin":"0 0px 0 0","iconUrl":"resources/images/news_icons/users.png","iconWidth":"20px","margin":"2","width":"184px"}, {"onclick":"calificaTodosClick"}],
																	spacer11: ["wm.Spacer", {"height":"100%","width":"40%"}, {}],
																	saveButton12: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel12.saveData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"expression":undefined,"source":"editPanel12.formInvalid","targetProperty":"disabled"}, {}]
																		}]
																	}],
																	cancelButton12: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel12.cancelEdit"}]
																}],
																operationPanel12: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
																	newButton12: ["wm.RoundedButton", {"caption":"Calificar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel12.beginDataInsert"}],
																	updateButton12: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2","width":"112px"}, {"onclick":"editPanel12.beginDataUpdate"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"expression":undefined,"source":"editPanel12.formUneditable","targetProperty":"disabled"}, {}]
																		}]
																	}],
																	deleteButton12: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel12.deleteData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"expression":undefined,"source":"editPanel12.formUneditable","targetProperty":"disabled"}, {}]
																		}]
																	}]
																}]
															}]
														}]
													}],
													panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														activities_studentsDataGrid: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"borderColor":"#ffffff"}, {"onSelected":"inscalumactividadLiveVariable1"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"actividad_estudiantes","targetProperty":"dataSet"}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"+","columnWidth":"50px","field":"persona.codigo"}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															column1: ["wm.DataGridColumn", {"caption":"Nombres","columnWidth":"100%","dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}","field":"persona.nombre1","index":2}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Apellidos","columnWidth":"100%","dataExpression":"${persona.apellido1}+\" \"+${persona.apellido2}","field":"persona.apellido1","index":1}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}]
														}],
														inscalumactividadDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]}}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"inscalumactividadLiveVariable1","targetProperty":"dataSet"}, {}]
															}],
															logrado2: ["wm.DataGridColumn", {"caption":" ","columnWidth":"22px","dataExpression":"if(${logrado}==\"1\") {'<img src=\"resources/images/news_icons/ok.png\" height=\"18\" width=\"18\" /><center>'}  if(${logrado}==\"0\") {'<img src=\"resources/images/news_icons/bad.png\" height=\"18\" width=\"18\" /><center>'}","display":"Number","field":"logrado"}, {}, {
																format1: ["wm.NumberFormatter", {}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"Nombre","columnWidth":"100%","dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}","field":"persona.nombre1","index":2}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Apellidos","columnWidth":"100%","dataExpression":"${persona.apellido1}+ \" \"+${persona.apellido2}","field":"persona.apellido1","index":1}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									calif_panel_contenedor_alumnos: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										layers7: ["wm.Layers", {}, {}, {
											layer21: ["wm.Layer", {"borderColor":"","caption":"layer21","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
												calif_alumnos_panel_panel1: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"45px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"verticalAlign":"middle","width":"100%"}, {}, {
													calif_alumnos_panel1_sel_sy: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Año escolar","captionSize":"100%","height":"26px","padding":"2","width":"240px"}, {}, {
														editor: ["wm._SelectEditor", {"dataField":"idSy","displayField":"schoolYear","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"a_lista_sy","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													calif_alumnos_panel1_sel_grado: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Grado","captionSize":"70%","height":"26px","padding":"2","width":"200px"}, {"onchange":"l_calif_encabezado_opciones_listaCurso2"}, {
														editor: ["wm._SelectEditor", {"dataField":"idGrado","displayField":"grado","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"a_grado","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													calif_alumnos_panel1_sel_curso: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Curso","captionSize":"70%","height":"26px","padding":"2","width":"200px"}, {"onchange":"calif_alumnos_panel1_sel_cursoChange"}, {
														editor: ["wm._SelectEditor", {"dataField":"idCurso","displayField":"curso","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_encabezado_opciones_listaCurso2","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													calif_alumnos_panel1_butt_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"borderColor":"#FFCC00","caption":"","iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/trash-can.png","margin":"4","width":"48px"}, {"onclick":"calif_alumnos_panel1_butt_limpiarClick"}],
													calif_alumnos_panel1_spacer_spacer1: ["wm.Spacer", {"height":"48px","width":"100%"}, {}],
													calif_alumnos_panel1_butt_show: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"borderColor":"#D9D9D9","caption":"Ocultar","iconHeight":"20px","iconMargin":"","iconUrl":"resources/images/buttons/left.png","iconWidth":"30px","margin":"","width":"100px"}, {"onclick":"calif_alumnos_panel1_butt_showClick"}],
													calif_alumnos_panel1_butt_hide: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"borderColor":"#D9D9D9","caption":"Mostrar","iconHeight":"20px","iconMargin":"","iconUrl":"resources/images/buttons/right.png","iconWidth":"30px","margin":"","width":"100px"}, {"onclick":"calif_alumnos_panel1_butt_hideClick"}],
													spacer12: ["wm.Spacer", {"height":"48px","width":"3px"}, {}],
													spacer1: ["wm.Spacer", {"height":"48px","width":"2px"}, {}]
												}],
												calif_alumnos_panel_datagrids: ["wm.Panel", {"borderColor":"#000000","height":"402px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"3","verticalAlign":"top","width":"100%"}, {}, {
													calif_alumnos_datagrids_datag_alumnos_cursos: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#000000","width":"320px"}, {"onSelected":"calif_alumnos_datagrids_datag_alumnos_cursosSelected","onSelectionChanged":"calif_alumnos_datagrids_datag_alumnos_cursosSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_alumnos_alumnosCursos","targetProperty":"dataSet"}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"Estudiantes","columnWidth":"100%","dataExpression":"${id.apellido1}+\" \"+${id.apellido2}+\" \"+${id.nombre1}+\" \"+${id.nombre2}","field":"id.apellido1","index":1}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column8: ["wm.DataGridColumn", {"caption":"+","columnWidth":"64px","field":"id.idPersona"}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}]
													}],
													splitter6: ["wm.Splitter", {"height":"100%","width":"4px"}, {}],
													calif_alumnos_datagrids_datag_alumnos_asignaturas: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#000000"}, {"onSelected":"calif_alumnos_datagrids_datag_alumnos_asignaturasSelected","onSelectionChanged":"calif_alumnos_datagrids_datag_alumnos_asignaturasSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_alumnos_alumnos_asignaturas","targetProperty":"dataSet"}, {}]
														}],
														porcentaje2: ["wm.DataGridColumn", {"caption":"Porcentaje","columnWidth":"68px","display":"Number","field":"porcentaje","index":4}, {}, {
															format1: ["wm.NumberFormatter", {}, {}]
														}],
														esperados2: ["wm.DataGridColumn", {"caption":"Esperados","columnWidth":"68px","display":"Number","field":"esperados","index":2}, {}, {
															format1: ["wm.NumberFormatter", {}, {}]
														}],
														calificacion2: ["wm.DataGridColumn", {"caption":"Calificación","columnWidth":"57px","field":"calificacion","index":6}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														asignatura2: ["wm.DataGridColumn", {"caption":"Asignatura","columnWidth":"100%","field":"asignatura","index":1}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														logrados2: ["wm.DataGridColumn", {"caption":"Logrados","columnWidth":"59px","display":"Number","field":"logrados","index":3}, {}, {
															format1: ["wm.NumberFormatter", {}, {}]
														}],
														puntaje2: ["wm.DataGridColumn", {"caption":"Puntaje","columnWidth":"58px","display":"Number","field":"puntaje","index":5}, {}, {
															format1: ["wm.NumberFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"+","columnWidth":"65px","field":"idasignatura"}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}]
													}],
													unidad: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"unidadlv","targetProperty":"dataSet"}, {}]
														}],
														numeroUnidad2: ["wm.DataGridColumn", {"caption":"Nº Unidad","columnWidth":"82px","display":"Number","field":"numeroUnidad","index":2}, {}, {
															format1: ["wm.NumberFormatter", {}, {}]
														}],
														unidad2: ["wm.DataGridColumn", {"caption":"Unidad","columnWidth":"241px","field":"unidad","index":1}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														idUnidad2: ["wm.DataGridColumn", {"caption":"ID","field":"idUnidad"}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												aux13: ["wm.TextEditor", {"caption":"aux","disabled":true,"padding":"2","showing":false}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												panel50: ["wm.Panel", {"height":"349px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"3","verticalAlign":"top","width":"100%"}, {}, {
													subtopico: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"subtopicolv","targetProperty":"dataSet"}, {}]
														}],
														idSubtopico2: ["wm.DataGridColumn", {"caption":"ID","columnWidth":"88px","field":"idSubtopico","index":4}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														subtopico2: ["wm.DataGridColumn", {"caption":"Subtopico","columnWidth":"467px","field":"subtopico","index":6}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}]
													}],
													calif_alumnos_datagrids_datag_aprendizajes_asignaturas: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#000000","height":"345px"}, {"onSelected":"calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelected","onSelectionChanged":"calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_alumnos_aprendizajes","targetProperty":"dataSet"}, {}]
														}],
														fechaEsperada1: ["wm.DataGridColumn", {"caption":"Fecha esperada","columnWidth":"110px","display":"Date","field":"id.fechaEsperada","index":4}, {}, {
															format1: ["wm.DateFormatter", {}, {}]
														}],
														idAprendizaje1: ["wm.DataGridColumn", {"caption":"•","columnWidth":"85px","field":"id.idAprendizaje"}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														aprendizaje1: ["wm.DataGridColumn", {"caption":"Aprendizaje","columnWidth":"150%","field":"id.aprendizaje","index":2}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Subtopico","columnWidth":"100%","field":"id.subtopico","index":6}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"Unidad","columnWidth":"100%","field":"id.unidad","index":8}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Learning","columnWidth":"150%","field":"id.learning","index":3}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column5: ["wm.DataGridColumn", {"caption":"No. Unidad","columnWidth":"70px","display":"Number","field":"id.numeroUnidad","index":7}, {}, {
															format1: ["wm.NumberFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"No. Subtopico","columnWidth":"70px","display":"Number","field":"id.numeroSubtopico","index":5}, {}, {
															format1: ["wm.NumberFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Peso","columnWidth":"40px","field":"id.peso","index":1}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												panel51: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"3","verticalAlign":"top","width":"100%"}, {}, {
													inscalumaprendizajeGridPanel1: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundChromeBar_Blue wm_FontColor_White wm_FontSizePx_14px","title":"CALIFICACION"}, {}, {
														inscalumaprendizajeDataGrid2: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_12px"]}}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1","targetProperty":"dataSet"}, {}]
															}],
															idInscAlumAprendizaje2: ["wm.DataGridColumn", {"caption":"•","columnWidth":"100px","field":"idInscAlumAprendizaje"}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															fechaLogro2: ["wm.DataGridColumn", {"caption":"Fecha Logro","columnWidth":"119px","display":"Date","field":"fechaLogro","index":1}, {}, {
																format1: ["wm.DateFormatter", {}, {}]
															}],
															calificacion2: ["wm.DataGridColumn", {"caption":"Calificacion","columnWidth":"100px","field":"calificacion","index":2}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															comentario2: ["wm.DataGridColumn", {"caption":"Comentario","columnWidth":"100%","field":"comentario","index":3}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}]
														}],
														calif_alumnos_datag_calificacionFinal: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]}}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"l_calif_alumnos_calificaciones_finales","targetProperty":"dataSet"}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"Calificación","columnWidth":"140px","field":"id.calificacion","index":1}, {}, {
																format1: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Fecha Logro","columnWidth":"122px","display":"Date","field":"id.fechaLogro"}, {}, {
																format1: ["wm.DateFormatter", {}, {}]
															}],
															column1: ["wm.DataGridColumn", {"caption":"Calificación Númerica","columnWidth":"100%","display":"Number","field":"id.calificacionNum","index":2}, {}, {
																format1: ["wm.NumberFormatter", {"digits":2}, {}]
															}]
														}]
													}],
													inscalumaprendizajeDetailsPanel1: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundChromeBar_Blue wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px","title":"MODIFICAR CALIFICACION"}, {}, {
														inscalumaprendizajeLiveForm2: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"inscalumaprendizajeLiveForm2BeginInsert","onBeginUpdate":"inscalumaprendizajeLiveForm2BeginUpdate","onCancelEdit":"inscalumaprendizajeLiveForm2CancelEdit","onSuccess":"inscalumaprendizajeLiveForm2Success"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"inscalumaprendizajeDataGrid2.selectedItem","targetProperty":"dataSet"}, {}],
																wire1: ["wm.Wire", {"expression":undefined,"source":"aprendizajeRelatedEditor2.dataOutput","targetProperty":"dataOutput.aprendizaje"}, {}],
																wire2: ["wm.Wire", {"expression":undefined,"source":"inscAlumCursoRelatedEditor3.dataOutput","targetProperty":"dataOutput.inscAlumCurso"}, {}],
																wire3: ["wm.Wire", {"expression":undefined,"source":"personaRelatedEditor2.dataOutput","targetProperty":"dataOutput.persona"}, {}]
															}],
															panel52: ["wm.Panel", {"height":"266px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																layers9: ["wm.Layers", {"_classes":{"domNode":["wm_FontSizePx_12px"]}}, {}, {
																	layer23: ["wm.Layer", {"borderColor":"","caption":"layer23","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
																		idInscAlumAprendizajeEditor3: ["wm.Editor", {"caption":"ID","display":"Number","formField":"idInscAlumAprendizaje","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}],
																		fechaIngresoEditor3: ["wm.Editor", {"caption":"Fecha Ingreso","disabled":true,"display":"Date","formField":"fechaIngreso","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}],
																		fechaLogroEditor3: ["wm.Editor", {"caption":"Fecha Logro","display":"Date","formField":"fechaLogro","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																			editor: ["wm._DateEditor", {"required":true}, {}]
																		}],
																		calificacionEditor3: ["wm.Editor", {"caption":"Calificacion","display":"Select","formField":"calificacion","height":"26px","padding":"2","readonly":true,"width":"100%"}, {"onchange":"calificacionEditor3Change"}, {
																			editor: ["wm._SelectEditor", {"dataField":"dataValue","displayField":"dataValue","options":"En Progreso, Competente, Avanzado, Magistral"}, {}, {
																				optionsVar: ["wm.Variable", {"isList":true,"type":"StringData"}, {}]
																			}]
																		}],
																		calificacionNumEditor3: ["wm.Editor", {"caption":"CalificacionNum","disabled":true,"display":"Number","formField":"calificacionNum","height":"26px","padding":"2","readonly":true,"showing":false,"width":"100%"}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		calificacionNumEditor23: ["wm.TextEditor", {"caption":"Calificacion","disabled":true,"display":"Number","formField":"calificacionNum","padding":"2","readonly":true,"width":"100%"}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}]
																	}]
																}],
																layers8: ["wm.Layers", {"_classes":{"domNode":["wm_FontSizePx_12px"]}}, {}, {
																	layer22: ["wm.Layer", {"borderColor":"","caption":"layer22","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
																		comentarioEditor3: ["wm.Editor", {"caption":"Comentario","captionAlign":"left","captionPosition":"top","display":"TextArea","formField":"comentario","height":"132px","padding":"2","readonly":true,"width":"100%"}, {}, {
																			editor: ["wm._TextAreaEditor", {}, {}]
																		}],
																		aprendizajeRelatedEditor2: ["wm.RelatedEditor", {"formField":"aprendizaje","lock":true}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"expression":undefined,"source":"inscalumaprendizajeDataGrid2.selectedItem.aprendizaje","targetProperty":"dataSet"}, {}]
																			}],
																			aprendizajeLookup3: ["wm.Editor", {"caption":"ID Aprendizaje","display":"Number","formField":"idAprendizaje","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}],
																		personaRelatedEditor2: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"expression":undefined,"source":"inscalumaprendizajeDataGrid2.selectedItem.persona","targetProperty":"dataSet"}, {}]
																			}],
																			personaLookup3: ["wm.Editor", {"caption":"ID Persona","display":"Number","formField":"idPersona","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}]
																	}]
																}]
															}],
															panel105: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
																aux199: ["wm.TextEditor", {"caption":"auxIDPersona","padding":"2","width":"100%"}, {}, {
																	editor: ["wm._TextEditor", {}, {}]
																}],
																aux200: ["wm.TextEditor", {"caption":"auxIDAprendizaje","padding":"2","width":"100%"}, {}, {
																	editor: ["wm._TextEditor", {}, {}]
																}]
															}],
															editPanel10: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"isCustomized":true,"liveForm":"inscalumaprendizajeLiveForm2","lock":false,"operationPanel":"operationPanel10","savePanel":"savePanel10"}, {}, {
																savePanel10: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
																	saveButton10: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel10.saveData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"expression":undefined,"source":"editPanel10.formInvalid","targetProperty":"disabled"}, {}]
																		}]
																	}],
																	cancelButton10: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel10.cancelEdit"}]
																}],
																operationPanel10: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																	newButton10: ["wm.RoundedButton", {"caption":"Nueva Calificacion","height":"100%","margin":"2","width":"170px"}, {"onclick":"editPanel10.beginDataInsert"}],
																	updateButton10: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2","width":"138px"}, {"onclick":"editPanel10.beginDataUpdate"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"expression":undefined,"source":"editPanel10.formUneditable","targetProperty":"disabled"}, {}]
																		}]
																	}],
																	deleteButton10: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel10.deleteData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"expression":undefined,"source":"editPanel10.formUneditable","targetProperty":"disabled"}, {}]
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
									calif_panel_contenedor_promocion: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"roles":["6","7","10","9","11","13","25"],"showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										calif_panel_contenedor_top: ["wm.Layers", {}, {}, {
											calif_layer_contenedor_promocion: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
												promociones_panel_top: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
													promocion_sel_ao_escolar: ["wm.SelectEditor", {"caption":"Año Escolar","captionSize":"70%","padding":"2","width":"220px"}, {}, {
														editor: ["wm._SelectEditor", {"dataField":"idSy","displayField":"schoolYear","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"a_lista_sy","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													promocion_sel_grado: ["wm.SelectEditor", {"caption":"Grado","padding":"2","width":"160px"}, {"onchange":"promocion_sel_gradoChange"}, {
														editor: ["wm._SelectEditor", {"dataField":"idGrado","displayField":"grado","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"a_grado","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													promocion_sel_curso: ["wm.SelectEditor", {"caption":"Curso","padding":"2","width":"160px"}, {}, {
														editor: ["wm._SelectEditor", {"dataField":"idCurso","displayField":"curso","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"l_promocion_curso","targetProperty":"dataSet"}, {}]
															}]
														}]
													}],
													promocion_box_codigo: ["wm.NumberEditor", {"caption":"Codigo","display":"Text","padding":"2","roles":["7","25","10"]}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													promocion_butt_buscar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"borderColor":"#3366CC","caption":"Buscar","margin":"4","width":"96px"}, {"onclick":"l_promocion_insc_alum_curso"}],
													promocion_butt_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_BackgroundColor_LightGray"]},"border":"0","borderColor":"#FFFFFF","caption":"Limpiar","margin":"4","width":"96px"}, {"onclick":"promocion_butt_limpiarClick"}],
													button3: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightGray","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"border":"0","caption":"","iconUrl":"resources/images/ico/refresh.png","margin":"4","width":"40px"}, {"onclick":"l_promocion_promocionLiveVariable1"}]
												}],
												promocion_panel_container: ["wm.Panel", {"height":"804px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
													promocion_container_datag_personas_x_curso: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]}}, {"onSelected":"l_promocion_promocionLiveVariable1","onSelectionChanged":"promocion_container_datag_personas_x_cursoSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"expression":undefined,"source":"l_promocion_insc_alum_curso","targetProperty":"dataSet"}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"●","columnWidth":"80px","field":"id.codigo"}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Apellidos","columnWidth":"100%","dataExpression":"${id.apellido1}+\" \"+${id.apellido2}","field":"id.apellido1","index":1}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Nombres","columnWidth":"100%","dataExpression":"${id.nombre1}+\" \"+${id.nombre2}","field":"id.nombre1","index":2}, {}, {
															format1: ["wm.DataFormatter", {}, {}]
														}]
													}],
													panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
														promocionLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
															promocionGridPanel: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","height":"20%","margin":"1","title":""}, {}, {
																promocionDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]}}, {"onSelected":"promocionDataGrid1Selected"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"expression":undefined,"source":"l_promocion_promocionLiveVariable1","targetProperty":"dataSet"}, {}]
																	}],
																	column2: ["wm.DataGridColumn", {"caption":"Aprobado","columnWidth":"90%","dataExpression":"if(${aprobado}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${aprobado}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } ","field":"aprobado","index":1}, {}, {
																		format1: ["wm.DataFormatter", {}, {}]
																	}],
																	column3: ["wm.DataGridColumn", {"caption":"Promovido","columnWidth":"90%","dataExpression":"if(${promovido}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${promovido}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } ","field":"promovido","index":2}, {}, {
																		format1: ["wm.DataFormatter", {}, {}]
																	}],
																	column4: ["wm.DataGridColumn", {"caption":"Autorización Docencia","columnWidth":"90%","dataExpression":"if(${autorizadoAcademico}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoAcademico}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } ","field":"autorizadoAcademico","index":3}, {}, {
																		format1: ["wm.DataFormatter", {}, {}]
																	}],
																	column5: ["wm.DataGridColumn", {"caption":"Autorización Financiera","columnWidth":"90%","dataExpression":"if(${autorizadoFinanciera}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoFinanciera}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } ","field":"autorizadoFinanciera","index":4}, {}, {
																		format1: ["wm.DataFormatter", {}, {}]
																	}],
																	column1: ["wm.DataGridColumn", {"caption":"Calificación","columnWidth":"75%","field":"calificacionChar","index":5}, {}, {
																		format1: ["wm.DataFormatter", {}, {}]
																	}],
																	column6: ["wm.DataGridColumn", {"caption":"Año Escolar","columnWidth":"80px","field":"sy.schoolYear","index":6}, {}, {
																		format1: ["wm.DataFormatter", {}, {}]
																	}],
																	column7: ["wm.DataGridColumn", {"caption":"•","columnWidth":"60px","field":"idPromocion"}, {}, {
																		format1: ["wm.DataFormatter", {}, {}]
																	}]
																}]
															}],
															promocionDetailsPanel: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","title":"Formulario Acciones de Promoción"}, {}, {
																promocionLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"promocionLiveForm1BeginInsert","onBeginUpdate":"promocionLiveForm1BeginUpdate","onCancelEdit":"promocionLiveForm1CancelEdit","onInsertData":"promocionLiveForm1InsertData","onSuccess":"l_promocion_promocionLiveVariable1","onUpdateData":"promocionLiveForm1UpdateData"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"expression":undefined,"source":"promocionDataGrid1.selectedItem","targetProperty":"dataSet"}, {}],
																		wire1: ["wm.Wire", {"expression":undefined,"source":"syRelatedEditor1.dataOutput","targetProperty":"dataOutput.sy"}, {}],
																		wire2: ["wm.Wire", {"expression":undefined,"source":"personaRelatedEditor5.dataOutput","targetProperty":"dataOutput.persona"}, {}]
																	}],
																	editPanel3: ["wm.EditPanel", {"isCustomized":true,"liveForm":"promocionLiveForm1","lock":false,"operationPanel":"operationPanel3","savePanel":"savePanel3"}, {}, {
																		savePanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
																			saveButton3: ["wm.RoundedButton", {"caption":"Guardar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel3.saveData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"expression":undefined,"source":"editPanel3.formInvalid","targetProperty":"disabled"}, {}]
																				}]
																			}],
																			cancelButton3: ["wm.RoundedButton", {"caption":"Cancelar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel3.cancelEdit"}]
																		}],
																		operationPanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																			newButton3: ["wm.RoundedButton", {"caption":"Nuevo","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel3.beginDataInsert"}],
																			updateButton3: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel3.beginDataUpdate"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"expression":undefined,"source":"editPanel3.formUneditable","targetProperty":"disabled"}, {}]
																				}]
																			}],
																			deleteButton3: ["wm.RoundedButton", {"caption":"Borrar","height":"100%","margin":"2","width":"100px"}, {"onclick":"editPanel3.deleteData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"expression":undefined,"source":"editPanel3.formUneditable","targetProperty":"disabled"}, {}]
																				}]
																			}]
																		}]
																	}],
																	idPromocionEditor1: ["wm.Editor", {"caption":"ID Promocion","display":"Number","formField":"idPromocion","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	aprobadoEditor1: ["wm.Editor", {"caption":"Aprobado","disabled":true,"display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"aprobado","height":"26px","padding":"2","readonly":true,"roles":["6","9","10","11","23","24"],"width":"100%"}, {"onchange":"aprobadoEditor1Change"}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentaprobadoEditor1: ["wm.Editor", {"caption":"Comentario de Aprobación","display":"TextArea","formField":"commentaprobado","height":"60px","padding":"2","readonly":true,"roles":["6","9","10","11","23","24"],"width":"100%"}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	promovidoEditor1: ["wm.Editor", {"caption":"Promovido","disabled":true,"display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"promovido","height":"26px","padding":"2","readonly":true,"roles":["6","9","10","23","24"],"width":"100%"}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentpromovidoEditor1: ["wm.Editor", {"caption":"Comentario de Promoción","disabled":true,"display":"TextArea","formField":"commentpromovido","height":"60px","padding":"2","readonly":true,"roles":["23","24","6","9","10","11"],"width":"100%"}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoAcademicoEditor1: ["wm.Editor", {"caption":"Autorización Docencia","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"autorizadoAcademico","height":"26px","padding":"2","readonly":true,"roles":["6","9","10","11","22","23"],"width":"100%"}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentcomiteEditor1: ["wm.Editor", {"caption":"Comentario de Autorización Docente","display":"TextArea","formField":"commentcomite","height":"60px","padding":"2","readonly":true,"roles":["23","24","6","9","10","11"],"width":"100%"}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoFinancieraEditor1: ["wm.Editor", {"caption":"Autorización Financiera","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"autorizadoFinanciera","height":"26px","padding":"2","readonly":true,"roles":["7","25"],"width":"100%"}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentfinancEditor1: ["wm.Editor", {"caption":"Comentario de Autorización Financiera","display":"TextArea","formField":"commentfinanc","height":"60px","padding":"2","readonly":true,"roles":["7","25"],"width":"100%"}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoPromAnticipadaEditor1: ["wm.Editor", {"caption":"Autorizado Promoción Anticipada","captionSize":"80%","display":"CheckBox","displayValue":true,"emptyValue":"false","formField":"autorizadoPromAnticipada","height":"26px","padding":"2","readonly":true,"roles":["6","9","10","11","23","24"],"width":"100%"}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	calificacionEditor5: ["wm.Editor", {"caption":"Puntaje","disabled":true,"display":"Number","formField":"calificacion","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	calificacionCharEditor1: ["wm.Editor", {"caption":"Calificación","disabled":true,"formField":"calificacionChar","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																		editor: ["wm._TextEditor", {}, {}]
																	}],
																	syRelatedEditor1: ["wm.RelatedEditor", {"formField":"sy"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"expression":undefined,"source":"promocionDataGrid1.selectedItem.sy","targetProperty":"dataSet"}, {}],
																			wire: ["wm.Wire", {"expression":undefined,"source":"syLookup1.selectedItem","targetProperty":"dataOutput"}, {}]
																		}],
																		syLookup1: ["wm.Editor", {"caption":"ID Año Escolar","disabled":true,"display":"Lookup","displayValue":"2010-2011","formField":"","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																			editor: ["wm._LookupEditor", {"autoDataSet":false,"displayField":"schoolYear","required":true,"startUpdate":false}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"expression":undefined,"source":"a_lista_sy","targetProperty":"dataSet"}, {}]
																				}]
																			}]
																		}]
																	}],
																	panel10: ["wm.Panel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																		personaRelatedEditor5: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"expression":undefined,"source":"promocionDataGrid1.selectedItem.persona","targetProperty":"dataSet"}, {}],
																				wire: ["wm.Wire", {"expression":undefined,"source":"personaLookup5.selectedItem","targetProperty":"dataOutput"}, {}]
																			}],
																			personaLookup2: ["wm.Editor", {"caption":"ID Persona","display":"Number","formField":"idPersona","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}]
																	}],
																	panel11: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
																		promocion_butt_promover: ["wm.Button", {"caption":"FINALIZAR Y PROMOVER","height":"100%","iconMargin":"0 0px 0 0","iconUrl":"resources/images/ico/route.png","margin":"4","showing":false,"width":"100%"}, {}]
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
												asignaturaGridPanel3: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","height":"573px","margin":"0","title":"Tabla Asignatura"}, {}, {
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
												asignaturaDetailsPanel1: ["wm.FancyPanel", {"captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","title":"Asignaturas"}, {}, {
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
																	intensidadHorariaEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue"]},"caption":"I.H Total Asignatura","captionSize":"120%","disabled":true,"display":"Number","formField":"intensidadHoraria","height":"26px","padding":"2","readonly":true,"width":"100%"}, {}, {
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
					panelFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_LightGray","wm_FontSizePx_14px"]},"align":"right","caption":"<font color=\"red\">Aprendoz® | Colegio Rochester  2012-2013</font>","height":"48px","padding":"10,20","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}