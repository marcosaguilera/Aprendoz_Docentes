dojo.declare("Respuesta", wm.Page, {
  start: function() {
    
  },
  limpiarPlanClick: function(inSender, inEvent) {
    try {
     this.pregunta1Box.clear();
     this.pregunta2Box.clear();
     this.pregunta3Box.clear();
     this.fechaPlanBox.clear();
      
    } catch(e) {
      console.error('ERROR IN limpiarPlanClick: ' + e); 
    } 
  },
  guardarPlanClick: function(inSender, inEvent) {
    try {
     var pr1= this.pregunta1Box.getDataValue();
     var pr2= this.pregunta2Box.getDataValue();
     var pr3= this.pregunta3Box.getDataValue();
     var fpn= this.fechaPlanBox.getDataValue();
     var idp= this.idBox.getDataValue();   
     this.a_crearPlan.input.setValue("p1",pr1);
     this.a_crearPlan.input.setValue("p2",pr2);
     this.a_crearPlan.input.setValue("p3",pr3);
     this.a_crearPlan.input.setValue("fecha_plan",fpn);
     this.a_crearPlan.input.setValue("id",idp);
     this.a_crearPlan.update();
         
    } catch(e) {
      console.error('ERROR IN guardarPlanClick: ' + e); 
    } 
  },
  a_crearPlanSuccess: function(inSender, inDeprecated) {
    try {
      this.avisoOk.show();
      this.avisoOk.setCaption("Plan guardado exitosamente!");
    //  app.involved.update();
    //this.Reg_eventualidades.page.eventualidadesLiveVariable1.update();
    wm.Page.getPage("Reg_eventualidades").listViewer.rowRenderers[index].eventualidadesLiveVariable1.update();
      
    } catch(e) {
      console.error('ERROR IN a_crearPlanSuccess: ' + e); 
    } 
  },
  _end: 0
});