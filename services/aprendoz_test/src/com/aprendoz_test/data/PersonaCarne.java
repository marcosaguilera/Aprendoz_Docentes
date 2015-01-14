
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.PersonaCarne
 *  01/13/2015 09:58:57
 * 
 */
public class PersonaCarne {

    private Integer idPersonaCarne;
    private Persona persona;
    private Date fecha;
    private Integer numerocopias;

    public Integer getIdPersonaCarne() {
        return idPersonaCarne;
    }

    public void setIdPersonaCarne(Integer idPersonaCarne) {
        this.idPersonaCarne = idPersonaCarne;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Integer getNumerocopias() {
        return numerocopias;
    }

    public void setNumerocopias(Integer numerocopias) {
        this.numerocopias = numerocopias;
    }

}
