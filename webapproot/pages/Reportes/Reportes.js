dojo.declare("Reportes", wm.Page, {
  start: function() {

  },
  search_user_complex_boxChange: function(inSender, inDisplayValue, inDataValue) {
    try {
     this.buscar_butt.click();
      
    } catch(e) {
      console.error('ERROR IN search_user_complex_boxChange: ' + e); 
    }},
  buscar_buttClick: function(inSender, inEvent) {
    try {
     this.searchUser.update();
      
    } catch(e) {
      console.error('ERROR IN buscar_buttClick: ' + e); 
    }},
    
  alumnosDojoGridSelectionChange: function(inSender) {
    try {
     this.idp_box.show();
     var index = this.alumnosDojoGrid.getSelectedIndex();
     var idp = this.alumnosDojoGrid.getCell(index, "id");
     this.idp_box.setDataValue(idp);
      
    } catch(e) {
      console.error('ERROR IN alumnosDojoGridSelectionChange: ' + e); 
    }},
  
  alumnosDataGridSelected: function(inSender, inIndex) {
    try {
      var idpersona = app.pageDialog.page.alumnosDataGrid.selectedItem.getData().id;
      console.log(idpersona);
      this.idp_box.setDataValue(idpersona);
      
    } catch(e) {
      console.error('ERROR IN alumnosDataGridSelected: ' + e); 
    } 
  },
  
  /* implementacion de reportes */
  generar_buttClick: function(inSender, inEvent) {
    try {
    var codigoRep = main.reportes_graficos_listado_reportes.selectedItem.getData().id.codigo;   
    if(codigoRep=="REC001"){ 
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var formatType= this.formato_box.getDisplayValue();
      var dt1 = this.fecha1_dt.getDataValue();
      var dt2 = this.fecha2_dt.getDataValue(); 
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC001",
               format: formatType,
               params: { fecha1: dt1, fecha2: dt2 }
         }
       });
       inEvent.preventDefault();
    }
    if(codigoRep=="REC002"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var psy= this.sy_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC002",
               format: formatType,
               params: { sy: psy }
         }
       });
       inEvent.preventDefault();
    }
    if(codigoRep=="REC003"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var psy= this.sy_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC003",
               format: formatType,
               params: { sy: psy }
         }
       });
       inEvent.preventDefault();
    }
    if(codigoRep=="REC004"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var psy= this.sy_box.getDataValue();
      var pidp= this.idp_box.getDataValue();
      var dt1 = this.fecha1_dt.getDisplayValue();
          var year= dt1.substring(6, 10);
          var month= dt1.substring(3,5);
          var day= dt1.substring(0,2);
          var desde= year+"-"+month+"-"+day;
      var dt2 = this.fecha2_dt.getDisplayValue(); 
          var year= dt2.substring(6, 10);
          var month= dt2.substring(3,5);
          var day= dt2.substring(0,2);
          var hasta= year+"-"+month+"-"+day;
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC004",
               format: formatType,
               params: { sy: psy, idpersona: pidp, fechadesde: desde, fechahasta: hasta }
         }
       });
       inEvent.preventDefault();
    }
    if(codigoRep=="REC005"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var psy= this.sy_box.getDataValue();
      var pnivel= this.nivel_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC005",
               format: formatType,
               params: { sy: psy, nivel: pnivel }
         }
       });
       inEvent.preventDefault();
    }
    if(codigoRep=="REC006"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var psy= this.sy_box.getDataValue();
      var pidp= this.idp_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC006",
               format: formatType,
               params: { sy: psy, idpersona: pidp }
         }
       });
       inEvent.preventDefault();
    }
    if(codigoRep=="REC007"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var num_bajo= this.num_asig_bajo.getDataValue();
      var idperiodo= this.periodo_box.getDataValue();
      var pnivel= this.nivel_box.getDataValue(); 
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC007",
               format: formatType,
               params: { periodo: idperiodo, numero_asig: num_bajo, nivel: pnivel }
         }
       });
       inEvent.preventDefault();
    }
    if(codigoRep=="REC008"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var c1= this.desde_curso_box.getDataValue();
      var c2= this.hasta_curso_box.getDataValue();
      var idperiodo= this.periodo_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC008",
               format: formatType,
               params: { curso: c1, curso2: c2, periodo: idperiodo }
         }
       });
       inEvent.preventDefault();
    }
    if(codigoRep=="REC009"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var idperiodo= this.periodo_box.getDataValue();
      var pgrado= this.grado_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC009",
               format: formatType,
               params: { periodo: idperiodo, grado: pgrado }
         }
       });
       inEvent.preventDefault();
    }
    
    if(codigoRep=="REC010"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var idperiodo= this.periodo_box.getDataValue();
      var pnivel= this.nivel_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC010",
               format: formatType,
               params: { periodo: idperiodo, nivel: pnivel }
         }
       });
       inEvent.preventDefault();
    }
    
    if(codigoRep=="REC012"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var pgrado= this.grado_box.getDataValue();
      var psy= this.sy_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC012",
               format: formatType,
               params: { sy: psy, grado: pgrado }
         }
       });
       inEvent.preventDefault();
    }
    
    if(codigoRep=="REC013"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var psy= this.sy_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC013",
               format: formatType,
               params: { sy: psy }
         }
       });
       inEvent.preventDefault();
     }
     
     if(codigoRep=="REC014"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var psy= this.sy_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {       
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC014",
               format: formatType,
               params: { sy: psy }
         }
       });
       inEvent.preventDefault();
     }
     
     if(codigoRep=="REC015"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var psy= this.sy_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC015",
               format: formatType,
               params: { sy: psy }
         }
       });
       inEvent.preventDefault();
     }
     
     if(codigoRep=="REC024"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var pgrado= this.nivel_esperado.getDataValue();
      var pureDate= this.fecha1_dt.getDataValue();
        var fecha = new Date(pureDate);   
        var year = fecha.getFullYear();
        var month= fecha.getMonth()+1;
        var day= fecha.getDate();
          if(month <10){ 
              var fullDate= year+"-0"+month+"-"+day;
              }
          else{
             var fullDate= year+"-"+month+"-"+day;
          }               
      var ppeso= this.peso_aprendizaje.getDataValue();    
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC024",
               format: formatType,
               params: { grado: pgrado, peso: ppeso, fechaesperada: fullDate }
         }
       });
       inEvent.preventDefault();
    }
    
    if(codigoRep=="REC025"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;    
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC025",
               format: formatType,
               params: {  }
         }
       });
       inEvent.preventDefault();
    }
    
    if(codigoRep=="REC026"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave; 
      var psy= this.sy_box.getDataValue();
      var pgrado= this.grado_box.getDataValue(); 
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC026",
               format: formatType,
               params: {grado: pgrado, sy: psy  }
         }
       });
       inEvent.preventDefault();
    }
    
    if(codigoRep=="REC027"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave; 
      var pnivel=   this.nivel_box.getDataValue();
      var pperiodo= this.periodo_box.getDataValue();
      var ppuntaje=  this.puntaje.getDataValue();
      var numero=   this.num_asig_bajo.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC027",
               format: formatType,
               params: {nivel: pnivel, periodo: pperiodo, numero_asig: numero, puntaje: ppuntaje  }
         }
       });
       inEvent.preventDefault();
    }

    
    if(codigoRep=="REC028"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;    
      var pidp= this.idp_box.getDataValue();
      var pfecha= this.fechaBimestre.getDataValue();
      debugger;
      alert(pfecha);
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/REC028",
               format: formatType,
               params: { idpersona: pidp, fecha: pfecha }
         }
       });
       inEvent.preventDefault();
    }
     
     if(codigoRep=="DOC001"){
      main.a_informacionUsuario.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var psy= this.sy_box.getDataValue();
      var psemana = this.semana_box.getDataValue();
      var c1= this.desde_curso_box.getDataValue();
      var c2= this.hasta_curso_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        preparingMessageHtml: "Aprendoz esta preparando tu reporte, por favor espera...",
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/DOC001",
               format: formatType,
               params: { sy: psy, semana: psemana, curso: c1, cursofinal: c2 }
         }
       });
       inEvent.preventDefault();
     }
     if(codigoRep=="EVE002"){
      main.a_informacionUsuario2.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var c2= this.hasta_curso_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/EVE002",
               format: formatType,
               params: { curso: c2}
         }
       });
       inEvent.preventDefault();
     }
     
     if(codigoRep=="EVE003"){
      main.a_informacionUsuario2.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var pidp= this.idp_box.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/EVE003",
               format: formatType,
               params: { idpersona: pidp}
         }
       });
       inEvent.preventDefault();
     }
     
     if(codigoRep=="EVE004"){
      main.a_informacionUsuario2.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var tipo=  this.tipoeventualidad.getDataValue();
      var cant= this.numero_eventualidades.getDataValue();
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/EVE004",
               format: formatType,
               params: {tipo_eventualidad: tipo, n_eventualidades: cant}
         }
       });
       inEvent.preventDefault();
     }
     
     if(codigoRep=="EVE005"){
      main.a_informacionUsuario2.update();
      var getter = main.a_informacionUsuario2.getItem(0);
      var id= getter.data.idpersona;
      var clave= getter.data.clave;
      var formatType= this.formato_box.getDisplayValue();
      $.fileDownload("http://aprendoz.rochester.edu.co/wsreport/runreport?callback=?", {
        failMessageHtml: "Hubo un problema generando tu reporte, por favor intenta de nuevo.",
        httpMethod: "POST",
        data:{ idp: id, 
               pass: clave,
               uri: "/aprendozreports/EVE005",
               format: formatType,
               params: {}
         }
       });
       inEvent.preventDefault();
     }

    } catch(e) {
      console.error('ERROR IN generar_buttClick: ' + e); 
    } 
  },
  
  limpiar_buttClick: function(inSender, inEvent) {
    try {
     this.sy_box.clear();
     this.periodo_box.clear();
     this.idp_box.clear();
     this.nivel_box.clear();
     this.grado_box.clear();
     this.curso_box.clear();
     this.search_user_complex_box.clear();
     this.alumnosDojoGrid.clear();
     this.num_asig_bajo.clear();
     this.desde_curso_box.clear();
     this.hasta_curso_box.clear();
     this.fecha1_dt.clear();
     this.fecha2_dt.clear(); 
      
    } catch(e) {
      console.error('ERROR IN limpiar_buttClick: ' + e); 
    } 
  },
  
  
  
  _end: 0
});