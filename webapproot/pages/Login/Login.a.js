/*
*  Copyright (C) 2010 WaveMaker Software, Inc.
*
*  This file is part of the WaveMaker Client Runtime.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
*/
dojo.declare("Login", wm.Page, {
"preferredDevice": "desktop",
start: function() {
this.connect(this.domNode, "keydown", this, "keydown");
this.usernameInput.setDataValue(dojo.cookie("user") || "");
this.usernameInput.focus();
},
keydown: function(e) {
if (e.keyCode == dojo.keys.ENTER) {
this.loginButton.domNode.focus();
}
},
loginButtonClick: function(inSender) {
dojo.cookie("user", this.usernameInput.getDataValue(), {expires: 365});
this.loginErrorMsg.setCaption("");
wm.login(
[this.usernameInput.getDataValue(), this.passwordInput.getDataValue()],
null, dojo.hitch(this, "loginFailed"));
},
loginFailed: function(inResponse) {
this.loginErrorMsg.setCaption("Usuario y/o Contraseña invalido!");
this.usernameInput.focus();
},
_end: 0
});

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
};

Login.prototype._cssText = '.Login .Login-loginErrorMsg {\
font-family: "Scada", sans-serif;\
font-size: 13px;\
color: #a62121;\
letter-spacing: -0.05em;\
line-height: 20px;\
margin: 10px 0 30px;\
}\
.Login .Login-passObject1{\
font-size: 12px;\
text-decoration: none;\
}\
.Login .Login-layoutBox {\
background-image: url(http://aprendoz.rochester.edu.co/recursos/IMG_2128.jpg);\
background-size: cover;\
background-repeat: no-repeat;\
}\
.Login .Login-panel_image {\
background-color: #fff;\
border-radius: 4px 4px 0 0;\
}\
#login_panel2 {\
background-color: #fff;\
opacity: 0.7;\
}\
.Login .Login-loginInputPanel {\
border-radius: 0 0 4px 4px;\
background-color: #fff;\
}\
.Login .Login-label2 {\
font-family: "Scada", sans-serif;\
font-size: 19px;\
color: #a62121;\
letter-spacing: -0.05em;\
line-height: 20px;\
margin: 10px 0 30px;\
}\
.Login .Login-usernameInput {\
border: 1px solid #c8c8c8;\
color: #777;\
margin: 0 0 10px;\
padding: 15px 10px 15px 40px;\
}\
.Login .Login-loginButton {\
background: rgb(247,249,250);\
background: -moz-linear-gradient(top, rgba(247,249,250,1) 0%, rgba(240,240,240,1) 100%);\
background: -webkit-linear-gradient(top, rgba(247,249,250,1) 0%,rgba(240,240,240,1) 100%);\
background: -o-linear-gradient(top, rgba(247,249,250,1) 0%,rgba(240,240,240,1) 100%);\
background: -ms-linear-gradient(top, rgba(247,249,250,1) 0%,rgba(240,240,240,1) 100%);\
background: linear-gradient(top, rgba(247,249,250,1) 0%,rgba(240,240,240,1) 100%);\
cursor: pointer;\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#f7f9fa", endColorstr="#f0f0f0",GradientType=0 );\
-webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\
-moz-box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\
-ms-box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\
-o-box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\
box-shadow: 0 1px 2px rgba(0,0,0,0.1) inset;\
-webkit-border-radius: 0 0 5px 5px;\
-moz-border-radius: 0 0 5px 5px;\
-o-border-radius: 0 0 5px 5px;\
color: #7E7E7E;\
-ms-border-radius: 5px 5px 5px 5px;\
border-radius: 5px 5px 5px 5px;\
border-top: 1px solid #CFD5D9;\
}\
.Login .Login-passwordInput {\
border: 1px solid #c8c8c8;\
color: #777;\
margin: 0 0 10px;\
padding: 15px 10px 15px 40px;\
}\
';
Login.prototype._htmlText = '<div id="sample">Sample Markup</div>\
';