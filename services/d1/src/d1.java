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


public class d1 extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    public DownloadResponse getReport(String ida) throws Exception {
    /*  System.out.println(idsy);
        int sy=Integer.valueOf(idsy);
        int idgr= Integer.valueOf(idgrado); */
       // System.out.println("Grado "+idgrado);
        System.out.println("Asignatura "+ida);
        
       DownloadResponse ret= new DownloadResponse();
       ConfigurableMimeFileTypeMap mimeFileTypeMap = new ConfigurableMimeFileTypeMap();
       
       try {
          Aprendoz_test service = (Aprendoz_test) RuntimeAccess.getInstance().getService(Aprendoz_test.class);
          service.begin();
          Session session= service.getDataServiceManager().getSession();
          
          //enviar parametros al reporte
          Map parameters= new HashMap();
         // parameters.put("idgr", idgrado);
          parameters.put("idasig", ida);
          System.out.println("capturados!");
          
          //direccion del archivo Jasper
          URL fileUrl = this.getClass().getResource("docente1.jasper");
          System.out.println("1");
          //para cargar el jasper
          JasperReport report2 = (JasperReport)JRLoader.loadObject(fileUrl);
          System.out.println("2");
          //cargar conexion de la base de datos al reporte y el archivo Jasper
          JasperPrint jasperPrint = JasperFillManager.fillReport(report2,parameters,session.connection());
          System.out.println("3");
          //exportar a pdf
          ByteArrayOutputStream out= new ByteArrayOutputStream();
          System.out.println("4");
          JasperExportManager.exportReportToPdfStream(jasperPrint, out);
          System.out.println("5");
          //cargar pdf como una respuesta de descarga
          ret.setContentType(mimeFileTypeMap.getContentType("docente1.jasper"));
          ret.setContents(new ByteArrayInputStream(out.toByteArray()));
          ret.setFileName("Catalogo_Asignatura_.pdf");
          
       } catch(Exception e) {
          System.out.println("Error creando el PDF");
          e.printStackTrace();
       }
       return ret;
    }

}
