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



public class sp_actividad_curso extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    public sp_actividad_curso() {
       super(INFO);
    }

    private Aprendoz_test trae_Servicio(){
      Aprendoz_test servicio = (Aprendoz_test) RuntimeAccess.getInstance().getService(Aprendoz_test.class);
      return servicio;
    }

    public Integer corre_proc_act_cur(Integer Pr_Id_Curso, Integer Pr_Id_Actividad,Date P_Fecha,String Pr_Comentario, boolean Pr_Logrado){
      
      log(INFO, "Curso:"+Pr_Id_Curso+" Actividad:"+Pr_Id_Actividad+ " Logrado?: "+Pr_Logrado);
     
        Logger logger = Logger.getLogger("com.wavemaker");     
        
        SimpleDateFormat fechatxt = new SimpleDateFormat("yyyy-MM-dd");
        String lafechaS = fechatxt.format(P_Fecha);
        System.out.println(lafechaS);

     /*
      * Convertir Bool a Entero
      */
      int logradito = Pr_Logrado? 1 : 0;
      System.out.println(logradito);
      //String lafechaS = "2012-12-13";
         
      Aprendoz_test inst_servicio = trae_Servicio();
      
      try{
        
        inst_servicio.begin();
        
        Session ins_sesion = inst_servicio.getDataServiceManager().getSession();
        Query q = ins_sesion.getNamedQuery("AsignaActividadCurso");
        
        //asignar los parámetros
    
        q.setParameter("C_Id_Curso",Pr_Id_Curso);
        q.setParameter("A_Id_Actividad",Pr_Id_Actividad);
        q.setParameter("P_Fecha",lafechaS);        
        q.setParameter("P_Comentario",Pr_Comentario); 
        q.setParameter("P_Logrado",logradito); 
        
       // Integer resultado = q.list().size();
        q.list();
        //q.executeUpdate();
        
        System.out.println("Curso:"+Pr_Id_Curso+" Actividad:"+Pr_Id_Actividad +" Logrado?: "+Pr_Logrado);
        //System.out.println("Curso:"+Pr_Id_Curso+" Actividad:"+Pr_Id_Actividad+" Fecha:"+lafechaS+" Comentario:"+Pr_Comentario);
        System.out.println("paso1");
       
        
        inst_servicio.commit();
        System.out.println("paso2");
        //return lafechaS; */
      return 1;
              
      }catch(RuntimeException ex){
       
       System.out.println("algopasas");
         inst_servicio.rollback();
         throw ex;
      }
       
    }

}
