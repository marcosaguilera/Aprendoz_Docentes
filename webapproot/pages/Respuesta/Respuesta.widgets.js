Respuesta.widgets = {
	a_crearPlan: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"crearPlan"}, {"onSuccess":"a_crearPlanSuccess"}, {
		input: ["wm.ServiceInput", {"type":"crearPlanInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","width":"100%","horizontalAlign":"center","verticalAlign":"middle","padding":"15"}, {}, {
		layers1: ["wm.Layers", {}, {}, {
			layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top","borderColor":"#000000"}, {}, {
				panel2: ["wm.Panel", {"height":"60px","horizontalAlign":"left","verticalAlign":"bottom","width":"100%","layoutKind":"left-to-right"}, {}, {
					infoEventualidad: ["wm.Label", {"height":"110%","width":"100%","border":"0","singleLine":false}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				spacer1: ["wm.Spacer", {"height":"15px","width":"96px"}, {}],
				label2: ["wm.Label", {"caption":"Los campos que contiene (<font color=\"red\">*</font>) son requeridos","height":"24px","width":"100%","border":"0","align":"right"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				pregunta1Box: ["wm.TextAreaEditor", {"height":"100px","width":"100%","captionAlign":"left","caption":"¿Qué DESEO lograr con mi Plan de Reparación?","captionPosition":"top"}, {}, {
					editor: ["wm._TextAreaEditor", {"required":true}, {}]
				}],
				pregunta2Box: ["wm.TextAreaEditor", {"height":"100px","width":"100%","captionAlign":"left","caption":"¿Qué voy a HACER para reparar mi falta?","captionPosition":"top"}, {}, {
					editor: ["wm._TextAreaEditor", {"required":true}, {}]
				}],
				pregunta3Box: ["wm.TextAreaEditor", {"height":"100px","width":"100%","captionAlign":"left","caption":"¿Cómo SABRÉ que mi falta está reparada?","captionPosition":"top"}, {}, {
					editor: ["wm._TextAreaEditor", {"required":true}, {}]
				}],
				fechaPlanBox: ["wm.DateEditor", {"width":"100%","caption":"Fecha de Evaluación del Plan de Reparación","captionSize":"160%"}, {}, {
					editor: ["wm._DateEditor", {"required":true}, {}]
				}],
				idBox: ["wm.TextEditor", {"width":"100%","caption":"ID Eventualidad","showing":false,"captionSize":"160%","readonly":true}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"right","verticalAlign":"top","width":"100%","layoutKind":"left-to-right"}, {}, {
					avisoOk: ["wm.Label", {"height":"100%","width":"100%","border":"0","align":"center","showing":false}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					guardarPlan: ["wm.Button", {"caption":"Guardar","width":"114px","height":"100%","borderColor":"#4D90FE","iconUrl":"resources/images/buttons/guardarplan.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 1px 0 0"}, {"onclick":"guardarPlanClick"}],
					limpiarPlan: ["wm.Button", {"caption":"Limpiar","width":"96px","height":"100%","borderColor":"#c6c6c6","iconUrl":"resources/images/buttons/limpiarPlan.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 1px 0 0"}, {"onclick":"limpiarPlanClick"}]
				}]
			}]
		}]
	}]
}