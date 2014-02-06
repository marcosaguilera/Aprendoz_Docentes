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

public class EnviarMail extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
    /*
     * Implementación de JAVA MAIL 
     * Aprendoz Padres
     */
     public String sendEmailNotification(String lugar, String alumnos, String correocoordinador, String correodirector, String profesorRemitente, Date fechaEventualidad, String eventualidad, String subtipoEventualidad, String cursos){ 
      try{
        //transformacion de fechas
        //fecha automatica del sistema
        System.out.println(fechaEventualidad);
        SimpleDateFormat fechaCreacion = new SimpleDateFormat("yyyy-MM-dd");
        String lafechaS = fechaCreacion.format(fechaEventualidad);
        System.out.println("fecha actual: "+lafechaS);
        
            // Propiedades de la conexión
            Properties props = new Properties();
            props.setProperty("mail.smtp.host", "smtp.gmail.com");
            props.setProperty("mail.smtp.starttls.enable", "true");
            props.setProperty("mail.smtp.port", "587");
            props.setProperty("mail.smtp.user", "eventualidades@rochester.edu.co");
            props.setProperty("mail.smtp.auth", "true");

            // Preparamos la sesion
            Session session = Session.getDefaultInstance(props);

            // Construimos el mensaje
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress("eventualidades@rochester.edu.co"));
           /*message.addRecipient(
             Message.RecipientType.TO, b);
             */         
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correocoordinador));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correodirector));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("eventualidades@rochester.edu.co"));  
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("jospina@rochester.edu.co"));               

             message.setSubject("No Reply - Aprendoz | Notificacion de eventualidad(es)");
             message.setText(
              "<img src=\"http://www.rochester.edu.co/images/logo.png\">"+"<br/><br/>"+
              "***Este un mensaje automático del sistema APRENDOZ***<br/><br/>"+
              "Queremos notificarte la eventualidad que ha(n) tenido su(s) estudiante(s).<br/>"+
              "<ul>"+
                  "<li>Estudiante(s): "+alumnos+"</li>"+
                  "<li>Curso(s): "+cursos+"</li>"+
                  "<li>Fecha: "+lafechaS+"</li>"+
                  "<li>Eventualidad: "+eventualidad+"</li>"+
                  "<li>Subtipo de eventualidad: "+subtipoEventualidad+"</li>"+
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