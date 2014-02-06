import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.Message;
import javax.mail.Message.*;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import java.util.Date;
import java.text.DateFormat;
import java.util.Calendar;
import java.text.SimpleDateFormat;
import java.lang.String;
import java.util.*;
import java.io.*;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import java.net.*;

public class enviarNotificacionFaltaGrave extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

    public String enviarNotificacionFaltaGrave(String alumno, String nombrepadre, String correopadre, String nombremadre, String correomadre, String subtipoEventualidad, String curso, String fechaCita, String horaCita, String dnipap, String dnimam, String correocoordinador, String correodirector) {
    try{
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        DateFormat timeFormat = new SimpleDateFormat("HH:mm");
        Date getToday = new Date();
        String today = dateFormat.format(getToday);
        System.out.println(dateFormat.format(getToday));   
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
                  Message.RecipientType.TO, new InternetAddress(correopadre));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correomadre));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("eventualidades@rochester.edu.co")); 
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("jospina@rochester.edu.co"));  
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correocoordinador));  
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correodirector));                 

             message.setSubject("No Reply - Notificación de falta grave");
             message.setText(
              "<img src=\"http://www.rochester.edu.co/images/logo.png\">"+"<br/><br/>"+
              "NOTIFICACIÓN - COLEGIO ROCHESTER<br/><br/>"+
              "<b>Respetados padres de familia.</b><br/>"+
              nombrepadre+" - C.C No. "+dnipap+"<br>"+
              nombremadre+" - C.C No. "+dnimam+"<br><br>"+
              "En coordinación con el Centro de Bienestar, y en calidad de orientador de convivencia del Colegio Rochester, me dirijo a ustedes para informarles que si hijo/a "+alumno+" del curso "+curso+", tuvo la siguiente falta grave: <br><br>"+
              "<u>"+subtipoEventualidad+"</u><br/><br/>"+
              "Los invito entonces a un reunión el dia "+fechaCita+" a las "+horaCita+", para profundizar sobre esta situación y contarles sobre el plan que se trazó su hijo/a para reparar la falta. Los espero en mi oficina, ubicada en el Bloque 4, Piso 1, Oficina4.<br/><br/>"+
              "Atentamente,<br><br><br>"+
              "Julián Ospina López<br/>"+
              "Relationships Counselor<br>"+
              "Notificador<br>"+            
              "Aprendoz Colegio Rochester","ISO-8859-1","html");          
            Transport t = session.getTransport("smtp");
            t.connect("eventualidades@rochester.edu.co", "Rochester1959+");
            t.sendMessage(message, message.getAllRecipients());
            t.close();      
        }catch (Exception e){
         e.printStackTrace();
     }
    return "ok";
  }
}