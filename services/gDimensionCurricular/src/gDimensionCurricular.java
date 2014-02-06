
//importar librerias y complementos
import com.aprendoz_test.*;
import org.hibernate.Session;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.server.DownloadResponse;
import java.net.URL;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import java.util.Map;
import java.util.HashMap;
import com.wavemaker.runtime.server.ParamName;
import org.springframework.mail.javamail.ConfigurableMimeFileTypeMap;
//--------------------------------

import net.sf.jasperreports.engine.JRResultSetDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import java.util.*;
import java.io.*;
import com.wavemaker.runtime.RuntimeAccess;

public class  gDimensionCurricular extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
     public DownloadResponse getReport(String idnivel, String idgrado, String idasignatura) throws Exception { 
        System.out.println(idnivel);
        System.out.println(idgrado);
        System.out.println(idasignatura);
        int idniv=Integer.valueOf(idnivel);
        int idgr=Integer.valueOf(idgrado);
        int idasig= Integer.valueOf(idasignatura);
        System.out.println(idniv);
        System.out.println(idgr);
        System.out.println(idasig);
        /*Metodo repuesta de descarga*/
       DownloadResponse ret= new DownloadResponse();
       ConfigurableMimeFileTypeMap mimeFileTypeMap = new ConfigurableMimeFileTypeMap();
  
       try {
        System.out.println("Ingreso al TRY");
          Aprendoz_test service = (Aprendoz_test) RuntimeAccess.getInstance().getService(Aprendoz_test.class);
          service.begin();
          Session session= service.getDataServiceManager().getSession();
          
          //enviar parametros al reporte
          Map parameters= new HashMap();
           parameters.put("nivel", idniv);
           parameters.put("grado", idgr);    
           parameters.put("asignatura", idasig);
       //    parameters.put("comentarioSuperior", com1);
      //     parameters.put("comentarioInferior", com2);
           System.out.println("captura parametros");      
          //direccion del archivo Jasper
          URL fileUrl = this.getClass().getResource("GraficaDimensionCurricular.jasper");
          
          //para cargar el jasper
          JasperReport report2 = (JasperReport)JRLoader.loadObject(fileUrl);
          
          //cargar conexion de la base de datos al reporte y el archivo Jasper
          JasperPrint jasperPrint = JasperFillManager.fillReport(report2,parameters,session.connection());
          
          //exportar a pdf
          ByteArrayOutputStream out= new ByteArrayOutputStream();
          JasperExportManager.exportReportToPdfStream(jasperPrint, out);
          
          //cargar pdf como una respuesta de descarga
          ret.setContentType(mimeFileTypeMap.getContentType("GraficaDimensionCurricular.jasper"));
          ret.setContents(new ByteArrayInputStream(out.toByteArray()));
          ret.setFileName("reporteDimensionCurricular.pdf");
           
  
       } catch(Exception e) {
          System.out.println("Error al crear pdf");
          e.printStackTrace();
       }
       return ret;
    }    


}