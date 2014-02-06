import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.Message;
import javax.mail.Message.*;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import java.text.SimpleDateFormat;
import java.lang.String;
import java.util.*;
import java.io.*;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import java.net.*; //clase para las URL

public class EnviarMailAcumulado extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

     public String sendEmailNotification(String alumno, String correocoordinador, String correodirector, String profesorRemitente, String fecha, String curso, Integer id){ 
      try{
               
            // Propiedades de la conexión
            Properties props = new Properties();
            props.setProperty("mail.smtp.host", "smtp.gmail.com");
            props.setProperty("mail.smtp.starttls.enable", "true");
            props.setProperty("mail.smtp.port", "587");
            props.setProperty("mail.smtp.user", "eventualidades@rochester.edu.co");
            props.setProperty("mail.smtp.auth", "true");

            Session session = Session.getDefaultInstance(props);

            MimeMessage message = new MimeMessage(session);
               message.setFrom(new InternetAddress("eventualidades@rochester.edu.co"));      
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correocoordinador));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correodirector));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("eventualidades@rochester.edu.co"));  
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("jospina@rochester.edu.co")); 
                             
             message.setSubject("Falta grave acumulada - No Reply - Aprendoz");
             message.setText(
              "<img src=\"http://www.rochester.edu.co/images/logo.png\">"+"<br/><br/>"+
              "***Este un mensaje automático del sistema Aprendoz***<br/><br/>"+
              "Queremos notificarte la falta grave acumulada de "+alumno+"<br/>"+
              "<ul>"+
                  "<li>Id Eventualidad: "+id+"</li>"+
                  "<li>Curso: "+curso+"</li>"+
                  "<li>Fecha: "+fecha+"</li>"+
                  "<li>Eventualidad: Falta grave por acumulación</li>"+                 
                  "<li>Profesor remitente: "+profesorRemitente+"</li>"+
              "</ul>"+"<br/>"+
              "Agradecemos su atención,<br/><br/>"+
              "***Este un mensaje automático del sistema APRENDOZ***<br/><br/>"+               
              "Aprendoz Colegio Rochester","ISO-8859-1","html");          
            //Lo enviamos.
            Transport t = session.getTransport("smtp");
            t.connect("eventualidades@rochester.edu.co", "Rochester1959+");
            t.sendMessage(message, message.getAllRecipients());
            // Cierre
            t.close();
            
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return "ok";
     }   

}