Login.widgets = {
	layoutBox: ["wm.Layout", {"width":"649px"}, {}, {
		spacer2: ["wm.Spacer", {"height":"100%","styles":{},"width":"96px"}, {}],
		panel1: ["wm.Panel", {"height":"80px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			panel_image: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"middle","width":"350px"}, {}, {
				picture1: ["wm.Picture", {"aspect":"v","height":"52px","source":"http://aprendoz.rochester.edu.co/recursos/logo_aprendoz_nuevo.png","styles":{},"width":"244px"}, {}]
			}]
		}],
		loginMainPanel: ["wm.Panel", {"height":"280px","layoutKind":"left-to-right"}, {}, {
			spacer5: ["wm.Spacer", {"width":"100%"}, {}],
			loginInputPanel: ["wm.Panel", {"borderColor":"#ffffff","padding":"10","styles":{},"width":"350px"}, {}, {
				label2: ["wm.Label", {"align":"center","caption":"Aprendoz Docentes","height":"48px","padding":"4","styles":{},"width":"96px"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				usernameInput: ["wm.Editor", {"caption":"Usuario","captionSize":"100px","height":"40px","padding":"2","styles":{},"width":"130px"}, {}, {
					editor: ["wm._TextEditor", {}, {}]
				}],
				passwordInput: ["wm.Editor", {"caption":"Contraseña","captionSize":"100px","height":"40px","padding":"2","styles":{}}, {}, {
					editor: ["wm._TextEditor", {"password":true}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"44px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4"}, {}, {
					passObject1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"align":"center","caption":"¿No puedes acceder a tu cuenta?","height":"32px","link":"http://aprendoz.rochester.edu.co/forgot-password","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_TextDecoration_Bold","wm_FontSizePx_12px"]},"border":"0","borderColor":"#aaa","caption":"Acceder","height":"100%","iconHeight":"20px","iconMargin":"0 -20px 0 0","iconUrl":"resources/images/buttons/login.png","iconWidth":"40px","margin":"0","width":"110px"}, {"onclick":"loginButtonClick"}]
				}],
				spacer3: ["wm.Spacer", {"height":"11px"}, {}],
				loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4","styles":{}}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}],
			spacer4: ["wm.Spacer", {"styles":{},"width":"100%"}, {}]
		}],
		spacer1: ["wm.Spacer", {"height":"100%","styles":{},"width":"96px"}, {}],
		panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			label1: ["wm.Label", {"align":"center","caption":"Colegio Rochester  - Aprendoz - 2014-2015","height":"48px","padding":"4","styles":{"fontSize":"12px"},"width":"513px"}, {}, {
				format: ["wm.DataFormatter", {}, {}]
			}]
		}]
	}]
}