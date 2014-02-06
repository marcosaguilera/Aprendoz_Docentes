import org.hibernate.Session;
import org.hibernate.Query;
import com.wavemaker.runtime.RuntimeAccess;
import com.aprendoz_test.*;
import org.hibernate.SQLQuery;

import java.util.List;
import java.util.ArrayList;

import java.util.*;
import java.io.*;
import java.text.SimpleDateFormat;
import java.lang.String;

import java.util.logging.Logger;


public class actualiza_calif extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public actualiza_calif() {
       super(INFO);
    }

    private Aprendoz_test trae_Servicio(){
      Aprendoz_test servicio = (Aprendoz_test) RuntimeAccess.getInstance().getService(Aprendoz_test.class);
      return servicio;
    }

    public Integer corre_proc_calcula_calif_est(Integer Pr_Id_Persona, Integer Pr_Id_Aprendizaje){
      
      log(INFO, "Persona:"+Pr_Id_Persona+" Aprendizaje:"+Pr_Id_Aprendizaje);
     
      Logger logger = Logger.getLogger("com.wavemaker");               
      Aprendoz_test inst_servicio = trae_Servicio();
      
      try{
        System.out.println("inicia servicio");
        inst_servicio.begin();
        System.out.println("Servicio Iniciado");
        Session ins_sesion = inst_servicio.getDataServiceManager().getSession();
        System.out.println("Sesión Iniciada");
        Query q = ins_sesion.getNamedQuery("CalculaAprendizajeEstudiante");
        
        
        System.out.println("Llamada al query nombrado");
        //asignar los parámetros
    
        q.setParameter("P_PERSONA",Pr_Id_Persona);
        q.setParameter("P_APRENDIZAJE",Pr_Id_Aprendizaje);
          System.out.println("parámetros fijados");
           System.out.println("P_PERSONA: "+Pr_Id_Persona);
           System.out.println("P_APRENDIZAJE: "+Pr_Id_Aprendizaje);
          
       // Integer resultado = q.list().size();
        q.list();
        System.out.println("Q.List Ok");
       // q.executeUpdate();
        System.out.println("Ejecución del query 1");
      // Inicia query 2
       
          
      
        inst_servicio.commit();
    
      return 1;
              
      }catch(RuntimeException ex){
       
       System.out.println("algopasas");
         inst_servicio.rollback();
         throw ex;
      }
       
    }

}